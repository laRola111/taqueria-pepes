// src/components/MeatSelection.tsx
"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function MeatSelection() {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-secondary/10 border-y-4 border-dark">
      <div className="container mx-auto px-4">
        <h3 className="font-heading font-black text-3xl text-center mb-8 uppercase tracking-tighter">
          {t.menu.meatSection.title}
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {t.menu.meatSection.items.map((meat: string, i: number) => (
            <motion.span 
              key={i}
              whileHover={{ scale: 1.1, rotate: 2 }}
              className="px-6 py-2 bg-white border-2 border-dark font-black uppercase text-sm shadow-[4px_4px_0px_0px_#1a1a1a]"
            >
              {meat}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}