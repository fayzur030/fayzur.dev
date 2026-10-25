import { CodeXml, Server, Layers, Compass } from "lucide-react";
import { Reveal } from "@/components/website/reveal";
import { SectionHeading } from "@/components/website/section-heading";
import { site } from "@/lib/portfolio";

const highlights = [
  {
    icon: CodeXml,
    title: "Frontend craft",
    text: "Building clean, responsive interfaces with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Practical backend",
    text: "Comfortable with Node.js, Express, and MongoDB for real application needs.",
  },
  {
    icon: Layers,
    title: "Reusable components",
    text: "I value well-structured UI systems that stay maintainable as projects grow.",
  },
  {
    icon: Compass,
    title: "Always learning",
    text: "Enjoy turning new concepts into working features — the problem-solving is the fun part.",
  },
];

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="01 / about"
          title="About me"
        />

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-5 text-[0.98rem] leading-relaxed text-muted-foreground">
              <p>
                I&apos;m {site.name}, a full-stack web developer focused on building practical,
                user-friendly web applications. My journey started with curiosity about how the
                web works — and grew into learning how to design and ship complete applications,
                from the interface users interact with to the APIs and data behind them.
              </p>
              <p>
                I care about clean UI and reusable components just as much as the logic behind
                them, so what I build stays easy to understand, extend, and maintain.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 90}
                className="card-lift rounded-xl border border-border/70 bg-card/30 p-5 hover:border-ring/30"
              >
                <item.icon className="size-4 text-primary" aria-hidden="true" />
                <h3 className="mt-3 font-heading text-[0.95rem] font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-[0.82rem] leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
