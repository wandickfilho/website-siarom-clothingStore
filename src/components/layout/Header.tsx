'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import SearchModal from '../search/SearchModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openCart, totalItems } = useCart();
  const { totalWishlist } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu mobile ao trocar rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Feminino', href: '/loja?categoria=feminino' },
    { label: 'Masculino', href: '/loja?categoria=masculino' },
    { label: 'Calçados', href: '/loja?categoria=calcados' },
    { label: 'Acessórios', href: '/loja?categoria=acessorios' },
    { label: 'Novidades', href: '/loja?filtro=novidades', highlight: true },
    { label: 'Marcas', href: '/marcas' },
    { label: 'Ofertas', href: '/loja?filtro=ofertas', badge: 'OFF' },
  ];

  return (
    <>
      {/* Top Banner de Confiança e Localização */}
      <div className="bg-[#052A97] text-white text-xs py-2 px-4 border-b border-[#051D6F] tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FBCC0F] animate-pulse"></span>
            <span className="hidden sm:inline text-white/80">Sousa - PB:</span>
            <span className="flex items-center gap-1 text-white">
              <MapPin className="w-3 h-3 text-[#FBCC0F]" />
              Diversão para todas as idades
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-white/90">
            <span>✨ NOVIDADES TODA SEMANA</span>
            <span className="text-white/40">|</span>
            <span>FRETE GRÁTIS ACIMA DE R$ 499</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#FBCC0F] flex items-center gap-1 font-semibold">
              Atendimento via WhatsApp
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md shadow-black/5 border-b border-neutral-200 py-2.5'
            : 'bg-white border-b border-neutral-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-neutral-700 hover:text-[#052A97] focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

{/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                aria-label="Mega Toys - Início"
                className="flex shrink-0 items-center justify-center"
              >
                <Image
                  src="/imagens/logo_megaToys.png"
                  alt="Mega Toys"
                  width={500}
                  height={500}
                  className="h-20 w-20 object-contain sm:h-24 sm:w-24"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7 text-[13px] font-medium tracking-wide uppercase">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative py-1 transition-colors ${
                      isActive
                        ? 'text-[#051D6F] font-semibold'
                        : link.highlight
                        ? 'text-[#EB1019] font-semibold hover:text-[#c40d15]'
                        : 'text-neutral-600 hover:text-[#051D6F]'
                    }`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded bg-[#EB1019] text-white font-bold tracking-tighter">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#EB1019]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Search, Wishlist, Account, Cart */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 p-2 text-neutral-700 hover:text-[#052A97] transition-colors rounded-full hover:bg-neutral-100 focus:outline-none"
                aria-label="Buscar produtos"
                title="Buscar produtos"
              >
                <Search className="w-5 h-5 stroke-[1.75]" />
                <span className="hidden xl:inline text-xs text-neutral-500 font-normal">
                  Buscar produto ou marca...
                </span>
              </button>

              {/* Wishlist */}
              <Link
                href="/favoritos"
                className="relative p-2 text-neutral-700 hover:text-[#EB1019] transition-colors rounded-full hover:bg-neutral-100"
                aria-label="Favoritos"
                title="Ver lista de desejos"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {totalWishlist > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#EB1019] text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                    {totalWishlist}
                  </span>
                )}
              </Link>

              {/* Account (hidden on smallest screens to keep it clean) */}
              <Link
                href="/conta"
                className="hidden sm:flex p-2 text-neutral-700 hover:text-[#052A97] transition-colors rounded-full hover:bg-neutral-100"
                aria-label="Minha Conta"
                title="Minha Conta e Pedidos"
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </Link>

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative flex items-center gap-2 py-2 px-3 bg-[#052A97] text-white rounded-full border border-[#051D6F] hover:bg-[#051D6F] transition-all hover:scale-[1.02] shadow-sm focus:outline-none"
                aria-label="Sacola de compras"
              >
                <ShoppingBag className="w-4 h-4 text-white" />
                <span className="text-xs font-semibold tracking-wider">
                  {totalItems}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
            {/* Mobile Menu Header */}
            <div className="p-4 border-b border-neutral-200 flex items-center justify-between">
              <BrandLogo variant="light" size="sm" symbolOnly />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-500 hover:text-[#EB1019] rounded-full"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-2 px-2">
                Departamentos
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium text-neutral-800 hover:bg-neutral-100 hover:text-[#051D6F] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.highlight && (
                      <Sparkles className="w-3.5 h-3.5 text-[#EB1019]" />
                    )}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#EB1019] text-white font-bold">
                        {link.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </Link>
              ))}

              <div className="pt-6 border-t border-neutral-200 mt-6">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-2 px-2">
                  Atendimento & Loja Física
                </div>
                <div className="p-3 bg-neutral-50 rounded-xl space-y-2 text-xs text-neutral-600 border border-neutral-200">
                  <p className="font-semibold text-[#051D6F] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#EB1019]" />
                    MEGA TOYS
                  </p>
                  <p>Sousa - PB</p>
                  <p className="text-neutral-500">Atendimento via WhatsApp</p>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-neutral-200 bg-neutral-50">
              <Link
                href="/conta"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#052A97] text-white text-xs font-semibold rounded-lg hover:bg-[#051D6F] transition-colors"
              >
                <User className="w-4 h-4" />
                Minha Conta / Rastrear Pedidos
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Instant Dedicated Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
