import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { hopeTheme } from "vuepress-theme-hope";

const SITE_URL = "https://measix-pilot.weero.net";
const SITE_DESCRIPTION =
  "Measix Pilot（小睿助手）— 隐私可控的纯本地 Android AI 客户端。数据不出设备，支持 MCP 协议连接外部工具、子助手分工协作、Linux 工作空间、文生图、折叠屏适配，让 AI 真正成为你的移动伙伴。";
const SITE_KEYWORDS =
  "Measix Pilot,小睿助手,Android AI客户端,本地AI,隐私可控,MCP协议,AI助手,子助手,Linux工作空间,文生图,折叠屏,平板适配,OpenAI,Gemini,Claude,DeepSeek,开源,AGPL";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "Measix Pilot",
  subtitle: "小睿助手",
  description: SITE_DESCRIPTION,

  // SEO head 标签
  head: [
    // OpenGraph
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "Measix Pilot" }],
    [
      "meta",
      {
        property: "og:title",
        content: "Measix Pilot — 隐私可控的纯本地 Android AI 客户端",
      },
    ],
    ["meta", { property: "og:description", content: SITE_DESCRIPTION }],
    ["meta", { property: "og:url", content: SITE_URL }],
    [
      "meta",
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
    ],
    ["meta", { property: "og:locale", content: "zh_CN" }],

    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:title",
        content: "Measix Pilot — 隐私可控的纯本地 Android AI 客户端",
      },
    ],
    ["meta", { name: "twitter:description", content: SITE_DESCRIPTION }],
    [
      "meta",
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],

    // 关键词
    ["meta", { name: "keywords", content: SITE_KEYWORDS }],

    // 作者
    ["meta", { name: "author", content: "Measix Pilot" }],

    // 结构化数据 - SoftwareApplication
    [
      "script",
      { type: "application/ld+json" },
      JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Measix Pilot",
        alternateName: "小睿助手",
        applicationCategory: "UtilitiesApplication",
        operatingSystem: "Android",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        downloadUrl:
          "https://github.com/topabomb/rikkahub_mcp/releases/latest",
        author: {
          "@type": "Person",
          name: "topabomb",
          url: "https://github.com/topabomb",
        },
        license: "https://www.gnu.org/licenses/agpl-3.0.html",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        softwareVersion: "0.0.16",
        datePublished: "2026-08-13",
        featureList: [
          "隐私可控的纯本地客户端",
          "MCP 协议集成",
          "子助手协同与委托",
          "Linux 工作空间",
          "文生图",
          "折叠屏平板手机全适配",
          "多模型对话",
          "工具调用与审批",
        ],
      }),
    ],
  ],

  bundler: viteBundler(),

  theme: hopeTheme({
    logo: "/logo.svg",
    favicon: "/logo.svg",

    themeColor: {
      blue: "#5b8def",
      purple: "#7c3aed",
      red: "#ef4444",
      orange: "#f97316",
      yellow: "#eab308",
      green: "#22c55e",
      cyan: "#06b6d4",
    },

    repo: "topabomb/rikkahub_mcp",
    repoLabel: "GitHub",

    navbar: [
      { text: "首页", link: "/" },
      { text: "功能特性", link: "/features/" },
      { text: "下载", link: "/download/" },
      {
        text: "使用指南",
        prefix: "/guide/",
        children: [
          { text: "快速开始", link: "/guide/getting-started.md" },
          { text: "配置服务商", link: "/guide/providers.md" },
          { text: "MCP 工具", link: "/guide/mcp.md" },
          { text: "工作空间", link: "/guide/workspace.md" },
          { text: "备份同步", link: "/guide/backup.md" },
        ],
      },
      { text: "更新日志", link: "/changelog/" },
      { text: "关于", link: "/about/" },
    ],

    sidebar: {
      "/features/": [
        {
          text: "功能特性",
          icon: "lightbulb",
          prefix: "/features/",
          children: [
            { text: "概览", link: "", icon: "lightbulb" },
            { text: "隐私可控", link: "privacy.md", icon: "shield-halved" },
            { text: "多模型对话", link: "providers.md", icon: "comments" },
            { text: "MCP 协议", link: "mcp.md", icon: "plug" },
            { text: "子助手协同", link: "sub-assistant.md", icon: "users-gear" },
            { text: "工具调用与审批", link: "tool-calling.md", icon: "shield-check" },
            { text: "Linux 工作空间", link: "workspace.md", icon: "box" },
            { text: "消息与渲染", link: "rendering.md", icon: "markdown" },
            { text: "多模态输入", link: "multimodal.md", icon: "image" },
            { text: "全文搜索", link: "search.md", icon: "search" },
            { text: "备份与同步", link: "backup.md", icon: "cloud" },
            { text: "文生图", link: "image-gen.md", icon: "wand-magic-sparkles" },
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
            { text: "配置服务商", link: "providers.md", icon: "comments" },
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

    displayLevel: 3,
    blog: false,
    copyright: "© 2026 Measix Pilot · AGPL-3.0",
    footer:
      "基于 <a href='https://github.com/rikkahub/rikkahub'>RikkaHub</a> fork · 由 <a href='https://theme-hope.vuejs.press/'>VuePress Theme Hope</a> 驱动",
    displayFooter: true,
    pageInfo: ["Author", "Date", "ReadingTime", "PageView"],

    search: {
      type: "minisearch",
      maxSuggestions: 10,
    },

    encrypt: false,
    comment: false,
    pwa: false,
    fullscreen: true,
    backToTop: true,
    readingProgress: true,
    toc: true,

    // SEO 配置
    seo: {
      name: "Measix Pilot",
      description: SITE_DESCRIPTION,
      keywords: SITE_KEYWORDS,
      organization: false,
      person: {
        name: "topabomb",
        url: "https://github.com/topabomb",
      },
    },

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
      sitemap: {
        hostname: SITE_URL,
        changefreq: "weekly",
        priority: 0.8,
        exclude: ["/404.html"],
      },
    },
  }),

  dest: "dist",
});
