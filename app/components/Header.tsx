"use client";

import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/app/components/ui/Button";
import { Github, Twitter } from "@/app/icons";
import { socialLinks } from "../constants/socials";
import posthog from "posthog-js";

function SocialIcon({ label }: { label: string }) {
  const className = "size-4 sm:hidden";

  if (label === "GitHub") return <Github className={className} />;
  if (label === "LinkedIn") return <Linkedin className={className} />;
  if (label === "X") return <Twitter className={className} />;
  if (label === "Email") return <Mail className={className} />;

  return null;
}

export function Header() {
  return (
    <header className="grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] grid-rows-[auto_auto] gap-x-3 gap-y-1.5 sm:gap-y-1">
      <h1 className="col-span-2 row-start-1 m-0 text-[clamp(1.375rem,5.5vw,2.25rem)] font-medium leading-[1.05] tracking-tight sm:col-span-1">
        Mahendra Devkar
      </h1>
      <p className="col-start-1 row-start-2 m-0 ml-[1px] self-center text-sm text-muted-foreground">
        Gujarat, India
      </p>
      <nav
        className="col-start-2 row-start-2 self-center text-sm sm:row-start-1 sm:self-start"
        aria-label="Social links"
      >
        <ul className="m-0 flex min-w-0 flex-wrap items-center justify-end gap-x-1 gap-y-1 p-0 text-muted-foreground sm:gap-x-3">
          {socialLinks.map((s) => (
            <li key={s.label} className="flex items-center">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="max-sm:size-8 max-sm:p-0"
              >
                <a
                  href={s.href}
                  target={s.href.startsWith("/") ? undefined : "_blank"}
                  rel={
                    s.href.startsWith("/") ? undefined : "noopener noreferrer"
                  }
                  aria-label={s.label}
                  title={s.label}
                  onClick={() =>
                    posthog.capture("social_link_clicked", {
                      platform: s.label,
                      href: s.href,
                    })
                  }
                >
                  <SocialIcon label={s.label} />
                  <span className="hidden sm:inline">{s.label}</span>
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
