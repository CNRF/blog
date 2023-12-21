import { defineConfig } from 'vitepress'
import mdFootnote from 'markdown-it-footnote'
import mdTaskList from 'markdown-it-task-lists'
import {head, nav, set_sidebar } from './configs'
// @ts-ignore
const config = defineConfig({
  outDir: '../dist',
  base:  '/',
  head,
  title: '星的路',
  description: '笔记',
  lang: 'zh-CN',
  cleanUrls: true,
  // 是否忽略死链
  ignoreDeadLinks: true,
  // 最后更新于 开关
  lastUpdated: true,
  // markdown配置
  markdown: {
    math: true,
    lineNumbers: true,
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    // linkify: false,
    config: (md) => {
      md.use(mdFootnote)
      md.use(mdTaskList)
    },
  },
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/CNRF/blog/edit/master/docs/:path',
      text: '在GitHub上编辑此页',
    },
    logo: '/logo.png',
    lastUpdated: {
      text: '最近更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    langMenuLabel: '多语言',
    externalLinkIcon: true,
    // 显示层级
    outline: { level: 'deep', label: '当前页' },

    // 上一页下一页文本
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    nav,
    sidebar: {
      '/java/': { base: '/java/', items: set_sidebar('/docs/java/') },
      '/linux/': { base: '/linux/', items: set_sidebar('/docs/linux/') },
      '/workflow/': { base: '/workflow/', items: set_sidebar('/docs/workflow/') },
    },
    // 开启本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    // 配置详情页跳转位置
    socialLinks: [{ icon: 'github', link: 'https://github.com/CNRF' }],
    // 配置首页页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present mark',
    },
  },
})
export default config
