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
| 架构 | arm64-v8a、x86_64（另提供 universal APK） |
| 存储 | 至少 200MB 可用空间 |
| 内存 | 建议 4GB 以上 |

arm64-v8a 适用于常见 ARM64 手机与平板，x86_64 适用于相应设备或模拟器；不确定时可选择 universal。本文与网站介绍随 0.0.20 更新，具体能力以安装版本的发行说明为准。

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
- 安装及覆盖升级由 Android 校验 APK 签名

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
./gradlew assembleDebug --no-parallel --max-workers=1
```

Windows PowerShell 使用 `.\gradlew.bat assembleDebug --no-parallel --max-workers=1`。正式分发需要自己的 Release 签名配置；未签名的构建不能作为官方发行包。

**环境要求**：

- 支持仓库锁定 AGP 的 Android Studio
- JDK 17+
- Android SDK 37

::: tip 许可证
Measix Pilot 基于 [AGPL-3.0](https://github.com/topabomb/rikkahub_mcp/blob/master/LICENSE) 许可证发布。自建构建和分发请遵守许可证条款。
:::
