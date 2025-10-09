export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="mx-auto max-w-4xl px-4 py-8">{children}</div>
    </div>
  );
}
