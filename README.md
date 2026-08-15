# Measix Pilot 官方网站

> Measix Pilot（小睿助手）官方网站，基于 [VuePress Theme Hope](https://theme-hope.vuejs.press/) 构建。

## 简介

本仓库是 Measix Pilot 的官方网站，提供：

- 🏠 **产品首页**：功能概览和下载入口
- ✨ **功能特性**：详细的功能介绍和说明
- 📖 **使用指南**：快速上手和进阶配置
- 📥 **下载页面**：APK 下载和系统要求
- 📝 **更新日志**：版本迭代记录
- 🔗 **双仓库联动**：与 [rikkahub_mcp](https://github.com/topabomb/rikkahub_mcp) 主项目的 Release 同步

## 技术栈

- [VuePress 2](https://vuepress.vuejs.press/) - 静态站点生成器
- [VuePress Theme Hope](https://theme-hope.vuejs.press/) - 主题
- [Vite](https://vitejs.dev/) - 打包器
- [pnpm](https://pnpm.io/) - 包管理器

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 清理缓存
pnpm clean
```

构建输出目录为 `dist/`。

## 部署

### Vercel（主部署）

本网站部署在 [Vercel](https://vercel.com/) 上：

- 构建命令：`pnpm build`
- 输出目录：`dist`
- Node 版本：22

### GitHub Pages（备用）

本仓库也配置了 GitHub Actions 工作流，可作为备用部署方式。

## 双仓库联动

本网站与 `rikkahub_mcp` 主项目联动：

1. 主项目发布 Release 时，通过 `repository_dispatch` 通知本仓库
2. 本仓库自动更新 `version.json` 和更新日志
3. 重新构建并部署到 Vercel
4. 应用内更新检查从本网站获取版本信息

详见 [双仓库联动机制](dev-docs/repo-sync.md)。

## 项目结构

```
measix-pilot-website/
├── docs/
│   ├── .vuepress/
│   │   ├── config.ts          # VuePress 配置
│   │   └── public/
│   │       ├── logo.svg       # Logo
│   │       └── version.json   # 版本数据（应用内更新检查源）
│   ├── about/
│   │   └── index.md            # 关于
│   ├── changelog/
│   │   └── index.md           # 更新日志
│   ├── download/
│   │   └── index.md           # 下载页
│   ├── features/
│   │   ├── index.md           # 功能概览
│   │   ├── providers.md       # 多 Provider 对话
│   │   ├── mcp.md            # MCP 协议
│   │   ├── tool-calling.md    # 工具调用与审批
│   │   ├── workspace.md       # 工作空间沙箱
│   │   ├── rendering.md       # 消息渲染引擎
│   │   ├── multimodal.md     # 多模态输入
│   │   ├── search.md         # 全文搜索
│   │   ├── backup.md         # 备份与同步
│   │   ├── image-gen.md      # AI 生图
│   │   ├── skills.md         # Skills 系统
│   │   ├── tts.md            # 语音合成
│   │   └── adaptive-ui.md    # 自适应 UI
│   ├── guide/
│   │   ├── getting-started.md # 快速开始
│   │   ├── providers.md      # 配置 Provider
│   │   ├── mcp.md           # MCP 工具配置
│   │   ├── workspace.md     # 工作空间使用
│   │   └── backup.md        # 备份与同步配置
│   └── index.md              # 首页
├── dev-docs/
│   └── repo-sync.md           # 双仓库联动机制（开发文档，不参与网站构建）
├── .github/workflows/
│   ├── sync-from-release.yml  # Release 同步工作流
│   └── deploy-pages.yml      # GitHub Pages 部署工作流
├── package.json
├── vercel.json
└── README.md
```

## 许可证

[AGPL-3.0](LICENSE)
