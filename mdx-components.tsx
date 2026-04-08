import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1
      className="m-0 text-3xl md:text-4xl font-medium tracking-tight"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2 className="m-0 mt-6 text-2xl font-medium tracking-tight" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="m-0 mt-5 text-xl font-medium tracking-tight" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="m-0 mt-4 text-lg font-medium tracking-tight" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="m-0 mt-3 text-base leading-snug text-muted-foreground"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="m-0 mt-3 list-decimal pl-5 space-y-2 text-muted-foreground"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="m-0 mt-3 list-disc pl-5 space-y-2 text-muted-foreground"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "underline underline-offset-2 hover:text-primary transition";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => {
    // Expecting children to be a single <code> element
    const child: any = Array.isArray(children) ? children[0] : children;
    const rawCode: string =
      typeof child?.props?.children === "string" ? child.props.children : "";
    const languageClass: string | undefined = child?.props?.className; // e.g., language-ts
    const language = languageClass?.replace("language-", "") ?? "";
    const highlighted = highlight(rawCode);
    return (
      <div className="mt-4 overflow-hidden rounded-lg bg-neutral-100 dark:bg-zinc-900">
        {language ? (
          <div className="px-3 py-1.5 text-xs text-muted-foreground/80 select-none bg-neutral-200 dark:bg-zinc-950">
            {language}
          </div>
        ) : null}
        <pre className="m-0 p-0 overflow-auto" {...props}>
          <code
            className="block px-3 py-3 text-sm leading-relaxed text-zinc-900 dark:text-zinc-200"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </pre>
      </div>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    // Inline code fallback (block code handled by pre above)
    return (
      <code
        className="rounded bg-neutral-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[0.85em]"
        {...props}
      >
        {children}
      </code>
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="mt-3 w-full text-left text-sm">
      <thead className="text-muted-foreground">
        <tr>
          {data.headers.map((header, index) => (
            <th key={index} className="px-2 py-1 font-medium">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index} className="border-t">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-2 py-1">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote className="mt-2 ml-[0.075em] border-l-2 pl-3 text-muted-foreground">
      {props.children}
    </blockquote>
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
