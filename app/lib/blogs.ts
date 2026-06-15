import fs from "node:fs";
import path from "node:path";

export type BlogEntry = {
  title: string;
  href: string;
  status?: string;
};

function readDirectorySafe(dirPath: string): string[] {
  try {
    return fs
      .readdirSync(dirPath, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    return [];
  }
}

function extractTitleFromMdx(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const metaMatch = content.match(
      /export const metadata = \{[\s\S]*?title:\s*(['"])(.*?)\1/,
    );
    if (metaMatch?.[2]) return metaMatch[2];
    const h1Match = content.match(/^#\s+(.+)$/m);
    return h1Match?.[1] ?? null;
  } catch {
    return null;
  }
}

function extractStatusFromMdx(filePath: string): string | null {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const statusMatch = content.match(/status:\s*['"]([^'"]+)['"]/);
    return statusMatch?.[1] ?? null;
  } catch {
    return null;
  }
}

export function getBlogEntries(): BlogEntry[] {
  const postsDir = path.join(process.cwd(), "app", "n");
  const folders = readDirectorySafe(postsDir);
  const entries: BlogEntry[] = folders.map((folder) => {
    const pagePath = path.join(postsDir, folder, "page.mdx");
    const title = extractTitleFromMdx(pagePath) ?? `Post ${folder}`;
    const status = extractStatusFromMdx(pagePath) ?? undefined;
    return { title, href: `/n/${folder}`, status };
  });
  return entries.sort((a, b) => {
    const aId = Number(a.href.split("/").at(-1));
    const bId = Number(b.href.split("/").at(-1));

    if (Number.isFinite(aId) && Number.isFinite(bId)) {
      return aId - bId;
    }

    return a.title.localeCompare(b.title);
  });
}

