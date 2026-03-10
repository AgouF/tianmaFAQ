import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync, statSync, createWriteStream } from 'fs'
import { join, resolve } from 'path'
import { createHash } from 'crypto'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'
import sharp from 'sharp'

const DOCS_DIR = resolve(import.meta.dirname, '..', 'docs')
const EN_DIR = join(DOCS_DIR, 'en')
const VITEPRESS_DIR = join(DOCS_DIR, '.vitepress')
const IMAGES_DIR = join(DOCS_DIR, 'public', 'images')
const MORE_INFO_DIR = join(DOCS_DIR, 'more-info')
const MORE_INFO_EN_DIR = join(EN_DIR, 'more-info')

// Ensure directories exist
mkdirSync(IMAGES_DIR, { recursive: true })
mkdirSync(EN_DIR, { recursive: true })

const DEEPSEEK_KEY = process.env.DEEPSEEK_API_KEY || ''

// Check if text contains Chinese characters
function hasChinese(text: string): boolean {
  return /[\u4e00-\u9fff]/.test(text)
}

// Translate text using DeepSeek API (with retry)
async function translateToEnglish(text: string): Promise<string> {
  if (!DEEPSEEK_KEY || !text.trim()) return text
  // Skip if already English
  if (!hasChinese(text)) return text

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      const res = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'Translate Chinese to English. Output ONLY the English translation. Keep markdown formatting, HTML tags, and links unchanged. Never output Chinese characters.'
            },
            { role: 'user', content: text }
          ],
          temperature: 0.1,
        }),
      })

      if (!res.ok) {
        console.error(`  Translation API error: ${res.status} (attempt ${attempt + 1})`)
        continue
      }

      const data = await res.json() as any
      const result = data.choices?.[0]?.message?.content?.trim() || ''
      if (!result) continue
      const inputChinese = (text.match(/[\u4e00-\u9fff]/g) || []).length
      const resultChinese = (result.match(/[\u4e00-\u9fff]/g) || []).length
      if (resultChinese < inputChinese || !hasChinese(result)) return result
      console.log(`  Translation incomplete, retrying... (attempt ${attempt + 1})`)
    } catch (err) {
      console.error(`  Translation failed (attempt ${attempt + 1}):`, err)
    }
  }
  return text // All retries failed
}

// Translate a sidebar tree (titles only)
async function translateSidebar(items: SidebarItem[], prefix: string): Promise<SidebarItem[]> {
  const result: SidebarItem[] = []
  for (const item of items) {
    const translatedText = await translateToEnglish(item.text)
    const newItem: SidebarItem = { text: translatedText }
    if (item.link) newItem.link = `/en${item.link}`
    if (item.collapsed !== undefined) newItem.collapsed = item.collapsed
    if (item.items) newItem.items = await translateSidebar(item.items, prefix)
    result.push(newItem)
  }
  return result
}

let notion: Client
let n2m: NotionToMarkdown
let totalArticles = 0
const syncedPaths = new Set<string>() // Track all files/dirs created by sync
const pageIdToPath = new Map<string, string>() // Notion page ID → VitePress URL path

// Slug cache: maps Notion page ID → English slug (persisted to file)
const SLUG_CACHE_PATH = join(VITEPRESS_DIR, 'slug-cache.json')
let slugCache: Record<string, string> = {}

function loadSlugCache() {
  if (existsSync(SLUG_CACHE_PATH)) {
    slugCache = JSON.parse(readFileSync(SLUG_CACHE_PATH, 'utf-8'))
  }
}

function saveSlugCache() {
  writeFileSync(SLUG_CACHE_PATH, JSON.stringify(slugCache, null, 2), 'utf-8')
}

// Convert title to URL-friendly English slug
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    || 'untitled'
}

// Get English slug for a page (cached, translated via DeepSeek)
async function toSlug(pageId: string, title: string): Promise<string> {
  // If already cached, use it
  if (slugCache[pageId]) return slugCache[pageId]

  // If title is already English/numbers only, just slugify
  if (/^[a-z0-9\s\-_]+$/i.test(title)) {
    const slug = slugify(title)
    slugCache[pageId] = slug
    return slug
  }

  // Translate Chinese title to English slug via DeepSeek
  if (DEEPSEEK_KEY) {
    try {
      const res = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_KEY}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'Translate the following Chinese title to a short English URL slug (lowercase, hyphens, no special characters). Only output the slug, nothing else. Example: "如何重置密码" → "how-to-reset-password"'
            },
            { role: 'user', content: title }
          ],
          temperature: 0,
        }),
      })
      if (res.ok) {
        const data = await res.json() as any
        const translated = data.choices?.[0]?.message?.content?.trim() || ''
        if (translated && /^[a-z0-9-]+$/.test(translated)) {
          slugCache[pageId] = translated
          return translated
        }
      }
    } catch {}
  }

  // Fallback: slugify original title (keeps Chinese in URL)
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-|-$/g, '')
    || 'untitled'
  slugCache[pageId] = slug
  return slug
}

interface SidebarItem {
  text: string
  link?: string
  collapsed?: boolean
  items?: SidebarItem[]
}

// Stored page info for second pass
interface PageNode {
  id: string
  title: string
  slug: string
  dir: string
  urlPath: string
  depth: number
  isFolder: boolean
  children: PageNode[]
}

