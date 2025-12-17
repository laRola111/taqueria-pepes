"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function DynamicMenu() {
  const { t } = useLanguage();
  const categories = t?.menu?.categories || [];
  
  // Inicializamos con el ID de la primera categoría para evitar el 'undefined'
  const [activeTab, setActiveTab] = useState(categories[0]?.id || "");

  // Forzar actualización si cambia el idioma
  useEffect(() => {
    if (categories.length > 0 && !activeTab) {
      setActiveTab(categories[0].id);
    }
  }, [categories, activeTab]);

  const activeCategory = categories.find((c: any) => c.id === activeTab) || categories[0];

  if (!activeCategory) return null;

  return (
    <section id="menu-completo" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-5xl md:text-7xl uppercase italic mb-4">
            Nuestro <span className="text-primary">Menú</span>
          </h2>
          <p className="text-dark/60 font-bold uppercase tracking-widest">Basado en nuestro menú físico</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-4 font-black uppercase transition-all border-4 border-dark shadow-[4px_4px_0px_0px_#1a1a1a] ${
                activeTab === cat.id 
                ? "bg-secondary text-dark -translate-y-1 shadow-[8px_8px_0px_0px_#1a1a1a]" 
                : "bg-white text-dark/40"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-start bg-white border-4 border-dark p-8 md:p-12 rounded-[3rem] shadow-pepes"
          >
            <div className="space-y-6">
              {activeCategory.items.map((item: any, idx: number) => (
                <div key={idx} className="border-b-2 border-dark/5 pb-4">
                  <h4 className="font-heading font-black text-2xl uppercase text-dark">{item.name}</h4>
                  <p className="text-dark/60 font-medium italic">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={activeCategory.image}
                alt={activeCategory.title}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}