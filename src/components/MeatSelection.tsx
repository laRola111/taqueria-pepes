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
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {t.menu.meatSection.items.map((meat: string, i: number) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, backgroundColor: "#ec6629", color: "#ffffff" }}
              className="px-6 py-3 bg-light rounded-2xl border-2 border-dark/5 text-primary font-black uppercase text-base md:text-lg cursor-default transition-all shadow-sm hover:shadow-md hover:border-primary"
            >
              {meat}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}