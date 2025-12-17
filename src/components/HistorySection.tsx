"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function HistorySection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Fondo decorativo detrás de la comida */}
            <div className="absolute inset-0 bg-secondary rounded-full filter blur-3xl opacity-30 animate-pulse" />
            <Image 
              src="/platillos/BerbacoaDeChivo.png" 
              alt="Barbacoa Tradicional"
              width={600}
              height={600}
              className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-primary font-bold text-xl uppercase">{t.about.pretitle}</h2>
            <h3 className="text-5xl md:text-7xl font-heading font-black text-dark leading-tight">
              TRADICIÓN EN <br /> CADA MORDIDA
            </h3>
            <p className="text-xl text-dark/70 leading-relaxed font-medium">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              {t.about.stats.map((stat: any, i: number) => (
                <div key={i} className="text-center p-4 border-2 border-dark rounded-2xl bg-white shadow-[4px_4px_0px_0px_#1a1a1a]">
                  <p className="text-3xl font-black text-primary">{stat.value}</p>
                  <p className="text-xs font-bold uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}