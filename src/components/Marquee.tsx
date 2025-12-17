'use client';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';
import { motion } from 'framer-motion';

export default function Marquee() {
  const { language } = useLanguage();
  const t = dictionary[language].promos;

  // Creamos una lista repetida para que el bucle sea infinito y suave
  const content = [
    t.deal, "•", t.highlight1, "•", t.highlight2, "•",
    t.deal, "•", t.highlight1, "•", t.highlight2, "•"
  ];

  return (
    <div className="bg-orange-500 overflow-hidden py-3 border-y-4 border-orange-600 relative z-20 shadow-md">
      {/* Contenedor que se mueve usando Framer Motion (No requiere CSS global) */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: "-50%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Ajusta este número para cambiar la velocidad (más alto = más lento)
        }}
      >
        {/* Renderizamos el contenido dos veces para hacer el loop perfecto */}
        <div className="flex gap-12 items-center px-6">
          {content.map((text, i) => (
            <span key={`a-${i}`} className="text-black font-black text-lg md:text-xl tracking-wider uppercase">
              {text === "•" ? <span className="text-red-700">•</span> : text}
            </span>
          ))}
        </div>
        <div className="flex gap-12 items-center px-6">
          {content.map((text, i) => (
            <span key={`b-${i}`} className="text-black font-black text-lg md:text-xl tracking-wider uppercase">
              {text === "•" ? <span className="text-red-700">•</span> : text}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}