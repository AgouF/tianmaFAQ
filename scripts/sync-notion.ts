import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { mkdirSync, writeFileSync, readFileSync, existsSync, readdirSync, rmSync, statSync } from 'fs'
import { join, resolve } from 'path'

const DOCS_DIR = resolve(import.meta.dirname, '..', 'docs')
const VITEPRESS_DIR = join(DOCS_DIR, '.vitepress')

let notion: Client
let n2m: NotionToMarkdown
let totalArticles = 0
const syncedPaths = new Set<string>() // Track all files/dirs created by sync

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

// Recursively traverse pages: if a page has child pages, it's a folder; otherwise it's an article
async function traversePages(parentId: string, dir: string, urlPath: string, depth: number): Promise<SidebarItem[]> {
  const children = await notion.blocks.children.list({ block_id: parentId, page_size: 100 })
  const childPages = children.results.filter((b: any) => b.type === 'child_page') as any[]

  const items: SidebarItem[] = []

  for (const child of childPages) {
    const title = child.child_page.title
    const slug = toSlug(title)

    // Check if this page has sub-pages
    const subChildren = await notion.blocks.children.list({ block_id: child.id, page_size: 100 })
    const subPages = subChildren.results.filter((b: any) => b.type === 'child_page') as any[]

    if (subPages.length > 0) {
      // This is a folder/category - recurse deeper
      const subDir = join(dir, slug)
      mkdirSync(subDir, { recursive: true })
      syncedPaths.add(subDir)

      const indent = '  '.repeat(depth)
      console.log(`${indent}[Folder] ${title}`)

      const subItems = await traversePages(child.id, subDir, `${urlPath}/${slug}`, depth + 1)

      items.push({
        text: title,
        collapsed: true,
        items: subItems
      })
    } else {
      // This is an article - write markdown
      const pageInfo = await notion.pages.retrieve({ page_id: child.id }) as any
      const mdBlocks = await n2m.pageToMarkdown(child.id)
      const mdContent = n2m.toMarkdownString(mdBlocks)

      const fileContent = [
        '---',
        `title: "${title.replace(/"/g, '\\"')}"`,
        `lastUpdated: ${new Date(pageInfo.last_edited_time).getTime()}`,
        '---',
        '',
        `# ${title}`,
        '',
        mdContent.parent || ''
      ].join('\n')

      const filePath = join(dir, `${slug}.md`)
      syncedPaths.add(filePath)
      const existing = existsSync(filePath) ? readFileSync(filePath, 'utf-8') : null

      const indent = '  '.repeat(depth)
      if (existing !== fileContent) {
        writeFileSync(filePath, fileContent, 'utf-8')
        console.log(`${indent}Updated: ${urlPath}/${slug}.md`)
      } else {
        console.log(`${indent}Unchanged: ${urlPath}/${slug}.md`)
      }

      totalArticles++
      items.push({
        text: title,
        link: `${urlPath}/${slug}`
      })
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

  // Bookmark → link
  n2m.setCustomTransformer('bookmark', async (block: any) => {
    const url = block.bookmark?.url || ''
    const caption = block.bookmark?.caption?.map((t: any) => t.plain_text).join('') || url
    return `[${caption}](${url})`
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

  // Video → embedded
  n2m.setCustomTransformer('video', async (block: any) => {
    const url = block.video?.external?.url || block.video?.file?.url || ''
    return url ? `<video controls src="${url}"></video>` : ''
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
    return url ? `<iframe src="${url}" width="100%" height="500" frameborder="0" allowfullscreen></iframe>` : ''
  })

  // Link preview → regular link
  n2m.setCustomTransformer('link_preview', async (block: any) => {
    const url = block.link_preview?.url || ''
    return url ? `[${url}](${url})` : ''
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

  // Start recursive traversal from root page
  const sidebar = await traversePages(rootPageId, DOCS_DIR, '', 0)

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

main().catch(err => {
  console.error('Sync failed:', err)
  process.exit(1)
})
