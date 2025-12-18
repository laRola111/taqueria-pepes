'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';
import { CalendarDays, ShoppingBag } from 'lucide-react';

export default function WeekendSection() {
  const { language } = useLanguage();
  const tMenu = dictionary[language].menu;
  
  return (
    <section className="py-20 bg-orange-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna 1: Fin de Semana (Menudo, Chivo) */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CalendarDays className="text-orange-600 w-10 h-10" />
              <h3 className="text-3xl md:text-4xl font-bold font-serif text-zinc-900">
                {tMenu.categories.weekend}
              </h3>
            </div>
            <div className="space-y-6">
              {tMenu.items.weekend.map((item, index) => (
                <div key={index} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                  <div className="relative w-20 h-20 bg-stone-100 rounded-full flex-shrink-0 overflow-hidden border-2 border-orange-200">
                     <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-zinc-900">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna 2: Venta por Libra y Eventos (Aquí van las Taquizas) */}
          <div className="bg-white p-8 rounded-3xl border border-orange-200 shadow-lg">
            <div className="flex items-center gap-3 mb-8">
              <ShoppingBag className="text-orange-600 w-8 h-8" />
              <h3 className="text-3xl font-bold font-serif text-zinc-900">
                {tMenu.categories.bulk}
              </h3>
            </div>
            
            <ul className="space-y-6">
              {tMenu.items.bulk.map((item: any, index: number) => (
                <li key={index} className="border-b border-orange-100 pb-4 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                        <h4 className="text-xl font-bold text-zinc-900 mb-1">{item.name}</h4>
                        <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Lógica para mostrar imagen si existe (Para las Taquizas) */}
                  {item.image && (
                      <div className="relative w-full h-48 mt-4 rounded-xl overflow-hidden border border-orange-100 shadow-sm">
                          <Image 
                            src={item.image} 
                            alt={item.name} 
                            fill 
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                      </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-orange-50 p-4 rounded-lg text-center border border-orange-100">
              <p className="text-orange-700 font-bold uppercase tracking-wider text-sm">
                {language === 'es' ? '¡Reserva para tu evento hoy!' : 'Book for your event today!'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}