"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Flame } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-24 pb-12">
      
      {/* Patrón de Fondo Decorativo (Círculos concéntricos) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[60px] border-white/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[40px] border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* TEXTO (Lado Izquierdo) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left text-white"
        >
          <div className="inline-flex items-center gap-2 bg-dark text-secondary px-4 py-2 rounded-full font-bold text-sm mb-6 shadow-pepes border-2 border-white transform -rotate-2">
            <Flame size={18} className="fill-current" />
            <span>EST. 2024 • AUTÉNTICO SAZÓN</span>
          </div>
          
          <h1 className="font-heading font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-6 drop-shadow-lg">
            SABOR <br/>
            <span className="text-secondary text-stroke-dark">EXPLOSIVO</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium mb-10 max-w-lg mx-auto lg:mx-0 opacity-90">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-dark px-8 py-4 rounded-2xl font-black text-xl shadow-pepes flex items-center justify-center gap-3 border-2 border-dark"
            >
              {t.hero.cta}
              <ArrowRight size={24} strokeWidth={3} />
            </motion.a>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              className="bg-dark text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-pepes border-2 border-white/20"
            >
              Ubicación
            </motion.button>
          </div>
        </motion.div>

        {/* IMAGEN (Lado Derecho) - Arreglo para imagen "no PNG" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
          animate={{ opacity: 1, scale: 1, rotate: 6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center"
        >
          {/* Si la imagen tiene fondo, usamos este círculo contenedor para enmascararla */}
          <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] bg-white rounded-full border-8 border-secondary shadow-2xl overflow-hidden flex items-center justify-center">
             
             {/* Tu imagen (taco.png) */}
             <div className="relative w-[90%] h-[90%]">
               <Image
                 src="/taco.png"
                 alt="Taco Pepes"
                 fill
                 className="object-contain hover:scale-110 transition-transform duration-500"
                 priority
               />
             </div>
             
             {/* Sticker de Precio o "Hot" */}
             <motion.div 
               animate={{ rotate: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
               className="absolute bottom-4 right-8 bg-secondary text-dark w-24 h-24 rounded-full flex flex-col items-center justify-center font-black border-4 border-dark shadow-pepes rotate-[-12deg] z-20"
             >
               <span className="text-xs">DESDE</span>
               <span className="text-2xl">$2.50</span>
             </motion.div>
          </div>
        </motion.div>

      </div>
      
      {/* Separador inferior ondulado (SVG) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}