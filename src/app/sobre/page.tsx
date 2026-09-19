import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Sparkles, Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import BrandLogo from '@/components/layout/BrandLogo';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Header Editorial */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <BrandLogo variant="light" size="lg" className="mx-auto mb-4" />
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            Nossa História & Posicionamento
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl text-neutral-900 font-normal leading-tight">
            A loja que vai ficar na sua mente.
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 font-light max-w-2xl mx-auto leading-relaxed pt-2">
            Nascida no coração do Sertão da Paraíba com a missão de conectar você ao que há de mais refinado na moda nacional e internacional.
          </p>
        </div>

        {/* Foto da Loja / Atmosfera */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=85"
            alt="Espaço Físico SIAROM MULTIMARCAS"
            fill
            className="object-cover object-center filter brightness-95"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E5C07B]">
              Sousa - PB
            </span>
            <h3 className="text-lg sm:text-xl font-bold">
              Boutique Física SIAROM MULTIMARCAS
            </h3>
            <p className="text-xs text-neutral-300">
              Rua Herotildes Serafim dos Santos, 616
            </p>
          </div>
        </div>

        {/* Pilares da Marca */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="p-6 bg-[#F7F7F5] rounded-xl space-y-2.5 border border-neutral-200/80">
            <Award className="w-6 h-6 text-[#C5A059]" />
            <h3 className="text-base font-bold text-neutral-900">Curadoria Impecável</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Não vendemos apenas roupas; selecionamos peças que traduzem estilo, confiança e elegância atemporal para momentos marcantes da sua vida.
            </p>
          </div>

          <div className="p-6 bg-[#F7F7F5] rounded-xl space-y-2.5 border border-neutral-200/80">
            <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
            <h3 className="text-base font-bold text-neutral-900">Originalidade 100%</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Trabalhamos exclusivamente com marcas oficiais e conceituadas do país (Animale, Osklen, Reserva, Calvin Klein, Schutz, Dudalina).
            </p>
          </div>

          <div className="p-6 bg-[#F7F7F5] rounded-xl space-y-2.5 border border-neutral-200/80">
            <Heart className="w-6 h-6 text-[#C5A059]" />
            <h3 className="text-base font-bold text-neutral-900">Atendimento Humanizado</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Seja na nossa loja física em Sousa - PB ou no atendimento digital via WhatsApp, oferecemos assessoria de estilo personalizada para cada cliente.
            </p>
          </div>
        </div>

        {/* Informações da Loja Física */}
        <div className="p-8 bg-neutral-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5C07B]">
              Venha nos Visitar
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              SIAROM MULTIMARCAS — Sousa, Paraíba
            </h3>
            <p className="text-xs text-neutral-300 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              Rua Herotildes Serafim dos Santos, 616, Sousa - PB
            </p>
            <p className="text-xs text-neutral-400">
              Segunda a Sábado das 08h00 às 18h00 • Novidades toda semana!
            </p>
          </div>

          <a
            href="https://wa.me/5583999999999?text=Ol%C3%A1%2C%20gostaria%20de%20visitar%20a%20loja%20SIAROM%20em%20Sousa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#C5A059] text-black text-xs font-bold uppercase tracking-widest hover:bg-[#E5C07B] transition-colors whitespace-nowrap shadow-md"
          >
            Falar com a Equipe
          </a>
        </div>

      </div>
    </div>
  );
}

