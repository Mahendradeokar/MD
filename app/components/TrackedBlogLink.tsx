"use client";

import posthog from "posthog-js";
import { Button } from "./ui/Button";

interface Props {
  href: string;
  title: string;
  status?: string;
  className: string;
  rowClassName: string;
}

export function TrackedBlogLink({ href, title, status, className, rowClassName }: Props) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className={className}
    >
      <a
        href={href}
        className={rowClassName}
        onClick={() =>
          posthog.capture("blog_post_clicked", {
            post_title: title,
            post_href: href,
          })
        }
      >
        <span className="min-w-0 break-words">{title}</span>
        {status ? (
          <span className="whitespace-nowrap rounded-full border border-border bg-muted px-1.5 py-0.5 text-[0.56rem] font-medium uppercase leading-none tracking-normal text-muted-foreground sm:px-2 sm:text-[0.65rem]">
            {status}
          </span>
        ) : null}
      </a>
    </Button>
  );
}
