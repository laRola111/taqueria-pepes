"use client";

import { motion } from "framer-motion";

export function Marquee() {
  // Lista de items a rotar
  const items = [
    "TACOS AL PASTOR", "★", "TORTILLAS HECHAS A MANO", "★",
    "SABOR AUTÉNTICO", "★", "AGUAS FRESCAS", "★",
    "BARBACOA DE RES", "★", "SERVICIO A DOMICILIO", "★"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-secondary border-y-4 border-dark py-4">
      <div className="flex w-max">
        {/* Renderizamos duplicado para el efecto infinito */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 px-4"
          >
            {items.map((item, idx) => (
              <span key={idx} className="font-heading font-black text-2xl md:text-4xl text-dark whitespace-nowrap uppercase tracking-widest">
                {item}
              </span>
            ))}
            {/* Repetimos la lista una vez más dentro del motion para que llene el espacio */}
             {items.map((item, idx) => (
              <span key={`dup-${idx}`} className="font-heading font-black text-2xl md:text-4xl text-dark whitespace-nowrap uppercase tracking-widest">
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}