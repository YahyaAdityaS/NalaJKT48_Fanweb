import { AtSign } from "lucide-react";
import type { ReactElement, SVGProps } from "react";
import { socials, type SocialId } from "@/lib/data";
import { cn } from "@/lib/utils";

/** Minimal brand marks, kept local because Lucide no longer ships brand icons. */
function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.15" fill="currentColor" />
    </svg>
  );
}

function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.9 2H22l-7.37 8.43L23.2 22h-6.78l-5.31-6.94L4.98 22H1.86l7.9-9.02L1.2 2h6.95l4.8 6.35L18.9 2Zm-1.18 18.02h1.73L6.94 3.88H5.08l12.64 16.14Z" />
    </svg>
  );
}

function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.13C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.51A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.12 2.13c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3 3 0 0 0 2.12-2.13C24 15.9 24 12 24 12s0-3.9-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
    </svg>
  );
}

const iconMap: Record<
  SocialId,
  (props: SVGProps<SVGSVGElement>) => ReactElement
> = {
  instagram: InstagramIcon,
  x: XIcon,
  threads: (props) => <AtSign aria-hidden="true" {...props} />,
  youtube: YouTubeIcon,
};

type SocialLinksProps = {
  tone?: "light" | "dark";
  withLabels?: boolean;
  className?: string;
};

export function SocialLinks({
  tone = "light",
  withLabels = false,
  className,
}: SocialLinksProps) {
  const isDark = tone === "dark";

  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {socials.map((social) => {
        const Icon = iconMap[social.id];

        return (
          <li key={social.id}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${social.label} Nala: ${social.handle}`}
              className={cn(
                "group inline-flex items-center gap-2 rounded-full border transition-colors",
                withLabels ? "px-3.5 py-2" : "size-10 justify-center",
                isDark
                  ? "border-white/15 bg-white/[0.06] text-white/75 hover:border-white/35 hover:text-white"
                  : "border-line bg-white text-slate-body hover:border-cobalt/35 hover:text-cobalt",
              )}
            >
              <Icon className="size-[18px]" />
              {withLabels ? (
                <span className="text-[13px] font-medium">{social.handle}</span>
              ) : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
