import { defineConfig } from 'vitepress'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

// Load auto-generated sidebar from sync script
function loadSidebar(filename = 'sidebar.json') {
  const sidebarPath = resolve(__dirname, filename)
  if (existsSync(sidebarPath)) {
    const data = JSON.parse(readFileSync(sidebarPath, 'utf-8'))
    if (Array.isArray(data) && data.length > 0) return data
  }
  return []
}

export default defineConfig({
  title: 'FAQ',
  titleTemplate: ':title - 天马品牌',
  description: '天马品牌常见问题解答 - 快速找到您需要的答案',

  cleanUrls: true,
  lastUpdated: true,

  sitemap: {
    hostname: 'https://tianma.xin',
    transformItems(items) {
      return items.map(item => ({
        ...item,
        changefreq: 'weekly',
        priority: item.url.includes('keywords/') ? 0.4 :
                  item.url === '' || item.url === 'en/' ? 1.0 :
                  item.url.includes('search') ? 0.6 : 0.8,
      }))
    }
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'FAQ',
      titleTemplate: ':title - Tianma Brand',
      description: 'Tianma Brand FAQ - Find answers quickly',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: loadSidebar('sidebar-en.json'),
        search: {
          provider: 'local',
          options: {
            translations: {
              button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear search',
                footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
              }
            }
          }
        },
        editLink: {
          pattern: 'https://github.com/AgouF/tianmaFAQ/edit/main/docs/:path',
          text: 'Edit this page on GitHub'
        },
        lastUpdated: {
          text: 'Last updated',
        },
        outline: {
          label: 'On this page'
        },
        docFooter: {
          prev: 'Previous',
          next: 'Next'
        },
        footer: {
          message: 'Released under the MIT License',
          copyright: 'Copyright © 2026-present <a href="https://t.me/tianma" target="_blank">@tianma</a>'
        }
      }
    }
  },

  markdown: {
    image: { lazyLoading: true },
    math: true,
    container: undefined,
  },

  transformPageData(pageData) {
    if (pageData.frontmatter.lastUpdated) {
      pageData.lastUpdated = pageData.frontmatter.lastUpdated
    }
  },

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '天马品牌 FAQ' }],
    ['meta', { property: 'og:image', content: 'https://tianma.xin/logo.png' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:image', content: 'https://tianma.xin/logo.png' }],
  ],

  transformHead({ pageData }) {
    const head: any[] = []
    const title = pageData.frontmatter.title || pageData.title
    const description = pageData.frontmatter.description || pageData.description || '天马品牌常见问题解答'
    const pagePath = pageData.relativePath.replace(/\.md$/, '').replace(/\/index$/, '/')
    const url = `https://tianma.xin/${pagePath}`

    // Canonical URL
    head.push(['link', { rel: 'canonical', href: url }])

    // Open Graph
    head.push(['meta', { property: 'og:title', content: title }])
    head.push(['meta', { property: 'og:description', content: description }])
    head.push(['meta', { property: 'og:url', content: url }])
    head.push(['meta', { name: 'twitter:title', content: title }])
    head.push(['meta', { name: 'twitter:description', content: description }])

    // Structured data for article pages (not homepage, not en/)
    if (title && pageData.relativePath !== 'index.md' && !pageData.relativePath.endsWith('/index.md')) {
      const isEn = pageData.relativePath.startsWith('en/')

      // FAQ Schema
      if (!isEn) {
        const faqSchema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [{
            '@type': 'Question',
            'name': title,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': description
            }
          }]
        }
        head.push(['script', { type: 'application/ld+json' }, JSON.stringify(faqSchema)])
      }

      // Breadcrumb Schema
      const parts = pagePath.split('/').filter(Boolean)
      if (parts.length > 0) {
        const breadcrumbItems = [
          { '@type': 'ListItem', position: 1, name: isEn ? 'Home' : '首页', item: `https://tianma.xin${isEn ? '/en' : ''}` }
        ]
        for (let i = 0; i < parts.length; i++) {
          const isLast = i === parts.length - 1
          const entry: any = {
            '@type': 'ListItem',
            position: i + 2,
            name: isLast ? title : decodeURIComponent(parts[i]),
          }
          if (!isLast) entry.item = `https://tianma.xin/${parts.slice(0, i + 1).join('/')}`
          breadcrumbItems.push(entry)
        }
        head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': breadcrumbItems
        })])
      }
    }

    return head
  },

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: loadSidebar(),

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const result: string[] = []
              const words = text.split(/[\s\-_]+/)
              for (const word of words) {
                const parts = word.split(/([\u4e00-\u9fff\u3400-\u4dbf])/)
                for (const part of parts) {
                  const trimmed = part.trim().toLowerCase()
                  if (!trimmed) continue
                  result.push(trimmed)
                  if (/^[a-z0-9]{3,}$/.test(trimmed)) {
                    for (let i = 1; i < trimmed.length - 1; i++) {
                      result.push(trimmed.slice(i))
                    }
                  }
                }
              }
              return result
            }
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2 }
          }
        },
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除搜索条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    editLink: {
      pattern: 'https://github.com/AgouF/tianmaFAQ/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'long',
        timeStyle: 'short'
      }
    },

    outline: {
      label: '页面导航'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2026-至今 <a href="https://t.me/tianma" target="_blank">@tianma</a>'
    }
  }
})
