import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroCampaign() {
  return (
    <section className="relative w-full h-[75vh] min-h-[520px] max-h-[760px] bg-neutral-950 overflow-hidden flex items-center">
      {/* Imagem de Fundo de Alta Resolução de Campanha de Moda */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2000&q=90"
          alt="SIAROM MULTIMARCAS - Campanha de Moda 2026"
          fill
          priority
          className="object-cover object-center scale-100 filter brightness-85"
        />
        {/* Gradiente sofisticado para garantir contraste sem escurecer a foto em excesso */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </div>

      {/* Conteúdo Editorial */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl text-white space-y-4 sm:space-y-6">
          
          {/* Eyebrow de Lançamento */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E5C07B] text-[11px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C07B]" />
            Nova Coleção • Edição 2026
          </div>

          {/* Headline Editorial de Moda */}
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight">
            A elegância silenciosa do <span className="italic font-light text-[#E5C07B]">luxo contemporâneo</span>.
          </h1>

          {/* Texto de Apoio */}
          <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed max-w-md">
            Uma curadoria impecável das marcas mais desejadas do Brasil e do mundo, reunidas com exclusividade para você em Sousa - PB.
          </p>

          {/* CTAs Elegantes */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <Link
              href="/loja"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-white text-black text-xs sm:text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#C5A059] hover:text-white transition-all shadow-lg active:scale-[0.98]"
            >
              <span>CONFIRA A COLEÇÃO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/marcas"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent border border-white/40 text-white text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase hover:bg-white/10 hover:border-white transition-colors backdrop-blur-xs"
            >
              CONHECER MARCAS
            </Link>
          </div>

          {/* Tagline e Prova Social Discreta */}
          <div className="pt-4 border-t border-white/15 flex items-center gap-6 text-[11px] text-neutral-300">
            <div>
              <strong className="block text-white font-bold text-sm tracking-tight">+10 Marcas</strong>
              Curadoria Premium
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <strong className="block text-white font-bold text-sm tracking-tight">Sousa - PB</strong>
              Loja Física & Online
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div>
              <strong className="block text-[#E5C07B] font-bold text-sm tracking-tight">Semanal</strong>
              Novidades na Loja
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

