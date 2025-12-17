"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dictionary, Language } from '@/lib/dictionary';

// Definimos la forma exacta del contexto
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void; // <--- AQUÍ está la clave
  t: typeof dictionary['es']; // Helper para tener tipado en el diccionario
}

// Valor por defecto seguro para evitar crash si se usa fuera del Provider
const defaultContext: LanguageContextType = {
  language: 'es',
  setLanguage: () => {}, 
  t: dictionary['es']
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  // Opcional: Persistir el idioma en localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('pepes-lang') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('pepes-lang', lang);
  };

  // El objeto 'value' que pasamos a toda la app
  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: dictionary[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// El hook personalizado para usar en los componentes
export function useLanguage() {
  return useContext(LanguageContext);
}