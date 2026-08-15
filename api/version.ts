/**
 * Vercel Serverless Function: /api/version
 *
 * 动态从 GitHub Releases API 获取 rikkahub_mcp 最新版本信息。
 * 通过 rewrite 规则，访问 /version.json 时实际调用此函数。
 *
 * 优化：5 秒超时 + 降级缓存 + CDN 缓存头
 */

const GITHUB_REPO = "topabomb/rikkahub_mcp";
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
const FETCH_TIMEOUT = 5000; // 5 秒超时
const CACHE_TTL = 10 * 60 * 1000; // 10 分钟缓存

// 模块级缓存（同一实例复用）
let cached: {
  data: Record<string, unknown>;
  timestamp: number;
} | null = null;

// 降级数据（GitHub API 不可用时返回）
const FALLBACK_DATA = {
  version: "0.0.15",
  versionCode: 15,
  url: `https://github.com/${GITHUB_REPO}/releases/latest`,
  changelog: "请访问 GitHub Releases 页面查看最新更新",
  updatedAt: new Date().toISOString().split("T")[0],
};

export default async function handler(_req: Request): Promise<Response> {
  // 检查缓存
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return jsonResponse(cached.data);
  }

  try {
    // 带超时的 fetch
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT);

    const resp = await fetch(GITHUB_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "measix-pilot-website",
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!resp.ok) {
      throw new Error(`GitHub API returned ${resp.status}`);
    }

    const release = await resp.json();

    // 从 tag_name 提取版本号
    const tagName: string = release.tag_name || "";
    const versionName = tagName.replace(/^v/, "");

    // 从 release name 或 body 提取 versionCode
    let versionCode = 0;
    const codeMatch = (release.name || "").match(/\((\d+)\)/);
    if (codeMatch) {
      versionCode = parseInt(codeMatch[1], 10);
    } else {
      const bodyMatch = (release.body || "").match(/versionCode[:\s]*(\d+)/i);
      if (bodyMatch) {
        versionCode = parseInt(bodyMatch[1], 10);
      }
    }

    // 提取 changelog 摘要
    const changelog = (release.body || "")
      .replace(/#+\s*/g, "")
      .replace(/\r/g, "")
      .substring(0, 500)
      .trim();

    const data = {
      version: versionName,
      versionCode,
      url: release.html_url,
      changelog,
      updatedAt: release.published_at
        ? release.published_at.split("T")[0]
        : new Date().toISOString().split("T")[0],
    };

    // 更新缓存
    cached = { data, timestamp: Date.now() };

    return jsonResponse(data);
  } catch {
    // 失败时：如果有过期缓存，用过期缓存；否则用降级数据
    if (cached) {
      return jsonResponse(cached.data);
    }
    return jsonResponse(FALLBACK_DATA);
  }
}

function jsonResponse(data: Record<string, unknown>): Response {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=86400",
    },
  });
}
