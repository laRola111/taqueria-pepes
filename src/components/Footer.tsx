"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 rounded-t-[3rem] mt-12">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          
          {/* 1. MARCA */}
          <div className="md:col-span-1 space-y-6">
            <div className="relative w-20 h-20">
               <Image 
                 src="/logoPepes.png" 
                 alt="Pepes Footer Logo" 
                 fill 
                 className="object-contain"
               />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sabor que explota. Ingredientes frescos y el auténtico sazón de la calle llevado al siguiente nivel.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-[#ec6629] hover:text-white text-gray-400 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-[#2a2a2a] p-3 rounded-full hover:bg-[#ec6629] hover:text-white text-gray-400 transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* 2. LINKS */}
          <div className="md:col-span-1">
            <h4 className="font-heading font-bold text-xl mb-6 text-[#ec6629]">Navegación</h4>
            <ul className="space-y-4 text-gray-300">
              <li><Link href="#hero" className="hover:text-[#e8db2f] transition-colors">{t.navbar.home}</Link></li>
              <li><Link href="#menu" className="hover:text-[#e8db2f] transition-colors">{t.navbar.menu}</Link></li>
              <li><Link href="#location" className="hover:text-[#e8db2f] transition-colors">{t.navbar.location}</Link></li>
            </ul>
          </div>

          {/* 3. CONTACTO (Lee del diccionario) */}
          <div className="md:col-span-2">
            <h4 className="font-heading font-bold text-xl mb-6 text-[#ec6629]">{t.location.contactTitle}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Dirección */}
              <div className="flex items-start gap-4">
                <div className="bg-[#ec6629]/10 p-3 rounded-xl text-[#ec6629]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">{t.location.addressTitle}</h5>
                  <p className="text-gray-400 text-sm">{t.location.address}</p>
                </div>
              </div>

              {/* Horario */}
              <div className="flex items-start gap-4">
                <div className="bg-[#ec6629]/10 p-3 rounded-xl text-[#ec6629]">
                  <Clock size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">{t.location.hoursTitle}</h5>
                  <p className="text-gray-400 text-sm">{t.location.hours}</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start gap-4 sm:col-span-2">
                <div className="bg-[#ec6629]/10 p-3 rounded-xl text-[#ec6629]">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-white mb-1">{t.location.contactTitle}</h5>
                  <p className="text-gray-400 text-sm">{t.location.phone}</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Taquería Pepes. {t.footer.rights}</p>
          <p>
            Powered by <span className="text-[#ec6629] font-bold">Arknica</span>
          </p>
        </div>

      </div>
    </footer>
  );
}