// Pass 1: Scan page tree, build ID→path mapping and tree structure
async function scanPages(parentId: string, dir: string, urlPath: string, depth: number): Promise<PageNode[]> {
  const children = await notion.blocks.children.list({ block_id: parentId, page_size: 100 })
  const childPages = children.results.filter((b: any) => b.type === 'child_page') as any[]

  const nodes: PageNode[] = []

  for (const child of childPages) {
    const title = child.child_page.title
    const slug = await toSlug(child.id, title)

    const subChildren = await notion.blocks.children.list({ block_id: child.id, page_size: 100 })
    const subPages = subChildren.results.filter((b: any) => b.type === 'child_page') as any[]

    if (subPages.length > 0) {
      const subDir = join(dir, slug)
      const subNodes = await scanPages(child.id, subDir, `${urlPath}/${slug}`, depth + 1)
      nodes.push({ id: child.id, title, slug, dir, urlPath, depth, isFolder: true, children: subNodes })
    } else {
      // Register page ID → VitePress path mapping
      const pageUrl = `${urlPath}/${slug}`
      const cleanId = child.id.replace(/-/g, '')
      pageIdToPath.set(child.id, pageUrl)
      pageIdToPath.set(cleanId, pageUrl)
      nodes.push({ id: child.id, title, slug, dir, urlPath, depth, isFolder: false, children: [] })
    }
  }

  return nodes
}

// Download image to local public/images/ and convert to WebP
async function downloadImage(url: string): Promise<string> {
  try {
    const hash = createHash('md5').update(url).digest('hex').slice(0, 12)
    const origExt = url.match(/\.(png|jpg|jpeg|gif|webp|svg|bmp|ico)/i)?.[1]?.toLowerCase() || 'png'

    // SVG/GIF: keep original format; others: convert to WebP
    const keepOriginal = ['svg', 'gif', 'ico'].includes(origExt)
    const outExt = keepOriginal ? origExt : 'webp'
    const filename = `${hash}.${outExt}`
    const filePath = join(IMAGES_DIR, filename)

    if (existsSync(filePath)) return `/images/${filename}`

    const res = await fetch(url)
    if (!res.ok || !res.body) return url

    const buffer = Buffer.from(await res.arrayBuffer())

    if (keepOriginal) {
      writeFileSync(filePath, buffer)
    } else {
      await sharp(buffer).webp({ quality: 80 }).toFile(filePath)
    }
    console.log(`  Downloaded: ${filename}`)
    return `/images/${filename}`
  } catch {
    return url
  }
}

// Replace image URLs in markdown with local paths
async function localizeImages(content: string): Promise<string> {
  const imgRegex = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g
  const matches = [...content.matchAll(imgRegex)]
  if (matches.length === 0) return content

  let result = content
  for (const match of matches) {
    const [full, alt, url] = match
    // Only download Notion-hosted images (S3 URLs that expire)
    if (url.includes('amazonaws.com') || url.includes('notion.so') || url.includes('notion-static.com')) {
      const localPath = await downloadImage(url)
      result = result.replace(full, `![${alt}](${localPath})`)
    }
  }
  return result
}

// Extract first ~120 chars of plain text for SEO description
function extractDescription(mdContent: string): string {
  return mdContent
    .replace(/^#.*$/gm, '')           // Remove headings
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // Remove images
    .replace(/<[^>]+>/g, '')           // Remove HTML
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Links → text
    .replace(/[*_~`>]/g, '')           // Remove formatting
    .replace(/\n+/g, ' ')             // Collapse newlines
    .trim()
    .slice(0, 120)
    || '天马品牌常见问题解答'
}

// Calculate reading time in minutes (Chinese: ~400 chars/min, English: ~200 words/min)
function readingTime(text: string): number {
  const plain = text.replace(/<[^>]+>/g, '').replace(/[#*`\[\]()!]/g, '')
  const chinese = (plain.match(/[\u4e00-\u9fff]/g) || []).length
  const words = plain.replace(/[\u4e00-\u9fff]/g, '').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(chinese / 400 + words / 200))
}

