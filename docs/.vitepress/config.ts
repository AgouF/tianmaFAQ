import { defineConfig } from 'vitepress'
import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

// Load auto-generated sidebar from sync script, fallback to default
function loadSidebar() {
  const sidebarPath = resolve(__dirname, 'sidebar.json')
  if (existsSync(sidebarPath)) {
    const data = JSON.parse(readFileSync(sidebarPath, 'utf-8'))
    if (Array.isArray(data) && data.length > 0) return data
  }
  // Default sidebar for development
  return [
    {
      text: '👤 账户相关',
      collapsed: true,
      items: [
        { text: '如何重置密码', link: '/account/reset-password' },
        { text: '如何更换绑定邮箱', link: '/account/change-email' }
      ]
    },
    {
      text: '💳 支付相关',
      collapsed: true,
      items: [
        { text: '账单周期说明', link: '/payment/billing-cycle' },
        { text: '如何申请退款', link: '/payment/refund' }
      ]
    },
    {
      text: '🔧 技术支持',
      collapsed: true,
      items: [
        { text: 'API 接入指南', link: '/technical/api-guide' }
      ]
    },
    {
      text: '📦 产品功能',
      collapsed: true,
      items: [
        { text: '功能总览', link: '/product/feature-overview' }
      ]
    },
    {
      text: '📋 政策条款',
      collapsed: true,
      items: [
        { text: '服务条款', link: '/policy/terms-of-service' }
      ]
    },
    {
      text: '💬 联系我们',
      collapsed: true,
      items: [
        { text: '联系方式', link: '/contact' }
      ]
    }
  ]
}

export default defineConfig({
  title: 'FAQ',
  description: '常见问题解答',
  lang: 'zh-CN',

  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: '首页', link: '/' },
    ],

    sidebar: loadSidebar(),

    search: {
      provider: 'local',
      options: {
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
    }
  }
})
