'use client';
import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { dictionary } from '@/lib/dictionary';

// REFERENCIA A TUS VIDEOS EN LA CARPETA PUBLIC
const VIDEOS = [
  "/1.mp4",
  "/2.mp4",
  "/3.mp4"
];

export default function VideoGallery() {
  const { language } = useLanguage();
  const t = dictionary[language].videos;
  
  // Estado para controlar qué video se está reproduciendo
  const [playing, setPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      // Pausar los otros videos para que no suenen todos a la vez
      videoRefs.current.forEach((v, i) => {
        if (i !== index && v) {
          v.pause();
        }
      });
      video.play();
      setPlaying(index);
    } else {
      video.pause();
      setPlaying(null);
    }
  };

  return (
    <section className="py-24 bg-white" id="videos">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-zinc-900 font-serif mb-4">
          {t.title}
        </h2>
        <p className="text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        {/* Grid de Videos Verticales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {VIDEOS.map((src, index) => (
            <div 
              key={index} 
              className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-xl border-4 border-stone-100 group hover:shadow-2xl transition-all duration-300"
            >
              <video
                ref={(el) => { if (el) videoRefs.current[index] = el; }}
                src={src}
                className="w-full h-full object-cover"
                loop
                playsInline
                onClick={() => togglePlay(index)}
              />
              
              {/* Botón de Play/Pause (Overlay) */}
              <div 
                className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 cursor-pointer ${
                  playing === index ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                }`}
                onClick={() => togglePlay(index)}
              >
                <div className="w-20 h-20 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform transform group-hover:scale-110 border border-white/50">
                  {playing === index ? (
                    <Pause className="w-10 h-10 text-white fill-white" />
                  ) : (
                    <Play className="w-10 h-10 text-white fill-white ml-2" />
                  )}
                </div>
              </div>

              {/* Decoración Inferior */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none flex items-end justify-center pb-4">
                 <p className="text-white font-bold text-sm uppercase tracking-widest drop-shadow-md opacity-80">
                   Taquería Pepes
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}