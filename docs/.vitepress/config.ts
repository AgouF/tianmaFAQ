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
  description: '天马品牌常见问题解答 - 快速找到您需要的答案',

  lastUpdated: true,

  sitemap: {
    hostname: 'https://tianma.xin',
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
    // Enable features useful for Notion content
    image: { lazyLoading: true },
    math: true,
    container: undefined, // Keep default tip/warning/danger/info containers
  },

  transformPageData(pageData) {
    // Use frontmatter lastUpdated (from Notion) if available
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
    const url = `https://tianma.xin/${pageData.relativePath.replace(/\.md$/, '.html')}`

    head.push(['meta', { property: 'og:title', content: title }])
    head.push(['meta', { property: 'og:description', content: description }])
    head.push(['meta', { property: 'og:url', content: url }])
    head.push(['meta', { name: 'twitter:title', content: title }])
    head.push(['meta', { name: 'twitter:description', content: description }])

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
                // Split CJK characters individually
                const parts = word.split(/([\u4e00-\u9fff\u3400-\u4dbf])/)
                for (const part of parts) {
                  const trimmed = part.trim().toLowerCase()
                  if (!trimmed) continue
                  result.push(trimmed)
                  // Generate suffixes for Latin words so "VPN" matches "XXVPN"
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
