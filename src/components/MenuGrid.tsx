'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';

export default function MenuGrid() {
  const { language } = useLanguage();
  const t = dictionary[language].menu;

  // Función auxiliar para renderizar secciones de tarjetas (Desayunos, Antojitos, Especiales)
  const renderCardSection = (title: string, items: any[]) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="mb-20">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 font-serif">
            {title}
          </h3>
          <div className="h-1 flex-1 bg-orange-200 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full hover:-translate-y-1">
              {/* Contenedor de Imagen */}
              <div className="relative h-64 w-full bg-orange-50/50 overflow-hidden p-4 flex items-center justify-center rounded-t-2xl">
                <div className="absolute w-40 h-40 bg-white rounded-full opacity-50 blur-2xl"></div>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500 z-10"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <span className="text-4xl">🌮</span>
                )}
              </div>
              
              {/* Contenido Texto */}
              <div className="p-6 flex-1 flex flex-col text-center">
                <h4 className="text-xl font-bold text-zinc-900 mb-2 font-serif group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white" id="menu">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-2 block">
            {language === 'es' ? 'Recetas de Familia' : 'Family Recipes'}
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-zinc-900 font-serif">
            {t.title}
          </h2>
        </div>

        {/* 1. SECCIÓN DESAYUNOS (NUEVO) */}
        {renderCardSection(t.categories.breakfast, t.items.breakfast)}

        {/* 2. SECCIÓN ANTOJITOS */}
        {renderCardSection(t.categories.antojitos, t.items.antojitos)}

        {/* 3. SECCIÓN ESPECIALIDADES / PLATILLOS (NUEVO) */}
        {renderCardSection(t.categories.plates, t.items.specialties)}
        
        {/* 4. GRID DE EXTRAS (SIDES Y BEBIDAS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mt-12">
           {/* Sides */}
           <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <h3 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-3 border-b-2 border-orange-300 pb-4">
                <span className="text-3xl">🌽</span> {t.categories.sides}
              </h3>
              <ul className="space-y-3">
                {t.items.sides.map((side, i) => (
                  <li key={i} className="flex justify-between items-center text-lg text-gray-700 font-medium">
                    <span>{side.name}</span>
                  </li>
                ))}
              </ul>
           </div>

           {/* Bebidas */}
           <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
              <h3 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-3 border-b-2 border-blue-300 pb-4">
                <span className="text-3xl">🥤</span> {t.categories.drinks}
              </h3>
              <ul className="space-y-3">
                {t.items.drinks.map((drink, i) => (
                  <li key={i} className="flex justify-between items-center text-lg text-gray-700 font-medium">
                    <span>{drink.name}</span>
                  </li>
                ))}
              </ul>
           </div>
        </div>
      </div>
    </section>
  );
}