# Measix Pilot 官方网站

Measix Pilot · 领航（小睿助手）的产品介绍、使用指南、下载和更新日志，基于 VuePress 2 / Theme Hope 构建。

## 开发与构建

使用 Node 22 与 pnpm 10：

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

生产输出目录为 `dist/`。主部署为 Vercel（`https://measix-pilot.weero.net`），GitHub Pages 为备用部署。

## 发行同步

1. Android 仓库通过正式 Release 工作流验证并发布签名 APK。
2. Release 工作流使用 `WEBSITE_SYNC_TOKEN` 向本仓库发送 `app-release` repository_dispatch。
3. `.github/workflows/sync-from-release.yml` 更新静态 `docs/.vuepress/public/version.json`、`docs/changelog/index.md` 与 `config.ts` 的版本及日期，再提交推送。
4. Vercel 构建部署后，核对线上 `/version.json` 的版本、versionCode、说明、APK 地址与大小；同时检查下载页、更新日志和首页。dispatch 成功不代表线上更新成功。
5. 同步工作流成功后，Pages 备用部署重新读取 `main`。它使用 `SITE_BASE=/measix-pilot-website/` 和 `SITE_HOSTNAME=https://topabomb.github.io` 构建；Vercel 默认使用根路径。两站都要核对版本与资源路径，不能依赖机器人提交再次触发 push 工作流。

本仓库当前没有动态版本 API 或客户端 Release 组件。不要手动维护第二份版本事实，也不要把旧的 Serverless 设计当作当前实现。

## 内容与素材

产品能力以 [Android 当前实现](https://github.com/topabomb/measix-pilot) 为准；发布时同步首页、功能入口、系统要求和企业使用边界。截图及图表来自 Android 仓库的 `docs/assets/readme/`，网站副本位于 `docs/.vuepress/public/pilot/`，来源信息由 Android 仓库维护。

真实接入材料、凭据、签名配置不进入网站或仓库。模拟业务数据须明确标注；本地预览不能代替线上部署验收。
