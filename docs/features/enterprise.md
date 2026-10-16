---
title: 个人与企业工作
icon: building
author: Measix Pilot
date: 2026-10-16
---

# 独立使用，也能进入组织工作

Pilot 是原生 Android Agent Harness。个人模型和工具、组织发布的能力，都通过移动端的会话、审批和文件入口进入实际工作。

## 个人使用

启用 Provider、配置模型与 API Key，选择助手即可开始。搜索、Skills、MCP 与本地 Workspace 按任务需要启用，个人使用无需部署 Orchelm。会话和用户配置保存在设备上；模型请求、工具调用和主动备份会发送到你配置的相应服务。

## 接入 Orchelm

使用管理员提供的接入材料，通过扫码、相册识码或粘贴加入企业空间。同步组织配置后，选择获准的助手、模型与工具；组织可发布 Starter、系统指令、背景资料、语音、图片生成和工作区资源。

- 个人与企业的历史、记忆和文件入口按空间隔离。
- 受管助手定义与固定 MCP 由组织维护；发布允许时，可选择可选工具及获准的企业模型或自有模型。
- Starter 选择后先检查预填内容，再明确发送；选择入口不会自动提交任务。
- 配置详情可查看已同步版本与资源；当前权限仍会在执行时复验。

接入成功、配置已同步和执行可用是不同状态。同步失败时查看原始诊断并重试；不要把不可用资源改用其他空间的身份执行。

## 连接 Runcove

[Measix Runcove · 工舱](https://github.com/topabomb/measix-runcove) 提供持久工作空间、命令、文件、浏览器与可人工接管的桌面。Pilot 负责移动交互和人工确认，工具在获准的远端环境中处理资料。

配置 Runcove 的 HTTP MCP 地址及认证，并为助手选择工具。Standalone 入口为 `/mcp`，Server 使用分配给用户的入口；文件浏览另需 WebDAV 或企业工作区，桌面接管使用 Runcove 自身入口。具体配置见 [Runcove 部署指南](https://github.com/topabomb/measix-runcove/blob/main/docs/deployment.md)。

[Measix Tuck · 松子](https://github.com/topabomb/measix-tuck) 是同一家族的浏览器 Agent 工作台，提供对话、任务、文件与版本交付。各端按自己的授权接入能力，目前不表示聊天和运行任务自动跨端同步。

## 上下文与长任务

同一轮任务复用普通配置、系统指令和工具定义；新的模型请求按当前权限读取记忆和助手目录，并保存上下文来源与变化。历史工具输出滚动压缩，近期内容受保护，归档正文保留回查入口。

上下文长度优先于缓存前缀稳定，缓存命中取决于模型服务。当前支持手动会话摘要，尚无自动会话摘要或按模型窗口自动裁剪。

切换页面或退到后台时，任务可继续运行并通过前台通知返回。后台运行受 Android 系统限制；进程终止后重启会标记未完成执行，不会自动续跑。

更详细的执行与配置边界见 [应用参考文档](https://github.com/topabomb/rikkahub_mcp/blob/master/docs/references/application-architecture.md)。