// Replace Notion page links with VitePress internal links
function replaceNotionLinks(content: string): string {
  // Match Notion URLs: https://www.notion.so/Page-Title-<id> or https://notion.so/<id>
  return content.replace(
    /https?:\/\/(?:www\.)?notion\.so\/(?:[^\/\s]*\/)?(?:[^\s)]*?)?([a-f0-9]{32})(?:[?\s)#]|$)/g,
    (match, id) => {
      const path = pageIdToPath.get(id)
      if (path) return match.replace(/https?:\/\/(?:www\.)?notion\.so\/[^\s)#]*/, path)
      return match
    }
  )
}

// Collected article info for related articles
interface ArticleInfo {
  title: string
  link: string
  category: string // Top-level folder name
}
const allArticles: ArticleInfo[] = []

// Keyword cache: avoid re-extracting/regenerating when content hasn't changed
const KEYWORD_CACHE_PATH = join(VITEPRESS_DIR, 'keyword-cache.json')
interface KeywordInfo { keyword: string; slug: string }
interface KeywordCacheEntry { contentHash: string; keywords: KeywordInfo[] }
let keywordCache: Record<string, KeywordCacheEntry> = {}

function loadKeywordCache() {
  if (existsSync(KEYWORD_CACHE_PATH)) {
    keywordCache = JSON.parse(readFileSync(KEYWORD_CACHE_PATH, 'utf-8'))
  }
}
function saveKeywordCache() {
  writeFileSync(KEYWORD_CACHE_PATH, JSON.stringify(keywordCache, null, 2), 'utf-8')
}

// Map: original article link → its keyword articles (for RelatedCards)
const articleKeywordMap = new Map<string, { title: string; link: string }[]>()
// All generated keyword articles (for sidebar)
const allKeywordArticles: { title: string; link: string; slug: string }[] = []

// Pass 2: Generate markdown files and sidebar
async function generatePages(nodes: PageNode[], categoryName = ''): Promise<SidebarItem[]> {
  const items: SidebarItem[] = []

  for (const node of nodes) {
    if (node.isFolder) {
      const subDir = join(node.dir, node.slug)
      mkdirSync(subDir, { recursive: true })
      syncedPaths.add(subDir)

      const indent = '  '.repeat(node.depth)
      console.log(`${indent}[Folder] ${node.title}`)

      const cat = categoryName || node.title
      const subItems = await generatePages(node.children, cat)
      items.push({ text: node.title, collapsed: true, items: subItems })
    } else {
      const pageInfo = await notion.pages.retrieve({ page_id: node.id }) as any
      const mdBlocks = await n2m.pageToMarkdown(node.id)
      let mdContent = n2m.toMarkdownString(mdBlocks).parent || ''

      // Replace Notion page links with internal VitePress links
      mdContent = replaceNotionLinks(mdContent)

      // Download Notion images to local storage (with WebP conversion)
      mdContent = await localizeImages(mdContent)

      const description = extractDescription(mdContent)
      const minutes = readingTime(mdContent)
      const link = `${node.urlPath}/${node.slug}`

      // Extract first image for OG/Twitter card
      const firstImg = mdContent.match(/!\[[^\]]*\]\(([^)]+)\)/)
      const ogImage = firstImg?.[1]?.startsWith('/') ? `https://tianma.xin${firstImg[1]}` : firstImg?.[1] || ''

      // Collect for related articles
      allArticles.push({ title: node.title, link, category: categoryName })

      const fmLines = [
        '---',
        `title: "${node.title.replace(/"/g, '\\"')}"`,
        `description: "${description.replace(/"/g, '\\"')}"`,
        `readingTime: ${minutes}`,
        `lastUpdated: ${new Date(pageInfo.last_edited_time).getTime()}`,
      ]
      if (ogImage) fmLines.push(`ogImage: "${ogImage}"`)
      fmLines.push('---')

      const fileContent = [
        ...fmLines,
        '',
        `# ${node.title}`,
        '',
        mdContent
      ].join('\n')

      const filePath = join(node.dir, `${node.slug}.md`)
      syncedPaths.add(filePath)
      const existing = existsSync(filePath) ? readFileSync(filePath, 'utf-8') : null

      const indent = '  '.repeat(node.depth)
      if (existing !== fileContent) {
        writeFileSync(filePath, fileContent, 'utf-8')
        console.log(`${indent}Updated: ${node.urlPath}/${node.slug}.md`)
      } else {
        console.log(`${indent}Unchanged: ${node.urlPath}/${node.slug}.md`)
      }

      totalArticles++
      items.push({ text: node.title, link })
    }
  }

  return items
}

// Append related articles to each markdown file (as RelatedCards component)
// Includes both same-category articles and AI-generated keyword articles
function appendRelatedArticles() {
  for (const article of allArticles) {
    // Same category articles
    const categoryRelated = allArticles
      .filter(a => a.category === article.category && a.link !== article.link)
      .slice(0, 5)
      .map(r => ({ title: r.title, link: r.link }))

    // AI keyword articles for this article
    const keywordRelated = articleKeywordMap.get(article.link) || []

    const allRelated = [...categoryRelated, ...keywordRelated]
    if (allRelated.length === 0) continue

    const itemsJson = JSON.stringify(allRelated).replace(/'/g, '&#39;')
    const relatedMd = `\n\n<RelatedCards :items='${itemsJson}' />\n`

    const filePath = join(DOCS_DIR, article.link.slice(1) + '.md')
    if (!existsSync(filePath)) continue

    const content = readFileSync(filePath, 'utf-8')
    const cleaned = content
      .replace(/\n\n---\n\n## 相关文章\n[\s\S]*$/, '')
      .replace(/\n\n<RelatedCards :items='[\s\S]*?' \/>\n?$/, '')
    writeFileSync(filePath, cleaned + relatedMd, 'utf-8')
  }
}

// Generate category index pages (topic pages)
function generateCategoryIndexes(nodes: PageNode[]) {
  for (const node of nodes) {
    if (!node.isFolder) continue

    const dirPath = join(node.dir, node.slug)
    const indexPath = join(dirPath, 'index.md')

    // Collect all articles under this folder
    const articles = collectArticles(node.children)
    if (articles.length === 0) continue

    const articleList = articles
      .map(a => `- [${a.title}](${a.link})`)
      .join('\n')

    const content = [
      '---',
      `title: "${node.title.replace(/"/g, '\\"')}"`,
      `description: "${node.title} - 共 ${articles.length} 篇文章"`,
      '---',
      '',
      `# ${node.title}`,
      '',
      `共 ${articles.length} 篇文章`,
      '',
      articleList,
      ''
    ].join('\n')

    syncedPaths.add(indexPath)
    const existing = existsSync(indexPath) ? readFileSync(indexPath, 'utf-8') : null
    if (existing !== content) {
      writeFileSync(indexPath, content, 'utf-8')
      console.log(`Written: ${node.slug}/index.md`)
    }

    // Recurse into sub-folders
    generateCategoryIndexes(node.children)
  }
}

function collectArticles(nodes: PageNode[]): { title: string; link: string }[] {
  const result: { title: string; link: string }[] = []
  for (const node of nodes) {
    if (node.isFolder) {
      result.push(...collectArticles(node.children))
    } else {
      result.push({ title: node.title, link: `${node.urlPath}/${node.slug}` })
    }
  }
  return result
}


// Determine keyword count based on article character length
function keywordCount(text: string): number {
  const len = text.replace(/---\n[\s\S]*?\n---\n/, '').length
  if (len < 200) return 2
  if (len < 500) return 3
  if (len < 1000) return 5
  return 8
}

// Extract long-tail keywords from article via DeepSeek
async function extractKeywords(title: string, content: string, count: number): Promise<KeywordInfo[]> {
  if (!DEEPSEEK_KEY) return []
  try {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${DEEPSEEK_KEY}` },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are an SEO expert. Extract exactly ${count} long-tail keyword phrases from the given FAQ article. Rules:
- Keywords should be natural Chinese search queries (2-10 characters)
- Include question-type keywords (e.g. "VPN安全吗", "VPN怎么用")
- Include recommendation/tutorial keywords (e.g. "VPN推荐", "免费VPN")
- Do NOT repeat the original title exactly
- Output ONLY a JSON array: [{"keyword":"中文关键词","slug":"english-slug"}]
- slug must be lowercase, hyphen-separated, no special characters`
          },
          { role: 'user', content: `Title: ${title}\n\nContent:\n${content.slice(0, 2000)}` }
        ],
        temperature: 0.3,
      }),
    })
    if (!res.ok) return []
    const data = await res.json() as any
    const text = data.choices?.[0]?.message?.content?.trim() || ''
    const jsonStr = text.replace(/```json?\n?/g, '').replace(/```/g, '').trim()
    const parsed = JSON.parse(jsonStr)
    if (Array.isArray(parsed)) {
      return parsed.filter((k: any) => k.keyword && k.slug && /^[a-z0-9-]+$/.test(k.slug)).slice(0, count)
    }
  } catch (err) {
    console.error(`  Keyword extraction failed:`, err)
  }
  return []
}

