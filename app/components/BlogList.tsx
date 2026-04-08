import fs from "node:fs";
import path from "node:path";
import { Button } from "./ui/Button";
import { getBlogEntries } from "@/app/lib/blogs";

type BlogEntry = {
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
    // Prefer MDX export metadata.title if present
    const metaMatch = content.match(
      /export const metadata = \{[\s\S]*?title:\s*['\"]([^'\"]+)['\"]/
    );
    if (metaMatch?.[1]) return metaMatch[1];
    // Fallback to first markdown H1
    const h1Match = content.match(/^#\s+(.+)$/m);
    return h1Match?.[1] ?? null;
  } catch {
    return null;
  }
}

export function BlogList() {
  const sorted = getBlogEntries();

  return (
    <section aria-labelledby="blogs-heading" className="w-full">
      <h2 id="blogs-heading" className="m-0 mt-4 p-0 text-muted-foreground">
        Blogs
      </h2>
      <div className="mt-2 grid gap-1">
        {sorted.map((post) => (
          <Button
            key={post.href}
            variant="ghost"
            size="sm"
            asChild
            className="justify-start -mx-3 py-1 text-left hover:bg-muted rounded-sm text-lg leading-tight tracking-tight"
          >
            <a href={post.href}>
              {post.title}
              ++{" "}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}
