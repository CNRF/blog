import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '编程语言',
    items: [
      {
        text: '后端',
        items: [{ text: 'Java', link: '/java/basic/01.introduction' }],
      },
    ],
    activeMatch: '^/java',
  },
  {
    text: 'linux',
    items: [
      {
        text: 'corn',
        link: '/linux/corn/01.corn安装及使用',
        activeMatch: '^/linux/corn',
      },
      {
        text: 'docker',
        link: '/linux/docker/01.docker安装',
        activeMatch: '^/linux/docker',
      },
    ],
    activeMatch: '^/linux',
  },
  {
    text: 'workflow',
    items: [
      {
        text: 'git',
        link: '/workflow/git/01.git基本操作',
        activeMatch: '^/workflow/git',
      },
    ],
    activeMatch: '^/workflow',
  },
  { text: '实用网站', link: '/nav', activeMatch: '^/nav' },
]
