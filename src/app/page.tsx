"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MenuGrid } from "@/components/MenuGrid";
import { HistorySection } from "@/components/HistorySection"; // NUEVO
import { GallerySection } from "@/components/GallerySection"; // NUEVO
import { Footer } from "@/components/Footer";
import { FullMenuModal } from "@/components/FullMenuModal"; // NUEVO

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-light text-dark font-sans selection:bg-pepes-orange selection:text-white overflow-x-hidden">
      
      <Navbar />
      
      <Hero />
      
      {/* Cinta de texto rotada */}
      <Marquee />
      
      {/* Sección Historia (Dark Mode) */}
      <HistorySection />

      {/* Grid de Menú Principal */}
      <div className="relative">
        <MenuGrid />
        
        {/* Botón Flotante para abrir Menú Completo (opcional o dentro de MenuGrid) */}
        <div className="flex justify-center pb-12 bg-white">
           <button 
             onClick={() => setIsMenuOpen(true)}
             className="px-8 py-3 rounded-full border-2 border-dark font-bold text-dark hover:bg-dark hover:text-white transition-all shadow-pepes active:translate-y-1 active:shadow-none"
           >
             VER MENÚ COMPLETO +
           </button>
        </div>
      </div>

      {/* Galería de Fotos */}
      <GallerySection />

      <Footer />

      {/* MODAL (Invisible hasta que se activa) */}
      <FullMenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

    </main>
  );
}