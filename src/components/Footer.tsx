"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Facebook, Instagram, MapPin } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          
          {/* Marca */}
          <div>
            <h3 className="font-heading font-black text-4xl text-secondary mb-6">
              PEPE'S ATX
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-bold text-xl text-primary mb-6 uppercase tracking-wider">
              {t.location.hoursTitle}
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li className="font-medium">{t.location.hours}</li>
              <li>Happy Hour: Jueves todo el día</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
             <h4 className="font-bold text-xl text-primary mb-6 uppercase tracking-wider">
              {t.location.contactTitle}
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="text-secondary" />
                {t.location.address}
              </li>
              <li className="font-black text-2xl text-white">
                {t.location.phone}
              </li>
              <li className="flex gap-4 justify-center md:justify-start mt-4">
                 {/* Iconos Sociales */}
                 <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"><Facebook size={20}/></a>
                 <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors"><Instagram size={20}/></a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Taquería Pepe's ATX. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}