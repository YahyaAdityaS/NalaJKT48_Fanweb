import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p
        className={cn(
          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
          isDark
            ? "border-white/15 bg-white/[0.08] text-white/75"
            : "border-line bg-mist text-cobalt",
        )}
      >
        <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
        {eyebrow}
      </p>

      <h2
        className={cn(
          "mt-4 text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-4xl lg:text-[2.75rem]",
          isDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-relaxed sm:text-base",
            isDark ? "text-white/65" : "text-slate-body",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
