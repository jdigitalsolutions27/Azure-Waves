import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-[clamp(1.9rem,6.2vw,2.45rem)] leading-tight text-foreground">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p> : null}
    </div>
  );
}

