"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function Marquee() {
  const { dict } = useLanguage();

  return (
    <div className="w-full bg-pepes-orange py-4 overflow-hidden -rotate-1 transform origin-left md:scale-110">
      <div className="relative flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 text-4xl md:text-6xl font-black text-black uppercase items-center"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              {dict.marquee.text} <span>•</span>
            </span>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-8 text-4xl md:text-6xl font-black text-black uppercase items-center absolute left-full pl-8"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              {dict.marquee.text} <span>•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
