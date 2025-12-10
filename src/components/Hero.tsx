"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-pepes-light pt-20">
      
      {/* 1. FONDO DEGRADADO (Estilo "Explosión") */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(236,102,41,0.2)_0%,rgba(255,255,255,0)_70%)] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* 2. TEXTO HERO (Izquierda) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-pepes-yellow text-pepes-dark font-bold text-sm mb-4 border-2 border-pepes-dark shadow-[4px_4px_0px_0px_rgba(26,26,26,1)]">
            🔥 Street Food Elevated
          </span>
          
          <h1 className="font-heading font-black text-6xl md:text-8xl text-pepes-dark leading-[0.9] mb-6">
            {t.hero.headline}
          </h1>
          
          <p className="text-xl text-gray-600 font-medium mb-8 max-w-md mx-auto md:mx-0">
            {t.hero.subheadline}
          </p>

          <motion.a 
            href="#menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-pepes-orange text-white px-8 py-4 rounded-full font-bold text-xl shadow-[0_10px_20px_-5px_rgba(236,102,41,0.5)] hover:shadow-[0_15px_25px_-5px_rgba(236,102,41,0.6)] transition-all"
          >
            {t.hero.cta}
            <ArrowRight size={24} />
          </motion.a>
        </motion.div>

        {/* 3. IMAGEN FLOTANTE (Derecha) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
          {/* Círculo decorativo detrás */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pepes-orange rounded-full opacity-10 blur-3xl" />
          
          {/* TACO FLOTANTE (Necesitas subir taco.png a public/) */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
             {/* Usamos un placeholder visual hasta que tengas la foto real */}
             <Image
               src="/taco.png" // Asegúrate de tener esta imagen
               alt="Taco Pepes"
               fill
               className="object-contain drop-shadow-2xl"
               priority
             />
          </motion.div>

          {/* Badge Flotante "Fresh" */}
          <motion.div 
            animate={{ rotate: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute top-10 right-10 bg-pepes-yellow text-pepes-dark w-24 h-24 rounded-full flex items-center justify-center font-black border-4 border-white shadow-xl rotate-12 z-20"
          >
            100%<br/>FRESH
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}