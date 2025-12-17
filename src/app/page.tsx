import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import ChefSpecials from '@/components/ChefSpecials';
import MeatSelection from '@/components/MeatSelection';
import MenuGrid from '@/components/MenuGrid';
import WeekendSection from '@/components/WeekendSection';
import VideoGallery from '@/components/VideoGallery';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar />
      <Hero />
      <Marquee />
      <ChefSpecials /> {/* Recomendados del Chef */}
      <MeatSelection /> {/* Lista de Carnes */}
      <MenuGrid /> {/* Antojitos, Especiales, Sides */}
      <WeekendSection /> {/* Fin de Semana y Eventos */}
      <VideoGallery /> {/* Videos Verticales */}
      <ReviewsSection /> {/* Testimonios */}
      <Footer />
      <WhatsAppButton />
    </main>
  );
}