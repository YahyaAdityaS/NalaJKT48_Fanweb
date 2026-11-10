import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "neutral" | "success" | "warning" | "muted" | "cobalt" | "onDark";

const tones: Record<BadgeTone, string> = {
  neutral: "border-line bg-white text-ink",
  success: "border-success/15 bg-[#e9f8f1] text-success",
  warning: "border-warning/15 bg-[#fdf3e5] text-warning",
  muted: "border-line bg-mist text-slate-body",
  cobalt: "border-cobalt/15 bg-ice text-cobalt",
  onDark: "border-white/20 bg-white/10 text-white",
};

type BadgeProps = {
  children: ReactNode;
  tone?: BadgeTone;
  dot?: boolean;
  className?: string;
};

export function Badge({
  children,
  tone = "neutral",
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide",
        tones[tone],
        className,
      )}
    >
      {dot ? (
        <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      ) : null}
      {children}
    </span>
  );
}
