import { getBlogEntries } from "@/app/lib/blogs";
import { TrackedBlogLink } from "./TrackedBlogLink";

export function BlogList() {
  const sorted = getBlogEntries();
  const rowClassName =
    "flex w-full min-w-0 flex-col items-start gap-1.5 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-3";

  return (
    <section aria-labelledby="blogs-heading" className="w-full">
      <h2 id="blogs-heading" className="m-0 mt-2 p-0 text-muted-foreground sm:mt-4">
        Blogs
      </h2>
      <div className="mt-2 grid min-w-0 gap-2.5 sm:gap-1">
        {sorted.map((post) => {
          const normalizedStatus = post.status?.toLowerCase();
          const isDisabled =
            normalizedStatus === "working on" || normalizedStatus === "pending";
          const content = (
            <>
              <span className="min-w-0 break-words">{post.title}</span>
              {post.status ? (
                <span className="whitespace-nowrap rounded-full border border-border bg-muted px-1.5 py-0.5 text-[0.56rem] font-medium uppercase leading-none tracking-normal text-muted-foreground sm:px-2 sm:text-[0.65rem]">
                  {post.status}
                </span>
              ) : null}
            </>
          );

          if (isDisabled) {
            return (
              <div
                key={post.href}
                aria-disabled="true"
                className={`${rowClassName} h-auto min-h-8 w-full cursor-not-allowed select-none rounded-sm px-0 py-0.5 text-left text-[clamp(0.75rem,2.8vw,0.9375rem)] font-medium leading-tight tracking-tight text-foreground sm:-mx-3 sm:w-[calc(100%+1.5rem)] sm:px-3 sm:py-1 sm:text-[clamp(0.875rem,2.6vw,1rem)]`}
              >
                {content}
              </div>
            );
          }

          return (
            <TrackedBlogLink
              key={post.href}
              href={post.href}
              title={post.title}
              status={post.status}
              className="h-auto min-h-8 w-full min-w-0 justify-start whitespace-normal rounded-sm px-0 py-0.5 text-left text-[clamp(0.75rem,2.8vw,0.9375rem)] leading-tight tracking-tight hover:bg-muted sm:-mx-3 sm:w-[calc(100%+1.5rem)] sm:px-3 sm:py-1 sm:text-[clamp(0.875rem,2.6vw,1rem)]"
              rowClassName={rowClassName}
            />
          );
        })}
      </div>
    </section>
  );
}
