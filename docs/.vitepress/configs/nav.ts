/** @format */

import type { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.Config["nav"] = [
  { text: "首页", link: "/" },
  { text: '开发者导航', link: '/nav', activeMatch: '^/nav' },
  { text: "后端物语", link: "/posts/HTTP/HTTP-1" },
  { text: "算法进阶", link: "/algorithm/算法/动态规划" },
  { text: "项目总结", link: "/project/KG/KG-1.html" },
  {
    text: '高效编程',
    items: [
      { text: '提效工具', link: "/efficiency/software/windows效率神器" },
      {
        items: [
          { text: 'workflow', link: "/flow/terminal/toolkit命令行工具" },
        ]
      }
    ],
  },
  { text: "关于我", link: "/about-me.html" },
];
