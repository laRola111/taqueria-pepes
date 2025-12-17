"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar estilo
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: t.navbar.home, href: "#" },
            { label: t.navbar.menu, href: "#menu" },
            { label: t.about.pretitle, href: "#historia" }, // Usamos 'pretitle' como link corto
            { label: t.navbar.location, href: "#ubicacion" },
          ].map((link, i) => (
            <Link 
              key={i} 
              href={link.href}
              className="font-heading font-bold text-dark text-lg hover:text-primary transition-colors uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Switch Idioma */}
          <button 
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="font-bold border-2 border-dark px-3 py-1 rounded-full hover:bg-dark hover:text-white transition-colors"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* Botón CTA */}
          <button className="bg-primary text-white font-bold px-6 py-2 rounded-full border-2 border-dark shadow-[4px_4px_0px_0px_#1a1a1a] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#1a1a1a] transition-all flex items-center gap-2">
            <ShoppingBag size={18} />
            {t.navbar.cta}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-light border-b-2 border-dark p-4 flex flex-col gap-4 shadow-xl md:hidden">
           {/* Mismos links para móvil... */}
           <Link href="#menu" className="font-heading font-bold text-xl text-dark" onClick={() => setIsOpen(false)}>{t.navbar.menu}</Link>
           <Link href="#ubicacion" className="font-heading font-bold text-xl text-dark" onClick={() => setIsOpen(false)}>{t.navbar.location}</Link>
           <button className="w-full bg-primary text-white py-3 font-bold rounded-xl border-2 border-dark">
             {t.navbar.cta}
           </button>
        </div>
      )}
    </nav>
  );
}