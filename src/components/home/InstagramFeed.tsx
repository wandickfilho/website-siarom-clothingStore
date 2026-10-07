import React from 'react';
import Image from 'next/image';
import { MapPin, Award } from 'lucide-react';
import InstagramIcon from '@/components/ui/InstagramIcon';

export default function InstagramFeed() {
  // Fotos de inspiração estilo editorial da Mega Toys
  const feedPhotos = [
    {
      id: 'ig-1',
      src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
      caption: 'Novidades que deixam a criançada animada. ✨ #MegaToysSousa #Brinquedos',
      likes: '342',
    },
    {
      id: 'ig-2',
      src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      caption: 'Presente certo é aquele que gera sorriso. 🎁 #PresentesQueEncantam',
      likes: '419',
    },
    {
      id: 'ig-3',
      src: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      caption: 'Diversão para todas as idades, todos os dias. 🥇',
      likes: '512',
    },
    {
      id: 'ig-4',
      src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      caption: 'Brincar é bom, brincar com a família é melhor. 🖤',
      likes: '287',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white text-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho com Prova Social e Identidade do Instagram Oficial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-neutral-200 pb-6 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#052A97]">
              <InstagramIcon className="w-4 h-4 text-[#EB1019]" />
              Inspiração & Comunidade
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#051D6F]">
              @megatoys.sousa
            </h2>

            {/* Bio Oficial da Loja */}
            <div className="pt-2 text-xs sm:text-sm text-neutral-500 space-y-1">
              <p className="flex items-center gap-1.5 font-medium text-neutral-700">
                <span className="text-[#EB1019]">🏆</span> Diversão para todas as idades
              </p>
              <p className="flex items-center gap-1.5 text-neutral-500">
                <MapPin className="w-3.5 h-3.5 text-[#052A97]" />
                Sousa - PB • Atendimento de perto
              </p>
              <p className="flex items-center gap-1.5 text-neutral-500">
                <Award className="w-3.5 h-3.5 text-[#F2A018]" />
                Novidades toda semana
              </p>
            </div>
          </div>

          <div>
            <a
              href="https://www.instagram.com/megatoys.sousa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#052A97] hover:bg-[#051D6F] text-white text-xs font-bold uppercase tracking-widest transition-all shadow-sm active:scale-98"
            >
              <InstagramIcon className="w-4 h-4 text-[#FBCC0F]" />
              <span>SIGA A MEGA TOYS</span>
            </a>
          </div>
        </div>

        {/* Grid de Fotos Estilo Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {feedPhotos.map((item) => (
            <a
              key={item.id}
              href="https://www.instagram.com/megatoys.sousa"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-neutral-100 block"
            >
              <Image
                src={item.src}
                alt="Instagram Mega Toys"
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay no Hover com Likes e Ícone */}
              <div className="absolute inset-0 bg-[#051D6F]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white text-center space-y-2">
                <InstagramIcon className="w-6 h-6 text-[#FBCC0F]" />
                <p className="text-[11px] font-medium line-clamp-2 text-white">
                  {item.caption}
                </p>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FBCC0F]">
                  ❤️ {item.likes} curtidas
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
