import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'

const DOCS_DIR = resolve(import.meta.dirname, '..', 'docs')
const VITEPRESS_DIR = join(DOCS_DIR, '.vitepress')

let notion: Client
let n2m: NotionToMarkdown
let totalArticles = 0

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

  // Start recursive traversal from root page
  const sidebar = await traversePages(rootPageId, DOCS_DIR, '', 0)

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
    - theme: alt
      text: 搜索问题
      link: #

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
