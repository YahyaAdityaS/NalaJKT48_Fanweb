/**
 * Central content for the NALANIA fan page.
 * Keeping copy and data here keeps the section components presentational.
 */

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#schedule", label: "Schedule & News" },
  { href: "#gallery", label: "Gallery" },
  { href: "#store", label: "Official Store" },
  { href: "#community", label: "Community" },
];

export type ShowStatus = "available" | "limited" | "soldout";

export type Show = {
  id: string;
  day: string;
  month: string;
  weekday: string;
  year: string;
  time: string;
  title: string;
  venue: string;
  status: ShowStatus;
  ticketUrl: string;
  featured?: boolean;
};

export const shows: Show[] = [
  {
    id: "theater-21-nov",
    day: "21",
    month: "Nov",
    weekday: "Sabtu",
    year: "2026",
    time: "17.00 WIB",
    title: "Aitakatta — Theater Show",
    venue: "JKT48 Theater, FX Sudirman",
    status: "available",
    ticketUrl: "https://jkt48.com/theater/schedule",
    featured: true,
  },
  {
    id: "theater-22-nov",
    day: "22",
    month: "Nov",
    weekday: "Minggu",
    year: "2026",
    time: "13.00 WIB",
    title: "Aitakatta — Theater Show",
    venue: "JKT48 Theater, FX Sudirman",
    status: "limited",
    ticketUrl: "https://jkt48.com/theater/schedule",
  },
  {
    id: "meet-greet-29-nov",
    day: "29",
    month: "Nov",
    weekday: "Minggu",
    year: "2026",
    time: "15.00 WIB",
    title: "Nalania Meet & Greet",
    venue: "Hall FX Sudirman, Jakarta",
    status: "available",
    ticketUrl: "https://jkt48.com/theater/schedule",
  },
  {
    id: "handshake-06-dec",
    day: "06",
    month: "Des",
    weekday: "Minggu",
    year: "2026",
    time: "10.00 WIB",
    title: "Handshake Session — Splashing Good Time",
    venue: "Balai Kartini, Jakarta",
    status: "soldout",
    ticketUrl: "https://jkt48.com/theater/schedule",
  },
];

export const showStatusLabels: Record<ShowStatus, string> = {
  available: "Seats Available",
  limited: "Limited Seats",
  soldout: "Sold Out",
};

export type NewsItem = {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  imageAlt: string;
};

export const news: NewsItem[] = [
  {
    id: "team-dream-debut",
    date: "8 November 2026",
    category: "Kabar",
    title: "Panggung perdana Nala bersama Team Dream",
    excerpt:
      "Setelah resmi bergabung April lalu, Nala akhirnya tampil di panggung Team Dream. Sorak Nalania memenuhi teater sejak lagu pembuka.",
    body: [
      "Perjalanan Nala memasuki babak baru. Setelah dipromosikan pada awal 2026 dan bergabung dengan Team Dream pada 1 April 2026, Nala tampil di panggung Team Dream bersama rekan-rekannya.",
      "Energi khas Nala tetap terasa: senyum lebar, gerakan yang tegas, dan sorakan kecil untuk penonton di barisan belakang. Di balik panggung, Nalania menyiapkan fan project sederhana sebagai bentuk dukungan.",
      "Ini adalah cerita fan-made yang ditulis untuk merayakan perjalanan Nala. Kabar resmi selalu bisa dicek melalui kanal JKT48.",
    ],
    image: "/images/nala/stage-2025.webp",
    imageAlt: "Nala di atas panggung dengan kostum merah dan mikrofon",
  },
  {
    id: "profile-2026",
    date: "1 November 2026",
    category: "Official",
    title: "Foto profil 2026 Nala sudah rilis",
    excerpt:
      "Nuansa biru dan senyum tenang jadi ciri foto profil terbaru. Nalania langsung menjadikannya wallpaper baru.",
    body: [
      "Foto profil resmi 2026 menampilkan Nala dengan busana bernuansa biru. Foto ini menjadi identitas terbaru Nala di berbagai kanal resmi JKT48.",
      "Bagi Nalania, foto profil selalu jadi momen kecil yang ditunggu. Komentar hangat dan fan art bermunculan dalam beberapa jam setelah foto dirilis.",
      "Halaman ini menyimpan foto tersebut sebagai bagian dari arsip visual fan-made, lengkap dengan kredit foto.",
    ],
    image: "/images/nala/portrait-blue.webp",
    imageAlt: "Foto profil resmi Nala 2026 dengan busana biru",
  },
  {
    id: "birthday-18",
    date: "1 September 2026",
    category: "Nalania",
    title: "18 tahun Nala, dan setahun penuh cerita baru",
    excerpt:
      "Dari trainee Generasi 12 sampai Team Dream — ulang tahun ke-18 Nala dirayakan dengan pesan-pesan kecil dari Nalania.",
    body: [
      "Nala genap 18 tahun pada 1 September 2026. Perjalanannya dari cover dance, audisi, masa trainee, sampai Team Dream menjadi cerita yang sering dibagikan Nalania.",
      "Perayaan tahun ini sengaja dibuat sederhana: kumpulan pesan, ilustrasi, dan potongan momen panggung yang dibagikan di media sosial.",
      "Selamat ulang tahun, Nala. Semoga panggungmu selalu ramai, dan harimu selalu punya ruang untuk istirahat.",
    ],
    image: "/images/nala/daily-birthday.webp",
    imageAlt: "Poster ulang tahun ke-18 Nala dengan kaos putih",
  },
];

export type GalleryCategory = "stage" | "official" | "daily";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  title: string;
  meta: string;
  image: string;
  alt: string;
};

