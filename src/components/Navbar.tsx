"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage(); // <--- Ahora esto funcionará 100%
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar estilo de la barra
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función auxiliar para cambiar idioma
  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-light/95 backdrop-blur-md border-b-2 border-dark py-2" : "bg-transparent py-4"
    }`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="relative w-32 h-12 md:w-40 md:h-16 hover:scale-105 transition-transform">
          <Image 
            src="/logoPepes.png" 
            alt="Taquería Pepe's Logo" 
            fill 
            className="object-contain"
            priority
          />
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="font-heading font-bold text-dark text-lg hover:text-primary transition-colors uppercase">{t.navbar.home}</Link>
          <Link href="#menu" className="font-heading font-bold text-dark text-lg hover:text-primary transition-colors uppercase">{t.navbar.menu}</Link>
          <Link href="#historia" className="font-heading font-bold text-dark text-lg hover:text-primary transition-colors uppercase">{t.about.pretitle}</Link>
          <Link href="#ubicacion" className="font-heading font-bold text-dark text-lg hover:text-primary transition-colors uppercase">{t.navbar.location}</Link>
          
          {/* Switch Idioma */}
          <button 
            onClick={toggleLanguage}
            className="font-bold border-2 border-dark px-3 py-1 rounded-full hover:bg-dark hover:text-white transition-colors text-sm"
          >
            {language === 'es' ? '🇺🇸 EN' : '🇲🇽 ES'}
          </button>

          {/* Botón CTA */}
          <button className="bg-primary text-white font-bold px-6 py-2 rounded-full border-2 border-dark shadow-[4px_4px_0px_0px_#1a1a1a] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all flex items-center gap-2">
            <ShoppingBag size={18} />
            {t.navbar.cta}
          </button>
        </div>

        {/* Botón Menú Móvil */}
        <button className="md:hidden text-dark p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menú Móvil Desplegable */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-light border-b-4 border-dark p-6 flex flex-col gap-6 shadow-2xl md:hidden">
           <Link href="#" className="font-heading font-black text-2xl text-dark" onClick={() => setIsOpen(false)}>{t.navbar.home}</Link>
           <Link href="#menu" className="font-heading font-black text-2xl text-dark" onClick={() => setIsOpen(false)}>{t.navbar.menu}</Link>
           <Link href="#ubicacion" className="font-heading font-black text-2xl text-dark" onClick={() => setIsOpen(false)}>{t.navbar.location}</Link>
           
           <div className="flex gap-4">
             <button onClick={toggleLanguage} className="flex-1 py-3 border-2 border-dark rounded-xl font-bold">
               {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
             </button>
             <button className="flex-1 bg-primary text-white py-3 font-bold rounded-xl border-2 border-dark shadow-pepes">
               {t.navbar.cta}
             </button>
           </div>
        </div>
      )}
    </nav>
  );
}