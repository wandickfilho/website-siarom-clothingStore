'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ArrowRight, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import ProductCard from '@/components/product/ProductCard';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-neutral-100 pb-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#052A97] mb-1">
            <Heart className="w-4 h-4 fill-[#052A97]" />
            Lista de Desejos
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl text-neutral-900 font-normal">
            Peças Favoritadas ({wishlist.length})
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Suas seleções exclusivas salvas para você não perder de vista.
          </p>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 bg-[#F7F7F5] rounded-2xl max-w-xl mx-auto p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-white text-neutral-400 flex items-center justify-center mx-auto shadow-xs">
              <Heart className="w-8 h-8 stroke-[1.2]" />
            </div>
            <div className="space-y-1">
              <h2 className="text-base font-bold text-neutral-900">
                Sua lista de desejos está vazia
              </h2>
              <p className="text-xs text-neutral-500">
                Clique no ícone de coração nos produtos que você mais gostou para salvá-los aqui.
              </p>
            </div>
            <Link
              href="/loja"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              <span>Explorar Catálogo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

