"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { CartButton } from "@/components/cart/CartButton";
import { Logo } from "@/components/layout/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks } from "@/lib/data";
import { useEscapeKey, useLockBodyScroll } from "@/lib/hooks";
import { cn } from "@/lib/utils";

const SECTION_IDS = navLinks.map((link) => link.href.replace("#", ""));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");

  useLockBodyScroll(menuOpen);
  useEscapeKey(menuOpen, () => setMenuOpen(false));

  /* Use a sentinel at the top of the page instead of a scroll listener. */
  useEffect(() => {
    const sentinel = document.getElementById("page-top");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  /* Highlight the section currently in the middle of the viewport. */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || menuOpen
          ? "glass border-line/80 shadow-[0_10px_36px_-28px_rgba(8,26,51,0.55)]"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <a
          href="#home"
          className="group flex shrink-0 items-center"
          aria-label="NALANIA — kembali ke atas"
          onClick={closeMenu}
        >
          <Logo />
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors",
                  isActive
                    ? "bg-ink/[0.06] text-ink"
                    : "text-slate-body hover:bg-ink/[0.035] hover:text-ink",
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <CartButton />
          <ButtonLink
            href="#community"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Join Us
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </ButtonLink>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            className="grid size-10 place-items-center rounded-full border border-line bg-white/80 text-ink transition-colors hover:bg-mist lg:hidden"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-line bg-white/95 backdrop-blur-xl lg:hidden"
        >
          <nav
            aria-label="Navigasi mobile"
            className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
          >
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={activeHref === link.href ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-medium transition-colors",
                      activeHref === link.href
                        ? "bg-mist text-ink"
                        : "text-slate-body hover:bg-mist/70 hover:text-ink",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-4 text-slate-body/60"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid gap-4 border-t border-line pt-4">
              <ButtonLink href="#community" onClick={closeMenu} className="w-full">
                Join Us
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </ButtonLink>
              <SocialLinks />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
