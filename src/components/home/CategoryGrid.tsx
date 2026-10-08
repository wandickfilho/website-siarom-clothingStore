import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';
import { ArrowUpRight } from 'lucide-react';
import LazyVideo from '@/components/ui/LazyVideo';

// Cards secundários da composição editorial (hero fica ao lado)
const HIGHLIGHTS = ['veiculos', 'bonecas'] as const;

const TAGLINES: Record<string, string> = {
  veiculos: 'Carrinhos, bicicletas e diversão sobre rodas.',
  bonecas: 'Bonecas, bebês e brinquedos para imaginar.',
};

const HERO_VIDEO = '/videos/videos_stories/video_Hero.mp4';

export default function CategoryGrid() {
  const highlights = CATEGORIES.filter((c) =>
    (HIGHLIGHTS as readonly string[]).includes(c.slug)
  );

  return (
    <section className="bg-[#F8F9FB] py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Escolha seu mood</p>
            <h2 className="section-title">Diversão começa aqui.</h2>
          </div>
          <Link href="/loja" className="link-arrow hidden sm:inline-flex">
            Explorar tudo <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/*
          Composição editorial assimétrica:
          mobile: hero → veículos → bonecas (empilhados)
          tablet: hero em destaque no topo, dois cards lado a lado
          desktop: coluna esquerda com os 2 cards + hero grande à direita
        */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-5">
          {/* HERO — maior destaque */}
          <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#051D6F] md:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
              <LazyVideo src={HERO_VIDEO} />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#051D6F]/75 via-[#051D6F]/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#FBCC0F]">
                Mega Toys
              </p>
              <h3 className="mt-1.5 text-lg font-semibold text-white sm:text-2xl">
                A hora de brincar é agora.
              </h3>
              <Link
                href="/loja"
                className="link-arrow mt-2.5 text-white"
                aria-label="Ver catálogo da Mega Toys"
              >
                Ver catálogo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Cards secundários: Veículos & Aventura · Bonecas & Bebês */}
          {highlights.map((category) => (
            <Link
              key={category.id}
              href={`/loja?categoria=${category.slug}`}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-100 lg:aspect-auto lg:min-h-0"
              aria-label={`Ver categoria ${category.name}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                {category.video && <LazyVideo src={category.video} />}
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white sm:text-sm">
                  {category.name}
                </h3>
                <p className="mt-1 text-[11px] leading-snug text-white/70 sm:text-xs">
                  {TAGLINES[category.slug]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
