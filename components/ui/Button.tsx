import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "dark" | "outline" | "light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold leading-none transition-all duration-200 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-45";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-cobalt text-white shadow-[0_12px_30px_-14px_rgba(31,95,219,0.9)] hover:-translate-y-0.5 hover:bg-[#1852c4] active:translate-y-0",
  dark: "bg-ink text-white shadow-[0_12px_30px_-16px_rgba(8,26,51,0.9)] hover:-translate-y-0.5 hover:bg-navy active:translate-y-0",
  outline:
    "border border-line bg-white text-ink hover:border-cobalt/35 hover:bg-mist",
  light: "bg-white text-ink hover:bg-ice",
  ghost: "text-ink hover:bg-mist",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

type StyleOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

/** Shared class builder so links and buttons stay visually identical. */
export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: StyleOptions = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & StyleOptions;

export function Button({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & StyleOptions;

export function ButtonLink({
  variant,
  size,
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={buttonStyles({ variant, size, className })} {...props} />;
}
