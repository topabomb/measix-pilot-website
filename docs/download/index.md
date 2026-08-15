---
title: 下载 Measix Pilot
icon: download
author: Measix Pilot
date: 2026-08-15
category: 下载
---

# 下载 Measix Pilot

> Measix Pilot 目前处于早期开发阶段，欢迎体验最新版本。

## 下载渠道

### 📦 GitHub Releases

从 GitHub Releases 下载最新版本 APK：

[前往 GitHub Releases 下载](https://github.com/topabomb/rikkahub_mcp/releases){:target="_blank" .btn .btn--primary}

### 📋 系统要求

| 项目 | 要求 |
|------|------|
| 系统 | Android 8.0（API 26）及以上 |
| 架构 | arm64-v8a、armeabi-v7a、x86_64 |
| 存储 | 至少 200MB 可用空间 |
| 内存 | 建议 4GB 以上 |

## 安装方式

### 首次安装

1. 下载最新版 APK 文件
2. 允许「安装未知来源应用」
3. 点击安装
4. 打开应用，开始配置

### 更新安装

Measix Pilot 支持应用内更新检查：

- 自动检查新版本
- 宽松版本排序（兼容不同版本格式）
- 下载委托系统下载管理器
- 签名验证确保安全

::: warning 签名验证
所有官方发布版本均使用相同签名。请勿安装来源不明的 APK，以防安全风险。
:::

## 版本说明

Measix Pilot 采用独立版本线（`0.0.x`），与上游 RikkaHub 版本线（`2.x.x`）独立。详见 [更新日志](/changelog/)。

## 自建构建

如果你想自行编译，可以克隆源码：

```bash
git clone https://github.com/topabomb/rikkahub_mcp.git
cd rikkahub_mcp
./gradlew assembleRelease
```

**环境要求**：

- Android Studio（最新稳定版）
- JDK 17+
- Android SDK 37

::: tip 许可证
Measix Pilot 基于 [AGPL-3.0](https://github.com/topabomb/rikkahub_mcp/blob/main/LICENSE) 许可证发布。自建构建和分发请遵守许可证条款。
:::
