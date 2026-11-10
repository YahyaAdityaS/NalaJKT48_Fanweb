"use client";

import { Info, ShoppingBag } from "lucide-react";
import { ProductVisual } from "@/components/store/ProductVisual";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCart } from "@/lib/cart";
import { products, type Product } from "@/lib/data";
import { formatIDR } from "@/lib/format";

export function Store() {
  const { addItem, openCart } = useCart();

  const handleAdd = (product: Product) => {
    addItem(product.id);
    openCart();
  };

  return (
    <section id="store" className="relative bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Official Store"
            title="Barang kecil untuk menemani hari-hari Nalania."
            description="Lightstick, photocard, dan apparel dengan bahasa visual yang sama seperti halaman ini."
          />

          <div className="max-w-sm rounded-2xl border border-line bg-white p-4 lg:shrink-0">
            <p className="flex items-center gap-2 text-[13px] font-bold text-ink">
              <Info className="size-4 text-cobalt" aria-hidden="true" />
              Concept store
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-body">
              Semua produk dan harga adalah ilustrasi desain. Tidak ada
              transaksi nyata di halaman fan-made ini.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-square overflow-hidden bg-[#edf4fc]">
                  {product.tag ? (
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm backdrop-blur">
                      {product.tag}
                    </span>
                  ) : null}
                  <ProductVisual product={product} />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-body">
                    {product.variant}
                  </p>
                  <h3 className="mt-1.5 text-[15px] font-bold leading-snug text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-body">
                    {product.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <p className="text-base font-extrabold tabular-nums tracking-[-0.01em] text-ink">
                      {formatIDR(product.price)}
                    </p>
                    <Button
                      size="sm"
                      className="mt-3 w-full"
                      onClick={() => handleAdd(product)}
                      aria-label={`Tambahkan ${product.name} ke tas`}
                    >
                      <ShoppingBag className="size-3.5" aria-hidden="true" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-[11px] leading-relaxed text-slate-body">
          <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
          Merchandise resmi JKT48 hanya dijual melalui kanal resmi mereka. Produk
          di atas dibuat sebagai eksplorasi desain fan-made.
        </p>
      </div>
    </section>
  );
}
