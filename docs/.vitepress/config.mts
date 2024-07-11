/** @format */

import { defineConfig } from "vitepress";
import { head, nav, sidebar } from "./configs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "lewis'notes",
  description: "个人技术知识库，记录 & 分享个人碎片化、结构化、体系化的技术知识内容。",
  head,
  base: '/',
  outDir: 'dev-ops/nginx/html',
  
  themeConfig: {
    i18nRouting: false,
    logo: "/logo.svg",

     nav,
    sidebar,

    // 右侧大纲配置
    outline: {
      level: "deep",
      label: "目录",
    },

    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/Lewis798" },
      { icon: 'discord', link: 'https://discord.com/channels/@me' },
    ],
    
    // 页脚配置
    footer: {
      message: "黔ICP备2023014830号-1",
      copyright: "Copyright © 2024-present Lewis",
    },

    // 最后更新配置
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    // 文档导航配置
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    // 其他 UI 文本配置
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    // 自定义配置
    visitor: {
      badgeId: "wakeu.top",
    },

    // 搜索配置
    search: {
      provider: "algolia",
      options: {
        appId: "XY1TMC7YO1",
        apiKey: "56d6e3b050c7042653adc2232ec221b8",
        indexName: "wakeu",
        placeholder: "请输入关键词",
      },
    },
  },
});
