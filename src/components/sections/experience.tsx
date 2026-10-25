import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/website/reveal";
import { SectionHeading } from "@/components/website/section-heading";
import { experience } from "@/lib/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="04 / experience"
          title="Experience"
        />

        {experience.length > 0 ? (
          <ol className="relative space-y-10 border-l border-border/70 pl-6">
            {experience.map((item, i) => (
              <Reveal key={`${item.role}-${item.organization}`} as="li" delay={i * 90}>
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] mt-1.5 size-3.5 rounded-full border-2 border-background bg-primary/80 shadow-[0_0_10px_rgb(194_248_0/0.4)]"
                />
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-lg font-semibold">{item.role}</h3>
                  <span className="text-[0.9rem] text-primary/90">{item.organization}</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground/70">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        ) : (
          <Reveal className="rounded-2xl border border-dashed border-border/80 bg-card/20 p-6">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-lg border border-ring/20 bg-primary/5">
                <BriefcaseBusiness className="size-4 text-primary" aria-hidden="true" />
              </span>
              <p className="font-mono text-[0.8rem] text-muted-foreground">
                Internship experience — details in progress
              </p>
            </div>
            <p className="mt-3 text-[0.85rem] leading-relaxed text-muted-foreground/80">
              My internship details (role, organization, dates, and what I worked on) are being
              finalized and this section will be updated with verified information only.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
