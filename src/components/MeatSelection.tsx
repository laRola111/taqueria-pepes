'use client';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';

export default function MeatSelection() {
  const { language } = useLanguage();
  // Ajuste de ruta: ahora apuntamos a 'meats' en lugar de 'meatSelection'
  const t = dictionary[language].menu.meats; 

  return (
    <div className="py-16 bg-white border-y border-stone-200">
      <div className="container mx-auto px-4 text-center">
        <span className="text-red-600 font-bold tracking-widest text-sm uppercase mb-2 block">
          {language === 'es' ? 'Variedad y Calidad' : 'Variety & Quality'}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 font-serif mb-4">
          {t.title}
        </h3>
        <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {t.list.map((meat, index) => (
            <div 
              key={index}
              className="px-6 py-3 bg-stone-100 rounded-lg text-stone-700 font-bold hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm border border-stone-200 cursor-default"
            >
              {meat}
            </div>
          ))}
        </div>
        
        <p className="mt-8 text-sm text-gray-400 italic">
          * {language === 'es' ? 'Pregunta por disponibilidad' : 'Ask for availability'}
        </p>
      </div>
    </div>
  );
}