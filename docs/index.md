---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'the way of star'
  text: '星的路'
  tagline: 知识是进步的阶梯，争取每天都有知识点更新
  actions:
    - text: java物语
      link: /java/java基础/01.java基础
    - text: 前端宇宙
      link: /web/css/01.CSS理论知识
      theme: alt
features:
  - icon: 📖
    title: java后端相关
    details: 整理java后端相关知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /java/java基础/01.java基础
    linkText: java后端相关
  - icon: ✒
    title: 前端
    details: 整理前端相关知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /web/html/01.HTML标签-排序标签
    linkText: 前端
  - icon: 🌐
    title: 实用网站
    details: 个人收集的相关实用网站
    link: /nav
    linkText: 实用网站
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
