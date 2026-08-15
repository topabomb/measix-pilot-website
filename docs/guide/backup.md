---
title: 备份与同步配置
icon: cloud
author: Measix Pilot
date: 2026-08-15
category: 使用指南
---

# 备份与同步配置

> 保护你的对话数据，配置自动备份到 WebDAV 或 S3。

## WebDAV 配置

1. 打开设置 → 备份与同步
2. 选择 WebDAV
3. 填入服务器地址、用户名、密码
4. 测试连接
5. 选择备份内容

::: tip 推荐服务
- 坚果云：国内访问速度快
- Nextcloud：自建私有云
- 其他支持 WebDAV 的网盘
:::

## S3 配置

1. 打开设置 → 备份与同步
2. 选择 S3
3. 填入 Endpoint、Access Key、Secret Key
4. 配置 Bucket 和 Region
5. 测试连接

::: warning COS Endpoint
使用腾讯云 COS 时，请确保 Endpoint 配置正确。Measix Pilot 已修复 S3/COS 下载丢数据问题。
:::

## 备份内容

| 内容 | 说明 |
|------|------|
| 对话历史 | 所有对话消息 |
| 助手配置 | 助手设置和提示词 |
| Provider 配置 | API Key 和服务配置 |
| MCP 配置 | MCP 服务器配置 |
| 工作空间 | 工作空间文件（可选） |

## 自动备份

- 支持定时自动备份
- 网络感知：仅在 Wi-Fi 下备份（可选）
- 前台恢复：打开应用时自动恢复

## 恢复数据

1. 在新设备安装 Measix Pilot
2. 配置相同的备份服务
3. 选择「恢复备份」
4. 等待恢复完成
5. 所有数据恢复到新设备
