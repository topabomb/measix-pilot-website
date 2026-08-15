---
title: 多 Provider 对话
icon: comments
author: Measix Pilot
date: 2026-08-15
category: 功能介绍
---

# 多 Provider 对话

> 一个 App，连接所有主流大模型。Measix Pilot 支持多种 AI 服务商，同时适配两套主流 API 协议，让你在不同模型间自由切换。

## 支持的服务商

Measix Pilot 预置了四类主流 Provider，并支持通过兼容 API 接入更多服务：

| Provider | 说明 | 特性 |
|----------|------|------|
| **OpenAI** | GPT 系列、o 系列 | Chat Completions + Responses 协议 |
| **Gemini** | Google Gemini 系列 | 原生 API + 兼容模式 |
| **Claude** | Anthropic Claude 系列 | 原生 API + 兼容模式 |
| **DeepSeek** | DeepSeek 系列 | 兼容 OpenAI API |

::: tip 兼容 API
如果你使用的服务商提供 OpenAI 兼容 API（如 Moonshot、Qwen、GLM、豆包等），都可以直接在 Measix Pilot 中配置使用。
:::

## 双协议支持

Measix Pilot 同时支持两套主流对话协议，确保兼容性：

### Chat Completions 协议

业界最广泛使用的标准协议，几乎所有兼容 OpenAI 的服务商都支持此协议。适合大多数场景。

### Responses 协议

OpenAI 推出的新一代协议，支持更丰富的工具调用和内置工具能力。Measix Pilot 会根据模型能力自动选择或让你手动指定。

## 消息分支

遇到不满意的回复？Measix Pilot 支持消息分支功能：

- **重新生成**：对任意消息重新生成，获得不同的回复
- **分支切换**：在多个回复分支之间自由切换
- **独立编辑**：每个分支独立保存，互不影响

这意味着你可以探索不同方向的对话路径，找到最适合你的答案。

## 配置指南

1. 打开设置 → Provider 管理
2. 选择要启用的 Provider（首次启动时均为禁用状态）
3. 填入 API Key 和（可选的）自定义 Base URL
4. 在助手设置中选择该 Provider 对应的模型

::: warning 安全提示
所有 API Key 仅存储在本地设备中，不会上传到任何服务器。请确保设备安全。
:::
