import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mahendradeokar.vercel.app",
);
const siteTitle = "Mahendra Devkar";
const siteDescription =
  "Frontend-focused software engineer building React, Next.js, real-time UIs, reusable component systems, and developer tools.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  alternates: {
    canonical: "/",
  },
  applicationName: siteTitle,
  title: {
    default: `${siteTitle} | Frontend Software Engineer`,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: [
    "Mahendra Devkar",
    "Mahendra Deokar",
    "Frontend Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Design to Code",
    "Real-time UI",
    "Developer Tooling",
  ],
  authors: [{ name: siteTitle, url: siteUrl }],
  creator: siteTitle,
  publisher: siteTitle,
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteTitle,
    title: `${siteTitle} | Frontend Software Engineer`,
    description: siteDescription,
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${siteTitle} | Frontend Software Engineer`,
    description: siteDescription,
    images: ["/icon.png"],
    creator: "@msdeokar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.className}`}>
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
