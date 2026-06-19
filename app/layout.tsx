import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://next-mdx-blog.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Mahendra Devkar",
    template: "%s | MD",
  },
  description: "My portfolio, blog, and personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${geist.className}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="mx-auto flex min-h-screen w-full max-w-[min(42rem,100vw)] flex-col justify-start gap-6 px-5 py-8 sm:justify-center sm:gap-[clamp(1rem,3.5vw,1.75rem)] sm:px-[clamp(1rem,5vw,2rem)] sm:py-[clamp(1.5rem,7vw,3.5rem)]">
            {children}
          </main>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
