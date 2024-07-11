import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/logo.svg_128x128.ico' }],
  ['meta', { name: 'author', content: '刘易斯笔记' }],
  ['meta', { name: 'keywords', content: '刘易斯笔记, 知识库, 博客, lewis' }],

  ['meta', { name: 'HandheldFriendly', content: 'True' }],
  ['meta', { name: 'MobileOptimized', content: '320' }],
  ['meta', { name: 'theme-color', content: '#3c8772' }],
  // [
  //   'script',
  //   { src: isDevelopment ? '' : 'https://hm.baidu.com/hm.js?8092fab2f2adfc7938ba5b8885aef5b4' }
  // ]
]
//这里是百度统计代码