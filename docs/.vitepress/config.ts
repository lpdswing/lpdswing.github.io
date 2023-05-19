import { getThemeConfig, defineConfig } from '@sugarat/theme/node'
import { nav } from './config/nav'
import { head } from './config/head'

const blogTheme = getThemeConfig({
  // 文章默认作者
  author: 'lpdswing',
  tabs: true,
  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top'
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTI2NzY1Ng==674995267656',
      url: 'https://vitepress.vuejs.org/'
    }
  ],
  recommend: {
    showSelf: true
  },
  // 开启离线的全文搜索支持（如构建报错可注释下面的配置再次尝试）
  search: 'pagefind',
  comment: {
    repo: 'lpdswing/lpdswing.github.io',
    repoId: 'MDEwOlJlcG9zaXRvcnkxMjc0MDAxNDg=',
    category: 'Announcements',
    categoryId: 'DIC_kwDOB5f41M4CWkfm'
  },
  authorList: [
    {
      nickname: 'lpdswing',
      url: 'https://lpdswing.github.io/about.html',
      des: '用你的双手改变世界。'
    }
  ],
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇公众号👇' },
      {
        type: 'image',
        src: 'https://cdn.jsdelivr.net/gh/lpdswing/oss@main/202305181102485.jpeg'
      },
      {
        type: 'text',
        content: '欢迎大家私信交流'
      },
      {
        type: 'button',
        content: '博客',
        link: 'https://lpdswing.github.io/'
      }
    ],
    duration: -1,
  }
})

export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  title: "lpdswing的博客",
  description: 'lpdswing的个人blog，记录学习过程。',
  head: head,
  vite: {
    optimizeDeps: {
      include: ['element-plus'],
      exclude: ['@sugarat/theme']
    }
  },
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '上次更新于',
    footer: {
      message: 'Released under the Apache License',
      copyright:
        'Copyright <a target="_blank" href="https://lpdswing.github.io/"> © 2017-present @lpdswing</a>'
    },
    logo: '/logo.png',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lpdswing/lpdswing.github.io'
      },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>'
        },
        link: 'https://gitee.com/lpdswing'
      },
    ],
    nav: nav,
  }
})
