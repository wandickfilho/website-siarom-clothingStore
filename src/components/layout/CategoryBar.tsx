'use client';

import Link from 'next/link';
import { NAV_CATEGORIES, type NavTone } from '@/data/navCategories';

const TONES: Record<NavTone, { soft: string; icon: string; fill: string }> = {
  blue: { soft: 'bg-[#052A97]/10', icon: 'text-[#052A97]', fill: 'group-hover:bg-[#052A97]' },
  red: { soft: 'bg-[#EB1019]/10', icon: 'text-[#EB1019]', fill: 'group-hover:bg-[#EB1019]' },
  amber: { soft: 'bg-[#F2A018]/15', icon: 'text-[#B9740A]', fill: 'group-hover:bg-[#F2A018]' },
  green: { soft: 'bg-[#04B02A]/12', icon: 'text-[#04881F]', fill: 'group-hover:bg-[#04B02A]' },
  sky: { soft: 'bg-[#0EA5E9]/12', icon: 'text-[#0369A1]', fill: 'group-hover:bg-[#0EA5E9]' },
  orange: { soft: 'bg-[#F97316]/12', icon: 'text-[#C2410C]', fill: 'group-hover:bg-[#F97316]' },
};

export default function CategoryBar() {
  return (
    <nav aria-label="Categorias de brinquedos" className="relative border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-1 sm:px-3">
        <div className="no-scrollbar flex snap-x overflow-x-auto py-1.5 lg:justify-between lg:overflow-x-visible lg:px-0">
          {NAV_CATEGORIES.map((category) => {
            const tone = TONES[category.tone];
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                href={category.href}
                className={`group relative flex min-w-[76px] shrink-0 snap-center flex-col items-center gap-1.5 rounded-2xl px-2 py-2.5 transition duration-200 ease-out hover:-translate-y-1 hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#052A97]/40 lg:min-w-0 lg:flex-1 ${
                  category.special ? 'bg-[#EB1019]/[0.05]' : ''
                }`}
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition duration-200 ease-out group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-white ${tone.soft} ${tone.icon} ${tone.fill}`}
                >
                  <Icon className="h-[21px] w-[21px]" strokeWidth={1.9} aria-hidden />
                </span>
                <span className="max-w-full text-center text-[11px] font-semibold leading-tight text-neutral-600 transition-colors duration-200 group-hover:text-[#051D6F]">
                  {category.label}
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-0.5 h-0.5 w-6 origin-center scale-x-0 rounded-full bg-[#EB1019] transition-transform duration-200 ease-out group-hover:scale-x-100"
                />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Laterais com fade para indicar scroll horizontal (mobile) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent lg:hidden"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white via-white/80 to-transparent lg:hidden"
      />
    </nav>
  );
}
