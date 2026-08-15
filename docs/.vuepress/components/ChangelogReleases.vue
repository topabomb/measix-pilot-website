<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

interface Release {
  tag_name: string;
  name: string;
  body: string;
  html_url: string;
  published_at: string;
  prerelease: boolean;
}

const releases = ref<Release[]>([]);
const loading = ref(true);
const error = ref("");

const REPO = "topabomb/rikkahub_mcp";

const sortedReleases = computed(() =>
  [...releases.value].sort(
    (a, b) =>
      new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
  ),
);

const formatDate = (dateStr: string): string => {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

// 简单的 Markdown 转换（GitHub Release body 是 Markdown）
const renderMarkdown = (md: string): string => {
  if (!md) return "";
  let html = md
    // 转义 HTML
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // 标题
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // 粗体
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // 行内代码
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // 链接
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>',
    )
    // 列表项
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    // 换行
    .replace(/\n/g, "<br />");
  // 包裹列表
  html = html.replace(/(<li>.*?<\/li>(<br \/>)*)+/g, (match) => {
    const cleaned = match.replace(/<br \/>/g, "");
    return `<ul>${cleaned}</ul>`;
  });
  return html;
};

onMounted(async () => {
  try {
    const resp = await fetch(
      `https://api.github.com/repos/${REPO}/releases?per_page=30`,
      {
        headers: { Accept: "application/vnd.github.v3+json" },
      },
    );
    if (!resp.ok) throw new Error(`GitHub API 返回 ${resp.status}`);
    releases.value = await resp.json();
  } catch (e) {
    error.value = e instanceof Error ? e.message : "未知错误";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div class="changelog-container">
    <div v-if="loading" class="changelog-loading">
      <p>正在从 GitHub 加载 Releases...</p>
    </div>

    <div v-else-if="error" class="changelog-error">
      <p>⚠️ 加载失败：{{ error }}</p>
      <p>
        请直接访问
        <a
          :href="`https://github.com/${REPO}/releases`"
          target="_blank"
          rel="noopener"
          >GitHub Releases 页面</a
        >
      </p>
    </div>

    <div v-else class="changelog-list">
      <div
        v-for="release in sortedReleases"
        :key="release.tag_name"
        class="changelog-item"
      >
        <div class="changelog-header">
          <span class="changelog-version">
            {{ release.tag_name || release.name }}
          </span>
          <span v-if="release.prerelease" class="changelog-badge">预发布</span>
          <span class="changelog-date">{{ formatDate(release.published_at) }}</span>
        </div>
        <div
          class="changelog-body"
          v-html="renderMarkdown(release.body || '暂无说明')"
        />
        <a
          :href="release.html_url"
          target="_blank"
          rel="noopener"
          class="changelog-link"
          >查看详情 →</a
        >
      </div>
    </div>

    <div v-if="!loading && !error && releases.length === 0" class="changelog-empty">
      <p>暂无 Release 记录。</p>
    </div>
  </div>
</template>

<style scoped>
.changelog-container {
  max-width: 800px;
}

.changelog-loading,
.changelog-error,
.changelog-empty {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-2);
}

.changelog-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.changelog-item {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  background: var(--vp-c-bg-soft);
}

.changelog-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
}

.changelog-version {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--vp-c-brand);
}

.changelog-badge {
  display: inline-block;
  font-size: 0.75rem;
  padding: 0.1rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-warning-soft);
  color: var(--vp-c-warning-1);
}

.changelog-date {
  margin-left: auto;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.changelog-body {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--vp-c-text-1);
}

.changelog-body :deep(h1),
.changelog-body :deep(h2),
.changelog-body :deep(h3) {
  font-weight: 600;
  margin: 0.8rem 0 0.4rem;
}

.changelog-body :deep(h1) {
  font-size: 1.1rem;
}

.changelog-body :deep(h2) {
  font-size: 1.05rem;
}

.changelog-body :deep(h3) {
  font-size: 1rem;
}

.changelog-body :deep(ul) {
  padding-left: 1.5rem;
  margin: 0.4rem 0;
}

.changelog-body :deep(li) {
  list-style: disc;
  margin: 0.2rem 0;
}

.changelog-body :deep(code) {
  background: var(--vp-c-bg-alt);
  padding: 0.15rem 0.4rem;
  border-radius: 3px;
  font-size: 0.85em;
}

.changelog-body :deep(a) {
  color: var(--vp-c-brand);
  text-decoration: none;
}

.changelog-body :deep(a:hover) {
  text-decoration: underline;
}

.changelog-link {
  display: inline-block;
  margin-top: 0.8rem;
  font-size: 0.9rem;
  color: var(--vp-c-brand);
  text-decoration: none;
}

.changelog-link:hover {
  text-decoration: underline;
}
</style>
