import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { heroStats, shows } from "@/lib/data";

export function Hero() {
  const nextShow = shows.find((show) => show.featured) ?? shows[0];

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-mist pt-24 lg:pt-24"
    >
      {/*
       * A single stage-light bloom behind the opening act. Static gradient,
       * animated opacity only, so it never repaints on scroll.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[68%] animate-spotlight-in bg-[radial-gradient(ellipse_58%_62%_at_50%_0%,rgba(31,95,219,0.15),transparent_72%)]"
      />

      {/* The oversized wordmark stays in the background, never behind body copy. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center text-[24vw] font-extrabold leading-[0.72] tracking-[-0.06em] text-ink/[0.035]"
      >
        NALANIA
      </span>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <div className="grid flex-1 items-center gap-10 py-8 sm:gap-12 lg:grid-cols-12 lg:gap-6 lg:py-6">
          {/* Copy */}
          <div className="lg:col-span-6">
            <p
              className="inline-flex animate-hero-up items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-cobalt sm:text-[11px]"
              style={{ animationDelay: "60ms" }}
            >
              <span className="size-1.5 rounded-full bg-cobalt" aria-hidden="true" />
              JKT48 · Gen 12 · Team Dream
            </p>

            <h1 className="mt-5 text-[clamp(3.5rem,9vw,7rem)] font-extrabold leading-[0.82] tracking-[-0.05em]">
              <span className="sr-only">NALANIA</span>
              <span aria-hidden="true" className="block">
                <span className="line-mask">
                  <span
                    className="block animate-hero-line text-ink"
                    style={{ animationDelay: "120ms" }}
                  >
                    NALA
                  </span>
                </span>
                <span className="line-mask">
                  <span
                    className="block animate-hero-line"
                    style={{ animationDelay: "210ms" }}
                  >
                    <span className="text-outline text-cobalt">NIA</span>
                    <span className="text-cobalt">.</span>
                  </span>
                </span>
              </span>
            </h1>

            <p
              className="mt-6 animate-hero-up text-lg font-semibold tracking-[-0.01em] text-ink sm:text-xl"
              style={{ animationDelay: "320ms" }}
            >
              Well-being that fits your life ~
            </p>
            <p
              className="mt-2 max-w-md animate-hero-up text-[15px] leading-relaxed text-slate-body sm:text-base"
              style={{ animationDelay: "380ms" }}
            >
              Roar! Si singa pemberani yang siap menyemangati harimu, Nala!
            </p>

            <div
              className="mt-7 flex animate-hero-up flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "440ms" }}
            >
              <ButtonLink href="#about" size="lg">
                Kenalan sama Nala
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#schedule" variant="outline" size="lg">
                <CalendarDays className="size-4" aria-hidden="true" />
                Lihat jadwal
              </ButtonLink>
            </div>

            <p
              className="mt-5 flex animate-hero-up items-center gap-1.5 text-[11px] text-slate-body"
              style={{ animationDelay: "500ms" }}
            >
              <ShieldCheck className="size-3.5" aria-hidden="true" />
              Fan-made tribute. Foto © JKT48, bukan situs resmi.
            </p>
          </div>

          {/* Portrait composition */}
          <div className="lg:col-span-6">
            <div
              className="relative mx-auto w-full max-w-[440px] animate-portrait-in"
              style={{ animationDelay: "200ms" }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-4 top-8 bottom-20 overflow-hidden rounded-[2.5rem] shadow-soft sm:inset-x-8"
              >
                <Image
                  src="/images/hero-water.webp"
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ink/15 via-transparent to-white/15" />
              </div>

              <div className="relative z-10 mx-auto w-[82%] max-w-[350px] overflow-hidden rounded-[1.75rem] border-[7px] border-white bg-white shadow-lift">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src="/images/nala/portrait-blue.webp"
                    alt="Shabilqis Naila Bustomi, member JKT48 Generasi 12"
                    fill
                    priority
                    sizes="(min-width: 1024px) 350px, 80vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent p-4 pt-16">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/75">
                      Official profile · 2026
                    </p>
                    <p className="mt-1 text-[15px] font-bold text-white">
                      Shabilqis Naila Bustomi
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-6 z-20 rounded-2xl border border-white/70 bg-white/85 px-3.5 py-2 shadow-soft backdrop-blur sm:right-1">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-body">
                  Currently
                </p>
                <p className="mt-0.5 text-xs font-bold text-ink">Team Dream</p>
              </div>

              <a
                href="#schedule"
                className="group relative z-20 mx-auto mt-4 flex w-[94%] max-w-[340px] items-center gap-3 rounded-2xl border border-line bg-white/95 p-3.5 shadow-soft backdrop-blur transition-colors hover:border-cobalt/30 sm:absolute sm:-bottom-4 sm:left-0 sm:mt-0 sm:w-[252px]"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ice text-cobalt">
                  <CalendarDays className="size-[18px]" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-body">
                    Next show
                  </span>
                  <span className="mt-0.5 block truncate text-[13px] font-bold text-ink">
                    {nextShow.day} {nextShow.month} · Aitakatta
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-body">
                    <MapPin className="size-3" aria-hidden="true" />
                    FX Sudirman
                  </span>
                </span>
                <ArrowUpRight
                  className="ml-auto size-4 shrink-0 text-slate-body transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="sr-only">Lihat jadwal pertunjukan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick facts strip */}
        <dl className="relative z-10 grid grid-cols-2 gap-y-4 border-t border-ink/10 py-5 sm:grid-cols-4">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className="flex animate-hero-up items-baseline gap-2 sm:justify-center sm:border-l sm:border-line sm:first:border-l-0"
              style={{ animationDelay: `${560 + index * 55}ms` }}
            >
              <dt className="order-2 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-body">
                {stat.label}
              </dt>
              <dd className="order-1 text-lg font-extrabold tracking-[-0.02em] text-ink">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
