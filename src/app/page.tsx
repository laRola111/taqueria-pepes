"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee"; // Asegúrate que exista
import { MenuGrid } from "@/components/MenuGrid";
import { FullMenuModal } from "@/components/FullMenuModal";
import { Footer } from "@/components/Footer";
// Si tienes estos componentes, úsalos. Si no, comenta las líneas.
// import { HistorySection } from "@/components/HistorySection"; 
// import { GallerySection } from "@/components/GallerySection";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-light selection:bg-primary selection:text-white">
      <Navbar />
      
      <Hero />
      
      {/* Tira de Marquee animada (Texto que corre) */}
      <div className="border-y-2 border-dark bg-secondary py-3 overflow-hidden">
         <Marquee /> 
      </div>

      <MenuGrid />
      
      {/* Botón flotante para abrir menú completo en móvil */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="bg-dark text-white p-4 rounded-full shadow-lg border-2 border-white"
        >
          🍔
        </button>
      </div>

      <FullMenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <Footer />
    </main>
  );
}