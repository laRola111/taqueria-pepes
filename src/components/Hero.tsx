'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';

export default function Hero() {
  const { language } = useLanguage();
  const t = dictionary[language].hero;

  return (
    <div className="relative min-h-[90vh] flex items-center bg-stone-50 pt-20 overflow-hidden">
      {/* Elementos Decorativos de Fondo (Naranjas suaves) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-50/50 skew-x-12 transform origin-top-right z-0"></div>
      
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center relative z-10">
        
        {/* Columna Texto */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <span className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase border border-orange-200">
               Pflugerville, TX
             </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 mb-6 font-serif leading-tight">
            TAQUERÍA <br/>
            <span className="text-orange-600">PEPE'S</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#menu" 
              className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all hover:scale-105 shadow-xl shadow-orange-200"
            >
              {t.cta}
            </a>
            <a 
              href="#ubicacion" 
              className="px-8 py-4 rounded-full font-bold text-lg text-zinc-700 border-2 border-zinc-200 hover:border-orange-600 hover:text-orange-600 transition-all"
            >
              {language === 'es' ? 'Ver Mapa' : 'Get Directions'}
            </a>
          </div>
        </div>

        {/* Columna Imagen (Taco Flotante) */}
        <div className="order-1 lg:order-2 relative h-[300px] md:h-[500px] w-full flex justify-center items-center">
          {/* Círculo decorativo */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>
          
          <div className="relative w-full h-full animate-in zoom-in duration-1000">
             <Image
              src="/platillos/taco.png" 
              alt="Tacos Mexicanos"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}