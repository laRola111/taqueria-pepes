"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function HistorySection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-dark text-white relative overflow-hidden">
      {/* Fondo de ruido (opcional si ya está en globals, pero aquí reforzamos lo dark) */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Lado A: Manifiesto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">
            {t.about.pretitle}
          </span>
          <h2 className="font-heading font-black text-5xl md:text-6xl mb-6 leading-none">
            {t.about.title}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-primary pl-6">
            {t.about.description}
          </p>
        </motion.div>

        {/* Lado B: Estadísticas / Impacto */}
        <div className="grid grid-cols-2 gap-4">
          {t.about.stats.map((stat: any, i: number) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col justify-center items-center text-center hover:bg-primary hover:border-primary transition-colors group ${i === 2 ? 'col-span-2' : ''}`}
            >
              <span className="font-heading font-black text-5xl text-primary group-hover:text-white transition-colors">
                {stat.value}
              </span>
              <span className="font-bold text-sm uppercase tracking-wider mt-2 group-hover:text-black transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}