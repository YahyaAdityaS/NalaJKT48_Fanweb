import { cn } from "@/lib/utils";

type LogoProps = {
  tone?: "light" | "dark";
  className?: string;
};

/** The +NALANIA wordmark shared by the navbar and footer. */
export function Logo({ tone = "light", className }: LogoProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={cn(
        "inline-flex items-baseline gap-0.5 text-lg font-extrabold tracking-[-0.03em] sm:text-xl",
        isDark ? "text-white" : "text-ink",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "mr-0.5 inline-block text-[1.15em] leading-none transition-transform duration-300 group-hover:rotate-90",
          isDark ? "text-sky-300" : "text-cobalt",
        )}
      >
        +
      </span>
      NALANIA
    </span>
  );
}
