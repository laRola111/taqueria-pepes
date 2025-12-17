"use client";

import { motion } from "framer-motion";

const items = [
  "TACOS AL PASTOR", "BARBACOA DE CHIVO", "TORTAS GIGANTES", 
  "QUESABIRRIAS", "CHILAQUILES", "SOPES", "QUESADILLAS DE MAÍZ"
];

export function Marquee() {
  return (
    <div className="bg-dark py-6 overflow-hidden border-y-4 border-primary rotate-1 relative z-20 shadow-2xl">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-white font-heading font-black text-4xl md:text-6xl flex items-center gap-12">
            {item} <span className="text-secondary text-5xl">★</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}