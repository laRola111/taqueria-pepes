import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MeatSelection } from "@/components/MeatSelection";
import { WeekendSection } from "@/components/WeekendSection";
import { DynamicMenu } from "@/components/DynamicMenu";
import { HistorySection } from "@/components/HistorySection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <MeatSelection />   {/* Primero ven las carnes disponibles */}
      <WeekendSection />  {/* Sección especial de fin de semana */}
      <DynamicMenu />     {/* Menú completo diario */}
      <HistorySection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}