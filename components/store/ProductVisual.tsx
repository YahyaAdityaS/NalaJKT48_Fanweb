import type { ReactNode } from "react";
import type { Product, ProductVisualKind } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProductVisualProps = {
  product: Product;
  /** Compact mode is used inside the cart drawer thumbnails. */
  compact?: boolean;
  className?: string;
};

/**
 * Merchandise mockups are drawn with SVG instead of photos so the concept
 * store stays sharp at every size and never relies on unrelated stock images.
 */
export function ProductVisual({
  product,
  compact = false,
  className,
}: ProductVisualProps) {
  const visuals: Record<ProductVisualKind, ReactNode> = {
    lightstick: <LightstickVisual />,
    photocards: <PhotocardsVisual />,
    hoodie: <HoodieVisual />,
    tee: <TeeVisual />,
  };

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center",
        compact ? "p-1.5" : "p-5",
        className,
      )}
    >
      {!compact ? (
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/75"
        />
      ) : null}
      <div className="relative flex h-full w-full items-center justify-center">
        {visuals[product.visual]}
      </div>
    </div>
  );
}

function LightstickVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-[92%] w-auto"
      role="img"
      aria-label="Ilustrasi lightstick Nalania"
    >
      <defs>
        <radialGradient id="ls-orb" cx="34%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="20%" stopColor="#d6e7ff" />
          <stop offset="58%" stopColor="#4f8bf0" />
          <stop offset="100%" stopColor="#1a50bd" />
        </radialGradient>
        <linearGradient id="ls-handle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f4f9ff" />
          <stop offset="45%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#dbe8f8" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="184" rx="34" ry="6" fill="#081a33" opacity="0.12" />
      <circle
        cx="100"
        cy="52"
        r="35"
        fill="url(#ls-orb)"
        stroke="#ffffff"
        strokeOpacity="0.85"
      />
      <circle cx="88" cy="39" r="8" fill="#ffffff" opacity="0.65" />
      <rect
        x="91"
        y="84"
        width="18"
        height="15"
        rx="4"
        fill="#eaf2fd"
        stroke="#cddcef"
      />
      <rect
        x="79"
        y="97"
        width="42"
        height="68"
        rx="15"
        fill="url(#ls-handle)"
        stroke="#cddcef"
      />
      <rect x="86" y="108" width="28" height="5" rx="2.5" fill="#1f5fdb" opacity="0.28" />
      <text
        x="100"
        y="150"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        letterSpacing="1.6"
        fill="#506176"
      >
        NALANIA
      </text>
      <rect
        x="88"
        y="165"
        width="24"
        height="6"
        rx="3"
        fill="#dbe8f8"
        stroke="#cddcef"
      />
    </svg>
  );
}

function PhotocardsVisual() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-[92%] w-auto"
      role="img"
      aria-label="Ilustrasi set photocard Nalania"
    >
      <defs>
        <filter id="pc-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="5"
            stdDeviation="5"
            floodColor="#081a33"
            floodOpacity="0.18"
          />
        </filter>
        <clipPath id="pc-clip-a">
          <rect x="47" y="35" width="58" height="80" rx="3" />
        </clipPath>
        <clipPath id="pc-clip-b">
          <rect x="78" y="28" width="58" height="80" rx="3" />
        </clipPath>
        <clipPath id="pc-clip-c">
          <rect x="72" y="58" width="62" height="86" rx="3" />
        </clipPath>
      </defs>

      <ellipse cx="100" cy="177" rx="58" ry="7" fill="#081a33" opacity="0.12" />

      <g transform="rotate(-9 76 75)" filter="url(#pc-shadow)">
        <rect
          x="41"
          y="29"
          width="70"
          height="92"
          rx="6"
          fill="#ffffff"
          stroke="#dbe6f4"
        />
        <image
          href="/images/nala/official-trainee.webp"
          x="47"
          y="35"
          width="58"
          height="80"
          preserveAspectRatio="xMidYMin slice"
          clipPath="url(#pc-clip-a)"
        />
        <rect x="47" y="117" width="58" height="1" fill="#eaf2fd" />
      </g>

      <g transform="rotate(5 107 68)" filter="url(#pc-shadow)">
        <rect
          x="72"
          y="22"
          width="70"
          height="92"
          rx="6"
          fill="#ffffff"
          stroke="#dbe6f4"
        />
        <image
          href="/images/nala/portrait-blue.webp"
          x="78"
          y="28"
          width="58"
          height="80"
          preserveAspectRatio="xMidYMin slice"
          clipPath="url(#pc-clip-b)"
        />
        <rect x="78" y="110" width="58" height="1" fill="#eaf2fd" />
      </g>

      <g transform="rotate(13 103 101)" filter="url(#pc-shadow)">
        <rect
          x="66"
          y="52"
          width="74"
          height="98"
          rx="6"
          fill="#ffffff"
          stroke="#dbe6f4"
        />
        <image
          href="/images/nala/daily-backstage.webp"
          x="72"
          y="58"
          width="62"
          height="86"
          preserveAspectRatio="xMidYMin slice"
          clipPath="url(#pc-clip-c)"
        />
        <rect x="72" y="146" width="62" height="1" fill="#eaf2fd" />
      </g>
    </svg>
  );
}

