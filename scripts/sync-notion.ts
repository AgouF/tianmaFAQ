import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync, statSync, createWriteStream } from 'fs'
import { join, resolve } from 'path'
import { createHash } from 'crypto'
import { pipeline } from 'stream/promises'
import { Readable } from 'stream'

const DOCS_DIR = resolve(import.meta.dirname, '..', 'docs')
const EN_DIR = join(DOCS_DIR, 'en')
const VITEPRESS_DIR = join(DOCS_DIR, '.vitepress')
const IMAGES_DIR = join(DOCS_DIR, 'public', 'images')

// Ensure directories exist
mkdirSync(IMAGES_DIR, { recursive: true })
mkdirSync(EN_DIR, { recursive: true })

const DEEPSEEK_KEY = process.env.DEEPSEEK_API_KEY || ''

// Translate text using DeepSeek API
async function translateToEnglish(text: string): Promise<string> {
  if (!DEEPSEEK_KEY || !text.trim()) return text

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
            content: 'You are a translator. Translate the following Chinese markdown content to English. Keep all markdown formatting, HTML tags, links, and code blocks unchanged. Only translate the Chinese text. Do not add any explanation, just output the translated content directly.'
          },
          { role: 'user', content: text }
        ],
        temperature: 0.3,
      }),
    })

    if (!res.ok) {
      console.error(`  Translation API error: ${res.status}`)
      return text
    }

    const data = await res.json() as any
    return data.choices?.[0]?.message?.content || text
  } catch (err) {
    console.error(`  Translation failed:`, err)
    return text
  }
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

// Convert page title to URL-friendly slug
function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, '-')
    .replace(/^-|-$/g, '')
    || 'untitled'
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
    const slug = toSlug(title)

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

// Download image to local public/images/ and return local path
async function downloadImage(url: string): Promise<string> {
  try {
    const hash = createHash('md5').update(url).digest('hex').slice(0, 12)
    const ext = url.match(/\.(png|jpg|jpeg|gif|webp|svg|bmp|ico)/i)?.[1] || 'png'
    const filename = `${hash}.${ext}`
    const filePath = join(IMAGES_DIR, filename)

    if (existsSync(filePath)) return `/images/${filename}`

    const res = await fetch(url)
    if (!res.ok || !res.body) return url

    await pipeline(Readable.fromWeb(res.body as any), createWriteStream(filePath))
    console.log(`  Downloaded: ${filename}`)
    return `/images/${filename}`
  } catch {
    return url // Fallback to original URL on error
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

// Pass 2: Generate markdown files and sidebar
async function generatePages(nodes: PageNode[]): Promise<SidebarItem[]> {
  const items: SidebarItem[] = []

  for (const node of nodes) {
    if (node.isFolder) {
      const subDir = join(node.dir, node.slug)
      mkdirSync(subDir, { recursive: true })
      syncedPaths.add(subDir)

      const indent = '  '.repeat(node.depth)
      console.log(`${indent}[Folder] ${node.title}`)

      const subItems = await generatePages(node.children)
      items.push({ text: node.title, collapsed: true, items: subItems })
    } else {
      const pageInfo = await notion.pages.retrieve({ page_id: node.id }) as any
      const mdBlocks = await n2m.pageToMarkdown(node.id)
      let mdContent = n2m.toMarkdownString(mdBlocks).parent || ''

      // Replace Notion page links with internal VitePress links
      mdContent = replaceNotionLinks(mdContent)

      // Download Notion images to local storage
      mdContent = await localizeImages(mdContent)

      const description = extractDescription(mdContent)

      const fileContent = [
        '---',
        `title: "${node.title.replace(/"/g, '\\"')}"`,
        `description: "${description.replace(/"/g, '\\"')}"`,
        `lastUpdated: ${new Date(pageInfo.last_edited_time).getTime()}`,
        '---',
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
      items.push({ text: node.title, link: `${node.urlPath}/${node.slug}` })
    }
  }

  return items
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

  // Clean up files/folders not in current Notion tree
  cleanupDocs()

  // Generate index.md from top-level categories
  generateHomepage(sidebar)

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
    cleanupDir(EN_DIR)

    // Translate sidebar
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

  console.log(`\nSync complete: ${totalArticles} articles`)
}

// Remove docs content that no longer exists in Notion
function cleanupDocs() {
  const keep = new Set(['index.md', '.vitepress', 'public'])

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

// Generate translated English markdown files
async function generateEnglishPages(nodes: PageNode[]) {
  for (const node of nodes) {
    if (node.isFolder) {
      const enSubDir = join(EN_DIR, node.slug)
      mkdirSync(enSubDir, { recursive: true })
      syncedPaths.add(enSubDir)
      await generateEnglishPages(node.children)
    } else {
      // Read the Chinese markdown file
      const zhPath = join(node.dir, `${node.slug}.md`)
      if (!existsSync(zhPath)) continue

      const zhContent = readFileSync(zhPath, 'utf-8')

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

      // Write to en/ directory mirroring the Chinese structure
      const enDir = node.dir.replace(DOCS_DIR, EN_DIR)
      mkdirSync(enDir, { recursive: true })
      const enPath = join(enDir, `${node.slug}.md`)
      syncedPaths.add(enPath)

      const existing = existsSync(enPath) ? readFileSync(enPath, 'utf-8') : null
      if (existing !== enContent) {
        writeFileSync(enPath, enContent, 'utf-8')
        console.log(`${indent}  Written: en/${node.slug}.md`)
      } else {
        console.log(`${indent}  Unchanged: en/${node.slug}.md`)
      }
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
