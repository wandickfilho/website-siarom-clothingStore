import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function EditorialLookbook() {
  return (
    <section className="py-16 sm:py-24 bg-[#0A0A0A] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Composição Editorial Assimetria de Luxo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Visual Principal (Foto Grande com Enquadramento Revista de Moda) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85"
                alt="Editorial de Moda SIAROM"
                fill
                className="object-cover object-center filter brightness-90 contrast-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 border border-white/15 pointer-events-none" />
            </div>

            {/* Tag Flutuante Editorial */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:right-6 bg-[#171512] text-white border border-[#4a4029] p-4 sm:p-5 max-w-[220px] shadow-2xl">
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#C5A059] block mb-0.5">
                Lookbook 2026
              </span>
              <p className="text-xs font-semibold leading-snug">
                Alfaiataria desconstruída em tons neutros e tecidos nobres.
              </p>
            </div>
          </div>

          {/* Coluna Textual Editorial */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C5A059] block">
                Manifesto Visual
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-white">
                O luxo que não precisa gritar para se fazer notar.
              </h2>
            </div>

            <p className="text-sm text-neutral-300 font-light leading-relaxed">
              Na <strong className="text-white font-medium">SIAROM MULTIMARCAS</strong>, cada peça é selecionada com um olhar atento à durabilidade, caimento impecável e elegância atemporal. Não seguimos apenas tendências efêmeras: construímos um guarda-roupa que valoriza sua presença e autenticidade.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Linho Puro, Sedas Naturais e Algodão Pima Peruano</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Curadoria Multimarcas com marcas consagradas</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                <span>Atendimento humanizado presencial e online</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/loja?categoria=feminino"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#d6b35f] text-black text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shadow-md active:scale-98"
              >
                <span>Explorar Campanha</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

