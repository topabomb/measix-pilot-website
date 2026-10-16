---
home: true
heroText: Measix Pilot · 领航
heroImage: /pilot/logo.svg
heroAlt: Measix Pilot
heroImageStyle:
  max-height: 140px
tagline: 原生 Android Agent Harness · 小睿助手。把 Agent 带到现场，把工作推进到结果。
actions:
  - text: 下载与安装
    icon: download
    link: /download/
    type: primary
  - text: 开始使用
    icon: play
    link: /guide/getting-started.md
  - text: 查看源码
    icon: brands/github
    link: https://github.com/topabomb/rikkahub_mcp
features:
  - title: 多步任务与人工确认
    icon: users-gear
    details: 连续调用模型和工具，按需交给子助手；审批或补充信息后在当前任务中继续，随时查看执行过程。
    link: /features/tool-calling.md
  - title: 带着现场资料开始
    icon: image
    details: 照片、PDF、文档和任务说明进入同一工作流程，识别、生成和工具能力由所选模型与权限决定。
    link: /features/multimodal.md
  - title: 手机顺手，宽屏展开
    icon: mobile-screen
    details: Kotlin / Compose 原生体验，窗口宽高与折叠姿态共同决定布局，手机、平板与多窗口各有合适的呈现。
    link: /features/adaptive-ui.md
  - title: 工作文件随手检查
    icon: box
    details: 本地 Workspace、WebDAV 与企业文件管理，支持文本编辑、Markdown/SVG、图片、PDF 与音视频预览。
    link: /features/workspace.md
  - title: 上下文与工具按任务组织
    icon: puzzle-piece
    details: 保存上下文来源，同一轮复用指令与工具定义，历史工具输出滚动压缩，记忆在新请求边界对账。
    link: /features/enterprise.md#上下文与长任务
  - title: 独立使用，也能进入组织工作
    icon: plug
    details: 配置自己的模型与工具，或接入 Orchelm 使用组织发布的助手、资源与经验；通过 Runcove 扩展远端工作环境。
    link: /features/enterprise.md
---

## 同一项工作，手机上跟进，宽屏上展开

<p align="center">
  <a href="/pilot/chat-wide.png"><img src="/pilot/chat-wide.png" width="560" alt="Pilot 宽屏模拟器截图：会话列表与巡检报告双栏显示"></a>
  <a href="/pilot/chat-phone.png"><img src="/pilot/chat-phone.png" width="175" alt="同一项巡检任务的手机界面"></a>
</p>

通过 Orchelm 调用真实模型与 Runcove 工具，在独立演示目录生成 CSV、Markdown 报告和 SVG 图表，再从 Pilot 检查成果。截图来自 0.0.20 源码的 Debug 模拟器，巡检数值为演示数据。

[查看报告与操作演示](/features/workspace.md#检查生成的成果) · [个人与企业使用指南](/features/enterprise.md)

## 从现场事实，到可以带走的成果

![Pilot 工作流程示意：带入资料、推进工作、检查成果](/pilot/pilot-hero.svg)

Pilot 在 Android 本地承接模型请求、多步工具执行、审批、子助手、文件处理与执行记录。配置自己的模型即可独立使用；需要企业能力时，再接入组织的 Orchelm。

## Measix 产品家族

![Measix 七大产品职责图](/pilot/measix-products.svg)

**领航 Pilot** 承接原生移动与现场工作；[**松子 Tuck**](https://github.com/topabomb/measix-tuck) 提供自托管浏览器 Agent 工作台；[**工舱 Runcove**](https://github.com/topabomb/measix-runcove) 提供持久远端工作空间。

**枢策 Orchelm** 负责企业能力供给与治理，**知衡 Noetral** 面向工业领域模型与专业任务，**衡准 Metrivon** 承接精密测量与设备协同，**溯原 Tracelle** 承接数据归档、追溯与分析。各产品按需组合，实际接入范围以版本和部署为准。
