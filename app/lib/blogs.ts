import fs from "node:fs";
import path from "node:path";

export type BlogEntry = {
  title: string;
  href: string;
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
      /export const metadata = \{[\s\S]*?title:\s*['\"]([^'\"]+)['\"]/,
    );
    if (metaMatch?.[1]) return metaMatch[1];
    const h1Match = content.match(/^#\s+(.+)$/m);
    return h1Match?.[1] ?? null;
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
    return { title, href: `/n/${folder}` };
  });
  return entries.sort((a, b) => a.title.localeCompare(b.title));
}



