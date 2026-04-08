import { Button } from "@/app/components/ui/Button";
import { socialLinks } from "../constants/socials";

export function Header() {
  return (
    <header className="w-full flex items-baseline justify-between">
      <div>
        <h1 className="m-0 text-3xl md:text-4xl font-medium tracking-tight">
          Mahendra Devkar
        </h1>
        <p className="m-0 mt-1 ml-[1px] text-sm text-muted-foreground">
          Gujarat, India
        </p>
      </div>
      <nav className="text-sm">
        <ul className="m-0 p-0 flex flex-wrap items-center gap-2 text-muted-foreground">
          {socialLinks.map((s, i) => (
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
              {i < socialLinks.length - 1 ? <span className="w-2" /> : null}
            </li>
          ))}
        </ul>
        <p className="m-0 mt-2 text-sm text-muted-foreground" />
      </nav>
    </header>
  );
}
