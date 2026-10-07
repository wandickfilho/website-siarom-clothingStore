import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '../product/ProductCard';
import { ArrowRight, BadgePercent } from 'lucide-react';

export default function FeaturedSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div><p className="section-kicker">Acabou de chegar</p><h2 className="section-title">Novos desejos.</h2></div>
          <Link href="/loja" className="link-arrow hidden sm:inline-flex">Ver catálogo <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          {PRODUCTS.slice(0, 8).map((product, idx) => <ProductCard key={product.id} product={product} priority={idx < 4} />)}
        </div>
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-[#051D6F]/20 bg-[#052A97] text-white">
          <div className="grid md:grid-cols-[1fr_auto] md:items-center">
            <div className="p-7 sm:p-10"><div className="mb-3 flex items-center gap-2 text-[#FBCC0F]"><BadgePercent className="h-4 w-4"/><span className="text-[10px] font-bold uppercase tracking-[.24em]">Boas-vindas MEGA TOYS</span></div><h3 className="font-editorial text-3xl sm:text-4xl">10% OFF na primeira compra.</h3><p className="mt-2 text-sm text-white/80">Use <strong className="text-white">MEGATOYS10</strong> no checkout.</p></div>
            <Link href="/loja" className="m-5 flex items-center justify-center rounded-full bg-[#EB1019] px-8 py-4 text-xs font-extrabold uppercase tracking-[.16em] text-white transition hover:bg-[#c40d15] md:m-10">Quero aproveitar</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
