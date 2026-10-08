import React from 'react';
import Link from 'next/link';
import { BRANDS } from '@/data/brands';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BrandsPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Editorial */}
        <div className="border-b border-neutral-100 pb-8 mb-10 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#052A97] mb-2">
            <Sparkles className="w-4 h-4 text-[#052A97]" />
            Curadoria Multimarcas Oficial
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl text-neutral-900 font-normal leading-tight">
            Marcas Parceiras &amp; Linhas Autorizadas
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
            Reunimos as marcas de brinquedos mais reconhecidas pelas famílias. Cada parceiro é selecionado por segurança, qualidade e diversão garantidas em Sousa - PB.
          </p>
        </div>

        {/* Grid de Marcas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="p-6 sm:p-8 bg-[#F7F7F5] border border-neutral-200/80 rounded-xl flex flex-col justify-between hover:border-black transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#052A97]">
                    Origem: {brand.origin}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-neutral-500 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Revendedor Autorizado
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold tracking-[0.08em] text-neutral-900">
                  {brand.name}
                </h2>

                <p className="text-xs text-neutral-600 leading-relaxed font-light">
                  {brand.tagline}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                <Link
                  href={`/loja?marca=${encodeURIComponent(brand.name)}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#052A97] transition-colors"
                >
                  <span>Ver Produtos da Marca</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

