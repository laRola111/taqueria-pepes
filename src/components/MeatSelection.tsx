"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function MeatSelection() {
  const { t } = useLanguage();
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="font-heading font-black text-4xl md:text-5xl text-primary uppercase italic mb-2">
            {t.menu.meatSection.title}
          </h3>
          <p className="text-dark/60 font-bold uppercase tracking-widest text-sm">
            {t.menu.meatSection.subtitle}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {t.menu.meatSection.items.map((meat: string, i: number) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "#ec6629", color: "#ffffff" }}
              className="px-8 py-4 bg-primary-soft rounded-2xl border border-primary/10 text-primary font-black uppercase text-lg cursor-default transition-colors shadow-sm"
            >
              {meat}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}