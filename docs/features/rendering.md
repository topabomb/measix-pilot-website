---
title: 消息渲染引擎
icon: markdown
author: Measix Pilot
date: 2026-08-15
category: 功能介绍
---

# 消息渲染引擎

> 从 Markdown 到 LaTeX 数学公式，从语法高亮到 Mermaid 流程图，Measix Pilot 用纯 Kotlin 实现了完整的消息渲染管线，告别 Web 容器的臃肿。

## 渲染能力

### 📝 Markdown 渲染

支持完整的 CommonMark + GFM 扩展语法：

- 表格、任务列表、删除线
- 自动链接
- 脚注
- 自定义对齐

### 🎨 代码语法高亮

纯 Kotlin 实现的语法高亮引擎，支持 30+ 编程语言：

- 主流语言：Python、Java、Kotlin、JavaScript、TypeScript、Go、Rust、C/C++ 等
- 自定义配色方案（Atom One Dark / Light 风格）
- 行号、行高亮
- 复制按钮

::: tip 纯 Kotlin 实现
不同于使用 JavaScript 引擎（如 highlight.js）的方案，Measix Pilot 的语法高亮完全由 Kotlin 原生实现。这意味着：
- 更快的渲染速度
- 更低的内存占用
- 更好的电池续航
- 无需 JavaScript 运行时
:::

### 📐 LaTeX 数学公式

支持完整的 LaTeX 数学公式渲染：

- 行内公式 `$...$`
- 行间公式 `$$...$$`
- 化学方程式 `\ce{...}`（通过 mhchem 扩展）
- LaTeX 字体跟随聊天字体大小

### 📊 Mermaid 图表

支持 Mermaid 图表渲染：

- 流程图（Flowchart）
- 时序图（Sequence Diagram）
- 甘特图（Gantt Chart）
- 类图、状态图等

内置 mermaid.min.js，修复了首次渲染耗时问题，提供流畅的图表体验。

### 🖼️ 图片预览

类似相册的图片浏览体验：

- 点击图片放大查看
- 缩放、平移
- 长按保存到本地

## 消息分支展示

消息分支以直观的可视化方式展示：

- 不同分支用不同颜色标识
- 可在分支间快速切换
- 每个分支独立保存渲染状态

## WebView 预览缓存

为避免 `TransactionTooLargeException` 崩溃，WebView 预览内容会缓存到文件，确保大数据量渲染稳定。