// Generate AI article content for a keyword via DeepSeek
async function generateKeywordArticle(keyword: string, originalTitle: string, originalLink: string): Promise<string> {
  if (!DEEPSEEK_KEY) return ''
  try {
    const res = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${DEEPSEEK_KEY}` },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: `You are a knowledgeable FAQ writer. Write a detailed, helpful article in Chinese about the given topic. Rules:
- Write 300-600 words of genuine, helpful content
- Use ## and ### subheadings for good SEO structure
- Include practical advice and real information
- Add a "## 常见问题" section at the bottom with 2-3 Q&A pairs using ### for each question
- Naturally mention the related article: [${originalTitle}](${originalLink})
- Output only the article body in markdown (no frontmatter, no top-level # heading, no code blocks wrapping)`
          },
          { role: 'user', content: keyword }
        ],
        temperature: 0.7,
      }),
    })
    if (!res.ok) return ''
    const data = await res.json() as any
    return data.choices?.[0]?.message?.content?.trim() || ''
  } catch { return '' }
}

// Insert inline keyword links into article body (first occurrence only)
function insertInlineKeywordLinks(content: string, keywords: { keyword: string; link: string }[]): string {
  const fmMatch = content.match(/^(---\n[\s\S]*?\n---\n)([\s\S]*)$/)
  if (!fmMatch) return content

  const frontmatter = fmMatch[1]
  const lines = fmMatch[2].split('\n')
  let inCodeBlock = false
  const inserted = new Set<string>()

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('```')) { inCodeBlock = !inCodeBlock; continue }
    if (inCodeBlock) continue
    // Skip headings, containers, HTML, RelatedCards, empty lines
    if (/^#{1,6}\s/.test(line) || /^:::/.test(line) || /^</.test(line) || !line.trim()) continue

    for (const { keyword, link } of keywords) {
      if (inserted.has(keyword)) continue
      const idx = line.indexOf(keyword)
      if (idx === -1) continue
      // Don't replace if inside existing markdown link
      const before = line.slice(0, idx)
      if ((before.match(/\[/g) || []).length > (before.match(/\]/g) || []).length) continue
      lines[i] = line.slice(0, idx) + `[${keyword}](${link})` + line.slice(idx + keyword.length)
      inserted.add(keyword)
      break // One replacement per line
    }
  }

  return frontmatter + lines.join('\n')
}

// Main: generate AI keyword articles for all synced articles
async function generateAIKeywordArticles() {
  if (!DEEPSEEK_KEY) {
    console.log('Skipping AI keyword generation (no DEEPSEEK_API_KEY)')
    return
  }

  console.log('\n--- Generating AI Keyword Articles ---\n')
  mkdirSync(MORE_INFO_DIR, { recursive: true })
  syncedPaths.add(MORE_INFO_DIR)
  loadKeywordCache()

  let totalGenerated = 0

  for (const article of allArticles) {
    if (!hasChinese(article.title)) continue

    const filePath = join(DOCS_DIR, article.link.slice(1) + '.md')
    if (!existsSync(filePath)) continue

    const fileContent = readFileSync(filePath, 'utf-8')
    const hash = createHash('md5').update(fileContent).digest('hex')
    const cacheKey = article.link
    const cached = keywordCache[cacheKey]

    let keywords: KeywordInfo[]

    if (cached && cached.contentHash === hash) {
      keywords = cached.keywords
      console.log(`  Cached: ${article.title} (${keywords.length} keywords)`)
    } else {
      const count = keywordCount(fileContent)
      console.log(`  Extracting ${count} keywords: ${article.title}`)
      keywords = await extractKeywords(article.title, fileContent, count)
      if (keywords.length === 0) {
        console.log(`    No keywords extracted, skipping`)
        continue
      }
      console.log(`    Found: ${keywords.map(k => k.keyword).join(', ')}`)
      keywordCache[cacheKey] = { contentHash: hash, keywords }
    }

    // Track keyword articles for this article
    const kwLinks: { title: string; link: string }[] = []

    for (const kw of keywords) {
      const kwFilePath = join(MORE_INFO_DIR, `${kw.slug}.md`)
      syncedPaths.add(kwFilePath)
      const kwLink = `/more-info/${kw.slug}`
      kwLinks.push({ title: kw.keyword, link: kwLink })
      allKeywordArticles.push({ title: kw.keyword, link: kwLink, slug: kw.slug })

      // Skip generation if file exists and content hash matches cache
      if (existsSync(kwFilePath) && cached && cached.contentHash === hash) continue

      console.log(`    Generating: ${kw.keyword} → ${kw.slug}`)
      const body = await generateKeywordArticle(kw.keyword, article.title, article.link)
      if (!body) continue

      const desc = extractDescription(body)
      const mins = readingTime(body)
      const kwContent = [
        '---',
        `title: "${kw.keyword.replace(/"/g, '\\"')}"`,
        `description: "${desc.replace(/"/g, '\\"')}"`,
        `readingTime: ${mins}`,
        `lastUpdated: ${Date.now()}`,
        '---',
        '',
        `# ${kw.keyword}`,
        '',
        body,
        '',
        `<RelatedCards :items='${JSON.stringify([{ title: article.title, link: article.link }]).replace(/'/g, '&#39;')}' />`,
        ''
      ].join('\n')

      writeFileSync(kwFilePath, kwContent, 'utf-8')
      totalGenerated++
    }

    articleKeywordMap.set(article.link, kwLinks)

    // Insert inline keyword links into the original article
    const updated = insertInlineKeywordLinks(fileContent, kwLinks.map(k => ({ keyword: k.title, link: k.link })))
    if (updated !== fileContent) {
      writeFileSync(filePath, updated, 'utf-8')
      console.log(`    Inserted inline links: ${article.title}`)
    }
  }

  // Clean stale entries from keyword cache (articles deleted from Notion)
  const activeLinks = new Set(allArticles.map(a => a.link))
  for (const key of Object.keys(keywordCache)) {
    if (!activeLinks.has(key)) delete keywordCache[key]
  }

  saveKeywordCache()
  console.log(`\nGenerated ${totalGenerated} AI keyword articles`)
}

