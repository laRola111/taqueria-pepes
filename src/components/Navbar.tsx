"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para reducir tamaño
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- NAVBAR FLOTANTE (PILL) --- */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          isScrolled ? "top-2" : "top-6"
        }`}
      >
        <div 
          className={`
            bg-white/95 backdrop-blur-md 
            border-2 border-[#ec6629]/10 
            rounded-full shadow-lg hover:shadow-xl transition-all
            flex items-center justify-between
            ${isScrolled ? "py-2 px-4 w-[95%] max-w-5xl" : "py-3 px-6 w-full max-w-4xl"}
          `}
        >
          
          {/* 1. LOGO */}
          <Link href="/" className="relative w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform cursor-pointer shrink-0">
            <Image 
              src="/logoPepes.png" 
              alt="Pepes Logo" 
              fill 
              className="object-contain"
              priority
            />
          </Link>

          {/* 2. MENÚ DE ESCRITORIO (Links) */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#hero" className="font-heading font-bold text-[#1a1a1a] hover:text-[#ec6629] transition-colors uppercase tracking-wide text-sm">
              {t.navbar.home}
            </Link>
            <Link href="#menu" className="font-heading font-bold text-[#1a1a1a] hover:text-[#ec6629] transition-colors uppercase tracking-wide text-sm">
              {t.navbar.menu}
            </Link>
            <Link href="#location" className="font-heading font-bold text-[#1a1a1a] hover:text-[#ec6629] transition-colors uppercase tracking-wide text-sm">
              {t.navbar.location}
            </Link>
          </div>

          {/* 3. ACCIONES (Idioma + Pedir) */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Toggle Idioma */}
            <button 
              onClick={toggleLanguage}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs hover:bg-[#e8db2f] transition-colors text-[#1a1a1a]"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Botón CTA (Desktop) */}
            <button className="hidden md:flex items-center gap-2 bg-[#ec6629] text-white px-5 py-2 rounded-full font-bold hover:bg-[#d83415] transition-colors shadow-md transform hover:-translate-y-0.5">
              <ShoppingBag size={18} />
              <span>{t.navbar.cta}</span>
            </button>

            {/* Botón Menú Móvil */}
            <button 
              className="md:hidden p-2 text-[#ec6629] bg-[#ec6629]/10 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MENÚ MÓVIL (FULL SCREEN) --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#ec6629] flex flex-col items-center justify-center text-white"
          >
            {/* Botón Cerrar */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-3 bg-white/20 rounded-full hover:bg-white/40 text-white"
            >
              <X size={32} />
            </button>

            {/* Links Móviles */}
            <div className="flex flex-col gap-8 text-center">
              <Link 
                href="#hero" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-4xl font-black hover:text-[#e8db2f] transition-colors"
              >
                {t.navbar.home}
              </Link>
              <Link 
                href="#menu" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-4xl font-black hover:text-[#e8db2f] transition-colors"
              >
                {t.navbar.menu}
              </Link>
              <Link 
                href="#location" 
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-4xl font-black hover:text-[#e8db2f] transition-colors"
              >
                {t.navbar.location}
              </Link>
            </div>

            {/* CTA Móvil */}
            <button className="mt-12 bg-white text-[#ec6629] px-8 py-4 rounded-full font-black text-xl shadow-xl flex items-center gap-3 active:scale-95 transition-transform">
              <ShoppingBag size={24} />
              {t.navbar.cta}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}