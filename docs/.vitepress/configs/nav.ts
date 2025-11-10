import type { DefaultTheme } from 'vitepress'

// @ts-ignore
export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '面试',
    link: '/interview/面试',
    activeMatch: '^/interview',
  },
  {
    text: '后端',
    items: [
      {
        text: 'java',
        items: [
          {
            text: 'java基础',
            link: '/java/01.java基础/01.基础知识',
            activeMatch: '^/java/01.java基础',
          },
          {
            text: '多线程和高并发',
            link: '/java/02.多线程和高并发/01.理论基础',
            activeMatch: '^/linux/05.spring',
          },
          {
            text: 'JDK集合源码',
            link: '/java/03.JDK集合源码/01.Collection类关系图',
            activeMatch: '^/linux/03.JDK集合源码',
          },
          {
            text: 'JVM',
            link: '/java/04.JVM/01.JVM相关知识体系详解.md',
            activeMatch: '^/linux/04.JVM',
          },
          {
            text: 'spring',
            link: '/java/05.spring/01.源码编译',
            activeMatch: '^/linux/05.spring',
          },
        ],
        activeMatch: '^/java',
      },
      {
        text: 'python',
        items: [
          {
            text: 'python基础',
            link: '/python/01.python基础/01.基础类型',
            activeMatch: '^/python/01.python基础',
          },
        ],
        activeMatch: '^/python',
      },
    ],
  },
  {
    text: '前端',
    items: [
      {
        text: '基础',
        items: [
          {
            text: 'HTML',
            link: '/web/01.html/01.HTML标签-排序标签',
            activeMatch: '^/web/01.html',
          },
          {
            text: 'CSS',
            link: '/web/02.css/01.CSS理论知识.md',
            activeMatch: '^/web/02.css',
          },
          {
            text: 'JavaScript',
            link: '/web/03.javascript/01.js基本语法.md',
            activeMatch: '^/web/03.javascript',
          },
          {
            text: 'ES6',
            link: '/web/04.ES6/01.let和const.md',
            activeMatch: '^/web/04.ES6',
          },
        ],
        activeMatch: '^/web',
      },
      {
        text: 'vue',
        items: [
          {
            text: '基础',
            link: '/vue/01.基础/01.MVVM模式.md',
            activeMatch: '^/vue/01.MVVM模式',
          },
        ],
        activeMatch: '^/vue',
      },
    ],
    activeMatch: '^/(web|vue)',
  },
  {
    text: '数据库',
    items: [
      {
        text: 'MySQL',
        link: '/database/01.mysql/01.MySQL的安装与卸载.md',
        activeMatch: '^/database/01.mysql/01.MySQL的安装与卸载',
      },
    ],
    activeMatch: '^/database',
  },
  {
    text: '算法',
    link: '/algorithm/0001.冒泡排序',
    activeMatch: '^/algorithm   /',
  },
  {
    text: '系统相关',
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
            link: '/linux/01.corn/01.corn安装及使用',
            activeMatch: '^/linux/01.corn',
          },
          {
            text: 'docker',
            link: '/linux/02.docker/01.docker安装',
            activeMatch: '^/linux/02.docker',
          },
        ],
        activeMatch: '^/linux',
      },
    ],
    activeMatch: '^/(linux|windows)',
  },
  {
    text: 'workflow',
    items: [
      {
        text: 'git',
        link: '/workflow/01.git/01.git基本操作',
        activeMatch: '^/workflow/01.git',
      },
    ],
    activeMatch: '^/workflow',
  },
  {
    text: '设计模式',
    link: '/designPatterns/01.设计模式的分类',
    activeMatch: '^/designPatterns/',
  },
  { text: '实用网站', link: '/nav', activeMatch: '^/nav' },
]
