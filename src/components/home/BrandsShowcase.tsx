import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function BrandsShowcase() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8F9FB] border-y border-neutral-200 text-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Cabeçalho Refinado */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#052A97]">
            <Sparkles className="w-3.5 h-3.5 text-[#EB1019]" />
            Curadoria Multimarcas
          </div>
          <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#051D6F]">
            As Melhores Marcas em um Só Lugar
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            A MEGA TOYS reúne marcas reconhecidas com qualidade, segurança e diversão garantidas para toda a família.
          </p>
        </div>

        {/* Grid Elegante de Descoberta de Marcas */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {BRANDS.map((brand) => (
            <Link
              key={brand.id}
              href={`/loja?marca=${encodeURIComponent(brand.name)}`}
              className="group relative bg-white p-5 sm:p-6 border border-neutral-200 hover:border-[#052A97]/60 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-semibold">
                    {brand.origin}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-[#EB1019] transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-[0.08em] text-[#051D6F] group-hover:text-[#EB1019]">
                  {brand.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1.5 line-clamp-2">
                  {brand.tagline}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-neutral-200 flex items-center justify-between text-[11px] font-semibold text-neutral-600 group-hover:text-[#EB1019] transition-colors">
                <span>Ver Coleção</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Informação sobre Autenticidade */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-500">
            ✨ Todos os produtos são 100% originais, adquiridos diretamente dos fabricantes oficiais com nota fiscal.
          </p>
        </div>

      </div>
    </section>
  );
}
