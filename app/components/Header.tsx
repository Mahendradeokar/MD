import { Button } from "@/app/components/ui/Button";
import { socialLinks } from "../constants/socials";

export function Header() {
  return (
    <header className="flex w-full min-w-0 flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between">
      <div className="min-w-0">
        <h1 className="m-0 text-[clamp(1.75rem,8vw,2.25rem)] font-medium leading-[1.05] tracking-tight">
          Mahendra Devkar
        </h1>
        <p className="m-0 mt-1 ml-[1px] text-sm text-muted-foreground">
          Gujarat, India
        </p>
      </div>
      <nav className="min-w-0 text-sm sm:flex sm:justify-end">
        <ul className="m-0 flex min-w-0 flex-wrap items-center gap-x-3 gap-y-1 p-0 text-muted-foreground sm:justify-end">
          {socialLinks.map((s) => (
            <li key={s.label} className="flex items-center">
              <Button variant="ghost" size="sm" asChild>
                <a
                  href={s.href}
                  target={s.href.startsWith("/") ? undefined : "_blank"}
                  rel={
                    s.href.startsWith("/") ? undefined : "noopener noreferrer"
                  }
                >
                  <span>{s.label}</span>
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
