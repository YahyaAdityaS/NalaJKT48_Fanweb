import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/lib/cart";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
);

const description =
  "Fan page untuk Shabilqis Naila Bustomi (Nala) JKT48 Generasi 12 · Team Dream. Jadwal teater, kabar terbaru, galeri, dan merchandise konsep Nalania.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: "NALANIA Official | Roar!",
  description,
  keywords: [
    "Nala JKT48",
    "Nalania",
    "Shabilqis Naila Bustomi",
    "JKT48 Gen 12",
    "Team Dream",
    "jadwal theater JKT48",
  ],
  authors: [{ name: "Nalania fan page" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "NALANIA",
    title: "NALANIA — Rumah kecil untuk Nala JKT48",
    description,
    images: [
      {
        url: "/images/nala/portrait-blue.webp",
        width: 814,
        height: 1000,
        alt: "Shabilqis Naila Bustomi, member JKT48 Generasi 12",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NALANIA — Rumah kecil untuk Nala JKT48",
    description,
    images: ["/images/nala/portrait-blue.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f8fd",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="min-h-dvh bg-white font-sans text-ink antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten
        </a>

        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
