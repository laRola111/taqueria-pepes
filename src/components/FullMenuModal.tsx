"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Datos de ejemplo para el menú completo (esto podría ir en el diccionario después)
const FULL_MENU = [
  { category: "Tacos", items: [
      { name: "Pastor", price: "$2.50" }, { name: "Bistec", price: "$3.00" }, { name: "Tripa", price: "$3.50" }
    ] 
  },
  { category: "Tortas", items: [
      { name: "La Cubana", price: "$10.00" }, { name: "Milanesa", price: "$9.00" }, { name: "Pastor con Queso", price: "$9.50" }
    ] 
  },
  { category: "Bebidas", items: [
      { name: "Horchata", price: "$3.00" }, { name: "Jamaica", price: "$3.00" }, { name: "Coca-Cola", price: "$2.50" }
    ] 
  }
];

export function FullMenuModal({ isOpen, onClose }: FullMenuModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          
          {/* Backdrop oscuro */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[2rem] relative shadow-2xl p-8"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h2 className="font-heading font-black text-4xl text-primary mb-8 text-center border-b-4 border-secondary pb-4 inline-block w-full">
              MENÚ COMPLETO
            </h2>

            <div className="space-y-8">
              {FULL_MENU.map((section, i) => (
                <div key={i}>
                  <h3 className="font-heading font-bold text-2xl text-dark mb-4 uppercase tracking-wide">
                    {section.category}
                  </h3>
                  <ul className="space-y-3">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex justify-between items-center text-lg border-b border-gray-100 pb-2 border-dashed">
                        <span className="font-medium text-gray-700">{item.name}</span>
                        <span className="font-bold text-primary">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button onClick={onClose} className="text-gray-400 hover:text-dark underline">
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}