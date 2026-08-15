/**
 * Vercel Serverless Function: /api/version
 *
 * 动态从 GitHub Releases API 获取 rikkahub_mcp 最新版本信息。
 * 通过 rewrite 规则，访问 /version.json 时实际调用此函数。
 *
 * 返回格式与原静态 version.json 一致：
 * { version, versionCode, url, changelog, updatedAt }
 */

const GITHUB_REPO = "topabomb/rikkahub_mcp";
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

// 缓存（避免频繁调用 GitHub API，10 分钟缓存）
let cached: {
  data: Record<string, unknown>;
  timestamp: number;
} | null = null;

const CACHE_TTL = 10 * 60 * 1000; // 10 分钟

export default async function handler(
  _req: Request,
): Promise<Response> {
  // 检查缓存
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return jsonResponse(cached.data);
  }

  try {
    const resp = await fetch(GITHUB_API, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "measix-pilot-website",
      },
    });

    if (!resp.ok) {
      throw new Error(`GitHub API returned ${resp.status}`);
    }

    const release = await resp.json();

    // 从 tag_name 中提取版本号和 versionCode
    // tag 格式: v0.0.15 或 0.0.15
    const tagName: string = release.tag_name || "";
    const versionName = tagName.replace(/^v/, "");

    // versionCode 从 release name 或 body 中提取
    // 如果 release name 格式为 "v0.0.15 (15)"，则提取括号内数字
    let versionCode = 0;
    const codeMatch = (release.name || "").match(/\((\d+)\)/);
    if (codeMatch) {
      versionCode = parseInt(codeMatch[1], 10);
    } else {
      // 如果无法从 name 提取，尝试从 body 中查找 versionCode
      const bodyMatch = (release.body || "").match(
        /versionCode[:\s]*(\d+)/i,
      );
      if (bodyMatch) {
        versionCode = parseInt(bodyMatch[1], 10);
      }
    }

    // 提取 changelog 摘要（取 release body 的前 500 字符）
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
    // GitHub API 失败时，返回降级数据
    const fallback = {
      version: "0.0.15",
      versionCode: 15,
      url: `https://github.com/${GITHUB_REPO}/releases/latest`,
      changelog: "请访问 GitHub Releases 页面查看最新更新",
      updatedAt: new Date().toISOString().split("T")[0],
    };

    return jsonResponse(fallback);
  }
}

function jsonResponse(data: Record<string, unknown>): Response {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=1200",
    },
  });
}
