---
title: 配置 Provider
icon: comments
author: Measix Pilot
date: 2026-08-15
category: 使用指南
---

# 配置 Provider

> Provider 是 AI 服务商的适配层。Measix Pilot 预置了四类主流 Provider，并支持通过兼容 API 接入更多服务。

## 预置 Provider

| Provider | 默认状态 | 说明 |
|----------|----------|------|
| OpenAI | 禁用 | GPT 系列、o 系列 |
| Gemini | 禁用 | Google Gemini 系列 |
| Claude | 禁用 | Anthropic Claude 系列 |
| DeepSeek | 禁用 | DeepSeek 系列 |

::: warning 首次启动
所有预设 Provider 均为禁用状态，需手动启用并配置 API Key。
:::

## 配置步骤

### 1. 启用 Provider

设置 → Provider 管理 → 选择 Provider → 启用开关

### 2. 填入 API Key

在 Provider 配置页面填入你的 API Key。API Key 仅存储在本地设备中。

### 3. 配置高级选项（可选）

- **Base URL**：使用代理或自建服务时修改
- **高级自定义 Headers / Body**：自定义请求头和请求体
- **请求头遮罩**：敏感值默认遮罩，需点击查看

### 4. 选择模型

在助手配置中选择该 Provider 对应的模型。

## 兼容 API 配置

如果你使用的服务商提供 OpenAI 兼容 API（如 Moonshot、Qwen、GLM 等），可以：

1. 启用 OpenAI Provider
2. 修改 Base URL 为服务商的 API 地址
3. 填入服务商的 API Key
4. 手动添加模型 ID

::: tip 模型自动检测
部分模型支持自动检测（如 Qwen MAX、Doubao 2.x），Measix Pilot 会根据模型名称自动适配参数。
:::
