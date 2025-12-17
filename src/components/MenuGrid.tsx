"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

// Definimos la interfaz aquí para asegurar el tipado
interface Category {
  id: string;
  title: string;
  image: string;
  items: any[];
}

export function MenuGrid() {
  const { t } = useLanguage();
  // Casting explícito porque t.menu.categories viene del JSON
  const categories = t.menu.categories as Category[]; 

  return (
    <section id="menu" className="py-24 bg-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4 relative z-10">
          <h2 className="text-primary font-bold text-xl uppercase tracking-widest">
            {t.menu.title}
          </h2>
          <h3 className="font-heading font-black text-5xl md:text-6xl text-dark">
            {t.menu.subtitle}
          </h3>
          
          {/* Banner de Especiales (Usando Secondary/Amarillo) */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
             {t.menu.specials.slice(0, 2).map((s: any, i: number) => (
                 <span key={i} className="bg-secondary text-dark px-4 py-1 rounded-full text-sm font-bold shadow-pepes border-2 border-dark">
                     🔥 {s.desc}
                 </span>
             ))}
          </div>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-pepes border-2 border-dark bg-white"
            >
              {/* Imagen de Fondo */}
              <div className="absolute inset-0">
                <Image 
                    src={cat.image} 
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Degradado usando variables CSS */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-light">
                <h4 className="font-heading font-bold text-3xl mb-2 group-hover:text-secondary transition-colors">
                    {cat.title}
                </h4>
                
                {/* Preview de items */}
                <ul className="mb-6 space-y-1 text-gray-200 text-sm font-medium">
                    {cat.items.slice(0, 4).map((item: any, idx: number) => (
                        <li key={idx}>• {item.name}</li>
                    ))}
                </ul>

                <button className="w-full py-3 rounded-xl font-bold bg-light text-dark group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center gap-2 border-2 border-transparent group-hover:border-light">
                  Ver Detalles <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}