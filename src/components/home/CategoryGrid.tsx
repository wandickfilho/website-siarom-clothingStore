import Link from 'next/link';
import Image from 'next/image';
import { CATEGORIES } from '@/data/categories';
import { ArrowUpRight } from 'lucide-react';

export default function CategoryGrid() {
  return (
    <section className="bg-[#f4f0e8] py-16 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="section-kicker">Escolha seu mood</p><h2 className="section-title">Seu estilo começa aqui.</h2></div>
          <Link href="/loja" className="link-arrow">Explorar tudo <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {CATEGORIES.map((cat, index) => (
            <Link key={cat.id} href={`/loja?categoria=${cat.slug}`} className={`group relative overflow-hidden rounded-[1.75rem] bg-neutral-200 ${index % 2 ? 'lg:translate-y-8' : ''}`}>
              <div className="relative aspect-[3/4.15]">
                <Image src={cat.image} alt={cat.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition duration-700 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6">
                  <div className="flex items-end justify-between gap-3"><div><p className="text-[9px] uppercase tracking-[.2em] text-white/60">0{index + 1}</p><h3 className="mt-1 text-lg font-bold sm:text-2xl">{cat.name}</h3><p className="mt-1 hidden text-xs text-white/65 sm:block">{cat.subtitle}</p></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
