import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  // 站点配置
  base: "/",
  lang: "zh-CN",
  title: "Measix Pilot",
  subtitle: "小睿助手",
  description: "Measix Pilot（小睿助手）— 原生 Android LLM 聊天客户端，支持多 Provider 对话、MCP 协议、工具调用、工作空间沙箱等强大功能。",

  // 使用 Vite 打包器
  bundler: viteBundler(),

  // 主题配置
  theme: hopeTheme({
    // 主题图标
    logo: "/logo.svg",
    favicon: "/logo.svg",

    // 主题色（Measix 品牌紫蓝色）
    themeColor: {
      blue: "#5b8def",
      purple: "#7c3aed",
      red: "#ef4444",
      orange: "#f97316",
      yellow: "#eab308",
      green: "#22c55e",
      cyan: "#06b6d4",
    },

    // 仓库配置
    repo: "topabomb/rikkahub_mcp",
    repoLabel: "GitHub",

    // 导航栏
    navbar: [
      { text: "首页", link: "/" },
      { text: "功能特性", link: "/features/" },
      { text: "下载", link: "/download/" },
      {
        text: "使用指南",
        prefix: "/guide/",
        children: [
          { text: "快速开始", link: "/guide/getting-started.md" },
          { text: "配置 Provider", link: "/guide/providers.md" },
          { text: "MCP 工具", link: "/guide/mcp.md" },
          { text: "工作空间", link: "/guide/workspace.md" },
          { text: "备份同步", link: "/guide/backup.md" },
        ],
      },
      { text: "更新日志", link: "/changelog/" },
      { text: "关于", link: "/about/" },
    ],

    // 侧边栏
    sidebar: {
      "/features/": [
        {
          text: "功能特性",
          icon: "lightbulb",
          prefix: "/features/",
          children: [
            { text: "概览", link: "", icon: "lightbulb" },
            { text: "多 Provider 对话", link: "providers.md", icon: "comments" },
            { text: "MCP 协议", link: "mcp.md", icon: "plug" },
            { text: "工具调用与审批", link: "tool-calling.md", icon: "shield-check" },
            { text: "工作空间沙箱", link: "workspace.md", icon: "box" },
            { text: "消息与渲染", link: "rendering.md", icon: "markdown" },
            { text: "多模态输入", link: "multimodal.md", icon: "image" },
            { text: "全文搜索", link: "search.md", icon: "search" },
            { text: "备份与同步", link: "backup.md", icon: "cloud" },
            { text: "AI 生图", link: "image-gen.md", icon: "wand-magic-sparkles" },
            { text: "Skills 系统", link: "skills.md", icon: "puzzle-piece" },
            { text: "语音合成", link: "tts.md", icon: "volume-high" },
            { text: "自适应 UI", link: "adaptive-ui.md", icon: "mobile-screen" },
          ],
        },
      ],
      "/guide/": [
        {
          text: "使用指南",
          icon: "book",
          prefix: "/guide/",
          children: [
            { text: "快速开始", link: "getting-started.md", icon: "play" },
            { text: "配置 Provider", link: "providers.md", icon: "comments" },
            { text: "MCP 工具", link: "mcp.md", icon: "plug" },
            { text: "工作空间", link: "workspace.md", icon: "box" },
            { text: "备份同步", link: "backup.md", icon: "cloud" },
          ],
        },
      ],
      "/about/": false,
      "/changelog/": false,
      "/download/": false,
    },

    // 主题布局
    displayLevel: 3,

    // 博客配置（关闭，这是产品站点）
    blog: false,

    // 版权信息
    copyright: "© 2026 Measix Pilot · AGPL-3.0",

    // 页脚
    footer: "基于 <a href='https://github.com/rikkahub/rikkahub'>RikkaHub</a> fork · 由 <a href='https://theme-hope.vuejs.press/'>VuePress Theme Hope</a> 驱动",
    displayFooter: true,

    // 页面默认设置
    pageInfo: ["Author", "Date", "ReadingTime", "PageView"],

    // 搜索
    search: {
      type: "minisearch",
      maxSuggestions: 10,
    },

    // 加密功能（关闭）
    encrypt: false,

    // 评论（关闭）
    comment: false,

    // PWA
    pwa: false,

    // 全屏
    fullscreen: true,

    // 返回顶部
    backToTop: true,

    // 阅读进度条
    readingProgress: true,

    // TOC
    toc: true,

    // 插件配置
    plugins: {
      mdEnhance: {
        align: true,
        attrs: true,
        footnote: true,
        mark: true,
        sub: true,
        sup: true,
        tasklist: true,
        vPre: true,
      },
      markdownMath: {
        type: "katex",
      },
    },
  }),

  // 构建输出目录
  dest: "dist",
});
