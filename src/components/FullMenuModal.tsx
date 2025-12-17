"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, Calendar, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FullMenuModal({ isOpen, onClose }: FullMenuModalProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-light w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative shadow-pepes border-4 border-dark flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 bg-light z-10 px-8 py-6 border-b-2 border-dark flex justify-between items-center">
              <div>
                <h2 className="font-heading font-black text-3xl md:text-4xl text-dark">
                  MENÚ COMPLETO
                </h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 bg-white border-2 border-dark rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 space-y-10">
              
              {/* Especiales */}
              <div className="grid md:grid-cols-2 gap-4">
                {t.menu.specials.map((special: any, idx: number) => (
                  <div key={idx} className="bg-secondary/20 border-2 border-secondary p-4 rounded-xl flex flex-col items-center text-center">
                    <Calendar className="text-primary-dark mb-2" size={24} />
                    <h4 className="font-bold text-dark uppercase text-lg">{special.title}</h4>
                    <p className="text-sm font-medium text-dark/80 mt-1">{special.desc}</p>
                  </div>
                ))}
              </div>

              {/* Carnes (Estilo Etiqueta) */}
              <div className="bg-white p-6 rounded-2xl border-2 border-dark shadow-sm">
                 <div className="flex items-center gap-2 mb-4">
                    <Flame className="text-primary fill-current" />
                    <h3 className="font-heading font-bold text-xl text-dark uppercase">
                        {t.menu.meats.title}
                    </h3>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {t.menu.meats.items.map((meat: string, idx: number) => (
                        <span key={idx} className="bg-light px-3 py-1 rounded-full text-sm font-bold text-dark border-2 border-dark hover:bg-secondary transition-colors cursor-default">
                            {meat}
                        </span>
                    ))}
                 </div>
              </div>

              {/* Categorías */}
              <div className="grid md:grid-cols-2 gap-12">
                {t.menu.categories.map((cat: any, i: number) => (
                  <div key={i}>
                    <div className="flex items-center gap-3 mb-6 border-b-4 border-primary pb-2">
                        <h3 className="font-heading font-black text-2xl text-dark uppercase">
                            {cat.title}
                        </h3>
                    </div>
                    
                    <ul className="space-y-4">
                      {cat.items.map((item: any, j: number) => (
                        <li key={j} className="group border-b border-dark/10 pb-2 border-dashed last:border-0">
                          <div className="flex justify-between items-baseline">
                            <span className="font-bold text-lg text-dark group-hover:text-primary transition-colors">
                                {item.name}
                            </span>
                            <span className="font-black text-primary-dark text-lg">
                                {item.price}
                            </span>
                          </div>
                          {item.desc && (
                              <p className="text-gray-600 text-sm italic mt-1">{item.desc}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* Footer Modal */}
              <div className="bg-dark text-light p-4 rounded-xl text-center flex items-center justify-center gap-2 border-2 border-dark">
                <Info size={18} className="text-secondary" />
                <p className="text-sm font-medium">
                    Servicio de Taquizas disponible. ¡Pregunta en caja!
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}