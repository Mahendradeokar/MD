import { ExternalLink } from "lucide-react";
import { Github } from "../icons";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/Card";

type Project = {
  name: string;
  description: string;
  href: string;
  meta?: string;
};

const projects: Project[] = [
  {
    name: "AI Invoice Customizer (Invox)",
    description:
      "AI-powered invoice customization with chat-driven editing, templates, live preview; exports Handlebars/HTML/JSON.",
    href: "https://github.com/Mahendradeokar/invox",
    meta: "Next.js · Zustand · shadcn/ui · Tiptap · Node/Express · MongoDB",
  },
  {
    name: "Form Builder",
    description:
      "Drag-and-drop form designer with real-time preview, extensible controls, and robust validation.",
    href: "https://github.com/Mahendradeokar/form_builder",
    meta: "Next.js · Redux Toolkit · Auth Middleware · Axios",
  },
  {
    name: "Area Browser",
    description: "Landing page",
    href: "https://github.com/Mahendradeokar/area-browser-site",
    meta: "Next.js · Tailwind",
  },
];

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className="w-full">
      <h2 id="projects-heading" className="m-0 mt-2 p-0 text-muted-foreground sm:mt-4">
        Projects
      </h2>
      <ul className="m-0 mt-3 grid min-w-0 gap-4 p-0">
        {projects.map((p) => (
          <li key={p.name} className="list-none">
            <Card className="flex h-full max-w-[58ch] flex-col border-none">
              <CardContent className="flex flex-col gap-2 pb-0 px-0">
                <CardTitle className="text-[clamp(1rem,3.5vw,1.125rem)]">
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-0 items-center gap-1 break-words underline underline-offset-2 transition hover:text-primary"
                    aria-label={`${p.name} (opens in new tab)`}
                  >
                    <span className="min-w-0">{p.name}</span>
                    <ExternalLink
                      size={16}
                      className="inline-block shrink-0 align-middle text-muted-foreground"
                      aria-label="Opens in new tab"
                    />
                  </a>
                </CardTitle>
                <CardDescription className="mt-2 pointer-events-none select-text">
                  {p.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="px-0">
                <div className="min-w-0 text-xs leading-relaxed text-muted-foreground self-center pointer-events-none select-text">
                  {p.meta}
                </div>
              </CardFooter>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  );
}
