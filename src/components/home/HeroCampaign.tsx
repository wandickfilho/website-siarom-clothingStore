'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, MapPin, Sparkles } from 'lucide-react';

const slides = [
  { badge: 'Novidades toda semana', paragraph: true, promo: true },
  { badge: 'Diversão para todas as idades', paragraph: false, promo: true },
  { badge: 'Presentes que encantam', paragraph: true, promo: false },
];

const FADE_MS = 220;

export default function HeroCampaign() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timer = useRef<number | null>(null);
  const total = slides.length;

  const go = useCallback(
    (direction: number) => {
      setVisible(false);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setIndex((current) => (current + direction + total) % total);
        setVisible(true);
      }, FADE_MS);
    },
    [total]
  );

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative isolate overflow-hidden bg-white text-[#141414]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_68%_38%,rgba(5,42,151,0.08),transparent_29%),radial-gradient(circle_at_28%_92%,rgba(235,16,25,0.06),transparent_24%)]" />
      <div className="relative mx-auto grid min-h-[700px] max-w-[1540px] lg:grid-cols-12 lg:px-8">
        <div className="relative z-10 flex items-center px-5 py-16 sm:px-10 lg:col-span-5 lg:px-8 lg:py-24 xl:px-12">
          <div className="max-w-xl">
            <div
              className="transition-opacity duration-200 ease-out"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <div className="mb-8 inline-flex items-center gap-2 border border-[#052A97]/30 bg-[#052A97]/[0.06] px-3 py-2 text-[9px] font-bold uppercase tracking-[.28em] text-[#052A97]">
                <Sparkles className="h-3.5 w-3.5" /> {slide.badge}
              </div>
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.32em] text-neutral-500">MEGA TOYS / Sousa — PB</p>
              <h1 className="font-editorial text-[clamp(4.25rem,8.4vw,8.4rem)] leading-[.78] tracking-[-.065em] text-[#051D6F]">
                Brinquedos que<br />
                <span className="text-[#EB1019]">encantam.</span>
              </h1>
              {slide.paragraph && (
                <p className="mt-8 max-w-md text-sm leading-7 text-neutral-600 sm:text-base">
                  Brinquedos, jogos e presentes para crianças e famílias. Diversão para todas as idades, com atendimento de perto em Sousa.
                </p>
              )}
              {slide.promo && (
                <div className="mt-8 max-w-md border border-neutral-200 bg-neutral-50 p-4 backdrop-blur-sm sm:flex sm:items-center sm:justify-between sm:gap-5">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.22em] text-[#052A97]">Seleção da semana</p>
                    <p className="mt-1 text-sm font-medium text-[#141414]">Frete grátis acima de R$ 499</p>
                  </div>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-neutral-500 sm:mt-0"><Check className="h-3.5 w-3.5 text-[#04B02A]" /> Envio para todo Brasil</span>
                </div>
              )}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/loja" className="group inline-flex items-center gap-3 bg-[#EB1019] px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-[.18em] text-white transition hover:bg-[#c40d15]">
                  Comprar agora <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="/loja?filtro=novidades" className="inline-flex items-center border border-neutral-300 px-6 py-3.5 text-[10px] font-bold uppercase tracking-[.18em] text-neutral-800 transition hover:border-[#052A97] hover:text-[#052A97]">
                  Ver novidades
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-2 text-xs text-neutral-500">
                <MapPin className="h-4 w-4 text-[#EB1019]" /> Sousa — PB
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden lg:col-span-7 lg:min-h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
            aria-label="Campanha Mega Toys"
          >
            <source src="/videos/video_hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent lg:bg-gradient-to-r lg:from-white lg:via-transparent lg:to-transparent" />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
          <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between gap-4 rounded-lg border border-white/20 bg-black/55 p-4 pt-3 backdrop-blur-sm sm:bottom-8 sm:left-8 sm:right-8 lg:left-12 lg:right-12">
            <div className="min-w-0"><p className="text-[9px] font-bold uppercase tracking-[.28em] text-[#FBCC0F]">Novidades</p><p className="mt-1 text-base font-medium text-white sm:text-lg">Novos brinquedos disponíveis</p></div>
            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Slide anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/85 transition duration-300 ease-out hover:border-[#FBCC0F] hover:text-[#FBCC0F] focus:outline-none focus-visible:border-[#FBCC0F] focus-visible:text-[#FBCC0F] sm:h-10 sm:w-10"
              >
                <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
              <div
                className="relative h-px w-12 overflow-hidden bg-white/30 sm:w-16"
                role="progressbar"
                aria-label="Progresso dos slides"
                aria-valuemin={1}
                aria-valuemax={total}
                aria-valuenow={index + 1}
              >
                <div
                  className="absolute inset-y-0 left-0 bg-[#FBCC0F] transition-[width] duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{ width: `${((index + 1) / total) * 100}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Próximo slide"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/85 transition duration-300 ease-out hover:border-[#FBCC0F] hover:text-[#FBCC0F] focus:outline-none focus-visible:border-[#FBCC0F] focus-visible:text-[#FBCC0F] sm:h-10 sm:w-10"
              >
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative border-y border-[#052A97]/15 bg-[#052A97] px-4 py-4 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-2 text-[9px] font-bold uppercase tracking-[.18em] text-white/85 sm:justify-between"><span>Diversão para todas as idades</span><span className="text-[#FBCC0F]">Presentes que encantam</span><span>Atendimento em Sousa e online</span></div>
      </div>
    </section>
  );
}
