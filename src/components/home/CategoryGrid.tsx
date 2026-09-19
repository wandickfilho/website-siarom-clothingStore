import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryGrid() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Seção Editorial */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 border-b border-neutral-100 pb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
              Departamentos Exclusivos
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-normal">
              Explore Nossas Coleções
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mt-2 sm:mt-0">
            Peças selecionadas a dedo das maiores marcas do mercado de moda contemporânea.
          </p>
        </div>

        {/* Grid de Categorias Visuais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/loja?categoria=${cat.slug}`}
              className="group relative aspect-[3/4] overflow-hidden bg-neutral-100 flex flex-col justify-end p-4 sm:p-6"
            >
              {/* Fotografia de Moda */}
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-95 group-hover:brightness-90"
              />

              {/* Overlay com gradiente suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Informações da Categoria */}
              <div className="relative z-10 text-white space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-xl font-bold uppercase tracking-wider">
                    {cat.name}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <p className="text-[11px] text-neutral-300 font-light line-clamp-1">
                  {cat.subtitle}
                </p>
                <span className="inline-block text-[10px] text-[#E5C07B] font-semibold tracking-wider uppercase pt-1">
                  Ver Coleção →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

