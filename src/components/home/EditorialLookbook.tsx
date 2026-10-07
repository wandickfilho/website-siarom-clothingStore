import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function EditorialLookbook() {
  return (
    <section className="py-16 sm:py-24 bg-white text-[#141414] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Composição Institucional da Loja */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Coluna Visual Principal (Foto da Fachada da Loja) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] w-full overflow-hidden">
              <Image
                src="/imagens/imagem1.jpg"
                alt="Fachada da loja Mega Toys"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={false}
              />
              <div className="absolute inset-0 border border-neutral-200 pointer-events-none" />
            </div>

            {/* Tag Flutuante Institucional */}
            <div className="absolute -bottom-4 -right-2 sm:bottom-6 sm:right-6 bg-[#052A97] text-white border border-[#051D6F] p-4 sm:p-5 max-w-[220px] shadow-2xl">
              <span className="text-[9px] uppercase tracking-[.25em] font-bold text-[#FBCC0F] block mb-0.5">
                Nossa Loja
              </span>
              <p className="text-xs font-semibold leading-snug">
                Venha nos visitar em Sousa - PB e comprove a diversão de perto.
              </p>
            </div>
          </div>

          {/* Coluna Textual Institucional */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#EB1019] block">
                Conheça a Mega Toys
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#051D6F]">
                Diversão que começa na porta.
              </h2>
            </div>

            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              Na <strong className="text-[#141414] font-medium">MEGA TOYS</strong>, cada brinquedo é escolhido para fazer a criançada viajar, brincar e criar histórias. Jogos, presentes e diversão para todas as idades, com atendimento de perto para você acertar em cheio.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB1019]" />
                <span>Brinquedos e jogos para todas as idades</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB1019]" />
                <span>Presentes que acertam em qualquer ocasião</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EB1019]" />
                <span>Atendimento humanizado presencial e online</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/loja"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#EB1019] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c40d15] transition-all shadow-md active:scale-98"
              >
                <span>Explorar Catálogo</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
