"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Marquee() {
  const { t } = useLanguage();
  
  // Duplicamos mucho para que el loop sea suave
  const items = [...t.marquee.items, ...t.marquee.items, ...t.marquee.items];

  return (
    <section className="bg-dark py-4 border-y-4 border-secondary overflow-hidden rotate-[-1deg] scale-105 z-20 shadow-xl relative -mt-8 mb-12">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        >
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-white font-heading font-bold text-3xl md:text-5xl uppercase tracking-wider">
                {item}
              </span>
              {/* Separador Visual (Estrella o Rayo) */}
              <span className="text-secondary text-4xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}