"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-pepes-black text-white pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-pepes-orange/20 to-transparent opacity-50 pointer-events-none" />

      <div className="container px-4 flex flex-col items-center text-center z-10">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-pepes-orange to-white drop-shadow-lg"
        >
          {dict.hero.headline}
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="/taco.png"
              alt="Taco Pepes"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(255,85,0,0.3)]"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-4 bg-pepes-orange text-white text-xl font-bold rounded-full shadow-[0_0_20px_rgba(255,85,0,0.6)] hover:shadow-[0_0_40px_rgba(255,85,0,0.8)] transition-shadow uppercase"
        >
          {dict.hero.cta}
        </motion.button>
      </div>
    </section>
  );
}
