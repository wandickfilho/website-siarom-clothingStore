'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Grid, Search, Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import SearchModal from '../search/SearchModal';

export default function BottomNav() {
  const pathname = usePathname();
  const { openCart, totalItems } = useCart();
  const { totalWishlist } = useWishlist();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // If on checkout page, hide bottom nav to minimize distraction
  if (pathname === '/checkout') return null;

  return (
    <>
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 lg:hidden px-2 py-1 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
        aria-label="Navegação mobile inferior"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {/* 1. Início */}
          <Link
            href="/"
            className={`flex flex-col items-center justify-center py-2 px-3 min-w-[56px] transition-colors ${
              pathname === '/' ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
            }`}
          >
            <Home className={`w-5 h-5 ${pathname === '/' ? 'stroke-[2.2] text-black' : 'stroke-[1.75]'}`} />
            <span className="text-[10px] tracking-tight mt-1">Início</span>
            {pathname === '/' && <span className="w-1 h-1 rounded-full bg-[#EB1019] mt-0.5" />}
          </Link>

          {/* 2. Categorias / Catálogo */}
          <Link
            href="/loja"
            className={`flex flex-col items-center justify-center py-2 px-3 min-w-[56px] transition-colors ${
              pathname.startsWith('/loja') ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
            }`}
          >
            <Grid className={`w-5 h-5 ${pathname.startsWith('/loja') ? 'stroke-[2.2] text-black' : 'stroke-[1.75]'}`} />
            <span className="text-[10px] tracking-tight mt-1">Coleções</span>
            {pathname.startsWith('/loja') && <span className="w-1 h-1 rounded-full bg-[#EB1019] mt-0.5" />}
          </Link>

          {/* 3. Buscar (Central & Instantâneo) */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex flex-col items-center justify-center py-2 px-3 min-w-[56px] text-neutral-600 hover:text-black transition-colors focus:outline-none"
            aria-label="Buscar produtos"
          >
            <div className="p-1 rounded-full bg-neutral-100 text-neutral-800">
              <Search className="w-4 h-4 stroke-[2]" />
            </div>
            <span className="text-[10px] tracking-tight mt-0.5 font-medium">Buscar</span>
          </button>

          {/* 4. Favoritos */}
          <Link
            href="/favoritos"
            className={`relative flex flex-col items-center justify-center py-2 px-3 min-w-[56px] transition-colors ${
              pathname === '/favoritos' ? 'text-black font-semibold' : 'text-neutral-500 hover:text-black'
            }`}
          >
            <div className="relative">
              <Heart className={`w-5 h-5 ${pathname === '/favoritos' ? 'stroke-[2.2] text-black fill-black' : 'stroke-[1.75]'}`} />
              {totalWishlist > 0 && (
                <span className="absolute -top-1 -right-2 bg-[#EB1019] text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                  {totalWishlist}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1">Desejos</span>
          </Link>

          {/* 5. Sacola */}
          <button
            onClick={openCart}
            className="relative flex flex-col items-center justify-center py-2 px-3 min-w-[56px] text-neutral-600 hover:text-black transition-colors focus:outline-none"
            aria-label="Abrir sacola de compras"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 stroke-[1.8] text-neutral-900" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="text-[10px] tracking-tight mt-1 font-semibold text-black">Sacola</span>
          </button>
        </div>
      </nav>

      {/* Modal dedicado de busca no mobile */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}