function HoodieVisual() {
  return (
    <svg
      viewBox="0 0 240 260"
      className="h-[92%] w-auto"
      role="img"
      aria-label="Ilustrasi hoodie navy Nalania"
    >
      <defs>
        <linearGradient id="hd-body" x1="0" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#1a3a63" />
          <stop offset="55%" stopColor="#0d2748" />
          <stop offset="100%" stopColor="#081a33" />
        </linearGradient>
      </defs>

      <ellipse cx="120" cy="248" rx="64" ry="7" fill="#081a33" opacity="0.12" />

      {/* Body, sleeves, and shoulder seams */}
      <path
        d="M80 34 L98 24 C107 45 133 45 142 24 L160 34 L206 60 L186 106 L163 92 L163 232 C140 242 100 242 77 232 L77 92 L54 106 L34 60 Z"
        fill="url(#hd-body)"
      />
      <path
        d="M98 24 C107 45 133 45 142 24 L156 30 C147 68 93 68 84 30 Z"
        fill="#0b2140"
      />
      <path
        d="M98 24 C107 45 133 45 142 24"
        fill="none"
        stroke="#2c4e75"
        strokeWidth="3"
      />
      <path
        d="M84 30 C93 68 147 68 156 30"
        fill="none"
        stroke="#2c4e75"
        strokeWidth="2"
        opacity="0.7"
      />

      {/* Drawstrings */}
      <path
        d="M112 48 L109 88 M128 48 L131 88"
        stroke="#dbe7f7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="109" cy="90" r="2.6" fill="#dbe7f7" />
      <circle cx="131" cy="90" r="2.6" fill="#dbe7f7" />

      {/* Kangaroo pocket */}
      <path
        d="M92 170 L120 160 L148 170 L137 208 L103 208 Z"
        fill="#0a1f3c"
        stroke="#2c4e75"
        strokeWidth="2"
      />

      {/* Chest emblem */}
      <circle cx="120" cy="120" r="15" fill="#1f5fdb" />
      <text
        x="120"
        y="126"
        textAnchor="middle"
        fontSize="16"
        fontWeight="800"
        fill="#ffffff"
        fontFamily="sans-serif"
      >
        N
      </text>

      {/* Ribbed hem */}
      <path
        d="M78 224 C100 234 140 234 162 224"
        fill="none"
        stroke="#2c4e75"
        strokeWidth="2.5"
        opacity="0.8"
      />
    </svg>
  );
}

function TeeVisual() {
  return (
    <svg
      viewBox="0 0 240 260"
      className="h-[92%] w-auto"
      role="img"
      aria-label="Ilustrasi kaos off-white Nalania"
    >
      <defs>
        <linearGradient id="tee-body" x1="0" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f7fafe" />
          <stop offset="100%" stopColor="#e4ecf7" />
        </linearGradient>
      </defs>

      <ellipse cx="120" cy="248" rx="62" ry="7" fill="#081a33" opacity="0.1" />

      <path
        d="M86 30 L106 20 C112 36 128 36 134 20 L154 30 L208 62 L188 108 L164 94 L164 234 C140 242 100 242 76 234 L76 94 L52 108 L32 62 Z"
        fill="url(#tee-body)"
        stroke="#d7e2f0"
        strokeWidth="1.5"
      />
      <path
        d="M106 20 C112 40 128 40 134 20"
        fill="none"
        stroke="#d0dded"
        strokeWidth="3"
      />
      <path
        d="M79 92 C78 138 78 188 80 231 M161 92 C162 138 162 188 160 231"
        fill="none"
        stroke="#e1e9f4"
        strokeWidth="2"
      />

      <circle cx="120" cy="108" r="13" fill="#1f5fdb" />
      <text
        x="120"
        y="113.5"
        textAnchor="middle"
        fontSize="14"
        fontWeight="800"
        fill="#ffffff"
        fontFamily="sans-serif"
      >
        N
      </text>
      <text
        x="120"
        y="134"
        textAnchor="middle"
        fontSize="6"
        fontWeight="700"
        letterSpacing="2.4"
        fill="#1f5fdb"
        fontFamily="sans-serif"
      >
        NALANIA
      </text>

      <path
        d="M78 228 C100 236 140 236 162 228"
        fill="none"
        stroke="#d7e2f0"
        strokeWidth="2"
      />
    </svg>
  );
}
