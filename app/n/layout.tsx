import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { getBlogEntries } from "@/app/lib/blogs";
import AnalogClock from "../components/shared/analog-clock";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const entries = getBlogEntries();
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <header className="w-full flex items-baseline justify-between">
          <div>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" aria-label="Go back home">
                <ArrowLeft size={16} />
                <span>Home</span>
              </Link>
            </Button>
          </div>
          <nav className="text-sm">
            <ul className="m-0 p-0 flex flex-wrap items-center gap-2 text-muted-foreground">
              <li className="flex items-center">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://x.com/msdeokar"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open X in new tab"
                  >
                    <span>X</span>
                  </a>
                </Button>
              </li>
              <li className="flex items-center">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="mailto:deokarmahendra424@gmail.com"
                    aria-label="Send email"
                  >
                    <span>Email</span>
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="mx-auto max-w-4xl px-4 py-4">{children}</div>
      <div className="mx-auto max-w-4xl px-4 mt-6">
        <div className="relative">
          <div className="h-px w-full bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0)_100%)] dark:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.7)_50%,rgba(255,255,255,0)_100%)]" />
        </div>
      </div>
      <footer aria-label="blog-footer" className="mx-auto max-w-4xl px-4">
        <div className="mt-4 flex items-center justify-between gap-2">
          <nav className="text-sm">
            <ul className="m-0 p-0 flex flex-wrap items-center gap-2 text-muted-foreground">
              <li className="flex items-center">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/">Home</Link>
                </Button>
                <span className="w-2" />
              </li>
              <li className="flex items-center">
                <Button variant="ghost" size="sm" asChild>
                  <a href="mailto:deokarmahendra424@gmail.com">Email</a>
                </Button>
                <span className="w-2" />
              </li>
              <li className="flex items-center">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://x.com/msdeokar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X
                  </a>
                </Button>
              </li>
            </ul>
          </nav>
          <div className="shrink-0">
            <AnalogClock />
          </div>
        </div>
        <div className="h-[20vh]" />
      </footer>
    </div>
  );
}
