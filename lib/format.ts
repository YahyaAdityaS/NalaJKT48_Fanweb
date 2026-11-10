const idrFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

/** Format a number as Indonesian rupiah, for example 249000 -> Rp 249.000. */
export function formatIDR(value: number) {
  return idrFormatter.format(value);
}
