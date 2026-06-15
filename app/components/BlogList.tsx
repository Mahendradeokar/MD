import { Button } from "./ui/Button";
import { getBlogEntries } from "@/app/lib/blogs";

export function BlogList() {
  const sorted = getBlogEntries();
  const rowClassName =
    "grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-3";

  return (
    <section aria-labelledby="blogs-heading" className="w-full">
      <h2 id="blogs-heading" className="m-0 mt-4 p-0 text-muted-foreground">
        Blogs
      </h2>
      <div className="mt-2 grid min-w-0 gap-1">
        {sorted.map((post) => {
          const isWorkingOn = post.status?.toLowerCase() === "working on";
          const content = (
            <>
              <span className="min-w-0 break-words">{post.title}</span>
              {post.status ? (
                <span className="whitespace-nowrap rounded-full border border-border bg-muted px-2 py-0.5 text-[0.65rem] font-medium uppercase leading-none tracking-normal text-muted-foreground">
                  {post.status}
                </span>
              ) : null}
            </>
          );

          if (isWorkingOn) {
            return (
              <div
                key={post.href}
                aria-disabled="true"
                className={`${rowClassName} h-auto min-h-8 w-full cursor-not-allowed select-none rounded-sm px-0 py-1 text-left text-[clamp(1rem,3.5vw,1.125rem)] font-medium leading-tight tracking-tight text-foreground sm:-mx-3 sm:w-[calc(100%+1.5rem)] sm:px-3`}
              >
                {content}
              </div>
            );
          }

          return (
            <Button
              key={post.href}
              variant="ghost"
              size="sm"
              asChild
              className="h-auto min-h-8 w-full min-w-0 justify-start whitespace-normal rounded-sm px-0 py-1 text-left text-[clamp(1rem,3.5vw,1.125rem)] leading-tight tracking-tight hover:bg-muted sm:-mx-3 sm:w-[calc(100%+1.5rem)] sm:px-3"
            >
              <a href={post.href} className={rowClassName}>
                {content}
              </a>
            </Button>
          );
        })}
      </div>
    </section>
  );
}
