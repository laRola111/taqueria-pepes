import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MenuGrid } from "@/components/MenuGrid";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-pepes-black font-sans selection:bg-pepes-orange selection:text-white pb-32">
      <Navbar />
      <Hero />
      <Marquee />
      <MenuGrid />
    </main>
  );
}
