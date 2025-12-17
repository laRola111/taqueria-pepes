"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function DynamicMenu() {
  const { t } = useLanguage();
  const categories = t.menu.categories;
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find((c: any) => c.id === activeTab);

  return (
    <section id="full-menu" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-5xl md:text-7xl uppercase italic mb-4">
            Explora el <span className="text-primary">Menú</span>
          </h2>
          <p className="text-dark/60 font-bold uppercase tracking-widest">Selecciona una categoría del menú físico</p>
        </div>

        {/* Tabs de Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-8 py-4 font-black uppercase tracking-tighter transition-all border-4 border-dark shadow-[4px_4px_0px_0px_#1a1a1a] ${
                activeTab === cat.id 
                ? "bg-secondary text-dark -translate-y-1 shadow-[8px_8px_0px_0px_#1a1a1a]" 
                : "bg-white text-dark/40 hover:text-dark"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Contenido Animado */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid lg:grid-cols-2 gap-12 items-start bg-white border-4 border-dark p-8 md:p-12 rounded-[3rem] shadow-pepes"
          >
            {/* Lista de Items */}
            <div className="space-y-8">
              {activeCategory.items.map((item: any, idx: number) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <h4 className="font-heading font-black text-2xl md:text-3xl uppercase group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <span className="font-black text-2xl text-primary">{item.price}</span>
                  </div>
                  <p className="text-dark/60 font-medium italic border-l-4 border-secondary pl-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Imagen Destacada de la Categoría */}
            <div className="relative h-[400px] md:h-[600px] sticky top-24">
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