"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";
import { cn } from "@/lib/utils";

type CartButtonProps = {
  className?: string;
};

export function CartButton({ className }: CartButtonProps) {
  const { itemCount, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Buka tas, ${itemCount} item`}
      className={cn(
        "relative inline-flex h-10 items-center gap-2 rounded-full border border-line bg-white/80 px-3.5 text-ink transition-colors hover:border-cobalt/35 hover:bg-mist",
        className,
      )}
    >
      <ShoppingBag className="size-[18px]" aria-hidden="true" />
      <span className="hidden text-[13px] font-semibold sm:inline">Tas</span>
      {itemCount > 0 ? (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-cobalt px-1 text-[10px] font-bold text-white ring-2 ring-white">
          {itemCount}
        </span>
      ) : null}
    </button>
  );
}
