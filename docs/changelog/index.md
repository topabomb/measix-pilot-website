---
title: 更新日志
icon: clock-rotate-left
author: Measix Pilot
date: 2026-08-15
category: 更新
---

# 更新日志

> Measix Pilot 采用独立版本线，以下是主要版本迭代记录。完整的上游同步记录详见 [上游同步文档](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/dev/upstream-sync.md)。

## 版本线说明

Measix Pilot 的版本线与上游 RikkaHub 独立：

| 维度 | 上游 RikkaHub | 本地 Measix Pilot | 说明 |
|------|---------------|-------------------|------|
| 版本名 | 2.4.6 | 0.0.15 | 版本线独立 |
| versionCode | 173 | 15 | 独立递增 |
| DB 版本 | v24+ | v4 | 本地从 v1 重建 |

## 最新版本

### v0.0.15 (2026-08-13)

**新增**：

- 注册 qwen-3.8-max 模型
- 注册 MiMo v3 / v3 pro 模型
- Claude Sonnet 5 / Opus 5 支持，并接入本地 adaptive thinking
- muse-spark / muse-glimmer 模型支持
- 搜索选择改为 SearchMode 卡片式

**修复**：

- WebView onRelease 真正销毁，修复内存泄漏
- 内置搜索按 Provider 开门逻辑修复

### v0.0.12 (2026-08-03)

**重大更新**：

- **Kotlin 原生语法高亮**：纯 Kotlin 实现，支持 30+ 语言，替代 QuickJS + prism.js
- TTS 默认播放速度配置
- MCP 请求头值默认遮罩与显示/隐藏切换（隐私保护）
- workspace 支持 HEIC/HEIF/AVIF/ICO 图片格式
- Moonshot K2.5/K3 temperature 过滤修复

**构建优化**：

- convention plugin 共享 Android library 构建约束
- AGP 9 optimization DSL 精简 keep rules

### v0.0.11 (2026-07-28)

**许可证变更**：同步上游变更为纯 AGPL-3.0 许可证

**新增**：

- 极简白和 Claude 主题 + 网格布局
- 上下文限制改为阶梯式裁剪
- Kimi K3 / K2.6 模型适配
- 日历查询与创建工具
- SAF 支持复制/移动文件到 workspace

**修复**：

- 图片裁剪失败提示
- 消息模板时间戳
- 上下文消息数量限制移除
- 多个崩溃修复

### v0.0.10 (2026-07-16)

**新增**：

- 网络搜索开关改为每个助手独立存储
- 工作区文件管理支持文本编辑与图片/视频预览
- 支持一键清理聊天文件
- Kimi K3 模型定义
- 文件工具支持读取 bind mount 路径

**修复**：

- WebView 预览缓存到文件避免 TransactionTooLargeException 崩溃
- CustomJs 搜索 scrape 参数补全
- 工作区恢复备份后目录缺失标记 BROKEN
- folder sync 双向同步补录与孤儿清理

### v0.0.9 (2026-07-09)

**新增**：

- TTS 语气标记引导 + MiMo 接入
- TTS 不朗读括号内的内容
- 聊天头部模型名支持两行显示
- 聊天输入框键盘收起时增加底部呼吸间距

**修复**：

- 流式丢字修复
- MCP SSE 通知流重试耗尽不再触发整体重连

### v0.0.9 (2026-07-08)

**新增**：

- 化学公式渲染支持（mhchem + trust）
- GLM-5.2/HY3/LongCat-2.0 模型注册
- Qwen MAX/Doubao 2.x 模型检测
- TTS 引号扩展（直角引号）
- HEIF/HEIC 图片上传与裁剪支持

**修复**：

- mhchem \ce 化学公式渲染
- 工具结果图片按模型输入模态回传
- 中文弯引号匹配
- 状态栏沉浸修复

---

::: tip 完整记录
完整的上游同步记录和详细变更分析，请参阅 GitHub 仓库中的 [上游同步文档](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/dev/upstream-sync.md)。
:::
