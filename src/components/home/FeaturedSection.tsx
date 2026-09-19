import React from 'react';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '../product/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FeaturedSection() {
  // Pegamos os primeiros 8 produtos para o grid de novidades e destaques
  const newProducts = PRODUCTS.slice(0, 8);

  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header da Seção */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#C5A059]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              Novidades da Semana
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-900 font-normal">
              Lançamentos & Destaques
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md pt-1">
              As últimas novidades que acabaram de desembarcar na nossa loja física em Sousa - PB e agora disponíveis online.
            </p>
          </div>

          <Link
            href="/loja"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-neutral-900 hover:text-[#C5A059] transition-colors mt-4 sm:mt-0 group"
          >
            <span>Ver Todo o Catálogo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Grid de Produtos: 2 colunas no mobile, 3 no tablet, 4 no desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {newProducts.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>

        {/* Banner de CTA Intermediário */}
        <div className="mt-14 p-6 sm:p-10 bg-[#F7F7F5] border border-neutral-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A059]">
              Vantagem Exclusiva
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
              Ganhe 10% OFF na sua primeira compra online
            </h3>
            <p className="text-xs text-neutral-600">
              Utilize o cupom <strong className="text-black bg-white px-2 py-0.5 border border-neutral-300 font-mono">SIAROM10</strong> no checkout e receba em qualquer lugar do Brasil.
            </p>
          </div>
          <Link
            href="/loja"
            className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors whitespace-nowrap"
          >
            Aproveitar Cupom
          </Link>
        </div>

      </div>
    </section>
  );
}

