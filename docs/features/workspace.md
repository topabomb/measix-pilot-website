---
title: 工作空间与文件
icon: box
author: Measix Pilot
date: 2026-10-16
---

# 工作空间与文件

本地 Workspace、个人 WebDAV 与企业远程工作区，让资料处理紧接着任务进行。浏览目录、传输与编辑，再直接检查生成的成果。

## 文件管理与预览

| 工作对象 | 使用方式 |
| --- | --- |
| 文本与源码 | 查找、跳行、行号、语法高亮、编辑保存；远程写入核对版本冲突 |
| Markdown 与 SVG | 在源码和预览之间切换；SVG 渲染受支持的静态子集 |
| 图片与 PDF | 图片缩放，PDF 逐页预览、跳页与缩放 |
| 音视频 | 原生播放、进度拖动和全屏，在文件服务支持时按需读取 |
| 目录与传输 | 按入口权限新建、重命名、移动、复制、删除、上传下载与分享 |

HTML 当前以源码查看。各入口有格式、大小与授权限制；远程媒体服务须支持所需的范围读取和版本校验，不能满足时可显式下载或外部打开。

## 本地 Linux 工作空间

初始化匹配设备架构的 PRoot Linux 环境后，可使用文件工具、Shell 与交互终端，按任务安装所需运行时。无需 root；PRoot 不等于恶意程序的内核安全边界。

上传资料、工作文件、临时内容和 Skills 各有用途。命令执行与人工确认由助手配置和工具权限决定，取消时等待实际进程退出并清理相关输入资源。

## WebDAV 与企业工作区

个人 WebDAV 使用配置的地址与凭据；企业文件和 DAV 使用原空间授权。保存冲突或结果未知时先读取目标核实，避免重复提交写入。失败时保留编辑稿与可复制的诊断。

文件浏览不是远程终端。需要远端程序执行时，接入获准的 [Runcove 或其他 MCP 工具](./enterprise.md#连接-runcove)。

## 检查生成的成果

![Pilot 从企业远程工作区打开的 Markdown 报告](/pilot/report-wide.png)

真实模型在独立目录生成 `inspection.csv`、`report.md` 与 `chart.svg`，从 Pilot 打开报告、切换源码、返回文件列表并检查图表。截图来自 0.0.20 Debug 模拟器，巡检数值为演示数据。

<details>
<summary>观看文件检查演示</summary>

![报告、源码、目录与图表的连续操作](/pilot/walkthrough.gif)

[查看 MP4](/pilot/walkthrough.mp4)。真实模拟器连续录屏，1.25 倍速、无声，展示已生成文件的检查过程。

</details>

素材来源与能力限制见 [仓库 README](https://github.com/topabomb/rikkahub_mcp#readme) 和 [Workspace 参考](https://github.com/topabomb/rikkahub_mcp/blob/master/docs/references/workspace-architecture.md)。
