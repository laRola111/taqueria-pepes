"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Lista de tus imágenes reales en public/platillos
const IMAGES = [
  "/platillos/Burrito.png",
  "/platillos/pambazo.png",
  "/platillos/menudo.png",
  "/platillos/flautas.png",
  "/platillos/quesadillaDeMaiz.png",
  "/platillos/torta.png"
];

export function GallerySection() {
  return (
    <section className="py-24 bg-secondary border-t-4 border-dark">
      <div className="container mx-auto px-4 md:px-8 text-center mb-12">
        <h2 className="font-heading font-black text-5xl text-dark uppercase mb-4">
          Galería del Sabor
        </h2>
        <p className="font-bold text-dark/80 max-w-2xl mx-auto">
          Un vistazo a lo que te espera. Advertencia: Puede causar antojo inmediato.
        </p>
      </div>

      {/* Grid estilo Masonry (Alternado) */}
      <div className="container mx-auto px-4 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {IMAGES.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="break-inside-avoid relative rounded-2xl overflow-hidden border-4 border-dark shadow-[6px_6px_0px_0px_#1a1a1a] bg-white group"
          >
            <Image
              src={src}
              alt={`Galería Pepe's ${i}`}
              width={600}
              height={600}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}