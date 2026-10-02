import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandsShowcase() {
  return (
    <section className="py-14 sm:py-20 bg-[#111111] border-y border-[#2b2925] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Refinado */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            Curadoria Multimarcas
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-white">
            As Melhores Marcas em um Só Lugar
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            A SIAROM reúne grifes renomadas com DNA de qualidade, sofisticação e conforto garantidos.
          </p>
        </div>

        {/* Grid Elegante de Descoberta de Marcas */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href={`/loja?marca=${encodeURIComponent(brand.name)}`}
              className="group relative bg-[#171717] p-5 sm:p-6 border border-[#2b2925] hover:border-[#d6b35f]/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">
                    {brand.origin}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#C5A059] transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-[0.08em] text-white group-hover:text-[#e6c77b]">
                  {brand.name}
                </h3>
                <p className="text-xs text-neutral-400 font-light mt-1.5 line-clamp-2">
                  {brand.tagline}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-semibold text-neutral-300 group-hover:text-[#C5A059] transition-colors">
                <span>Ver Coleção</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Informação sobre Autenticidade */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-400">
            ✨ Todos os produtos são 100% originais, adquiridos diretamente dos fabricantes oficiais com nota fiscal.
          </p>
        </div>

      </div>
    </section>
  );
}

