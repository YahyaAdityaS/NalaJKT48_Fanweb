"use client";

import {
  ArrowRight,
  Info,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonLink } from "@/components/ui/Button";
import { ProductVisual } from "@/components/store/ProductVisual";
import { useCart } from "@/lib/cart";
import { formatIDR } from "@/lib/format";
import { useEscapeKey, useLockBodyScroll } from "@/lib/hooks";

export function CartDrawer() {
  const {
    items,
    itemCount,
    subtotal,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
  } = useCart();
  const [notice, setNotice] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useLockBodyScroll(isOpen);
  useEscapeKey(isOpen, closeCart);

  useEffect(() => {
    if (!isOpen) return;

    const frame = requestAnimationFrame(() => closeButtonRef.current?.focus());
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  const handleClose = () => {
    setNotice(null);
    closeCart();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Tutup tas"
        onClick={handleClose}
        className="absolute inset-0 animate-fade-in bg-ink/45 backdrop-blur-[2px]"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-[26rem] animate-sheet-in flex-col bg-white shadow-2xl"
      >
        <header className="flex items-center justify-between border-b border-line px-5 py-4">
          <div>
            <h2 id="cart-title" className="text-lg font-bold text-ink">
              Tas kamu
            </h2>
            <p className="mt-0.5 text-xs text-slate-body">
              {itemCount > 0
                ? `${itemCount} item siap dibawa pulang`
                : "Belum ada item di sini"}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Tutup tas"
            className="grid size-9 place-items-center rounded-full border border-line text-slate-body transition-colors hover:bg-mist hover:text-ink"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center pb-10 text-center">
              <span className="grid size-14 place-items-center rounded-full bg-mist text-slate-body">
                <ShoppingBag className="size-6" aria-hidden="true" />
              </span>
              <p className="mt-4 text-base font-semibold text-ink">
                Tasmu masih kosong
              </p>
              <p className="mt-1 max-w-[15rem] text-sm leading-relaxed text-slate-body">
                Lihat lightstick, photocard, dan apparel konsep Nalania di
                Official Store.
              </p>
              <ButtonLink
                href="#store"
                onClick={handleClose}
                variant="outline"
                size="sm"
                className="mt-5"
              >
                Lihat merchandise
                <ArrowRight className="size-4" aria-hidden="true" />
              </ButtonLink>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-3 rounded-2xl border border-line p-3"
                >
                  <div className="size-20 shrink-0 overflow-hidden rounded-xl bg-ice">
                    <ProductVisual product={product} compact />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[13px] font-semibold leading-snug text-ink">
                          {product.name}
                        </p>
                        <p className="mt-0.5 text-[11px] text-slate-body">
                          {product.variant}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        aria-label={`Hapus ${product.name} dari tas`}
                        className="shrink-0 rounded-full p-1 text-slate-body transition-colors hover:bg-mist hover:text-ink"
                      >
                        <Trash2 className="size-4" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      <span className="text-sm font-bold tabular-nums text-ink">
                        {formatIDR(product.price * quantity)}
                      </span>

                      <div className="flex items-center gap-1 rounded-full border border-line p-1">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(product.id, quantity - 1)
                          }
                          aria-label={`Kurangi jumlah ${product.name}`}
                          className="grid size-6 place-items-center rounded-full text-slate-body transition-colors hover:bg-mist hover:text-ink"
                        >
                          <Minus className="size-3" aria-hidden="true" />
                        </button>
                        <span
                          aria-live="polite"
                          className="w-5 text-center text-xs font-semibold tabular-nums text-ink"
                        >
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          aria-label={`Tambah jumlah ${product.name}`}
                          className="grid size-6 place-items-center rounded-full text-slate-body transition-colors hover:bg-mist hover:text-ink"
                        >
                          <Plus className="size-3" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 ? (
          <footer className="border-t border-line px-5 py-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-body">Subtotal</span>
              <span className="text-base font-extrabold tabular-nums text-ink">
                {formatIDR(subtotal)}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-body">
              Pengiriman dihitung saat checkout. Ini konsep toko, bukan
              transaksi resmi.
            </p>

            <Button
              className="mt-4 w-full"
              onClick={() =>
                setNotice(
                  "Checkout belum aktif. Halaman ini adalah konsep fan-made, bukan toko resmi JKT48.",
                )
              }
            >
              Checkout (demo)
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>

            {notice ? (
              <p
                role="status"
                className="mt-3 flex items-start gap-2 rounded-xl bg-mist p-3 text-[11px] leading-relaxed text-slate-body"
              >
                <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                {notice}
              </p>
            ) : null}

            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full text-center text-[11px] font-medium text-slate-body underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              Kosongkan tas
            </button>
          </footer>
        ) : null}
      </aside>
    </div>
  );
}
