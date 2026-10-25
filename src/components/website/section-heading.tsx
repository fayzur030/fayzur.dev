import { cn } from "@/lib/utils";
import { Reveal } from "@/components/website/reveal";

type SectionHeadingProps = {
  /** Space Mono decorative identifier, e.g. "01 / about" */
  index: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({ index, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-12 max-w-2xl", className)} as="div">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.25em] text-primary/80">
        {index}
      </p>
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </Reveal>
  );
}
