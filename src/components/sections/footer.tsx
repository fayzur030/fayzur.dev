import { site, navLinks } from "@/lib/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/website/brand-icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border/60 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex size-7 items-center justify-center rounded-md border border-ring/30 bg-primary/10 font-mono text-[0.62rem] font-bold text-primary">
            FR
          </span>
          <p className="font-mono text-[0.7rem] text-muted-foreground">
            © {year} {site.name}
          </p>
        </div>

        <ul className="flex items-center gap-1">
          {navLinks.slice(0, 4).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded px-2 py-1 font-mono text-[0.7rem] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {site.links.github ? (
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-ring/40 hover:text-foreground"
            >
              <span className="sr-only">GitHub</span>
              <GithubIcon className="size-3.5" />
            </a>
          ) : null}
          {site.links.linkedin ? (
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex size-8 items-center justify-center rounded-md border border-border/60 text-muted-foreground transition-colors hover:border-ring/40 hover:text-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="size-3.5" />
            </a>
          ) : null}
          <p className="hidden font-mono text-[0.65rem] text-muted-foreground/50 md:block">
            next.js · tailwind · lime
          </p>
        </div>
      </div>
    </footer>
  );
}
