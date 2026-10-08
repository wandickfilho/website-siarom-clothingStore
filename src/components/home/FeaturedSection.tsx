import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '../product/ProductCard';
import { ArrowRight } from 'lucide-react';

// Vídeos reais de public/videos/videos_stories apenas onde há correspondência
// com o produto (arquivos separados pelo cliente; brinquedo_boneco não consta)
const PRODUCT_VIDEOS: Record<string, string> = {
  'carrinho-die-cast-turbo-1-64': '/videos/videos_stories/brinquedo_carrinho&boneca.mp4',
  'boneca-articulada-com-visuais-trocaveis': '/videos/videos_stories/brinquedo_boneca.mp4',
  'quebra-cabeca-500-pecas': '/videos/videos_stories/brinquedo_quebraCabeca.mp4',
};

// Seleção da vitrine: 7 primeiros + quebra-cabeça (#11) para exibir o vídeo
const quebraCabeca = PRODUCTS.find((p) => p.slug === 'quebra-cabeca-500-pecas');
const FEATURED_PRODUCTS = [
  ...PRODUCTS.slice(0, 7),
  ...(quebraCabeca ? [quebraCabeca] : []),
];

export default function FeaturedSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div><p className="section-kicker">Acabou de chegar</p><h2 className="section-title">Pra brincar agora.</h2></div>
          <Link href="/loja" className="link-arrow hidden sm:inline-flex">Ver catálogo <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">
          {FEATURED_PRODUCTS.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={idx < 4}
              videoSrc={PRODUCT_VIDEOS[product.slug]}
            />
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-5 rounded-2xl bg-[#052A97] px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#FBCC0F]">
              Primeira compra
            </p>
            <p className="mt-1.5 text-lg font-semibold sm:text-xl">
              10% OFF — use <span className="text-[#FBCC0F]">MEGATOYS10</span> no checkout.
            </p>
          </div>
          <Link
            href="/loja"
            className="shrink-0 self-start rounded-full bg-[#EB1019] px-7 py-3.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white transition hover:bg-[#c40d15] sm:self-center"
          >
            Quero aproveitar
          </Link>
        </div>
      </div>
    </section>
  );
}
