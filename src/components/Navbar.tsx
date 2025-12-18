'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = dictionary[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Libre y Grande */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-20 h-20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logoPepes.png"
                alt="Taquería Pepes Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className={`font-bold text-2xl tracking-wider font-serif leading-none ${scrolled ? 'text-zinc-900' : 'text-zinc-900 md:text-zinc-900'}`}>
                TAQUERÍA
              </span>
              <span className="text-orange-600 font-bold text-xl leading-none">PEPE'S</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="#menu" 
              className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-zinc-700' : 'text-zinc-800'}`}
            >
              {language === 'es' ? 'Menú' : 'Menu'}
            </Link>
            <Link 
              href="#ubicacion" 
              className={`font-medium transition-colors hover:text-orange-500 ${scrolled ? 'text-zinc-700' : 'text-zinc-800'}`}
            >
              {language === 'es' ? 'Ubicación' : 'Location'}
            </Link>
            
            {/* Botón Idioma */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 transition-colors px-3 py-1 rounded-full text-sm border ${
                scrolled 
                  ? 'border-orange-200 text-orange-600 hover:bg-orange-50' 
                  : 'border-orange-200/50 text-orange-700 bg-white/80 hover:bg-white'
              }`}
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Teléfono */}
            <a 
              href={`tel:${t.contact.phone.replace(/[^0-9]/g, '')}`}
              className={`flex items-center gap-2 transition-colors font-bold ${scrolled ? 'text-zinc-800' : 'text-zinc-900'}`}
            >
              <Phone size={18} className="text-orange-600" />
              <span className="hidden lg:inline">{t.contact.phone}</span>
            </a>

            {/* CTA DoorDash */}
            <a 
              href="https://taqueriapepesatx.square.site/#2PNWEFAN4F5WC5IJZY4HQUWC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-5 py-2 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <span className="hidden lg:inline">{t.contact.doordashBtn}</span>
              <span className="lg:hidden">Order</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-orange-600 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown - FONDO BLANCO */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-orange-100 shadow-xl py-6 flex flex-col gap-6 items-center animate-in slide-in-from-top-5 duration-200 h-screen z-50">
            <Link 
              href="#menu" 
              className="text-zinc-800 text-2xl font-serif hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
              {language === 'es' ? 'Ver Menú' : 'View Menu'}
            </Link>
            <Link 
              href="#ubicacion" 
              className="text-zinc-800 text-2xl font-serif hover:text-orange-600"
              onClick={() => setIsOpen(false)}
            >
               {language === 'es' ? 'Ubicación' : 'Location'}
            </Link>
            
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="flex items-center gap-2 text-orange-700 bg-orange-50 px-6 py-2 rounded-full text-lg border border-orange-200"
            >
              <Globe size={20} />
              <span>Cambiar a {language === 'es' ? 'Inglés' : 'Spanish'}</span>
            </button>

            <a 
              href={`tel:${t.contact.phone.replace(/[^0-9]/g, '')}`}
              className="text-zinc-900 text-2xl font-bold"
            >
              {t.contact.phone}
            </a>

            <a 
              href="https://www.doordash.com/search/store/Taqueria%20Pepes/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-8 py-4 rounded-full font-bold w-4/5 text-center shadow-lg text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t.contact.doordashBtn}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}