'use client';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();
  const t = dictionary[language].contact;

  return (
    <footer className="bg-white text-zinc-800 pt-20 pb-10 border-t border-orange-100" id="ubicacion">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Ubicación */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-orange-50 p-4 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-zinc-900">
              {language === 'es' ? 'Ubicación' : 'Location'}
            </h3>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xs">
              {t.address}
            </p>
          </div>

          {/* Horario */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-orange-50 p-4 rounded-full mb-6">
              <Clock className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-zinc-900">
              {language === 'es' ? 'Horario' : 'Hours'}
            </h3>
            <div className="text-gray-500 text-lg">
              <p className="font-medium text-zinc-900 mb-1">{t.hours.week}</p>
              <p className="text-orange-600 font-bold">{t.hours.time}</p>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="bg-orange-50 p-4 rounded-full mb-6">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-zinc-900">
              {language === 'es' ? 'Síguenos' : 'Follow Us'}
            </h3>
            
            <div className="flex gap-4 mb-6">
               {t.socials.facebook && (
                 <a href={t.socials.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-gray-400 transition-all shadow-sm">
                   <Facebook size={24}/>
                 </a>
               )}
               {t.socials.instagram && (
                 <a href={t.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-pink-50 hover:text-pink-600 text-gray-400 transition-all shadow-sm">
                   <Instagram size={24}/>
                 </a>
               )}
               {t.socials.tiktok && (
                 <a href={t.socials.tiktok} target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-gray-200 rounded-lg hover:bg-zinc-100 hover:text-black text-gray-400 transition-all shadow-sm">
                   <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
                 </a>
               )}
            </div>
            
            <a href={`tel:${t.phone.replace(/[^0-9]/g, '')}`} className="text-xl font-bold text-gray-500 hover:text-orange-600 transition-colors">
              {t.phone}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Taquería Pepes. 
            <span className="mx-2">|</span> 
            Desarrollado por <a href="https://ruedalarolamedia.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:underline">Rueda la Rola Media</a>
          </p>
        </div>
      </div>
    </footer>
  );
}