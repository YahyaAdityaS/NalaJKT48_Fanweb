"use client";

import { ArrowRight, Check, CheckCircle2, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const perks = [
  "Kabar jadwal dan fan project lebih dulu",
  "Ruang untuk fan art, cerita, dan momen kecil",
  "Satu email sesekali, tanpa spam",
];

export function Community() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();

    if (!value) {
      setError("Isi email kamu dulu, ya.");
      return;
    }

    if (!EMAIL_PATTERN.test(value)) {
      setError("Format emailnya belum benar. Contoh: nama@email.com");
      return;
    }

    setError(null);
    setSubmitted(true);
  };

  return (
    <section id="community" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-14 select-none text-[12rem] font-extrabold leading-none text-white/[0.035]"
          >
            N
          </span>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Community"
                title="Jadi bagian dari cerita Nala."
                description="Nalania tumbuh dari obrolan kecil, fan art, dan dukungan yang konsisten. Tinggalkan email kalau kamu ingin ikut kabar berikutnya."
                tone="dark"
              />

              <ul className="mt-7 space-y-3">
                {perks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-start gap-2.5 text-sm text-white/70"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/10 text-sky-300">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  Kanal resmi Nala
                </p>
                <SocialLinks tone="dark" withLabels className="mt-3" />
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-lift sm:p-7">
              {submitted ? (
                <div className="flex min-h-[16rem] flex-col items-center justify-center text-center">
                  <span className="grid size-14 place-items-center rounded-full bg-[#e9f8f1] text-success">
                    <CheckCircle2 className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold tracking-[-0.02em] text-ink">
                    Sampai jumpa di Nalania!
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-body">
                    {email.trim()} sudah tercatat di demo ini. Karena ini halaman
                    konsep, belum ada email yang benar-benar dikirim.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-5"
                    onClick={() => {
                      setSubmitted(false);
                      setEmail("");
                    }}
                  >
                    Kirim email lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <p className="flex items-center gap-2 text-[13px] font-bold text-ink">
                    <Mail className="size-4 text-cobalt" aria-hidden="true" />
                    Join the mailing list
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-body">
                    Satu kolom saja, tanpa ribet. Kamu bisa berhenti kapan pun.
                  </p>

                  <div className="mt-5">
                    <label
                      htmlFor="community-email"
                      className="text-xs font-semibold text-ink"
                    >
                      Email kamu
                    </label>
                    <input
                      id="community-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="nama@email.com"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (error) setError(null);
                      }}
                      aria-invalid={error ? "true" : undefined}
                      aria-describedby={error ? "community-email-error" : undefined}
                      className={cn(
                        "mt-2 h-11 w-full rounded-xl border bg-mist px-3.5 text-sm text-ink outline-none transition-colors placeholder:text-slate-body/60 focus:border-cobalt focus:bg-white",
                        error ? "border-red-300" : "border-line",
                      )}
                    />
                    {error ? (
                      <p
                        id="community-email-error"
                        role="alert"
                        className="mt-2 text-xs text-red-600"
                      >
                        {error}
                      </p>
                    ) : null}
                  </div>

                  <Button type="submit" className="mt-4 w-full">
                    Join Us
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Button>

                  <p className="mt-3 text-center text-[10px] leading-relaxed text-slate-body">
                    Form demo: email tidak disimpan atau dikirim ke mana pun.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