// Translate AI keyword articles to English
async function generateEnglishKeywordArticles() {
  if (!DEEPSEEK_KEY || allKeywordArticles.length === 0) return

  mkdirSync(MORE_INFO_EN_DIR, { recursive: true })
  syncedPaths.add(MORE_INFO_EN_DIR)

  console.log('\n  Translating keyword articles to English...')
  for (const kw of allKeywordArticles) {
    const zhPath = join(MORE_INFO_DIR, `${kw.slug}.md`)
    if (!existsSync(zhPath)) continue

    const enPath = join(MORE_INFO_EN_DIR, `${kw.slug}.md`)
    syncedPaths.add(enPath)

    const zhContent = readFileSync(zhPath, 'utf-8')
    const zhHash = createHash('md5').update(zhContent).digest('hex')
    const cacheKey = `kw-${kw.slug}`

    // Skip if source hasn't changed and English file exists
    if (translationCache[cacheKey] === zhHash && existsSync(enPath)) {
      console.log(`    Unchanged: en/more-info/${kw.slug}.md`)
      continue
    }

    const fmMatch = zhContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    if (!fmMatch) continue

    const body = fmMatch[2]
    const lastUpdatedMatch = fmMatch[1].match(/lastUpdated: (\d+)/)
    const lastUpdated = lastUpdatedMatch?.[1] || Date.now().toString()

    console.log(`    Translating: ${kw.slug}`)
    const enTitle = await translateToEnglish(kw.title)
    const enBody = await translateToEnglish(body)
    const enDesc = extractDescription(enBody)

    const enContent = [
      '---',
      `title: "${enTitle.replace(/"/g, '\\"')}"`,
      `description: "${enDesc.replace(/"/g, '\\"')}"`,
      `lastUpdated: ${lastUpdated}`,
      '---',
      '',
      enBody
    ].join('\n')

    writeFileSync(enPath, enContent, 'utf-8')
    translationCache[cacheKey] = zhHash
    console.log(`    Translated: ${kw.slug}`)
  }
}

// Generate a /search page listing all articles for Google indexing
function generateSearchPage() {
  // Group articles by category
  const grouped = new Map<string, ArticleInfo[]>()
  for (const article of allArticles) {
    const cat = article.category || '其他'
    if (!grouped.has(cat)) grouped.set(cat, [])
    grouped.get(cat)!.push(article)
  }

  const sections = [...grouped.entries()].map(([cat, articles]) => {
    const list = articles.map(a => `- [${a.title}](${a.link})`).join('\n')
    return `## ${cat}\n\n${list}`
  }).join('\n\n')

  const content = [
    '---',
    'title: "全部文章 - 搜索"',
    'description: "天马品牌所有常见问题文章列表，方便搜索和查找"',
    '---',
    '',
    '# 全部文章',
    '',
    `共 ${allArticles.length} 篇文章，涵盖所有常见问题分类。`,
    '',
    sections,
    ''
  ].join('\n')

  const searchDir = join(DOCS_DIR, 'search')
  mkdirSync(searchDir, { recursive: true })
  syncedPaths.add(searchDir)

  const filePath = join(searchDir, 'index.md')
  syncedPaths.add(filePath)

  const existing = existsSync(filePath) ? readFileSync(filePath, 'utf-8') : null
  if (existing !== content) {
    writeFileSync(filePath, content, 'utf-8')
    console.log('Written: search/index.md')
  } else {
    console.log('Unchanged: search/index.md')
  }

  // Also generate English search page
  const enSections = [...grouped.entries()].map(([cat, articles]) => {
    const list = articles.map(a => `- [${a.title}](/en${a.link})`).join('\n')
    return `## ${cat}\n\n${list}`
  }).join('\n\n')

  const enContent = [
    '---',
    'title: "All Articles - Search"',
    'description: "Complete list of all Tianma Brand FAQ articles"',
    '---',
    '',
    '# All Articles',
    '',
    `${allArticles.length} articles covering all FAQ categories.`,
    '',
    enSections,
    ''
  ].join('\n')

  const enSearchDir = join(EN_DIR, 'search')
  mkdirSync(enSearchDir, { recursive: true })
  syncedPaths.add(enSearchDir)

  const enFilePath = join(enSearchDir, 'index.md')
  syncedPaths.add(enFilePath)

  const existingEn = existsSync(enFilePath) ? readFileSync(enFilePath, 'utf-8') : null
  if (existingEn !== enContent) {
    writeFileSync(enFilePath, enContent, 'utf-8')
    console.log('Written: en/search/index.md')
  }
}

