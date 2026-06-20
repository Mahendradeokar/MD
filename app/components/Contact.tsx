"use client";

import { Linkedin, Mail } from "lucide-react";
import AnalogClock from "@/app/components/shared/analog-clock";
import { Github, Twitter } from "@/app/icons";
import { socialLinks } from "@/app/constants/socials";
import { Button } from "./ui/Button";
import posthog from "posthog-js";

const contactLinks = socialLinks.filter((link) => link.label !== "GitHub");

function SocialIcon({ label }: { label: string }) {
  const className = "size-4 sm:hidden";

  if (label === "GitHub") return <Github className={className} />;
  if (label === "LinkedIn") return <Linkedin className={className} />;
  if (label === "X") return <Twitter className={className} />;
  if (label === "Email") return <Mail className={className} />;

  return null;
}

export function Contact() {
  return (
    <footer aria-labelledby="contact-heading" className="w-full pb-[12vh] sm:pb-[16vh]">
      <h2 id="contact-heading" className="m-0 mt-3 p-0 text-md font-medium">
        Contact
      </h2>
      <p className="m-0 mt-2 text-sm text-muted-foreground">
        Have a question, feedback, or just want to say hi? Feel free to reach
        out.
      </p>
      <div className="mt-3 flex flex-col gap-4 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-3">
        <div className="flex min-w-0 flex-wrap gap-4 text-sm">
          {contactLinks.map((s) => (
            <Button key={s.label} asChild className="p-0.5">
              <a
                href={s.href}
                target={s.href.startsWith("/") ? undefined : "_blank"}
                rel={s.href.startsWith("/") ? undefined : "noopener noreferrer"}
                aria-label={s.label}
                title={s.label}
                onClick={() =>
                  posthog.capture("contact_link_clicked", {
                    platform: s.label,
                    href: s.href,
                  })
                }
              >
                <SocialIcon label={s.label} />
                <span className="hidden sm:inline">{s.label}</span>
              </a>
            </Button>
          ))}
        </div>
        <div className="shrink-0 self-end sm:self-auto">
          <AnalogClock />
        </div>
      </div>
    </footer>
  );
}
