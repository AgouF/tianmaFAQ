import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'
import { mkdirSync, writeFileSync, readFileSync, existsSync } from 'fs'
import { join, resolve } from 'path'

const DOCS_DIR = resolve(import.meta.dirname, '..', 'docs')
const VITEPRESS_DIR = join(DOCS_DIR, '.vitepress')

interface FaqEntry {
  id: string
  title: string
  category: string
  subcategory: string | null
  slug: string
  order: number
}

async function main() {
  const notionToken = process.env.NOTION_TOKEN
  const databaseId = process.env.NOTION_DATABASE_ID

  if (!notionToken || !databaseId) {
    console.error('Missing NOTION_TOKEN or NOTION_DATABASE_ID environment variables')
    process.exit(1)
  }

  const notion = new Client({ auth: notionToken })
  const n2m = new NotionToMarkdown({ notionClient: notion })

  // Query database: only published entries, sorted by order
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: { equals: true }
    },
    sorts: [
      { property: 'Category', direction: 'ascending' },
      { property: 'Order', direction: 'ascending' }
    ]
  })

  const entries: FaqEntry[] = []

  // Track which category directories were created by sync
  const syncedDirs = new Set<string>()

  for (const page of response.results) {
    if (!('properties' in page)) continue

    const props = page.properties
    const title = extractTitle(props['名称'])
    const category = extractSelect(props.Category)
    const subcategory = extractSelect(props.Subcategory)
    const slug = extractRichText(props.Slug)
    const order = extractNumber(props.Order)

    if (!title || !category || !slug) {
      console.warn(`Skipping page ${page.id}: missing title, category, or slug`)
      continue
    }

    // Build directory path
    const dirParts = [category]
    if (subcategory) dirParts.push(subcategory)
    const relDir = dirParts.join('/')
    const absDir = join(DOCS_DIR, relDir)

    // Create directory
    mkdirSync(absDir, { recursive: true })
    syncedDirs.add(absDir)

    // Convert page content to markdown
    const mdBlocks = await n2m.pageToMarkdown(page.id)
    const mdContent = n2m.toMarkdownString(mdBlocks)

    // Build frontmatter + content
    const fileContent = [
      '---',
      `title: "${title.replace(/"/g, '\\"')}"`,
      `order: ${order}`,
      '---',
      '',
      `# ${title}`,
      '',
      mdContent.parent || ''
    ].join('\n')

    const filePath = join(absDir, `${slug}.md`)

    // Only write if content actually changed, to preserve git timestamps
    const existing = existsSync(filePath) ? readFileSync(filePath, 'utf-8') : null
    if (existing !== fileContent) {
      writeFileSync(filePath, fileContent, 'utf-8')
      console.log(`Updated: ${relDir}/${slug}.md`)
    } else {
      console.log(`Unchanged: ${relDir}/${slug}.md`)
    }

    entries.push({ id: page.id, title, category, subcategory, slug, order })
  }

  // Generate sidebar.json
  generateSidebar(entries)

  console.log(`\nSync complete: ${entries.length} entries`)
}

function generateSidebar(entries: FaqEntry[]) {
  // Group by category, then subcategory
  const groups = new Map<string, Map<string | null, FaqEntry[]>>()

  for (const entry of entries) {
    if (!groups.has(entry.category)) {
      groups.set(entry.category, new Map())
    }
    const catGroup = groups.get(entry.category)!
    const subKey = entry.subcategory
    if (!catGroup.has(subKey)) {
      catGroup.set(subKey, [])
    }
    catGroup.get(subKey)!.push(entry)
  }

  const sidebar: Array<{
    text: string
    collapsed: boolean
    items: Array<{ text: string; link: string } | { text: string; collapsed: boolean; items: Array<{ text: string; link: string }> }>
  }> = []

  for (const [category, subcategories] of groups) {
    const sidebarGroup: {
      text: string
      collapsed: boolean
      items: Array<{ text: string; link: string } | { text: string; collapsed: boolean; items: Array<{ text: string; link: string }> }>
    } = {
      text: category,
      collapsed: true,
      items: []
    }

    for (const [subcategory, items] of subcategories) {
      const sortedItems = items.sort((a, b) => a.order - b.order)

      if (subcategory === null) {
        // Direct items under category
        for (const item of sortedItems) {
          sidebarGroup.items.push({
            text: item.title,
            link: `/${item.category}/${item.slug}`
          })
        }
      } else {
        // Nested subcategory group
        sidebarGroup.items.push({
          text: subcategory,
          collapsed: true,
          items: sortedItems.map(item => ({
            text: item.title,
            link: `/${item.category}/${item.subcategory}/${item.slug}`
          }))
        })
      }
    }

    sidebar.push(sidebarGroup)
  }

  const sidebarPath = join(VITEPRESS_DIR, 'sidebar.json')
  writeFileSync(sidebarPath, JSON.stringify(sidebar, null, 2), 'utf-8')
  console.log('Written: .vitepress/sidebar.json')
}

// Property extractors
function extractTitle(prop: any): string | null {
  if (prop?.type === 'title' && prop.title?.length > 0) {
    return prop.title.map((t: any) => t.plain_text).join('')
  }
  return null
}

function extractSelect(prop: any): string | null {
  if (prop?.type === 'select' && prop.select) {
    return prop.select.name
  }
  return null
}

function extractRichText(prop: any): string | null {
  if (prop?.type === 'rich_text' && prop.rich_text?.length > 0) {
    return prop.rich_text.map((t: any) => t.plain_text).join('')
  }
  return null
}

function extractNumber(prop: any): number {
  if (prop?.type === 'number' && prop.number !== null) {
    return prop.number
  }
  return 0
}

main().catch(err => {
  console.error('Sync failed:', err)
  process.exit(1)
})
