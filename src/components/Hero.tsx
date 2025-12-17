"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-light">
      {/* Fondo Abstracto (Círculos Pop Art) */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] border-[3px] border-dashed border-primary/20 rounded-full"
         />
         <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Texto Hero */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 bg-secondary text-dark font-bold text-sm uppercase tracking-wider mb-4 border-2 border-dark shadow-[4px_4px_0px_0px_#1a1a1a]">
            Austin, Texas
          </span>
          <h1 className="font-heading font-black text-6xl md:text-8xl leading-[0.9] text-dark mb-6">
            TACOS <br />
            <span className="text-primary">AL PASTOR</span> <br />
            & MÁS
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md font-medium">
            {t.hero.subheadline}
          </p>
          <div className="flex gap-4">
            {/* Botón CTA Principal */}
            <button className="px-8 py-4 bg-primary text-white font-black text-lg uppercase tracking-wide border-2 border-dark shadow-[6px_6px_0px_0px_#1a1a1a] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#1a1a1a] transition-all">
              {t.hero.cta}
            </button>
            {/* Botón Ubicación CORREGIDO: Llama a t.hero.locationBtn */}
            <button className="px-8 py-4 bg-white text-dark font-black text-lg uppercase tracking-wide border-2 border-dark shadow-[6px_6px_0px_0px_#1a1a1a] hover:bg-gray-50 hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_#1a1a1a] transition-all">
              {t.hero.locationBtn}
            </button>
          </div>
        </motion.div>

        {/* Imagen Flotante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full"
        >
          {/* Asegúrate que public/taco.png existe */}
          <Image
            src="/taco.png" 
            alt="Taco Hero"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          {/* Badge Flotante */}
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-10 left-0 bg-white p-4 rounded-full border-2 border-dark shadow-pepes flex items-center justify-center w-32 h-32"
          >
             <p className="font-heading font-black text-center text-sm leading-tight">
               100%<br/><span className="text-primary text-lg">MAÍZ</span><br/>FRESCO
             </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}