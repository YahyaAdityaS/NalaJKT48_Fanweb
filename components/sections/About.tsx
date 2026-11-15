import Image from "next/image";
import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { facts, timeline } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Portrait stack */}
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[420px] lg:mx-0">
              <div className="overflow-hidden rounded-[2rem] bg-mist shadow-soft ring-1 ring-ink/5">
                <Image
                  src="/images/nala/portrait-dream.webp"
                  alt="Nala dengan kostum Team Dream berwarna biru"
                  width={814}
                  height={1000}
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-6 -right-3 w-32 rotate-3 overflow-hidden rounded-2xl bg-white p-2 shadow-lift ring-1 ring-ink/5 sm:-right-6 sm:w-40">
                <Image
                  src="/images/nala/daily-birthday.webp"
                  alt="Poster ulang tahun ke-18 Nala"
                  width={1080}
                  height={1350}
                  sizes="160px"
                  className="aspect-square w-full rounded-xl object-cover object-top"
                />
                <p className="px-1 pb-1 pt-2 text-center text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-body">
                  18 · 01 / 09
                </p>
              </div>

              <div className="absolute -left-2 top-6 rounded-full bg-ink px-4 py-2 text-[11px] font-semibold tracking-wide text-white shadow-md sm:-left-4">
                Gen 12 · Team Dream
              </div>
            </div>
          </Reveal>

          {/* Bio and facts */}
          <Reveal className="lg:col-span-7" delay={0.06}>
            <SectionHeading
              eyebrow="Tentang Nala"
              title="Energi kecil yang selalu bikin panggung hidup."
              description="Nama lengkapnya Shabilqis Naila Bustomi. Nalania memanggilnya Nala — member Generasi 12 yang sekarang melanjutkan cerita bersama Team Dream."
            />

            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-body">
              <p>
                Perjalanan Nala dimulai dari rasa penasaran pada cover dance
                JKT48. Latihan kecil di kamar berubah jadi keberanian untuk
                ikut audisi, lalu resmi menjadi trainee Generasi 12 pada
                <span className="font-semibold text-ink"> 18 November 2023</span>.
              </p>
              <p>
                Di panggung, Nala dikenal dengan gerak yang tegas dan senyum
                yang gampang nyala. Di luar panggung, ia hangat, ceplas-ceplos,
                dan sering jadi penyemangat rekan satu tim. Pada awal 2026 Nala
                dipromosikan, lalu bergabung dengan Team Dream pada 1 April
                2026.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
              {facts.map((fact) => (
                <div key={fact.label} className="border-l border-line pl-4">
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-body">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold leading-snug text-ink">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 flex items-start gap-2 rounded-2xl bg-mist p-4 text-xs leading-relaxed text-slate-body">
              <Sparkles className="mt-0.5 size-4 shrink-0 text-cobalt" aria-hidden="true" />
              Profil ini disusun dari informasi publik sebagai bentuk dukungan
              fan-made. Untuk data resmi, selalu cek kanal JKT48.
            </p>
          </Reveal>
        </div>

        {/* Journey timeline */}
        <div className="mt-16 border-t border-line pt-10 sm:mt-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-xl font-extrabold tracking-[-0.02em] text-ink sm:text-2xl">
              Perjalanan singkat
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-slate-body">
              Tiga bab yang membentuk Nala sampai hari ini.
            </p>
          </div>

          <ol className="mt-7 grid gap-4 md:grid-cols-3">
            {timeline.map((entry, index) => (
              <li key={entry.period}>
                <Reveal delay={index * 0.08} className="h-full">
                  <div className="relative h-full rounded-2xl border border-line bg-mist p-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-cobalt">
                      {entry.period}
                    </span>
                    <span
                      className="absolute right-5 top-5 text-[11px] font-semibold tabular-nums text-slate-body/50"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                    <h4 className="mt-3 text-lg font-bold leading-snug text-ink">
                      {entry.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-body">
                      {entry.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