export const galleryCategories: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "stage", label: "Stage" },
  { id: "official", label: "Official" },
  { id: "daily", label: "Daily" },
];

export const gallery: GalleryItem[] = [
  {
    id: "stage-2025",
    category: "stage",
    title: "Aitakatta",
    meta: "Theater 2025",
    image: "/images/nala/stage-2025.webp",
    alt: "Nala menyanyi di atas panggung dengan kostum merah",
  },
  {
    id: "stage-2024",
    category: "stage",
    title: "Pajama Drive",
    meta: "Theater 2024",
    image: "/images/nala/stage-2024.webp",
    alt: "Nala di atas panggung dengan seragam kotak-kotak merah",
  },
  {
    id: "portrait-dream",
    category: "official",
    title: "Team Dream",
    meta: "Profile 2026",
    image: "/images/nala/portrait-dream.webp",
    alt: "Foto profil resmi Nala bersama Team Dream",
  },
  {
    id: "daily-birthday",
    category: "daily",
    title: "Eighteen",
    meta: "Birthday 2026",
    image: "/images/nala/daily-birthday.webp",
    alt: "Poster ulang tahun Nala dengan angka 18",
  },
  {
    id: "official-promo",
    category: "stage",
    title: "Fajar Sang Idola",
    meta: "Promo 2026",
    image: "/images/nala/official-promo.webp",
    alt: "Nala berpose dengan drum pada foto promosi Fajar Sang Idola",
  },
  {
    id: "portrait-blue",
    category: "official",
    title: "Blue Profile",
    meta: "Profile 2026",
    image: "/images/nala/portrait-blue.webp",
    alt: "Foto profil resmi Nala 2026 dengan busana biru",
  },
  {
    id: "daily-backstage",
    category: "daily",
    title: "Off Stage",
    meta: "Backstage 2026",
    image: "/images/nala/daily-backstage.webp",
    alt: "Nala tersenyum di balik panggung saat kunjungan pabrik",
  },
  {
    id: "official-trainee",
    category: "official",
    title: "First Chapter",
    meta: "Trainee 2024",
    image: "/images/nala/official-trainee.webp",
    alt: "Foto profil resmi Nala saat masih trainee",
  },
];

export type ProductVisualKind = "lightstick" | "photocards" | "hoodie" | "tee";

export type Product = {
  id: string;
  name: string;
  price: number;
  variant: string;
  description: string;
  tag?: string;
  visual: ProductVisualKind;
};

export const products: Product[] = [
  {
    id: "lightstick",
    name: "Nalania Official Lightstick",
    price: 249000,
    variant: "Cobalt · White",
    description: "Lampu genggam dengan cahaya biru lembut dan grip putih matte.",
    tag: "Best seller",
    visual: "lightstick",
  },
  {
    id: "photocards",
    name: "Photocard Set Vol. 01",
    price: 149000,
    variant: "8 cards + 1 secret",
    description: "Delapan photocard panggung dan satu kartu rahasia untuk koleksi.",
    tag: "New",
    visual: "photocards",
  },
  {
    id: "hoodie",
    name: "Dream Team Hoodie",
    price: 399000,
    variant: "Navy · Unisex",
    description: "Hoodie oversized dengan bordir kecil di dada dan bahan katun tebal.",
    visual: "hoodie",
  },
  {
    id: "tee",
    name: "Nalania Everyday Tee",
    price: 199000,
    variant: "Off-white · Unisex",
    description: "Kaos santai berpotongan boxy dengan emblem cobalt di dada.",
    visual: "tee",
  },
];

export type Fact = {
  label: string;
  value: string;
};

export const facts: Fact[] = [
  { label: "Nama lengkap", value: "Shabilqis Naila Bustomi" },
  { label: "Lahir", value: "1 September 2008" },
  { label: "Tinggi", value: "160 cm" },
  { label: "Golongan darah", value: "B" },
  { label: "Zodiak", value: "Virgo" },
  { label: "Generasi", value: "12 · Team Dream" },
];

export type TimelineEntry = {
  period: string;
  title: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    period: "Awal cerita",
    title: "Dari cover dance",
    description:
      "Nala jatuh cinta pada panggung lewat cover dance JKT48. Latihan kecil di kamar perlahan jadi keberanian untuk ikut audisi.",
  },
  {
    period: "18 November 2023",
    title: "Resmi jadi trainee Gen 12",
    description:
      "Hari pertama sebagai trainee. Latihan vokal, dance, dan etika panggung jadi rutinitas baru yang dijalani dengan sabar.",
  },
  {
    period: "1 Januari 2026",
    title: "Promosi & Team Dream",
    description:
      "Setelah dua tahun belajar, Nala dipromosikan pada awal 2026 dan bergabung dengan Team Dream pada 1 April 2026.",
  },
];

export type SocialId = "instagram" | "x" | "threads" | "youtube";

export type SocialLink = {
  id: SocialId;
  label: string;
  handle: string;
  href: string;
};

export const socials: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@jkt48.nala",
    href: "https://www.instagram.com/jkt48.nala/",
  },
  {
    id: "x",
    label: "X",
    handle: "@Nala_JKT48",
    href: "https://x.com/Nala_JKT48",
  },
  {
    id: "threads",
    label: "Threads",
    handle: "@jkt48.nala",
    href: "https://www.threads.com/@jkt48.nala",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "@JKT48",
    href: "https://www.youtube.com/@JKT48",
  },
];

export const heroStats = [
  { label: "Generasi", value: "Gen 12" },
  { label: "Tim", value: "Team Dream" },
  { label: "Tinggi", value: "160 cm" },
  { label: "Sejak", value: "2023" },
];
