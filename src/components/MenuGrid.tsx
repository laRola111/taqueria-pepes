"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function MenuGrid() {
  const { t } = useLanguage();

  // Mapeamos las categorías del diccionario a un array para poder iterar
  const categories = [
    { id: 'tacos', ...t.menu.categories.tacos, icon: "🌮" },
    { id: 'tortas', ...t.menu.categories.tortas, icon: "🥪" },
    { id: 'gorditas', ...t.menu.categories.gorditas, icon: "🫓" },
    { id: 'specialties', ...t.menu.categories.specialties, icon: "🔥" },
  ];

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-pepes-orange font-bold text-xl uppercase tracking-widest">
            {t.menu.title}
          </h2>
          <h3 className="font-heading font-black text-5xl md:text-6xl text-pepes-dark">
            {t.menu.subtitle}
          </h3>
          <div className="w-24 h-2 bg-pepes-yellow mx-auto rounded-full mt-4" />
        </div>

        {/* Grid de Tarjetas "Pop" */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-lg hover:border-pepes-orange hover:shadow-[0_10px_0_0_#ec6629] transition-all duration-300 group"
            >
              {/* Icono Gigante */}
              <div className="text-6xl mb-6 bg-pepes-light w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>

              <h4 className="font-heading font-bold text-3xl text-pepes-dark mb-3">
                {cat.title}
              </h4>
              
              <p className="text-gray-500 mb-6 flex-grow leading-relaxed">
                {cat.desc}
              </p>

              <div className="w-full mt-auto">
                <span className="block text-pepes-orange font-bold text-xl mb-4">
                  {cat.price}
                </span>
                <button className="w-full py-3 rounded-xl font-bold bg-gray-100 text-pepes-dark group-hover:bg-pepes-dark group-hover:text-white transition-colors flex items-center justify-center gap-2">
                  Pedir <Star size={16} className="fill-current" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón Ver Todo */}
        <div className="text-center mt-16">
          <button className="text-pepes-dark font-bold text-lg border-b-2 border-pepes-orange pb-1 hover:text-pepes-orange transition-colors">
            {t.menu.cta} →
          </button>
        </div>

      </div>
    </section>
  );
}