// src/app/page.tsx
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MeatSelection } from "@/components/MeatSelection"; // Nueva
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { DynamicMenu } from "@/components/DynamicMenu";
import { HistorySection } from "@/components/HistorySection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton"; // Nuevo

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <MeatSelection /> {/* El cliente ve primero qué carnes hay */}
      <FeatureShowcase />
      <DynamicMenu />    {/* Menú completo sin precios */}
      <HistorySection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}