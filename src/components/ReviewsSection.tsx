'use client';
import { Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';

export default function ReviewsSection() {
  const { language } = useLanguage();
  const t = dictionary[language].reviews;

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 mb-2 font-serif">{t.title}</h2>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.items.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-yellow-100">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(review.stars)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 text-lg">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-zinc-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}