"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export function MenuGrid() {
  const { dict } = useLanguage();

  const menuItems = [
    {
      collection: dict.menu.tacos,
      items: [
        {
          name: "Asada Boom",
          price: "$35",
          desc: "Steak, onion, cilantro, atomic salsa",
        },
        {
          name: "Pastor Blast",
          price: "$30",
          desc: "Marinated pork, pineapple, electric vibe",
        },
      ],
    },
    {
      collection: dict.menu.tortas,
      items: [
        {
          name: "Torta Titan",
          price: "$95",
          desc: "Huge bread, milanesa, cheese overload",
        },
        {
          name: "Pepes Special",
          price: "$110",
          desc: "Everything we have + secret sauce",
        },
      ],
    },
    {
      collection: dict.menu.gorditas,
      items: [
        {
          name: "Chicharron Power",
          price: "$40",
          desc: "Pressed pork skin, green sauce",
        },
        { name: "Queso Storm", price: "$35", desc: "Melting cheese, rajitas" },
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-pepes-black relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pepes-orange/10 to-transparent pointer-events-none" />

      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white text-center mb-16 uppercase italic tracking-tighter"
        >
          {dict.menu.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-3xl p-6 relative group hover:-translate-y-2 transition-transform duration-300 shadow-[0_10px_0_0_#FF5500]"
            >
              <div className="absolute top-4 right-4 bg-pepes-black text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                Series {idx + 1}
              </div>
              <h3 className="text-3xl font-black text-pepes-black uppercase mb-6 border-b-4 border-pepes-orange pb-2 inline-block">
                {category.collection}
              </h3>

              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col">
                    <div className="flex justify-between items-baseline border-b border-gray-200 pb-2 mb-2 border-dashed">
                      <span className="text-xl font-bold text-pepes-black uppercase">
                        {item.name}
                      </span>
                      <span className="text-xl font-black text-pepes-orange">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm font-medium leading-tight">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
