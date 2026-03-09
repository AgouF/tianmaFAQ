import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'

const DOCS_DIR = resolve(import.meta.dirname, '..', 'docs')
const VITEPRESS_DIR = join(DOCS_DIR, '.vitepress')

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

async function main() {
  const notionToken = process.env.NOTION_TOKEN
  const rootPageId = process.env.NOTION_ROOT_PAGE_ID

  if (!notionToken || !rootPageId) {
    console.error('Missing NOTION_TOKEN or NOTION_ROOT_PAGE_ID environment variables')
    process.exit(1)
  }

  const notion = new Client({ auth: notionToken })
  const n2m = new NotionToMarkdown({ notionClient: notion })

  // Get all child pages of root (these are categories)
  const rootChildren = await notion.blocks.children.list({ block_id: rootPageId, page_size: 100 })
  const categories = rootChildren.results.filter(
    (b: any) => b.type === 'child_page'
  ) as any[]

  if (categories.length === 0) {
    console.log('No categories found under root page')
    return
  }

  const sidebar: SidebarItem[] = []
  let totalArticles = 0

  for (const category of categories) {
    const catTitle = category.child_page.title
    const catSlug = toSlug(catTitle)
    const catDir = join(DOCS_DIR, catSlug)
    mkdirSync(catDir, { recursive: true })

    console.log(`\n[Category] ${catTitle}`)

    const sidebarGroup: SidebarItem = {
      text: catTitle,
      collapsed: true,
      items: []
    }

    // Get children of this category
    const catChildren = await notion.blocks.children.list({ block_id: category.id, page_size: 100 })
    const childPages = catChildren.results.filter(
      (b: any) => b.type === 'child_page'
    ) as any[]

    for (const child of childPages) {
      const childTitle = child.child_page.title

      // Check if this child has sub-pages (making it a subcategory)
      const subChildren = await notion.blocks.children.list({ block_id: child.id, page_size: 100 })
      const subPages = subChildren.results.filter(
        (b: any) => b.type === 'child_page'
      ) as any[]

      if (subPages.length > 0) {
        // This is a subcategory
        const subSlug = toSlug(childTitle)
        const subDir = join(catDir, subSlug)
        mkdirSync(subDir, { recursive: true })

        console.log(`  [Subcategory] ${childTitle}`)

        const subGroup: SidebarItem = {
          text: childTitle,
          collapsed: true,
          items: []
        }

        for (const article of subPages) {
          const articleTitle = article.child_page.title
          const articleSlug = toSlug(articleTitle)
          const pageInfo = await notion.pages.retrieve({ page_id: article.id }) as any
          const written = await writeArticle(n2m, article.id, articleTitle, pageInfo.last_edited_time, subDir, `${catSlug}/${subSlug}`, articleSlug)
          if (written) totalArticles++
          subGroup.items!.push({
            text: articleTitle,
            link: `/${catSlug}/${subSlug}/${articleSlug}`
          })
        }

        sidebarGroup.items!.push(subGroup)
      } else {
        // This is a direct article
        const articleSlug = toSlug(childTitle)
        const pageInfo = await notion.pages.retrieve({ page_id: child.id }) as any
        const written = await writeArticle(n2m, child.id, childTitle, pageInfo.last_edited_time, catDir, catSlug, articleSlug)
        if (written) totalArticles++
        sidebarGroup.items!.push({
          text: childTitle,
          link: `/${catSlug}/${articleSlug}`
        })
      }
    }

    sidebar.push(sidebarGroup)
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

  console.log(`\nSync complete: ${categories.length} categories, ${totalArticles} articles`)
}

async function writeArticle(
  n2m: NotionToMarkdown,
  pageId: string,
  title: string,
  lastEditedTime: string,
  dir: string,
  relDir: string,
  slug: string
): Promise<boolean> {
  const mdBlocks = await n2m.pageToMarkdown(pageId)
  const mdContent = n2m.toMarkdownString(mdBlocks)

  const fileContent = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `lastUpdated: ${new Date(lastEditedTime).getTime()}`,
    '---',
    '',
    `# ${title}`,
    '',
    mdContent.parent || ''
  ].join('\n')

  const filePath = join(dir, `${slug}.md`)

  // Only write if content changed to preserve git timestamps
  const existing = existsSync(filePath) ? readFileSync(filePath, 'utf-8') : null
  if (existing !== fileContent) {
    writeFileSync(filePath, fileContent, 'utf-8')
    console.log(`    Updated: ${relDir}/${slug}.md`)
    return true
  } else {
    console.log(`    Unchanged: ${relDir}/${slug}.md`)
    return false
  }
}

main().catch(err => {
  console.error('Sync failed:', err)
  process.exit(1)
})
