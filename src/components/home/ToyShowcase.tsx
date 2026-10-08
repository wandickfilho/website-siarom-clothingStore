'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, TouchEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { SHOWCASE_SLIDES } from '@/data/showcase';
import LazyVideo from '@/components/ui/LazyVideo';

const AUTOPLAY_MS = 5200;
const SWIPE_PX = 45;

const stageVars = {
  '--card-w': 'clamp(150px, 38vw, 300px)',
  '--step': 'clamp(176px, 46vw, 352px)',
} as CSSProperties;

export default function ToyShowcase() {
  const [active, setActive] = useState(0);
  const [enteredId, setEnteredId] = useState<string>(SHOWCASE_SLIDES[0].id);
  const [paused, setPaused] = useState(false);
  const total = SHOWCASE_SLIDES.length;
  const previousActive = useRef(0);
  const reducedMotion = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (direction: number) => setActive((current) => (current + direction + total) % total),
    [total]
  );

  useEffect(() => {
    reducedMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (previousActive.current === active) return;
    previousActive.current = active;
    setEnteredId(SHOWCASE_SLIDES[active].id);
  }, [active]);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const id = window.setInterval(() => {
      if (document.hidden) return;
      setActive((current) => (current + 1) % total);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < SWIPE_PX) return;
    go(delta > 0 ? -1 : 1);
  };

  const relativeTo = (index: number) => {
    let distance = (index - active + total) % total;
    if (distance > total / 2) distance -= total;
    return distance;
  };

  const slide = SHOWCASE_SLIDES[active];

  return (
    <section
      aria-label="Vitrine de brinquedos Mega Toys"
      aria-roledescription="carrossel"
      className="relative isolate overflow-hidden bg-[#051D6F] text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(58% 46% at 50% 26%, rgba(251,204,15,.20), transparent 70%), radial-gradient(48% 44% at 6% 88%, rgba(235,16,25,.28), transparent 72%), radial-gradient(52% 48% at 96% 76%, rgba(76,131,255,.28), transparent 74%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%]"
        style={{
          background:
            'repeating-linear-gradient(180deg, rgba(255,255,255,.05) 0 1px, transparent 1px 54px)',
          maskImage: 'linear-gradient(180deg, transparent, #000 55%)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, #000 55%)',
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-4 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[.3em] text-[#FBCC0F]">
              <span className="inline-block h-px w-8 bg-[#EB1019]" />
              Vitrine digital
            </p>
            <h2 className="mt-4 font-editorial text-[clamp(2.1rem,5.4vw,4rem)] leading-[.94] tracking-[-.045em] text-white">
              Os favoritos da casa
              <br className="hidden sm:block" /> <span className="text-[#FBCC0F]">em destaque.</span>
            </h2>
          </div>

          <span className="text-[11px] font-bold uppercase tracking-[.24em] text-white/60">
            {String(active + 1).padStart(2, '0')}
            <span className="mx-1.5 text-white/30">/</span>
            {String(total).padStart(2, '0')}
          </span>
        </div>

        <div
          className="relative mt-10 h-[clamp(250px,44vw,430px)] select-none sm:mt-12"
          style={{ ...stageVars, perspective: '1400px' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[7%] left-1/2 h-[16%] w-[min(560px,74%)] -translate-x-1/2 rounded-[50%] blur-3xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(251,204,15,.55), rgba(235,16,25,.18), transparent)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[6%] left-1/2 h-px w-[min(640px,82%)] -translate-x-1/2"
            style={{
              background:
                'linear-gradient(90deg, transparent, rgba(255,255,255,.35) 20%, rgba(255,255,255,.55) 50%, rgba(255,255,255,.35) 80%, transparent)',
            }}
          />

          {SHOWCASE_SLIDES.map((item, index) => {
            const rel = relativeTo(index);
            const distance = Math.abs(rel);
            const isCenter = rel === 0;
            const scale = isCenter ? 1 : distance === 1 ? 0.8 : 0.64;
            const opacity = isCenter ? 1 : distance === 1 ? 0.62 : 0.2;
            const blur = isCenter ? 0 : distance === 1 ? 2.5 : 6;
            const rotateY = -rel * 9;

            return (
              <article
                key={item.id}
                aria-hidden={!isCenter}
                className="showcase-item absolute left-1/2"
                style={{
                  bottom: '7%',
                  width: 'var(--card-w)',
                  zIndex: 30 - distance,
                  opacity,
                  filter: `blur(${blur}px)`,
                  transformOrigin: '50% 100%',
                  transform: `translateX(calc(-50% + ${rel} * var(--step))) rotateY(${rotateY}deg) scale(${scale})`,
                  transition:
                    'transform .9s cubic-bezier(.22,1,.36,1), opacity .6s ease, filter .7s ease',
                  willChange: 'transform, opacity, filter',
                }}
              >
                <div className={enteredId === item.id ? 'showcase-enter' : undefined}>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -bottom-4 left-1/2 h-6 w-[86%] -translate-x-1/2 rounded-[50%] bg-black/50 blur-md"
                  />
                  <div className="relative">
                    <div
                      className={`relative overflow-hidden rounded-[clamp(18px,3vw,30px)] ring-1 ${
                        isCenter
                          ? 'showcase-float ring-white/35 shadow-[0_45px_80px_-35px_rgba(0,0,0,.95)]'
                          : 'ring-white/10'
                      }`}
                    >
                      <div className="relative aspect-[4/3.15]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 1024px) 45vw, 300px"
                          className="object-cover"
                          priority={isCenter}
                        />
                        {item.video && (
                          <LazyVideo src={item.video} enabled={isCenter} />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#051D6F]/75 via-transparent to-transparent" />
                      </div>
                      {isCenter && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#FBCC0F] px-3 py-1 text-[9px] font-extrabold uppercase tracking-[.18em] text-[#051D6F]">
                          Em destaque
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-[14%] sm:w-[18%]"
            style={{ background: 'linear-gradient(90deg, #051D6F 8%, rgba(5,29,111,0) 100%)' }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[14%] sm:w-[18%]"
            style={{ background: 'linear-gradient(270deg, #051D6F 8%, rgba(5,29,111,0) 100%)' }}
          />
        </div>

        <div className="mt-5 flex justify-center sm:mt-6" style={stageVars}>
          <div
            className="flex w-full items-center justify-between"
            style={{ maxWidth: 'min(100%, calc(2 * (var(--step) + var(--card-w) * 0.4)))' }}
          >
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Produto anterior da vitrine"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition duration-300 hover:border-[#FBCC0F] hover:text-[#FBCC0F] focus:outline-none focus-visible:border-[#FBCC0F] focus-visible:text-[#FBCC0F]"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo produto da vitrine"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/80 transition duration-300 hover:border-[#FBCC0F] hover:text-[#FBCC0F] focus:outline-none focus-visible:border-[#FBCC0F] focus-visible:text-[#FBCC0F]"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-8 max-w-2xl px-1 text-center sm:mt-10">
          <div key={slide.id} className="showcase-caption">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#FBCC0F]">
              {slide.tag}
            </span>
            <h3 className="mt-4 font-editorial text-[clamp(1.5rem,3.4vw,2.5rem)] leading-tight tracking-[-.03em] text-white">
              {slide.title}
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-white/70 sm:text-[15px]">
              {slide.description}
            </p>
            <Link
              href={slide.ctaHref}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-[#EB1019] px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#c40d15] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBCC0F]"
            >
              {slide.ctaLabel}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2.5 pb-14 sm:mt-10 sm:pb-20">
          {SHOWCASE_SLIDES.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Ir para o item ${index + 1} da vitrine`}
              aria-current={index === active}
              className={`h-2 rounded-full transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FBCC0F] ${
                index === active ? 'w-8 bg-[#FBCC0F]' : 'w-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
