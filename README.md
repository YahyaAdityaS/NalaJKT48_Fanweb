# NALANIA

A fan-made tribute site for **Shabilqis Naila Bustomi (Nala)** of JKT48 — Generasi 12, Team Dream.
Built as a single-page Next.js app with a light, editorial look: deep navy, cobalt accents, and generous whitespace.

> This is an unofficial, non-commercial fan project. It is not affiliated with JKT48 Operation Team.
> Photos remain © JKT48 (see [credits](#image-credits)). The store, checkout, and mailing list are design demos.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run lint
npx tsc --noEmit
npm run build && npm run start
```

Requires Node 20+.

## What's inside

- **Hero** — portrait composition, oversized `NALANIA` wordmark, next-show card, quick facts strip.
- **About** — bio, profile facts, and a three-step journey timeline.
- **Schedule & News** — accessible tabs with arrow-key support, ticket status badges, news dialog.
- **Gallery** — All / Stage / Official / Daily filters, hover zoom, keyboard lightbox (← → Esc).
- **Store** — four merchandise concepts drawn as SVG mockups, demo cart drawer with quantity controls.
- **Community** — demo newsletter form with validation and success state.
- **Footer** — quick links, official channels, photo credits.

The site is intentionally light-theme only, and the cart lives in memory — no transaction ever happens.

## Structure

```
app/
  layout.tsx          fonts, metadata, skip link, cart provider + drawer
  page.tsx            section composition and the #page-top sentinel
  globals.css         design tokens, outline type, glass, keyframes
components/
  layout/             Navbar, Footer, Logo, SocialLinks
  sections/           Hero, About, ScheduleNews, Gallery, Store, Community
  store/              ProductVisual (SVG mockups)
  cart/               CartButton, CartDrawer
  ui/                 Button, Badge, SectionHeading, Reveal
lib/
  data.ts             typed content: nav, shows, news, gallery, products, facts, timeline, socials
  cart.tsx            demo cart context
  hooks.ts            shared body-scroll lock counter, Escape key hook
  format.ts           IDR formatting
  utils.ts            cn() helper
public/images/
  nala/               eight photos of Nala (webp)
  hero-water.webp     Unsplash background
  CREDITS.md          per-file attribution
```

All copy and content data lives in `lib/data.ts`, so sections stay presentational.

## Design tokens

Defined once in `app/globals.css` and used through Tailwind utilities:

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#081a33` | primary text, dark panels |
| `navy` | `#0d2748` | hover states on dark |
| `cobalt` | `#1f5fdb` | accents, primary actions |
| `mist` | `#f5f8fd` | section backgrounds |
| `ice` | `#eaf2fd` | tinted surfaces |
| `line` | `#dfe8f4` | borders |
| `slate-body` | `#506176` | body copy |

Type is Plus Jakarta Sans (via `next/font`). Corners are `rounded-xl`/`2xl`, shadows are soft and low-contrast.

## Accessibility & motion

- Skip link, landmarks, labelled controls, and visible focus rings.
- Tabs follow the WAI-ARIA tabs pattern (roving `tabIndex`, arrow keys).
- Dialogs close on Escape and lock background scroll through a shared counter, so overlapping overlays behave.
- `prefers-reduced-motion` disables reveals and slide animations.
- Images use `next/image` with explicit sizes; only hero imagery is priority-loaded.

## Image credits

Full per-file attribution is in [`public/images/CREDITS.md`](public/images/CREDITS.md).

- Nala photos: © JKT48, via the JKT48 Wiki, used for a non-commercial fan tribute.
- Backstage photo: Axioo Indonesia, CC BY 4.0 (Wikimedia Commons).
- Hero background: Silas Baisch on Unsplash, Unsplash License.
- Merchandise artwork: original SVG concept mockups created for this project.

## Disclaimer

Fan-made concept site. Schedule, news, products, prices, and the mailing list are illustrative. For official information, always check [jkt48.com](https://jkt48.com/) and Nala's official channels.
