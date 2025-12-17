"use client";

import { motion } from "framer-motion";
import { ArrowRight, Flame } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export function MenuGrid() {
  const { t } = useLanguage();
  const categories = t.menu.categories;

  return (
    <section id="menu" className="py-32 bg-light relative">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-black text-2xl mb-4 tracking-tighter flex items-center gap-2">
              <Flame fill="currentColor" /> {t.menu.title}
            </h2>
            <h3 className="font-heading font-black text-6xl md:text-8xl text-dark leading-none">
              {t.menu.subtitle}
            </h3>
          </div>
          <p className="text-xl font-bold text-dark/60 max-w-xs border-l-4 border-secondary pl-4">
            Recetas auténticas traídas directamente de CDMX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat: any, i: number) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white border-4 border-dark p-8 rounded-[3rem] shadow-pepes hover:bg-secondary transition-all duration-300"
            >
              {/* Imagen que sobresale de la tarjeta */}
              <div className="relative h-56 -mt-24 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <Image 
                    src={cat.image} 
                    alt={cat.title}
                    fill
                    className="object-contain drop-shadow-2xl"
                />
              </div>

              <h4 className="font-heading font-black text-4xl mb-4 text-dark italic">
                  {cat.title}
              </h4>
              
              <ul className="mb-8 space-y-3">
                  {cat.items.slice(0, 4).map((item: any, idx: number) => (
                      <li key={idx} className="flex justify-between items-center border-b-2 border-dark/10 pb-1">
                        <span className="font-bold">{item.name}</span>
                        <span className="bg-dark text-white px-2 py-0.5 rounded text-sm">{item.price}</span>
                      </li>
                  ))}
              </ul>

              <button className="w-full py-4 bg-dark text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 group-hover:bg-primary transition-colors">
                VER TODO <ArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}