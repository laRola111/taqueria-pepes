"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import { UtensilsCrossed } from "lucide-react";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={cn(
          "flex items-center gap-6 px-6 py-3 rounded-full",
          "bg-pepes-orange/90 backdrop-blur-md shadow-lg shadow-pepes-orange/20",
          "border border-white/20"
        )}
      >
        <div className="flex items-center gap-2 font-bold text-white tracking-widest">
          <UtensilsCrossed className="w-5 h-5" />
          <span>PEPES</span>
        </div>

        <div className="h-4 w-px bg-white/40" />

        <button
          onClick={toggleLanguage}
          className="flex items-center gap-1 text-sm font-bold text-white hover:text-white/80 transition-colors uppercase"
        >
          <span>{language === "en" ? "EN" : "ES"}</span>
        </button>
      </motion.nav>
    </div>
  );
}