async function main() {
  const notionToken = process.env.NOTION_TOKEN
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID

  if (!notionToken || !rootPageId) {
    console.error('Missing NOTION_TOKEN or NOTION_ROOT_PAGE_ID environment variables')
    process.exit(1)
  }

  notion = new Client({ auth: notionToken })
  n2m = new NotionToMarkdown({ notionClient: notion })

  // Load caches
  loadSlugCache()
  loadTranslationCache()

  // Custom transformers: Notion blocks → VitePress-friendly markdown

  // Callout → VitePress custom container (tip/warning/danger/info)
  n2m.setCustomTransformer('callout', async (block: any) => {
    const callout = block.callout
    const icon = callout.icon?.emoji || ''
    const richText = callout.rich_text || []
    const text = richText.map((t: any) => t.plain_text).join('')

    // Map common icons to VitePress container types
    let type = 'info'
    if (['⚠️', '⚠', '🔶'].includes(icon)) type = 'warning'
    else if (['🚨', '❌', '🔴', '‼️', '⛔'].includes(icon)) type = 'danger'
    else if (['💡', '✅', '🟢', '👍'].includes(icon)) type = 'tip'
    else if (['📝', 'ℹ️', '📌', '🔵'].includes(icon)) type = 'info'

    // Get child content
    const children = await n2m.pageToMarkdown(block.id)
    const childContent = n2m.toMarkdownString(children).parent || ''

    const content = text ? `${text}\n${childContent}` : childContent
    return `::: ${type}\n${content.trim()}\n:::`
  })


  // Equation (block level) → LaTeX
  n2m.setCustomTransformer('equation', async (block: any) => {
    const expr = block.equation?.expression || ''
    return `$$\n${expr}\n$$`
  })

  // Divider → horizontal rule
  n2m.setCustomTransformer('divider', async () => {
    return '---'
  })

  // Table of contents → empty (VitePress has its own)
  n2m.setCustomTransformer('table_of_contents', async () => {
    return '[[toc]]'
  })

  // Video → embedded (with YouTube detection)
  n2m.setCustomTransformer('video', async (block: any) => {
    const url = block.video?.external?.url || block.video?.file?.url || ''
    if (!url) return ''
    // YouTube
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/)
    if (ytMatch) {
      return `<iframe src="https://www.youtube.com/embed/${ytMatch[1]}" width="100%" height="400" style="border:0;border-radius:8px;" allowfullscreen></iframe>`
    }
    return `<video controls src="${url}" style="width:100%;border-radius:8px;"></video>`
  })

  // Toggle → HTML details/summary (collapsible)
  n2m.setCustomTransformer('toggle', async (block: any) => {
    const text = block.toggle.rich_text?.map((t: any) => t.plain_text).join('') || ''
    const children = await n2m.pageToMarkdown(block.id)
    const childContent = n2m.toMarkdownString(children).parent || ''
    return `<details>\n<summary>${text}</summary>\n\n${childContent.trim()}\n\n</details>`
  })

  // Audio → HTML audio player
  n2m.setCustomTransformer('audio', async (block: any) => {
    const url = block.audio?.external?.url || block.audio?.file?.url || ''
    return url ? `<audio controls src="${url}"></audio>` : ''
  })

  // File attachment → download link
  n2m.setCustomTransformer('file', async (block: any) => {
    const url = block.file?.external?.url || block.file?.file?.url || ''
    const caption = block.file?.caption?.map((t: any) => t.plain_text).join('') || '下载文件'
    return url ? `[📎 ${caption}](${url})` : ''
  })

  // Embed → iframe
  n2m.setCustomTransformer('embed', async (block: any) => {
    const url = block.embed?.url || ''
    if (!url) return ''
    // X/Twitter embed via TweetCard Vue component
    const tweetMatch = url.match(/^https?:\/\/(x\.com|twitter\.com)\/\w+\/status\/(\d+)/)
    if (tweetMatch) {
      return `<ClientOnly><TweetCard url="${url}" /></ClientOnly>`
    }
    // YouTube embed
    const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/)
    if (ytMatch) {
      return `<iframe src="https://www.youtube.com/embed/${ytMatch[1]}" width="100%" height="400" frameborder="0" allowfullscreen></iframe>`
    }
    return `<iframe src="${url}" width="100%" height="500" frameborder="0" allowfullscreen></iframe>`
  })

  // Link preview → handle X/Twitter specially
  n2m.setCustomTransformer('link_preview', async (block: any) => {
    const url = block.link_preview?.url || ''
    if (!url) return ''
    const tweetMatch = url.match(/^https?:\/\/(x\.com|twitter\.com)\/\w+\/status\/(\d+)/)
    if (tweetMatch) {
      return `<ClientOnly><TweetCard url="${url}" /></ClientOnly>`
    }
    return `[${url}](${url})`
  })

  // Bookmark → also handle X/Twitter
  n2m.setCustomTransformer('bookmark', async (block: any) => {
    const url = block.bookmark?.url || ''
    if (!url) return ''
    const caption = block.bookmark?.caption?.map((t: any) => t.plain_text).join('') || url
    const tweetMatch = url.match(/^https?:\/\/(x\.com|twitter\.com)\/\w+\/status\/(\d+)/)
    if (tweetMatch) {
      return `<ClientOnly><TweetCard url="${url}" /></ClientOnly>`
    }
    return `[${caption}](${url})`
  })

  // PDF → embedded viewer
  n2m.setCustomTransformer('pdf', async (block: any) => {
    const url = block.pdf?.external?.url || block.pdf?.file?.url || ''
    return url ? `<iframe src="${url}" width="100%" height="600" frameborder="0"></iframe>` : ''
  })

  // Column list → render children sequentially (CSS can't replicate columns in MD)
  n2m.setCustomTransformer('column_list', async (block: any) => {
    const children = await n2m.pageToMarkdown(block.id)
    return n2m.toMarkdownString(children).parent || ''
  })

  // Column → render content
  n2m.setCustomTransformer('column', async (block: any) => {
    const children = await n2m.pageToMarkdown(block.id)
    return n2m.toMarkdownString(children).parent || ''
  })

  // Synced block → render original content
  n2m.setCustomTransformer('synced_block', async (block: any) => {
    const children = await n2m.pageToMarkdown(block.id)
    return n2m.toMarkdownString(children).parent || ''
  })

  // Pass 1: Scan tree and build page ID → path mapping
  console.log('Scanning page tree...\n')
  const pageTree = await scanPages(rootPageId, DOCS_DIR, '', 0)
  console.log(`Mapped ${pageIdToPath.size} pages\n`)

  // Pass 2: Generate markdown with correct internal links
  const sidebar = await generatePages(pageTree)

  // Generate AI keyword articles (before appending related articles)
  await generateAIKeywordArticles()

  // Append related articles to each page (includes keyword articles)
  appendRelatedArticles()

  // Generate search page for Google indexing
  generateSearchPage()

  // Generate category index pages
  generateCategoryIndexes(pageTree)

  // Clean up files/folders not in current Notion tree
  cleanupDocs()

  // Generate index.md from top-level categories
  generateHomepage(sidebar)

  // Add "更多信息" sidebar group for AI-generated keyword articles
  if (allKeywordArticles.length > 0) {
    sidebar.push({
      text: '更多信息',
      collapsed: true,
      items: allKeywordArticles.map(a => ({ text: a.title, link: a.link }))
    })
  }

  // Write sidebar.json
  if (sidebar.length > 0) {
    const sidebarPath = join(VITEPRESS_DIR, 'sidebar.json')
    const sidebarContent = JSON.stringify(sidebar, null, 2)
    const existing = existsSync(sidebarPath) ? readFileSync(sidebarPath, 'utf-8') : null
    if (existing !== sidebarContent) {
      writeFileSync(sidebarPath, sidebarContent, 'utf-8')
      console.log('\nWritten: .vitepress/sidebar.json')
    } else {
      console.log('\nUnchanged: .vitepress/sidebar.json')
    }
  }

  // Generate English translations
  if (DEEPSEEK_KEY) {
    console.log('\n--- Translating to English ---\n')
    await generateEnglishPages(pageTree)

    // Translate AI keyword articles to English
    await generateEnglishKeywordArticles()

    // Cleanup EN after all English content is generated
    cleanupDir(EN_DIR)

    // Translate sidebar (includes "更多信息" group)
    const enSidebar = await translateSidebar(sidebar, '/en')
    if (enSidebar.length > 0) {
      const enSidebarPath = join(VITEPRESS_DIR, 'sidebar-en.json')
      const enSidebarContent = JSON.stringify(enSidebar, null, 2)
      const existing = existsSync(enSidebarPath) ? readFileSync(enSidebarPath, 'utf-8') : null
      if (existing !== enSidebarContent) {
        writeFileSync(enSidebarPath, enSidebarContent, 'utf-8')
        console.log('\nWritten: .vitepress/sidebar-en.json')
      }
    }

    // Generate English homepage
    generateEnglishHomepage(enSidebar)
  } else {
    console.log('\nSkipping English translation (no DEEPSEEK_API_KEY)')
  }

  // Save caches for next run
  saveSlugCache()
  saveTranslationCache()

  console.log(`\nSync complete: ${totalArticles} articles`)
}

