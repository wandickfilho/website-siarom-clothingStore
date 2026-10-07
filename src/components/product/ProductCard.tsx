'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Plus, Check } from 'lucide-react';
import { Product } from '@/lib/types';
import { formatCurrency, calculateInstallments, calculatePixPrice } from '@/lib/utils';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [addedQuick, setAddedQuick] = useState(false);
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isFavorited = isInWishlist(product.id);
  const installments = calculateInstallments(product.price);
  const pixPrice = calculatePixPrice(product.price, product.pixDiscountPercent);

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Imagem exibida (troca para a segunda foto no hover em desktop)
  const currentImage =
    isHovered && product.images[1] ? product.images[1] : product.images[0];

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Adiciona o primeiro tamanho e primeira cor padrÃ£o
    addToCart(product, product.sizes[0], product.colors[0]?.name || 'PadrÃ£o', 1);
    setAddedQuick(true);
    setTimeout(() => setAddedQuick(false), 1800);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div
      className="group relative flex flex-col w-full bg-transparent transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container de Imagem com ProporÃ§Ã£o de Moda 3:4 */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F7F7F5] rounded-none">
        <Link
          href={`/produto/${product.slug}`}
          className="block w-full h-full relative"
          aria-label={`Ver detalhes de ${product.name}`}
        >
          <Image
            src={currentImage}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Badges Flutuantes Discretas */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 pointer-events-none z-10">
          {product.isNew && (
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-black text-white">
              NEW
            </span>
          )}
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#EB1019] text-white">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* BotÃ£o de Wishlist / Favoritos */}
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-2.5 right-2.5 p-2 rounded-full transition-all duration-200 z-10 ${
            isFavorited
              ? 'bg-black text-white shadow-sm'
              : 'bg-white/80 backdrop-blur-xs text-neutral-700 hover:text-black hover:bg-white'
          }`}
          aria-label={isFavorited ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform active:scale-75 ${
              isFavorited ? 'fill-[#EB1019] text-[#EB1019]' : 'stroke-[1.8]'
            }`}
          />
        </button>

        {/* AÃ§Ã£o RÃ¡pida no Desktop (Hover) */}
        <div className="hidden lg:block absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={handleQuickAdd}
            disabled={!product.inStock}
            className="w-full py-2.5 px-4 bg-white hover:bg-neutral-100 text-black text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-transform active:scale-[0.98] shadow-md"
          >
            {addedQuick ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Adicionado!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Adicionar RÃ¡pido</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Metadados e InformaÃ§Ãµes do Produto (Tipografia Limpa e Editorial) */}
      <div className="pt-3 pb-1 flex flex-col flex-1">
        {/* Marca */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-[#052A97]">
            {product.brand}
          </span>
          <span className="text-[10px] text-neutral-400 font-medium">
            {product.inStock ? 'Em estoque' : 'Esgotado'}
          </span>
        </div>

        {/* Nome do Produto */}
        <Link
          href={`/produto/${product.slug}`}
          className="mt-1 text-xs sm:text-sm font-medium text-[#141414] hover:text-[#EB1019] transition-colors line-clamp-1"
          title={product.name}
        >
          {product.name}
        </Link>

        {/* PreÃ§os e CondiÃ§Ãµes */}
        <div className="mt-1.5 flex flex-col">
          <div className="flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-bold text-[#141414] tracking-tight">
              {formatCurrency(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-neutral-400 line-through font-normal">
                {formatCurrency(product.originalPrice)}
              </span>
            )}
          </div>

          {/* PreÃ§o no PIX com desconto sutil */}
          <div className="text-[11px] text-emerald-700 font-medium">
            {formatCurrency(pixPrice)} no PIX (5% OFF)
          </div>

          {/* Parcelamento */}
          <div className="text-[11px] text-neutral-500 font-normal">
            ou {installments.text}
          </div>
        </div>

        {/* BotÃ£o de AdiÃ§Ã£o RÃ¡pida no Mobile (Compacto e AcessÃ­vel) */}
          <div className="lg:hidden mt-2 pt-2 border-t border-neutral-200">
          <button
            onClick={handleQuickAdd}
            className="w-full py-1.5 px-2 bg-[#052A97] text-white rounded text-[11px] font-semibold tracking-wide uppercase flex items-center justify-center gap-1 active:bg-[#051D6F]"
          >
            {addedQuick ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                Adicionado
              </>
            ) : (
              <>
                <Plus className="w-3 h-3" />
                Adicionar ({product.sizes[0]})
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

