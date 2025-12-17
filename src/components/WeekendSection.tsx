"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export function WeekendSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#fdf2ed] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <span className="inline-block px-4 py-1 bg-primary text-white font-bold rounded-full mb-4 uppercase text-sm tracking-widest">
              {t.menu.weekendSection.subtitle}
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-none text-primary italic">
              {t.menu.weekendSection.title}
            </h2>
            <p className="text-xl text-dark/70 mb-10 font-medium leading-relaxed">
              {t.menu.weekendSection.description}
            </p>

            <div className="grid gap-4">
              {t.menu.weekendSection.items.map((item: any, i: number) => (
                <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-primary/10">
                  <h4 className="text-2xl font-black text-dark uppercase">{item.name}</h4>
                  <p className="text-dark/60 font-medium italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative h-[500px] w-full"
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