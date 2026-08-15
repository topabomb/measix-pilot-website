---
title: 功能特性概览
icon: lightbulb
author: Measix Pilot
date: 2026-08-15
category: 功能介绍
---

# 功能特性概览

> Measix Pilot（小睿助手）是一款基于 [RikkaHub](https://github.com/rikkahub/rikkahub) fork 的原生 Android LLM 聊天客户端，致力于为移动端用户提供专业、安全、功能丰富的 AI 对话体验。

## 核心能力矩阵

Measix Pilot 围绕「对话」、「工具」、「工作空间」三大维度构建，提供从日常对话到专业开发的完整 AI 体验。

| 维度 | 能力 | 适用场景 |
|------|------|----------|
| 对话 | 多 Provider 对话、消息分支、全文搜索 | 日常问答、知识探索 |
| 工具 | MCP 协议、工具调用、HITL 审批 | 智能自动化、安全执行 |
| 工作空间 | PRoot 沙箱、文件操作、命令执行 | 移动开发、数据处理 |
| 渲染 | Markdown、LaTeX、Mermaid、语法高亮 | 技术文档、数学公式 |
| 多模态 | 图片、PDF、DOCX 输入 | 图像理解、文档分析 |
| 安全 | 备份同步、OAuth 2.1、审批机制 | 数据保护、访问控制 |

## 技术亮点

### 🧩 MCP 协议原生支持

Measix Pilot 是少数原生集成 MCP（Model Context Protocol）的移动端客户端。通过 MCP 协议，AI 可以连接外部工具服务器，执行搜索、日历操作、文件管理等任务，并支持 OAuth 2.1 授权和 DCR 动态注册。

### 🔒 HITL（Human-in-the-Loop）审批机制

所有工具调用均支持人工审批。你可以决定哪些工具自动执行，哪些需要确认后运行，在自动化与安全性之间找到最佳平衡。

### 📦 工作空间沙箱

基于 PRoot 的完整 Linux 环境，AI 可以在其中执行 Shell 命令、读写文件、运行脚本。这是移动端罕见的「AI 工作站」能力。

### 🎨 原生 Kotlin 渲染引擎

语法高亮完全由纯 Kotlin 实现，支持 30+ 编程语言，无需依赖 WebView 或 JavaScript 引擎。LaTeX 数学公式、Mermaid 流程图也全部原生渲染。

### 📱 自适应布局

针对折叠屏双栏、矮横屏紧凑输入、宽屏弹层居中面板等场景做了深度适配，无论你使用手机、折叠屏还是平板，都能获得最佳体验。

## 功能导航

<CardGrid :columns="3">
  <Card icon="comments" title="多 Provider 对话" link="./providers.md">
    OpenAI / Gemini / Claude / DeepSeek
  </Card>
  <Card icon="plug" title="MCP 协议" link="./mcp.md">
    外部工具服务器集成
  </Card>
  <Card icon="shield-check" title="工具调用与审批" link="./tool-calling.md">
    安全的执行机制
  </Card>
  <Card icon="box" title="工作空间沙箱" link="./workspace.md">
    PRoot Linux 环境
  </Card>
  <Card icon="markdown" title="消息与渲染" link="./rendering.md">
    原生高亮 + LaTeX + Mermaid
  </Card>
  <Card icon="image" title="多模态输入" link="./multimodal.md">
    图片 / PDF / DOCX
  </Card>
  <Card icon="search" title="全文搜索" link="./search.md">
    FTS5 + jieba 分词
  </Card>
  <Card icon="cloud" title="备份与同步" link="./backup.md">
    WebDAV / S3
  </Card>
  <Card icon="wand-magic-sparkles" title="AI 生图" link="./image-gen.md">
    文生图能力
  </Card>
  <Card icon="puzzle-piece" title="Skills 系统" link="./skills.md">
    可扩展技能框架
  </Card>
  <Card icon="volume-high" title="语音合成" link="./tts.md">
    多引擎 TTS
  </Card>
  <Card icon="mobile-screen" title="自适应 UI" link="./adaptive-ui.md">
    全设备形态适配
  </Card>
</CardGrid>
