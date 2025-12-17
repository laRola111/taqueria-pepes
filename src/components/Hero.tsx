"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-light">
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -right-[5%] w-[800px] h-[800px] border-[2px] border-dashed border-primary/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Izquierdo: Texto Impactante */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 bg-secondary text-dark font-black text-sm uppercase tracking-widest mb-6 border-4 border-dark shadow-[4px_4px_0px_0px_#1a1a1a]"
          >
            🔥 El mejor sabor de Austin
          </motion.span>
          
          <h1 className="font-heading font-black text-7xl md:text-9xl leading-[0.8] text-dark mb-8 italic">
            TACOS <br />
            <span className="text-primary not-italic">AL PASTOR</span> <br />
            <span className="text-5xl md:text-7xl">& MUCHO MÁS</span>
          </h1>
          
          <p className="text-xl text-dark/70 mb-10 max-w-md font-bold leading-relaxed">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="group relative px-10 py-5 bg-primary text-white font-black text-xl uppercase tracking-wider border-4 border-dark shadow-pepes hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              {t.hero.cta}
            </button>
            <button className="px-10 py-5 bg-white text-dark font-black text-xl uppercase tracking-wider border-4 border-dark shadow-pepes hover:bg-secondary transition-colors">
              {t.hero.locationBtn}
            </button>
          </div>
        </motion.div>

        {/* Lado Derecho: Comida Flotante (PNGs sin fondo) */}
        <div className="relative h-[500px] md:h-[700px] flex items-center justify-center">
          {/* Imagen Principal */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="relative z-20 w-full h-full"
          >
            <Image
              src="/platillos/tacos.png" 
              alt="Taco Principal"
              fill
              className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]"
              priority
            />
          </motion.div>

          {/* Elemento secundario flotante (Burrito o Quesadilla) */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-48 h-48 z-30 hidden md:block"
          >
            <Image src="/platillos/Burrito.png" alt="Burrito" fill className="object-contain drop-shadow-xl" />
          </motion.div>

          {/* Badge circular animado */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-0 bg-secondary p-6 rounded-full border-4 border-dark shadow-pepes z-40 -rotate-12"
          >
            <p className="font-heading font-black text-center text-lg leading-tight">
              100%<br/><span className="text-primary text-2xl">MAÍZ</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}