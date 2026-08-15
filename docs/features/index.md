---
title: 功能特性概览
icon: lightbulb
author: Measix Pilot
date: 2026-08-15
category: 功能介绍
---

# 功能特性概览

> Measix Pilot（小睿助手）是一款**隐私可控的纯本地** Android AI 客户端。你的数据不出设备，AI 能力不设上限。

## 核心特色

### 🔒 隐私可控，数据不出设备

所有密钥、对话记录、助手配置仅存储在你的手机本地。无需注册账号，无云端中转，无遥测上报。网络请求直接发往你配置的 AI 服务商，不经过任何中间服务器。

[了解详情 →](./privacy.md)

### 🔌 MCP 协议，让 AI 能动手做事

Measix Pilot 是少数原生支持 MCP（Model Context Protocol）的移动端客户端。AI 可以连接外部工具服务——搜索网页、管理日历、操作文件。网络切换或冷启动后自动恢复连接。

[了解详情 →](./mcp.md)

### 🤖 子助手，AI 间的分工协作

主助手可以把子任务交给专门的子助手去完成，各自拥有独立的人设和工具权限。让「翻译助手」处理外文、「代码助手」写脚本，互不干扰，结果干净利落。

[了解详情 →](./sub-assistant.md)

### 📦 Linux 工作空间，口袋里的 AI 工作站

手机上运行完整的 Linux 环境，AI 可以执行命令、写代码、处理文件。上传 CSV 让 AI 分析数据、画图表，全在手机上完成。

[了解详情 →](./workspace.md)

### 🎨 文生图，用文字创作图片

在对话中直接让 AI 生成图片，可设为聊天背景。还能上传图片、PDF、Word 文档让 AI 理解和分析。

[了解详情 →](./image-gen.md)

### 📱 折叠屏、平板、手机全适配

展开折叠屏自动变双栏，半折放桌面时聊天在上半屏。无论什么设备形态，体验都恰到好处。

[了解详情 →](./adaptive-ui.md)

## 功能导航

<CardGrid :columns="3">
  <Card icon="shield-halved" title="隐私可控" link="./privacy.md">
    纯本地客户端，数据不出设备
  </Card>
  <Card icon="comments" title="多模型对话" link="./providers.md">
    OpenAI / Gemini / Claude / DeepSeek
  </Card>
  <Card icon="plug" title="MCP 协议" link="./mcp.md">
    让 AI 能动手做事
  </Card>
  <Card icon="users-gear" title="子助手协同" link="./sub-assistant.md">
    AI 间的分工协作
  </Card>
  <Card icon="shield-check" title="工具调用与审批" link="./tool-calling.md">
    安全始终你说了算
  </Card>
  <Card icon="box" title="Linux 工作空间" link="./workspace.md">
    口袋里的 AI 工作站
  </Card>
  <Card icon="markdown" title="消息与渲染" link="./rendering.md">
    代码高亮 + 公式 + 图表
  </Card>
  <Card icon="image" title="多模态输入" link="./multimodal.md">
    图片 / PDF / Word
  </Card>
  <Card icon="search" title="全文搜索" link="./search.md">
    快速检索历史对话
  </Card>
  <Card icon="cloud" title="备份与同步" link="./backup.md">
    WebDAV / S3 / 本地
  </Card>
  <Card icon="wand-magic-sparkles" title="AI 生图" link="./image-gen.md">
    文字变图片
  </Card>
  <Card icon="puzzle-piece" title="Skills 系统" link="./skills.md">
    可扩展技能框架
  </Card>
  <Card icon="volume-high" title="语音合成" link="./tts.md">
    让 AI 开口说话
  </Card>
  <Card icon="mobile-screen" title="自适应 UI" link="./adaptive-ui.md">
    折叠屏 + 平板 + 手机
  </Card>
</CardGrid>
