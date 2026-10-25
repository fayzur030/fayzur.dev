import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/website/brand-icons";
import { Reveal } from "@/components/website/reveal";
import { SectionHeading } from "@/components/website/section-heading";
import { site } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function Contact() {
  const email = site.links.email;
  const githubHref = site.links.github;
  const linkedinHref = site.links.linkedin;
  const anythingConfigured = Boolean(email || githubHref || linkedinHref);

  return (
    <section id="contact" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          index="05 / contact"
          title="Get in touch"
          description="I'm always up for discussing new ideas, opportunities, or collaborations — feel free to reach out."
        />

        <Reveal className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/30 p-8 sm:p-12">
          {/* restrained corner glow, behind the card content */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 size-72 rounded-full bg-[radial-gradient(closest-side,rgb(194_248_0/0.08),transparent_70%)]"
          />
          <div className="max-w-xl">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-primary/80">
              open for a conversation
            </p>
            <h3 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
              Let&apos;s build something worth showing.
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              Whether it&apos;s a full-stack project, an internship opportunity, or just a
              question about the web — my inbox is open.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {email ? (
                <a
                  href={`mailto:${email}`}
                  className={cn(buttonVariants({ variant: "aqua", size: "lg" }), "h-11 px-6 text-[0.95rem]")}
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email Me
                </a>
              ) : null}

              {githubHref ? (
                <a
                  href={githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-ring/40 hover:text-foreground"
                >
                  <span className="sr-only">GitHub</span>
                  <GithubIcon className="size-4" />
                </a>
              ) : null}

              {linkedinHref ? (
                <a
                  href={linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-11 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-ring/40 hover:text-foreground"
                >
                  <span className="sr-only">LinkedIn</span>
                  <LinkedinIcon className="size-4" />
                </a>
              ) : null}
            </div>

            {!anythingConfigured && (
              <p className="mt-6 font-mono text-[0.66rem] text-muted-foreground/60">
                <span className="text-primary/70">{"//"}</span> contact channel appears here once
                your email and links are set in{" "}
                <code className="text-primary/90">src/lib/portfolio.ts</code>
              </p>
            )}
          </div>

          {/* Deco: oversized outline word, very low contrast */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-7 right-2 hidden select-none font-heading text-[6rem] font-bold leading-none text-foreground/[0.04] lg:block"
          >
            hello
          </span>
        </Reveal>
      </div>
    </section>
  );
}
