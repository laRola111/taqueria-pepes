"use client";

import { motion } from "framer-motion";

const items = [
  "TACOS AL PASTOR", 
  "BARBACOA DE CHIVO", 
  "TORTAS GIGANTES", 
  "QUESABIRRIAS", 
  "CHILAQUILES", 
  "SOPES", 
  "QUESADILLAS DE MAÍZ",
  "PAMBAZOS"
];

export function Marquee() {
  return (
    <div className="bg-primary py-4 md:py-6 overflow-hidden relative z-20 shadow-lg border-y border-white/20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {/* Duplicamos los items para que el loop sea infinito y fluido */}
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="text-white font-heading font-black text-3xl md:text-5xl tracking-tighter italic">
              {item}
            </span>
            <span className="text-secondary text-4xl md:text-6xl">★</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}