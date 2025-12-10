"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const PHOTOS = [
  "bg-red-500", "bg-yellow-500", "bg-orange-500", "bg-green-500", // Colores temporales
  // Cuando tengas fotos: "/images/gallery/1.jpg", etc.
];

export function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 mb-10 flex justify-between items-end">
        <h2 className="font-heading font-black text-4xl text-dark">
          @TaqueriaPepes
        </h2>
        <a href="#" className="flex items-center gap-2 text-primary font-bold hover:underline">
          <Instagram size={20} />
          Síguenos
        </a>
      </div>

      {/* Carrusel Infinito de Fotos */}
      <div className="overflow-hidden">
        <motion.div 
          className="flex gap-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...PHOTOS, ...PHOTOS, ...PHOTOS].map((color, i) => (
            <div 
              key={i} 
              className={`shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-3xl ${color} relative overflow-hidden group cursor-pointer`}
            >
              {/* Overlay al pasar mouse */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold">
                ❤️ 4.5k
              </div>
              {/* Aquí iría <Image src={photo} fill ... /> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}