// Remove docs content that no longer exists in Notion
function cleanupDocs() {
  const keep = new Set(['index.md', '.vitepress', 'public', 'en', 'search'])

  const entries = readdirSync(DOCS_DIR)
  for (const entry of entries) {
    if (keep.has(entry)) continue

    const fullPath = join(DOCS_DIR, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      if (!syncedPaths.has(fullPath)) {
        rmSync(fullPath, { recursive: true })
        console.log(`Deleted: ${entry}/`)
      } else {
        // Recurse into synced directories to clean stale files
        cleanupDir(fullPath)
      }
    } else if (entry.endsWith('.md')) {
      if (!syncedPaths.has(fullPath)) {
        rmSync(fullPath)
        console.log(`Deleted: ${entry}`)
      }
    }
  }
}

function cleanupDir(dir: string) {
  const entries = readdirSync(dir)
  for (const entry of entries) {
    const fullPath = join(dir, entry)
    const stat = statSync(fullPath)

    if (stat.isDirectory()) {
      if (!syncedPaths.has(fullPath)) {
        rmSync(fullPath, { recursive: true })
        console.log(`Deleted: ${fullPath.replace(DOCS_DIR + '/', '')}/`)
      } else {
        cleanupDir(fullPath)
      }
    } else if (entry.endsWith('.md')) {
      if (!syncedPaths.has(fullPath)) {
        rmSync(fullPath)
        console.log(`Deleted: ${fullPath.replace(DOCS_DIR + '/', '')}`)
      }
    }
  }
}

