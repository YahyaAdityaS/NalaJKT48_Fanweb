"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  gallery,
  galleryCategories,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/data";
import { useEscapeKey, useLockBodyScroll } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Filter = "all" | GalleryCategory;

const categoryLabels: Record<GalleryCategory, string> = {
  stage: "Stage",
  official: "Official",
  daily: "Daily",
};

const filterCount = (filter: Filter) =>
  filter === "all"
    ? gallery.length
    : gallery.filter((item) => item.category === filter).length;

export function Gallery() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const items = useMemo<GalleryItem[]>(() => {
    if (filter === "all") return gallery;
    return gallery.filter((item) => item.category === filter);
  }, [filter]);

  const activeItem = activeIndex === null ? null : items[activeIndex] ?? null;

  const closeLightbox = () => setActiveIndex(null);

  useLockBodyScroll(activeItem !== null);
  useEscapeKey(activeItem !== null, closeLightbox);

  useEffect(() => {
    if (!activeItem) return;

    const frame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [activeItem]);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? index : (index + 1) % items.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null ? index : (index - 1 + items.length) % items.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, items.length]);

  const selectFilter = (nextFilter: Filter) => {
    setFilter(nextFilter);
    setActiveIndex(null);
  };

  const showPrevious = () =>
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + items.length) % items.length,
    );

  const showNext = () =>
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % items.length,
    );

  return (
    <section id="gallery" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            title="Sekilas momen, dari panggung sampai balik layar."
            description="Kumpulan foto resmi dan momen sehari-hari Nala. Klik untuk melihat versi besar."
          />

          <div
            className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 no-scrollbar sm:shrink-0"
            role="group"
            aria-label="Filter galeri"
          >
            {galleryCategories.map((category) => {
              const isActive = filter === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => selectFilter(category.id)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors",
                    isActive
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white text-slate-body hover:border-cobalt/30 hover:text-ink",
                  )}
                >
                  {category.label}
                  <span
                    className={cn(
                      "text-[10px] tabular-nums",
                      isActive ? "text-white/55" : "text-slate-body/60",
                    )}
                  >
                    {filterCount(category.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <ul
          key={filter}
          className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
        >
          {items.map((item, index) => (
            <li
              key={item.id}
              className="animate-rise-in"
              style={{ animationDelay: `${Math.min(index * 40, 240)}ms` }}
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Perbesar foto ${item.title}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-mist text-left ring-1 ring-ink/5 transition-shadow duration-300 hover:ring-cobalt/25"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent"
                />
                <span
                  aria-hidden="true"
                  className="absolute right-3 top-3 grid size-8 scale-90 place-items-center rounded-full bg-white/20 text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:scale-100 group-hover:opacity-100"
                >
                  <ZoomIn className="size-4" />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 sm:p-4">
                  <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/65">
                    {categoryLabels[item.category]} · {item.meta}
                  </span>
                  <span className="mt-1 block text-[13px] font-bold leading-snug text-white sm:text-sm">
                    {item.title}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[11px] text-slate-body">
          Foto © JKT48 dan Axioo Indonesia (CC BY 4.0). Kredit lengkap tersedia
          di folder gambar proyek.
        </p>
      </div>

      {activeItem && activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri: ${activeItem.title}`}
          className="fixed inset-0 z-[95] flex animate-fade-in flex-col bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(items.length).padStart(2, "0")} ·{" "}
              {categoryLabels[activeItem.category]}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Tutup galeri"
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Foto sebelumnya"
              className="absolute left-0 z-10 grid size-10 place-items-center rounded-full border border-white/15 bg-ink/50 text-white backdrop-blur transition-colors hover:bg-white/15 sm:left-2 sm:size-11"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>

            <div
              key={activeItem.id}
              className="relative h-full w-full max-w-4xl animate-lightbox-in"
            >
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                sizes="(min-width: 1024px) 900px, 92vw"
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={showNext}
              aria-label="Foto selanjutnya"
              className="absolute right-0 z-10 grid size-10 place-items-center rounded-full border border-white/15 bg-ink/50 text-white backdrop-blur transition-colors hover:bg-white/15 sm:right-2 sm:size-11"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mx-auto w-full max-w-4xl text-center">
            <p className="text-sm font-bold text-white">{activeItem.title}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/50">
              {activeItem.meta}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
