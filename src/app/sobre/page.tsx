import React from 'react';
import Image from 'next/image';
import { MapPin, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';
import BrandLogo from '@/components/layout/BrandLogo';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">

        {/* Header Editorial */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <BrandLogo variant="light" size="lg" className="mx-auto mb-4" />
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#052A97]">
            <Sparkles className="w-4 h-4 text-[#EB1019]" />
            Nossa História & Posicionamento
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl text-[#051D6F] font-normal leading-tight">
            Diversão para todas as idades.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed pt-2">
            A MEGA TOYS nasceu para levar brinquedos, jogos e presentes que fazem a criançada viajar — para crianças, pais e famílias em Sousa - PB e além.
          </p>
        </div>

        {/* Foto da Fachada da Loja */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/imagens/imagem1.jpg"
            alt="Fachada da loja Mega Toys"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 900px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FBCC0F]">
              Sousa - PB
            </span>
            <h3 className="text-lg sm:text-xl font-bold">
              Loja Física MEGA TOYS
            </h3>
            <p className="text-xs text-neutral-200">
              Venha nos visitar e comprove a diversão de perto.
            </p>
          </div>
        </div>

        {/* Pilares da Marca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="p-6 bg-[#F8F9FB] rounded-xl space-y-2.5 border border-neutral-200">
            <Award className="w-6 h-6 text-[#052A97]" />
            <h3 className="text-base font-bold text-neutral-900">Curadoria de Brinquedos</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Selecionamos brinquedos e jogos que estimulam a criatividade, o brincar e a diversão para todas as idades.
            </p>
          </div>

          <div className="p-6 bg-[#F8F9FB] rounded-xl space-y-2.5 border border-neutral-200">
            <ShieldCheck className="w-6 h-6 text-[#EB1019]" />
            <h3 className="text-base font-bold text-neutral-900">Originalidade 100%</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Trabalhamos com produtos originais e seguros, com nota fiscal e a confiança que a sua família merece.
            </p>
          </div>

          <div className="p-6 bg-[#F8F9FB] rounded-xl space-y-2.5 border border-neutral-200">
            <Heart className="w-6 h-6 text-[#F2A018]" />
            <h3 className="text-base font-bold text-neutral-900">Atendimento Humanizado</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Seja na nossa loja física em Sousa - PB ou no atendimento online, ajudamos você a acertar no presente.
            </p>
          </div>
        </div>

        {/* Informações da Loja Física */}
        <div className="p-8 bg-[#052A97] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FBCC0F]">
              Venha nos Visitar
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              MEGA TOYS — Sousa, Paraíba
            </h3>
            <p className="text-xs text-white/85 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FBCC0F]" />
              Sousa - PB • Atendimento de perto
            </p>
            <p className="text-xs text-white/70">
              Novidades toda semana • Atendimento via WhatsApp e Instagram
            </p>
          </div>

          <a
            href="https://www.instagram.com/megatoys.sousa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#EB1019] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#c40d15] transition-colors whitespace-nowrap shadow-md rounded-lg"
          >
            Falar com a Equipe
          </a>
        </div>

        {/* Foto do Balcao de Atendimento */}
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#EB1019]">
              Nosso Atendimento
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#051D6F]">
              Do balcão para a sua casa.
            </h2>
          </div>
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/imagens/imagem4.jpg"
              alt="Balcão de atendimento da loja Mega Toys"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 900px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 text-white">
              <p className="text-xs sm:text-sm font-semibold">
                Balcão de atendimento MEGA TOYS — te ajudamos a escolher o presente certo.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
