---
title: 更新日志
icon: clock-rotate-left
author: Measix Pilot
date: 2026-08-15
category: 更新
---

# 更新日志

> 以下更新日志随每次版本发布自动同步，源自 [rikkahub_mcp 仓库](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/dev/changelog.md)。

::: tip 版本线说明
Measix Pilot 采用独立版本线（`0.0.x`），与上游 RikkaHub 版本线（`2.x.x`）独立。完整的上游同步分析详见 [上游同步文档](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/dev/upstream-sync.md)。
:::

<!-- CHANGELOG_CONTENT_START -->

## 0.0.16（versionCode 16）— 2026-08-13

### 新增

- 聊天可按需开启 `generate_image`，用全局默认图片模型出图；用户明确要求并审批后，可把独立副本设为当前会话助手背景
- 设置页补齐默认文生图模型；页面与工具共用队列和 Gallery。Gallery、聊天图、背景各存一份
- 文件管理增加「文生图」Tab

### 变更

- Target 看不到该工具；没有有效默认图片模型时也不注册
- 模型只看到 `/upload/<file>`；chat copy 缺失时标为 `artifact_missing`
- 子助手失败分为政策拒绝、Provider 错误和运行时错误，不回显政策检查类型
- `ask_user` 与普通工具审批共用同一套音效

### 修复

- 文生图编辑走共享队列；取消背景更新不再被改写成普通失败
- 清空 Upload 会提示同时删掉聊天副本和助手背景

---

## 0.0.15（versionCode 15）— 2026-08-11 ~ 2026-08-13

### 新增

- **子助手同步委托**：`assistant_manage`、`assistant_inspect`、`assistant_call`。主助手按 Catalog 与授权把任务交给 Target，Target 在独立 Child 会话中工作。`assistant_inspect` 按需查看人设、工具名、技能和局部记忆；`assistant_call` 默认回传 `tts_stats`，完整 `tts` / `tool_calls` 由 `extras` 按需返回，`runtime_error` 另带回裁剪后的 `detail`。`assistant_manage` 的 CREATE 不审批，UPDATE/DELETE 必须审批；管理结果只回 `action` 与 `id`
- **可恢复执行与交互**：Room v4 持久化 Child / run / 交互；支持启动恢复、Fork、孤儿清理和 durable 删除；主聊天有调用卡片、`ask_user` 与只读详情
- **通用生成原语**：`messageId + toolOrdinal` locator、phase/checkpoint/finished、动态工具集、非交互审批
- **模型与搜索**：注册 qwen-3.8-max、mimo v3、Claude 5、muse；搜索为关 / 本地 / 模型内置

### 修复

- **ask_user 与卡片**：非法参数在审批门口拒绝；回答只在服务端收下后锁定；交互与 step 上限分开；Child 未写入时详情不再误判不可用
- **启动恢复**：恢复完成前禁止会话写入；中断收口时 Child 超时不丢掉 Master 终态；扫描只加载顶层会话和被引用的 Child
- **协议与工具 Schema**：Claude / DeepSeek reasoning 按端点映射；MCP 保留 `$defs/$ref/$schema`；结构化工具结果可免截断
- **隔离与一致性**：`conversation_search` 不含 Child；lineage 按当前选中分支；Settings 写入成功后才发布；Memory 执行前重验 owner
- **TTS 与定位**：Master/Target 共用 turn 播放队列；工具审批不再依赖可能为空的 Provider `toolCallId`
- **更新与发行**：下载错误完成本地化；正式 Release 强制签名校验

### 变更

- Target 显式模型优先，未绑定则调用期继承 Caller；禁止再委托；撤权按快照 ∩ 当前配置
- 工具参数为完整 JSON Schema；ChatService 经 `GenerationToolSetFactory` 装配

### 文档与测试

- 新增 [子助手架构与执行流程参考](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/references/sub-assistant-architecture.md) 和 [提示词、上下文注入与工具描述](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/references/prompts-and-tools.md)
- 补充子助手、恢复、Memory/TTS、Room 与 Provider reasoning 回归测试
- 第 11 批上游同步记录见 [upstream-sync.md](https://github.com/topabomb/rikkahub_mcp/blob/main/docs/dev/upstream-sync.md)

---

## 0.0.14（versionCode 14）— 2026-08-10 ~ 2026-08-11

### 新增

- **聊天主界面自适应**：窗口宽度 ≥600dp 且高度 ≥480dp 时显示"会话列表 + 聊天详情"双栏；普通窄屏和矮横屏保持单栏抽屉。竖向折叠屏按 WindowManager 提供的真实铰链坐标分区，Tabletop 且有有效横向铰链时将聊天限制在上半屏
- **自适应临时弹层**：普通窄屏使用 `ModalBottomSheet`，宽屏使用限宽居中 `Dialog`；竖向铰链下限制在聊天详情侧，Tabletop 且有有效横向铰链时限制在上半屏
- **矮屏紧凑输入**：聊天可用高度低于 480dp 时改用单行紧凑输入，功能项保持完整

### 修复

- **会话助手一致性**：聊天标题、背景、模型能力、搜索、推理、快捷消息和文件能力统一以 `conversation.assistantId` 为准；仅在原助手已删除时回退当前全局助手
- **更新检查生命周期**：`UpdateChecker` 在 AppScope 内共享一个首次订阅才启动、启动后不重启的 `StateFlow`，同一进程最多请求一次；忽略的成功版本持久化到 DataStore，失败提示的关闭状态在当前进程内共享
- **宽屏弹层交互**：改用独立 scrim 与内容层，避免底部按钮或输入框被误判为外部点击；补充内容区、底部操作区和外部点击回归测试
- **非聊天页面回归**：设置文件页和图片生成页恢复固定双列，其他设置与管理页面继续使用原有全屏导航；同时恢复关于页 emoji 并修正受影响源码的 UTF-8 文本
- **聊天界面可读性**：收紧会话栏间距，调整标题层级、头像尺寸和消息区留白，修复 AMOLED 模式下选中会话对比度，并增强工具授权操作的视觉区分
- **质量门禁**：移除模块级 Lint 全局忽略配置；补充自适应策略、会话助手切换和更新检查测试

### 变更

- **适配职责收敛**：自适应双栏只作用于聊天主界面；设置、历史、统计等页面维持全屏逐页导航。根节点仅负责提供统一的 `LocalAdaptiveLayoutInfo`
- **弹层状态约定**：Dialog 路径不组合 BottomSheet；调用方以自身可见状态为准，不读取 `sheetState` 判断 Dialog 是否显示

<!-- CHANGELOG_CONTENT_END -->
