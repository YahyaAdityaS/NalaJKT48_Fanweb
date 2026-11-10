import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Community } from "@/components/sections/Community";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { ScheduleNews } from "@/components/sections/ScheduleNews";
import { Store } from "@/components/sections/Store";

export default function Home() {
  return (
    <>
      {/* Sentinel used by the navbar to switch to its glass state. */}
      <span
        id="page-top"
        aria-hidden="true"
        className="absolute left-0 top-0 h-20 w-px"
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <ScheduleNews />
        <Gallery />
        <Store />
        <Community />
      </main>

      <Footer />
    </>
  );
}
