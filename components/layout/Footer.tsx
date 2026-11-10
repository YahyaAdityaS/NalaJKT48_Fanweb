import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { navLinks } from "@/lib/data";

const officialLinks = [
  { label: "Situs JKT48", href: "https://jkt48.com/" },
  { label: "Tiket theater", href: "https://jkt48.com/theater/schedule" },
  { label: "Instagram Nala", href: "https://www.instagram.com/jkt48.nala/" },
  { label: "YouTube JKT48", href: "https://www.youtube.com/@JKT48" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="lg:col-span-5">
            <a
              href="#home"
              className="group inline-flex items-center"
              aria-label="NALANIA — kembali ke atas"
            >
              <Logo tone="dark" className="text-2xl sm:text-[1.75rem]" />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Rumah kecil untuk mengikuti cerita Nala: panggung, kabar, dan
              hal-hal baik di antaranya. Well-being that fits your life ~
            </p>

            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Follow Nala
              </p>
              <SocialLinks tone="dark" className="mt-3" />
            </div>
          </div>

          <nav
            aria-label="Tautan footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7"
          >
            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Jelajahi
              </h3>
              <ul className="mt-3 space-y-2.5 text-[13px]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Official
              </h3>
              <ul className="mt-3 space-y-2.5 text-[13px]">
                {officialLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="size-3 opacity-50" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                Catatan
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-white/60">
                Situs fan-made ini tidak berafiliasi dengan JKT48 Operation Team.
                Foto panggung © JKT48. Foto backstage oleh Axioo Indonesia, CC BY
                4.0.
              </p>
              <a
                href="https://commons.wikimedia.org/wiki/File:Nala_of_JKT48_(cropped).png"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-sky-300/80 transition-colors hover:text-sky-200"
              >
                Lihat kredit foto
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[11px] text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white/55">© 2026 NALANIA Official Website.</p>
          <p>Dibuat dengan tenang, untuk Nala dan Nalania.</p>
        </div>
      </div>
    </footer>
  );
}
