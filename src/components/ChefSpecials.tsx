'use client';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';

export default function ChefSpecials() {
  const { language } = useLanguage();
  const t = dictionary[language].chefFavorites;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-orange-600 font-bold tracking-widest uppercase mb-3">
            {t.subtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-black font-serif text-zinc-900">
            {t.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <div key={index} className="group relative bg-stone-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-stone-100">
              <div className="relative h-60 w-full mb-6 transform group-hover:-translate-y-2 transition-transform duration-500">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2 text-zinc-900 group-hover:text-orange-600 transition-colors">
                  {item.name}
                </h4>
                <p className="text-gray-500 max-w-xs mx-auto text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}