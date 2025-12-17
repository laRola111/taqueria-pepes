import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { DynamicMenu } from "@/components/DynamicMenu"; // Nuevo
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { HistorySection } from "@/components/HistorySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-secondary selection:text-dark">
      <Navbar />
      <Hero />
      <Marquee />
      <FeatureShowcase /> {/* El gancho visual */}
      <DynamicMenu />    {/* La carne del sitio: el menú completo */}
      <HistorySection />
      <Footer />
    </main>
  );
}