// Find the first article link in a sidebar tree
function findFirstLink(item: SidebarItem): string | null {
  if (item.link) return item.link
  if (item.items) {
    for (const sub of item.items) {
      const link = findFirstLink(sub)
      if (link) return link
    }
  }
  return null
}

// Count articles in a sidebar tree
function countArticles(item: SidebarItem): number {
  if (item.link) return 1
  if (item.items) {
    return item.items.reduce((sum, sub) => sum + countArticles(sub), 0)
  }
  return 0
}

function generateHomepage(sidebar: SidebarItem[]) {
  const features = sidebar.map(cat => {
    const link = findFirstLink(cat) || '#'
    const count = countArticles(cat)
    return `  - title: ${cat.text}
    details: 共 ${count} 篇文章
    link: ${link}
    linkText: 查看详情`
  }).join('\n')

  const firstLink = sidebar.length > 0 ? findFirstLink(sidebar[0]) || '#' : '#'

  const content = `---
layout: home

hero:
  name: "天马品牌"
  text: "常见问题解答"
  tagline: 快速找到您需要的答案，解决常见问题
  actions:
    - theme: brand
      text: 浏览全部问题
      link: ${firstLink}

features:
${features}
---
`

  const indexPath = join(DOCS_DIR, 'index.md')
  const existing = existsSync(indexPath) ? readFileSync(indexPath, 'utf-8') : null
  if (existing !== content) {
    writeFileSync(indexPath, content, 'utf-8')
    console.log('\nWritten: index.md')
  } else {
    console.log('\nUnchanged: index.md')
  }
}

// Translation hash cache: tracks Chinese content hash → skip re-translation
const TRANSLATION_CACHE_PATH = join(VITEPRESS_DIR, 'translation-cache.json')
let translationCache: Record<string, string> = {} // slug → content hash

function loadTranslationCache() {
  if (existsSync(TRANSLATION_CACHE_PATH)) {
    translationCache = JSON.parse(readFileSync(TRANSLATION_CACHE_PATH, 'utf-8'))
  }
}
function saveTranslationCache() {
  writeFileSync(TRANSLATION_CACHE_PATH, JSON.stringify(translationCache, null, 2), 'utf-8')
}

// Generate translated English markdown files
async function generateEnglishPages(nodes: PageNode[]) {
  for (const node of nodes) {
    if (node.isFolder) {
      const enSubDir = join(node.dir, node.slug).replace(DOCS_DIR, EN_DIR)
      mkdirSync(enSubDir, { recursive: true })
      syncedPaths.add(enSubDir)
      await generateEnglishPages(node.children)
    } else {
      // Read the Chinese markdown file
      const zhPath = join(node.dir, `${node.slug}.md`)
      if (!existsSync(zhPath)) continue

      const zhContent = readFileSync(zhPath, 'utf-8')
      const zhHash = createHash('md5').update(zhContent).digest('hex')

      // Write to en/ directory mirroring the Chinese structure
      const enDir = node.dir.replace(DOCS_DIR, EN_DIR)
      mkdirSync(enDir, { recursive: true })
      const enPath = join(enDir, `${node.slug}.md`)
      syncedPaths.add(enPath)

      // Skip if Chinese content hasn't changed and English file exists
      if (translationCache[node.slug] === zhHash && existsSync(enPath)) {
        const indent = '  '.repeat(node.depth)
        console.log(`${indent}Unchanged: en/${node.slug}.md`)
        continue
      }

      // Extract frontmatter and body
      const fmMatch = zhContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
      if (!fmMatch) continue

      const body = fmMatch[2]
      const lastUpdatedMatch = fmMatch[1].match(/lastUpdated: (\d+)/)
      const lastUpdated = lastUpdatedMatch?.[1] || Date.now().toString()

      // Translate title and body
      const indent = '  '.repeat(node.depth)
      console.log(`${indent}Translating: ${node.title}`)

      const enTitle = await translateToEnglish(node.title)
      const enBody = await translateToEnglish(body)
      const enDescription = extractDescription(enBody)

      const enContent = [
        '---',
        `title: "${enTitle.replace(/"/g, '\\"')}"`,
        `description: "${enDescription.replace(/"/g, '\\"')}"`,
        `lastUpdated: ${lastUpdated}`,
        '---',
        '',
        enBody
      ].join('\n')

      const existing = existsSync(enPath) ? readFileSync(enPath, 'utf-8') : null
      if (existing !== enContent) {
        writeFileSync(enPath, enContent, 'utf-8')
        console.log(`${indent}  Written: en/${node.slug}.md`)
      } else {
        console.log(`${indent}  Unchanged: en/${node.slug}.md`)
      }
      // Cache the hash so next run skips translation
      translationCache[node.slug] = zhHash
    }
  }
}

function generateEnglishHomepage(sidebar: SidebarItem[]) {
  const features = sidebar.map(cat => {
    const link = findFirstLink(cat) || '#'
    const count = countArticles(cat)
    return `  - title: ${cat.text}
    details: ${count} articles
    link: ${link}
    linkText: View details`
  }).join('\n')

  const firstLink = sidebar.length > 0 ? findFirstLink(sidebar[0]) || '#' : '#'

  const content = `---
layout: home

hero:
  name: "Tianma Brand"
  text: "FAQ"
  tagline: Quickly find the answers you need
  actions:
    - theme: brand
      text: Browse All Questions
      link: ${firstLink}

features:
${features}
---
`

  const indexPath = join(EN_DIR, 'index.md')
  const existing = existsSync(indexPath) ? readFileSync(indexPath, 'utf-8') : null
  if (existing !== content) {
    writeFileSync(indexPath, content, 'utf-8')
    console.log('\nWritten: en/index.md')
  }
}

main().catch(err => {
  console.error('Sync failed:', err)
  process.exit(1)
})
