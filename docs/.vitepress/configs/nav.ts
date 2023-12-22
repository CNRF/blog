import type { DefaultTheme } from 'vitepress'

// @ts-ignore
export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '编程语言',
    items: [
      {
        text: 'java基础',
        link: '/java/base/01.基础知识',
        activeMatch: '^/java/base',
      },
      {
        text: 'spring',
        link: '/java/spring/01.源码编译',
        activeMatch: '^/linux/spring',
      },
    ],
    activeMatch: '^/java',
  },

    {
        text: '系统命令',
        items: [
            {
                text: 'windows',
                link: '/windows/01.windows操作系统查看端口占用',
                activeMatch: '^/windows',
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
            }
        ],
        activeMatch: '^/(linux|windows)',
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
