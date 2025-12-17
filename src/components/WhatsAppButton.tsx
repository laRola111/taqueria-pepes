"use client";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/15120000000" 
      target="_blank"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl border-2 border-white hover:scale-110 transition-transform"
    >
      <MessageCircle size={32} />
    </a>
  );
}