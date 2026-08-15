---
title: Skills 系统
icon: puzzle-piece
author: Measix Pilot
date: 2026-08-15
category: 功能介绍
---

# Skills 系统

> 可扩展的技能框架，让 AI 拥有无限可能。Measix Pilot 的 Skills 系统让你像安装插件一样为 AI 添加新能力。

## 什么是 Skills

Skills 是 Measix Pilot 的可扩展技能框架，每个 Skill 定义了一组特定能力：

- 预设的提示词模板
- 关联的工具集合
- 元数据描述

Skills 让 AI 可以根据不同场景加载不同能力组合，实现专业化服务。

## Skill 结构

一个 Skill 包含：

- **Frontmatter**：元数据（名称、描述、图标等）
- **提示词**：指导 AI 行为的系统提示
- **工具关联**：该 Skill 可使用的工具列表
- **配置项**：用户可调整的参数

## 管理界面

- 从元数据目录解析 Skills
- 扩展面板清理已删除技能残留
- 技能启用/禁用独立控制
- 支持第三方 Skill 导入

## 使用方式

1. 打开设置 → Skills 管理
2. 浏览可用 Skills
3. 启用你需要的 Skill
4. 在对话中，AI 会根据上下文自动选择合适的 Skill

::: tip 自定义 Skill
高级用户可以创建自定义 Skill 文件，定义专属的 AI 能力组合。Skill 文件使用标准 Markdown + YAML Frontmatter 格式。
:::
