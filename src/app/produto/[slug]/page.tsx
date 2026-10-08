'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  RefreshCw,
  CreditCard,
  Check,
  ChevronRight,
  Share2,
  Sparkles,
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { formatCurrency, calculateInstallments, calculatePixPrice } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 4);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Único');
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || 'Padrão');
  const [cepInput, setCepInput] = useState('');
  const [shippingCalculated, setShippingCalculated] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const { addToCart, openCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product.id);
  const installments = calculateInstallments(product.price);
  const pixPrice = calculatePixPrice(product.price, product.pixDiscountPercent);
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, 1);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, selectedColor, 1);
    router.push('/checkout');
  };

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (cepInput.replace(/\D/g, '').length === 8) {
      setShippingCalculated(true);
    }
  };

  return (
    <div className="bg-white min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-[11px] text-neutral-400 uppercase tracking-widest mb-6">
          <Link href="/" className="hover:text-black transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href={`/loja?categoria=${product.category}`} className="hover:text-black transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-[#052A97] font-semibold">{product.brand}</span>
          <span className="hidden sm:inline">/</span>
          <span className="hidden sm:inline text-neutral-900 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Layout da PDP: Galeria à Esquerda (Desktop) e Informações à Direita */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* GALERIA DE FOTOS (7 Colunas no Desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Foto Principal em Alta Resolução */}
            <div className="relative aspect-[3/4] w-full bg-[#F7F7F5] overflow-hidden shadow-xs">
              <Image
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-top transition-all duration-300"
              />

              {/* Badges Flutuantes */}
              <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10">
                {product.isNew && (
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-black text-white">
                    LANÇAMENTO
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-[#052A97] text-white">
                    -{discountPercent}% OFF
                  </span>
                )}
              </div>

              {/* Botão Flutuante de Wishlist */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`absolute top-4 right-4 p-3 rounded-full shadow-md transition-transform active:scale-90 ${
                  isFavorited
                    ? 'bg-black text-[#052A97]'
                    : 'bg-white/90 backdrop-blur-xs text-neutral-700 hover:text-black'
                }`}
                aria-label="Adicionar aos favoritos"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorited ? 'fill-[#052A97] text-[#052A97]' : 'stroke-[1.8]'
                  }`}
                />
              </button>
            </div>

            {/* Miniaturas de Ângulos / Fotos Secundárias */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative w-20 h-24 sm:w-24 sm:h-28 flex-shrink-0 bg-neutral-100 overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index
                        ? 'border-[#052A97] opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ângulo ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      sizes="96px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* INFORMAÇÕES DO PRODUTO & COMPRA (5 Colunas no Desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Marca & Avaliação */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <Link
                  href={`/loja?marca=${encodeURIComponent(product.brand)}`}
                  className="text-xs font-bold uppercase tracking-[0.2em] text-[#052A97] hover:underline"
                >
                  {product.brand}
                </Link>

                <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{product.rating}</span>
                  <span className="text-neutral-400 font-normal">
                    ({product.reviewCount} avaliações)
                  </span>
                </div>
              </div>

              {/* Nome do Produto */}
              <h1 className="font-editorial text-2xl sm:text-3xl text-neutral-900 font-normal leading-snug">
                {product.name}
              </h1>
            </div>

            {/* Preços & Condições de Pagamento */}
            <div className="p-4 rounded-xl bg-[#F7F7F5] border border-neutral-200/80 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                  {formatCurrency(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-neutral-400 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold">
                  PIX
                </span>
                <span>{formatCurrency(pixPrice)} no PIX (5% de desconto imediato)</span>
              </div>

              <div className="text-xs text-neutral-600">
                Ou em até <strong>{installments.text}</strong>
              </div>
            </div>

            {/* Seleção de Cores */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-neutral-800">
                  Cor: <span className="font-normal text-neutral-600">{selectedColor}</span>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group relative p-0.5 rounded-full transition-transform ${
                      selectedColor === color.name
                        ? 'ring-2 ring-black ring-offset-2 scale-105'
                        : 'opacity-80 hover:opacity-100'
                    }`}
                    title={color.name}
                  >
                    <span
                      className="block w-6 h-6 rounded-full border border-black/10 shadow-xs"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Seleção de Tamanho */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-neutral-800">
                  Tamanho: <span className="font-normal text-neutral-600">{selectedSize}</span>
                </span>

                <span className="text-[11px] text-neutral-400">
                  {product.sizes.length > 1
                    ? `${product.sizes.length} opções disponíveis`
                    : 'Brinquedo em tamanho único'}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 text-xs font-semibold rounded border transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white shadow-sm'
                        : 'border-neutral-200 text-neutral-800 hover:border-black bg-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Disponibilidade */}
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Peça disponível para pronta entrega em Sousa - PB</span>
            </div>

            {/* CTAs de Conversão (Principal & Secundário) */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={handleAddToCart}
                className="w-full py-4 px-6 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99]"
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-400" />
                    <span>ADICIONADO À SACOLA!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-5 h-5 text-[#052A97]" />
                    <span>ADICIONAR À SACOLA</span>
                  </>
                )}
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 px-6 bg-[#052A97] hover:bg-[#051D6F] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.99]"
              >
                <span>COMPRAR AGORA (1-CLIQUE)</span>
              </button>
            </div>

            {/* Simulador de Frete e Prazos */}
            <div className="pt-4 border-t border-neutral-100">
              <form onSubmit={handleCalculateShipping} className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-800 flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#052A97]" />
                  Calcular Frete e Prazo
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={cepInput}
                    onChange={(e) => setCepInput(e.target.value)}
                    placeholder="Digite seu CEP (ex: 58800-000)"
                    maxLength={9}
                    className="flex-1 px-3 py-2 text-xs border border-neutral-300 rounded focus:outline-none focus:border-black"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-neutral-900 text-white text-xs font-semibold rounded hover:bg-black uppercase"
                  >
                    Calcular
                  </button>
                </div>
              </form>

              {shippingCalculated && (
                <div className="mt-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200 text-xs space-y-1.5 animate-in fade-in duration-200">
                  <div className="flex justify-between items-center text-neutral-800">
                    <span>Retirada Loja Física (Sousa - PB):</span>
                    <strong className="text-emerald-700">GRÁTIS (Pronta Entrega)</strong>
                  </div>
                  <div className="flex justify-between items-center text-neutral-800">
                    <span>Envio Expresso Paraíba:</span>
                    <strong>R$ 18,90 (1 a 2 dias úteis)</strong>
                  </div>
                  <div className="flex justify-between items-center text-neutral-800">
                    <span>Sedex Nacional:</span>
                    <strong>R$ 32,50 (3 a 5 dias úteis)</strong>
                  </div>
                </div>
              )}
            </div>

            {/* Detalhes, Composição e Políticas (Accordion) */}
            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <div className="text-xs text-neutral-700 leading-relaxed">
                <p className="font-semibold text-neutral-900 mb-1">Descrição Editorial:</p>
                <p>{product.description}</p>
              </div>

              <div className="text-xs text-neutral-700 leading-relaxed pt-2">
                <p className="font-semibold text-neutral-900 mb-1">Composição & Tecido:</p>
                <p>{product.composition}</p>
              </div>

              {/* Selos de Confiança */}
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-100 text-[11px] text-neutral-600">
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-[#052A97]" />
                  <span>Troca fácil em até 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#052A97]" />
                  <span>Produto 100% Original</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#052A97]" />
                  <span>Até 10x sem juros no cartão</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#052A97]" />
                  <span>Atendimento consultivo Sousa-PB</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Produtos Relacionados */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-neutral-100">
            <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#052A97]">
                Continue explorando
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl text-neutral-900 font-normal">
                Você Também Pode Gostar
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

