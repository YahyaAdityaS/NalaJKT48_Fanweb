"use client";

import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent, RefObject } from "react";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  news,
  shows,
  showStatusLabels,
  type NewsItem,
  type Show,
  type ShowStatus,
} from "@/lib/data";
import { useEscapeKey, useLockBodyScroll } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Tab = "schedule" | "news";

const statusTone: Record<ShowStatus, "success" | "warning" | "muted"> = {
  available: "success",
  limited: "warning",
  soldout: "muted",
};

export function ScheduleNews() {
  const [tab, setTab] = useState<Tab>("schedule");
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const closeNewsButtonRef = useRef<HTMLButtonElement>(null);
  const scheduleTabRef = useRef<HTMLButtonElement>(null);
  const newsTabRef = useRef<HTMLButtonElement>(null);

  const handleTabListKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const nextTab: Tab = tab === "schedule" ? "news" : "schedule";
    setTab(nextTab);
    (nextTab === "schedule" ? scheduleTabRef : newsTabRef).current?.focus();
  };

  const featuredShow = shows.find((show) => show.featured) ?? shows[0];
  const otherShows = shows.filter((show) => show.id !== featuredShow.id);

  const closeNews = () => setSelectedNews(null);

  useLockBodyScroll(Boolean(selectedNews));
  useEscapeKey(Boolean(selectedNews), closeNews);

  useEffect(() => {
    if (!selectedNews) return;

    const frame = requestAnimationFrame(() =>
      closeNewsButtonRef.current?.focus(),
    );
    return () => cancelAnimationFrame(frame);
  }, [selectedNews]);

  return (
    <section id="schedule" className="relative bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Schedule & News"
            title="Ketemu Nala, atau baca kabar terbarunya."
            description="Jadwal panggung dan catatan kecil dari perjalanan Nala. Semua tiket mengarah ke kanal resmi JKT48."
          />

          <div
            role="tablist"
            aria-label="Jadwal dan kabar"
            onKeyDown={handleTabListKeyDown}
            className="inline-flex shrink-0 self-start rounded-full border border-line bg-white p-1 sm:self-auto"
          >
            <button
              ref={scheduleTabRef}
              type="button"
              role="tab"
              id="tab-schedule"
              aria-selected={tab === "schedule"}
              aria-controls="panel-schedule"
              tabIndex={tab === "schedule" ? 0 : -1}
              onClick={() => setTab("schedule")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
                tab === "schedule"
                  ? "bg-ink text-white"
                  : "text-slate-body hover:text-ink",
              )}
            >
              Jadwal
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums",
                  tab === "schedule"
                    ? "bg-white/15 text-white"
                    : "bg-mist text-slate-body",
                )}
              >
                {shows.length}
              </span>
            </button>
            <button
              ref={newsTabRef}
              type="button"
              role="tab"
              id="tab-news"
              aria-selected={tab === "news"}
              aria-controls="panel-news"
              tabIndex={tab === "news" ? 0 : -1}
              onClick={() => setTab("news")}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
                tab === "news"
                  ? "bg-ink text-white"
                  : "text-slate-body hover:text-ink",
              )}
            >
              Kabar
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] tabular-nums",
                  tab === "news"
                    ? "bg-white/15 text-white"
                    : "bg-mist text-slate-body",
                )}
              >
                {news.length}
              </span>
            </button>
          </div>
        </div>

        <div
          key={tab}
          id={`panel-${tab}`}
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          className="mt-10 animate-rise-in"
        >
          {tab === "schedule" ? (
            <div>
              <FeaturedShow show={featuredShow} />

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherShows.map((show) => (
                  <ShowCard key={show.id} show={show} />
                ))}
              </div>

              <p className="mt-6 flex max-w-3xl items-start gap-2 text-xs leading-relaxed text-slate-body">
                <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                <span>
                  Jadwal di halaman ini adalah ilustrasi konsep fan page. Selalu
                  cek{" "}
                  <a
                    href="https://jkt48.com/theater/schedule"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-cobalt underline-offset-4 hover:underline"
                  >
                    jadwal resmi JKT48
                  </a>{" "}
                  untuk tanggal dan ketersediaan tiket terbaru.
                </span>
              </p>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {news.map((item) => (
                <article
                  key={item.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/20 hover:shadow-soft"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedNews(item)}
                    className="relative aspect-[16/10] overflow-hidden bg-mist text-left"
                    aria-label={`Baca berita: ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm backdrop-blur">
                      {item.category}
                    </span>
                  </button>

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-body">
                      {item.date}
                    </p>
                    <h3 className="mt-2 text-base font-bold leading-snug text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-slate-body">
                      {item.excerpt}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedNews(item)}
                      className="mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-semibold text-cobalt transition-colors hover:text-ink"
                    >
                      Baca selengkapnya
                      <ArrowRight
                        className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedNews ? (
        <NewsDialog
          item={selectedNews}
          onClose={closeNews}
          closeButtonRef={closeNewsButtonRef}
        />
      ) : null}
    </section>
  );
}

function FeaturedShow({ show }: { show: Show }) {
  return (
    <article className="relative overflow-hidden rounded-[1.75rem] bg-ink p-6 text-white sm:p-8">
      <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="onDark" dot>
              Next show
            </Badge>
            <Badge tone={statusTone[show.status]} dot>
              {showStatusLabels[show.status]}
            </Badge>
          </div>

          <h3 className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] sm:text-3xl">
            {show.title}
          </h3>

          <ul className="mt-4 grid gap-2.5 text-sm text-white/70 sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
              {show.weekday}, {show.day} {show.month} {show.year}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" aria-hidden="true" />
              {show.time}
            </li>
            <li className="flex items-center gap-2 sm:col-span-2">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              {show.venue}
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={show.ticketUrl}
              target="_blank"
              rel="noreferrer noopener"
              variant="light"
              size="md"
            >
              Book ticket
              <ExternalLink className="size-4" aria-hidden="true" />
            </ButtonLink>
            <span className="text-[11px] text-white/50">
              Tiket resmi melalui jkt48.com
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-4 border-white/10 sm:flex sm:flex-col sm:border-l sm:pl-10">
          <div className="text-center">
            <span className="block text-5xl font-extrabold leading-none tracking-[-0.04em] sm:text-6xl">
              {show.day}
            </span>
            <span className="mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
              {show.month} {show.year}
            </span>
          </div>
          <span className="hidden h-px w-10 bg-white/20 sm:block" aria-hidden="true" />
          <span className="text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/55">
            {show.weekday}
            <br />
            {show.time}
          </span>
        </div>
      </div>
    </article>
  );
}

function ShowCard({ show }: { show: Show }) {
  const isSoldOut = show.status === "soldout";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cobalt/20 hover:shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold leading-none tracking-[-0.03em] text-ink">
            {show.day}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-body">
            {show.month} {show.year}
          </span>
        </div>
        <Badge tone={statusTone[show.status]}>
          {showStatusLabels[show.status]}
        </Badge>
      </div>

      <h3 className="mt-3 text-[15px] font-bold leading-snug text-ink">
        {show.title}
      </h3>

      <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-body">
        <li className="flex items-center gap-1.5">
          <Clock className="size-3.5 shrink-0" aria-hidden="true" />
          {show.weekday} · {show.time}
        </li>
        <li className="flex items-center gap-1.5">
          <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
          {show.venue}
        </li>
      </ul>

      <div className="mt-auto pt-4">
        {isSoldOut ? (
          <span className="inline-flex h-9 w-full items-center justify-center rounded-full border border-line bg-mist text-[13px] font-semibold text-slate-body">
            Sold out
          </span>
        ) : (
          <ButtonLink
            href={show.ticketUrl}
            target="_blank"
            rel="noreferrer noopener"
            variant="outline"
            size="sm"
            className="w-full"
          >
            Book ticket
            <ArrowUpRight
              className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </ButtonLink>
        )}
      </div>
    </article>
  );
}

type NewsDialogProps = {
  item: NewsItem;
  onClose: () => void;
  closeButtonRef: RefObject<HTMLButtonElement | null>;
};

function NewsDialog({ item, onClose, closeButtonRef }: NewsDialogProps) {
  return (
    <div className="fixed inset-0 z-[95] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Tutup berita"
        onClick={onClose}
        className="absolute inset-0 animate-fade-in bg-ink/65 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="news-dialog-title"
        className="relative z-10 max-h-[92dvh] w-full max-w-2xl animate-rise-in overflow-y-auto rounded-2xl bg-white shadow-2xl"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-mist">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes="(min-width: 768px) 672px, 100vw"
            className="object-cover object-top"
          />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Tutup berita"
            className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/90 text-ink shadow-sm backdrop-blur transition-colors hover:bg-white"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone="cobalt">{item.category}</Badge>
            <span className="text-xs text-slate-body">{item.date}</span>
          </div>

          <h3
            id="news-dialog-title"
            className="mt-4 text-2xl font-extrabold leading-tight tracking-[-0.02em] text-ink"
          >
            {item.title}
          </h3>

          <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-body">
            {item.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-6 border-t border-line pt-4 text-[11px] text-slate-body">
            Ditulis oleh Nalania fan page · Foto © JKT48
          </p>
        </div>
      </div>
    </div>
  );
}
