import { CodeXml, Server, Wrench } from "lucide-react";
import { Reveal } from "@/components/website/reveal";
import { SectionHeading } from "@/components/website/section-heading";
import { skillGroups } from "@/lib/portfolio";

const ICONS = {
  code: CodeXml,
  server: Server,
  wrench: Wrench,
} as const;

export function Skills() {
  return (
    <section id="skills" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="02 / skills"
          title="Skills & technologies"
          description="The tools I use to design, build, and ship full-stack web applications."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal
                key={group.label}
                delay={gi * 110}
                className="card-lift rounded-2xl border border-border/70 bg-card/30 p-6 hover:border-ring/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-ring/20 bg-primary/5">
                      <Icon className="size-4 text-primary" aria-hidden="true" />
                    </span>
                    <h3 className="font-heading text-base font-semibold">{group.label}</h3>
                  </div>
                  <span className="font-mono text-[0.65rem] text-muted-foreground/60">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/40 px-2.5 py-1.5 font-mono text-[0.68rem] text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-ring/35 hover:text-foreground motion-safe:hover:-translate-y-0.5"
                    >
                      <span className="size-1 rounded-full bg-primary/80" aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
