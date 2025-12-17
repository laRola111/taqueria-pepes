"use client";

import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary pt-24 pb-12 border-t-8 border-dark">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12 inline-block bg-white p-4 border-4 border-dark shadow-pepes -rotate-3">
          <Image src="/logoPepes.png" alt="Logo Pepe's" width={180} height={180} />
        </div>
        
        <h4 className="font-heading font-black text-5xl md:text-7xl text-white mb-8 uppercase italic">
          ¡Te esperamos!
        </h4>

        <div className="grid md:grid-cols-3 gap-12 text-white font-black uppercase tracking-tighter mb-16">
          <div>
            <p className="text-secondary text-xl mb-2">{t.location.addressTitle}</p>
            <p className="text-3xl">Austin, TX</p>
          </div>
          <div>
            <p className="text-secondary text-xl mb-2">{t.location.hoursTitle}</p>
            <p className="text-3xl">9:00 AM - 10:00 PM</p>
          </div>
          <div>
            <p className="text-secondary text-xl mb-2">Social</p>
            <p className="text-3xl">@TaqueriaPepes</p>
          </div>
        </div>

        <div className="border-t-4 border-dark/20 pt-8 flex flex-col md:flex-row justify-between items-center text-white/80 font-bold">
          <p>© 2025 TAQUERÍA PEPE'S - ARK NICA IA OPTIMIZED</p>
          <div className="flex gap-8 mt-4 md:mt-0">
             <span>PRIVACY</span>
             <span>TERMS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}