---
title: 双仓库联动机制
icon: link
author: Measix Pilot
date: 2026-08-15
category: 开发文档
---

# 双仓库联动机制

> 本文档描述 `rikkahub_mcp`（主项目）与 `measix-pilot-website`（本网站项目）两个仓库之间的联动机制，包括 Release 触发网站自动更新、应用内更新检查从本网站获取版本信息等。

## 仓库关系

| 仓库 | URL | 角色 |
|------|-----|------|
| `rikkahub_mcp` | [topabomb/rikkahub_mcp](https://github.com/topabomb/rikkahub_mcp) | Android 客户端主项目（APK 源码） |
| `measix-pilot-website` | [topabomb/measix-pilot-website](https://github.com/topabomb/measix-pilot-website) | 官方网站（本项目） |

### 职责划分

- **`rikkahub_mcp`**：构建并发布 APK Release，包含版本号、更新日志、APK 下载链接
- **`measix-pilot-website`**：作为官方网站，提供产品介绍、下载页、更新日志展示，并作为应用内更新检查的数据源

## 联动架构

```
rikkahub_mcp 发布 Release
        │
        ▼
GitHub Release 事件（repository_dispatch / workflow_dispatch）
        │
        ▼
measix-pilot-website 接收更新信号
        │
        ├── 1. 拉取最新 Release 信息
        ├── 2. 更新版本数据文件 (version.json)
        ├── 3. 更新更新日志页面 (changelog)
        ├── 4. 重新构建网站
        ├── 5. 部署到 Vercel
        └── 6. 提交变更到 GitHub
```

## 联动实现

### 1. 版本数据文件

网站维护一个版本数据文件，供应用内更新检查使用：

**文件路径**：`docs/.vuepress/public/version.json`

```json
{
  "version": "0.0.15",
  "versionCode": 15,
  "url": "https://github.com/topabomb/rikkahub_mcp/releases/latest",
  "changelog": "修复和新增内容摘要...",
  "updatedAt": "2026-08-13"
}
```

应用内更新检查时，请求 `https://measix-pilot.vercel.app/version.json` 获取最新版本信息。

### 2. GitHub Actions 触发机制

#### 主项目（rikkahub_mcp）的 Release 工作流

当 `rikkahub_mcp` 创建新 Release 时，通过 `repository_dispatch` 事件通知网站仓库：

**rikkahub_mcp 的 Release 工作流**（`.github/workflows/release.yml` 中添加）：

```yaml
- name: Notify website repository
  run: |
    gh api repos/topabomb/measix-pilot-website/dispatches \
      -f event_type=app-release \
      -f client_payload[version]="${{ env.VERSION_NAME }}" \
      -f client_payload[versionCode]="${{ env.VERSION_CODE }}" \
      -f client_payload[changelog]="${{ env.CHANGELOG }}" \
      -f client_payload[releaseUrl]="${{ env.RELEASE_URL }}"
```

::: warning 权限要求
此步骤需要在 `rikkahub_mcp` 仓库的 GitHub Actions 中配置一个具有 `measix-pilot-website` 仓库写入权限的 Personal Access Token（PAT）。由于用户要求不修改 rikkahub_mcp 仓库，此步骤需要用户手动在 rikkahub_mcp 仓库中添加。
:::

#### 网站仓库（measix-pilot-website）的响应工作流

网站仓库配置 `repository_dispatch` 监听：

**`.github/workflows/sync-from-release.yml`**：

```yaml
name: Sync from App Release

on:
  repository_dispatch:
    types: [app-release]

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Update version.json
        run: |
          cat > docs/.vuepress/public/version.json << EOF
          {
            "version": "${{ github.event.client_payload.version }}",
            "versionCode": "${{ github.event.client_payload.versionCode }}",
            "url": "${{ github.event.client_payload.releaseUrl }}",
            "changelog": "${{ github.event.client_payload.changelog }}",
            "updatedAt": "$(date -u +%Y-%m-%d)"
          }
          EOF
      - name: Commit changes
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add docs/.vuepress/public/version.json
          git commit -m "chore: sync version to ${{ github.event.client_payload.version }}" || echo "No changes"
          git push
```

### 3. 手动触发同步

除了自动触发，网站仓库还支持手动触发同步：

```bash
gh workflow run sync-from-release.yml \
  -f version=0.0.15 \
  -f versionCode=15 \
  -f changelog="更新内容..." \
  -f releaseUrl="https://github.com/topabomb/rikkahub_mcp/releases/latest"
```

### 4. Vercel 自动部署

Vercel 配置为监听 GitHub `main` 分支的推送：

- 每次 `version.json` 或网站内容更新并提交
- Vercel 自动触发构建
- 构建命令：`pnpm build`
- 输出目录：`dist`
- 部署到生产环境

## 应用内更新检查

### 宽松版本排序

Measix Pilot 应用内更新检查使用宽松版本排序，兼容不同版本格式：

1. 应用请求 `https://measix-pilot.vercel.app/version.json`
2. 解析 JSON 获取 `version` 和 `versionCode`
3. 比较 `versionCode`（整数比较）
4. 如有新版本，展示更新日志和下载链接

### 下载委托

更新下载委托给系统下载管理器，确保：

- 后台下载
- 断点续传
- 下载完成后通知安装
- 签名验证

## 与上游同步文档的联动

`rikkahub_mcp` 的 [上游同步文档](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/dev/upstream-sync.md) 记录了每次同步的版本号对应关系。网站更新日志页面的版本号应与上游同步文档中记录的本地版本号一致。

### 版本号对应关系

| 维度 | 上游 RikkaHub | 本地 Measix Pilot | 网站 version.json |
|------|---------------|-------------------|--------------------|
| 版本名 | 2.4.6 | 0.0.15 | `"version": "0.0.15"` |
| versionCode | 173 | 15 | `"versionCode": 15` |

### 更新日志同步

网站的更新日志页面（`docs/changelog/index.md`）使用 Vue 组件 `ChangelogReleases.vue` **动态**从 GitHub Releases API 拉取数据，**无需手动维护**。每当 `rikkahub_mcp` 发布新 Release，页面会自动展示最新内容。

联动工作流只需更新 `version.json`（用于应用内更新检查），更新日志页面由前端组件实时获取 GitHub Releases 数据。

## 部署架构

```
                    GitHub
                   ┌─────────────────────────────────┐
                   │  rikkahub_mcp (主项目)         │
                   │  └── Release 事件              │
                   │      └── repository_dispatch    │
                   │          ↓                      │
                   │  measix-pilot-website (本项目) │
                   │  └── sync-from-release.yml     │
                   │      └── 更新 version.json     │
                   │      └── git push              │
                   └──────────┬──────────────────────┘
                              │
                              ▼
                          Vercel
                   ┌─────────────────────────────────┐
                   │  自动构建部署                    │
                   │  └── pnpm build                 │
                   │  └── 输出到 dist/               │
                   │  └── 部署到 measix-pilot.vercel.app │
                   └──────────┬──────────────────────┘
                              │
                              ▼
                    应用内更新检查
                   ┌─────────────────────────────────┐
                   │  Measix Pilot App               │
                   │  └── GET /version.json          │
                   │  └── 比较版本号                  │
                   │  └── 提示更新                    │
                   └─────────────────────────────────┘
```

## 配置清单

### 网站仓库（本项目）需要配置

1. **GitHub Actions**：`.github/workflows/sync-from-release.yml`（已包含）
2. **Vercel 项目**：连接到 GitHub 仓库，配置构建命令和输出目录
3. **`version.json`**：初始版本数据文件（已包含）

### 主项目（rikkahub_mcp）需要配置（用户手动操作）

::: warning 不修改主项目
根据用户要求，不修改 `rikkahub_mcp` 仓库的任何内容。以下为建议配置，用户可自行在主项目仓库中添加。
:::

1. **GitHub Secret**：添加 `WEBSITE_REPO_TOKEN`（具有 `measix-pilot-website` 仓库写入权限的 PAT）
2. **Release 工作流**：在 Release 工作流末尾添加 `repository_dispatch` 调用

## 维护说明

- **版本号一致性**：确保 `version.json` 中的版本号与 `upstream-sync.md` 中的本地版本号一致
- **更新日志同步**：每次主项目 Release 后，更新 `docs/changelog/index.md` 的内容
- **Vercel 部署状态**：定期检查 Vercel 部署状态，确保网站正常访问
- **PAT 有效性**：定期检查 PAT 是否过期，及时更新
