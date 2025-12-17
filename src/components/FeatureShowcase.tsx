"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function FeatureShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <section ref={containerRef} className="py-32 bg-dark text-white overflow-hidden relative">
      {/* Texto de fondo gigante */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <h2 className="text-[20vw] font-black leading-none uppercase italic">PEPE'S</h2>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-16 relative z-10">
        <div className="order-2 md:order-1">
          <motion.span className="text-secondary font-black text-xl uppercase tracking-widest block mb-4">
            Recomendación del Chef
          </motion.span>
          <h3 className="text-6xl md:text-8xl font-heading font-black mb-8 leading-tight uppercase">
            Auténtico <br /> <span className="text-primary">Pambazo</span>
          </h3>
          <p className="text-xl text-gray-400 mb-10 max-w-lg font-medium leading-relaxed">
            Directo del menú: Pan bañado en guajillo, relleno de papa con chorizo, lechuga, crema y queso. Un clásico de CDMX en Austin.
          </p>
          <button className="px-12 py-6 bg-secondary text-dark font-black text-xl border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all uppercase">
            Ver más antojitos
          </button>
        </div>

        <motion.div style={{ y, rotate }} className="order-1 md:order-2 flex justify-center">
          <Image 
            src="/platillos/pambazo.png" 
            alt="Pambazo Mexicano"
            width={700}
            height={700}
            className="drop-shadow-[0_50px_50px_rgba(236,102,41,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}