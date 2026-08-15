---
title: 关于 Measix Pilot
icon: circle-info
author: Measix Pilot
date: 2026-08-15
category: 关于
---

# 关于 Measix Pilot

> Measix Pilot（小睿助手）— 基于 [RikkaHub](https://github.com/rikkahub/rikkahub) fork 的原生 Android LLM 聊天客户端。

## 项目背景

Measix Pilot 由 [topabomb](https://github.com/topabomb) 创建，是 [RikkaHub](https://github.com/rikkahub/rikkahub)（原作者 [re-ovo](https://github.com/re-ovo)）的 fork。

- **Fork 基线**：RikkaHub v2.3.1（versionCode 164），提交 `5b9be301`
- **Fork 日期**：2026-06-18

## Fork 精简方向

相比原项目 RikkaHub，Measix Pilot 做了以下精简调整：

- **移除** Firebase、Retrofit、Web 服务器模块
- **移除** 酒馆角色卡导入、Lorebook、翻译功能
- **精简** 预设 Provider（18 → 4）
- **精简** 搜索引擎（17 → 4）
- **许可证** 同步上游变更为纯 AGPL-3.0

## 上游同步策略

Measix Pilot 持续跟踪上游 RikkaHub 的提交，并按以下原则选择性同步：

- ✅ **引入**：bug 修复、本地工具优化、UI/UX 改进、新模型适配、安全修复
- ⚠️ **按需引入**：测试用例、依赖更新、持久化变更
- ❌ **跳过**：与 Fork 精简方向冲突的改动（新 Provider、赞助商、新 TTS/搜索引擎）

完整的同步记录详见 [上游同步文档](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/dev/upstream-sync.md)。

## 技术栈

| 类别 | 技术 |
|------|------|
| 语言 | Kotlin |
| UI | Jetpack Compose + Material Expressive (M3) + Navigation 3 |
| DI | Koin |
| 网络 | OkHttp + Ktor Client |
| 序列化 | kotlinx.serialization |
| 数据库 | Room |
| 异步 | Coroutines + Flow |
| 图片 | Coil |

## 许可证

[AGPL-3.0](https://github.com/topabomb/rikkahub_mcp/blob/main/LICENSE)

## 链接

- **GitHub 仓库**：[topabomb/rikkahub_mcp](https://github.com/topabomb/rikkahub_mcp)
- **上游项目**：[rikkahub/rikkahub](https://github.com/rikkahub/rikkahub)
- **本网站仓库**：[measix-pilot-website](https://github.com/topabomb/measix-pilot-website)

## 致谢

- 感谢 [re-ovo](https://github.com/re-ovo) 创建了优秀的 RikkaHub 项目
- 感谢所有贡献者、测试者和用户的支持
- 感谢 [VuePress Theme Hope](https://theme-hope.vuejs.press/) 提供的文档主题
