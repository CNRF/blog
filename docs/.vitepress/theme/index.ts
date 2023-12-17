// https://vitepress.dev/guide/custom-theme
import { h, watch } from 'vue'
import type {EnhanceAppContext, Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import {useData} from "vitepress";
// @ts-ignore
import MNavLinks from "./components/MNavLinks.vue";
import './styles/index.scss'

if (typeof window !== 'undefined') {
  /* 注销 PWA 服务 */
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister()
      }
    })
  }

  /* 删除浏览器中的缓存 */
  if ('caches' in window) {
    caches.keys().then(function (keyList) {
      return Promise.all(
          keyList.map(function (key) {
            return caches.delete(key)
          })
      )
    })
  }
}
let homePageStyle: HTMLStyleElement | undefined

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()
    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(DefaultTheme.Layout, props, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    app.component('MNavLinks', MNavLinks)
    app.provide('DEV', process.env.NODE_ENV === 'development')
    if (typeof window !== 'undefined') {
      watch(
          () => router.route.data.relativePath,
          () => updateHomePageStyle(location.pathname === '/'),
          { immediate: true }
      )
    }
  }
} satisfies Theme


function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }

  if (typeof window !== 'undefined') {
    // detect browser, add to class for conditional styling
    const browser = navigator.userAgent.toLowerCase()
    if (browser.includes('chrome')) {
      document.documentElement.classList.add('browser-chrome')
    } else if (browser.includes('firefox')) {
      document.documentElement.classList.add('browser-firefox')
    } else if (browser.includes('safari')) {
      document.documentElement.classList.add('browser-safari')
    }
  }
}