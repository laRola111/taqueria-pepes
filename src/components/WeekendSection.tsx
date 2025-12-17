"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function WeekendSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary-soft relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2"
          >
            <span className="inline-block px-4 py-1 bg-primary text-white font-bold rounded-full mb-4">
              {t.menu.weekend.subtitle}
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-none">
              {t.menu.weekend.title}
            </h2>
            <p className="text-xl text-dark/70 mb-10 font-medium">
              {t.menu.weekend.description}
            </p>

            <div className="grid gap-6">
              {t.menu.weekend.items.map((item: any, i: number) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full bg-primary mt-3 shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold text-dark">{item.name}</h4>
                    <p className="text-dark/60 italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="md:w-1/2 relative h-[400px] md:h-[600px] w-full"
          >
             <Image 
                src="/platillos/menudo.png" 
                alt="Menudo y Barbacoa"
                fill
                className="object-contain drop-shadow-2xl"
             />
          </motion.div>
        </div>
      </div>
    </section>
  );
}