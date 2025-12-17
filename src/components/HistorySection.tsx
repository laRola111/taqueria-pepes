"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function HistorySection() {
  const { t } = useLanguage();

  return (
    <section id="historia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase mb-2 block">
              {t.about.pretitle}
            </span>
            <h2 className="font-heading font-black text-5xl md:text-6xl text-dark mb-6 leading-none">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.about.description}
            </p>

            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-4">
              {t.about.stats.map((stat: any, i: number) => (
                <div key={i} className="bg-light p-4 rounded-xl border-2 border-dark text-center shadow-pepes">
                  <span className="block font-heading font-black text-3xl text-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm font-bold text-dark uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Imagen Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Foto Principal */}
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden border-4 border-dark shadow-[10px_10px_0px_0px_#1a1a1a] rotate-2">
               <Image 
                 src="/platillos/tacos.png" // Usamos una de tus fotos reales
                 alt="Historia Pepe's"
                 fill
                 className="object-cover"
               />
            </div>
            
            {/* Foto Secundaria (Flotante) */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full border-4 border-dark bg-secondary overflow-hidden shadow-pepes -rotate-6 hidden md:block">
               <Image 
                 src="/platillos/gorditas.png" 
                 alt="Tradición"
                 fill
                 className="object-cover"
               />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}