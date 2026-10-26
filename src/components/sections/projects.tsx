import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/website/brand-icons";
import { Reveal } from "@/components/website/reveal";
import { SectionHeading } from "@/components/website/section-heading";
import { projects } from "@/lib/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03 / projects"
          title="Featured projects"
          description="Selected things I've built — repositories and live demos are added as links become available."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 100}
              className="group card-lift flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/30 hover:border-ring/30 hover:shadow-[0_12px_48px_-16px_rgb(194_248_0/0.10)]"
            >
              {/* Decorative tile placeholder — no fabricated screenshots */}
              <div className="relative flex h-36 items-center justify-center border-b border-border/60 bg-[linear-gradient(135deg,rgb(194_248_0/0.07),transparent_55%)]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgb(194_248_0/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(194_248_0/0.05)_1px,transparent_1px)] [background-size:22px_22px]"
                />
                <span className="font-heading text-4xl font-bold tracking-widest text-primary/70 transition-colors duration-300 group-hover:text-primary">
                  {project.initials}
                </span>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-lg border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="sr-only">Open live demo</span>
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{project.title}</h3>
                    {project.subtitle ? (
                      <p className="mt-0.5 font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground/70">
                        {project.subtitle}
                      </p>
                    ) : null}
                  </div>
                </div>
                <p className="mt-3 flex-1 text-[0.85rem] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tech.length > 0 ? (
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded border border-border/50 bg-background/40 px-2 py-1 font-mono text-[0.62rem] text-foreground/70"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {project.github || project.live ? (
                  <div className="mt-5 flex items-center gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border/60 px-2.5 py-1.5 font-mono text-[0.68rem] text-muted-foreground transition-colors hover:border-ring/35 hover:text-foreground"
                      >
                        <GithubIcon className="size-3.5" />
                        Code
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-1.5 font-mono text-[0.68rem] text-primary transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight className="size-3.5" aria-hidden="true" />
                        Live demo
                      </a>
                    ) : null}
                  </div>
                ) : (
                  <p className="mt-5 font-mono text-[0.62rem] uppercase tracking-widest text-muted-foreground/50">
                    {/* Links pending — wired from src/lib/portfolio.ts */}
                    links pending
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-8">
          <p className="font-mono text-[0.68rem] text-muted-foreground/60">
            <span className="text-primary/70">{'//'}</span> add real project URLs, stacks, and
            screenshots in{" "}
            <code className="text-primary/90">src/lib/portfolio.ts</code>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
