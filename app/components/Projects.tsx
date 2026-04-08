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
      <h2 id="projects-heading" className="m-0 mt-4 p-0 text-muted-foreground">
        Projects
      </h2>
      <ul
        className="
          m-0 mt-3 p-0 space-y-1 
        "
      >
        {projects.map((p) => (
          <li key={p.name} className="list-none">
            <Card className="h-full flex flex-col border-none max-w-[50ch]">
              <CardContent className="flex flex-col gap-2 pb-0 px-0">
                <CardTitle>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-2 hover:text-primary transition"
                    aria-label={`${p.name} (opens in new tab)`}
                  >
                    {p.name}
                    <ExternalLink
                      size={16}
                      className="inline-block align-middle text-muted-foreground"
                      aria-label="Opens in new tab"
                    />
                  </a>
                </CardTitle>
                <CardDescription className="mt-2 pointer-events-none select-text">
                  {p.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="px-0">
                <div className="text-xs text-muted-foreground self-center pointer-events-none select-text">
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
