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
      <div className="bg-[#050505] text-neutral-300 text-xs py-2 px-4 border-b border-white/10 tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
            <span className="hidden sm:inline text-neutral-400">Sousa - PB:</span>
            <span className="flex items-center gap-1 text-white">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              Rua Herotildes Serafim dos Santos, 616
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-neutral-300">
            <span>✨ NOVIDADES TODA SEMANA</span>
            <span className="text-neutral-600">|</span>
            <span>FRETE GRÁTIS ACIMA DE R$ 499</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5583999999999?text=Ol%C3%A1%2C%20gostaria%20de%20atendimento%20na%20SIAROM%20MULTIMARCAS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline flex items-center gap-1 font-semibold"
            >
              Atendimento WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-white/10 py-2.5'
            : 'bg-[#0A0A0A] border-b border-white/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 -ml-2 text-neutral-200 hover:text-[#d6b35f] focus:outline-none"
                aria-label="Abrir menu de navegação"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

{/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link
                href="/"
                aria-label="SIAROM Multimarcas - Início"
                className="flex shrink-0 items-center justify-center"
              >
                <Image
                  src="/imagens/logo_siarom_instagram_semFundo.png"
                  alt="SIAROM Multimarcas"
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
                        ? 'text-white font-semibold'
                        : link.highlight
                        ? 'text-[#C5A059] font-semibold hover:text-[#9A7B39]'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {link.badge && (
                      <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded bg-neutral-900 text-white font-bold tracking-tighter">
                        {link.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A059]" />
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
                className="flex items-center gap-2 p-2 text-neutral-300 hover:text-white transition-colors rounded-full hover:bg-white/10 focus:outline-none"
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
                className="relative p-2 text-neutral-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Favoritos"
                title="Ver lista de desejos"
              >
                <Heart className="w-5 h-5 stroke-[1.75]" />
                {totalWishlist > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#C5A059] text-black text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-[#0A0A0A]">
                    {totalWishlist}
                  </span>
                )}
              </Link>

              {/* Account (hidden on smallest screens to keep it clean) */}
              <Link
                href="/conta"
                className="hidden sm:flex p-2 text-neutral-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
                aria-label="Minha Conta"
                title="Minha Conta e Pedidos"
              >
                <User className="w-5 h-5 stroke-[1.75]" />
              </Link>

              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative flex items-center gap-2 py-2 px-3 bg-[#1a1815] text-white rounded-full border border-[#514326] hover:bg-black transition-all hover:scale-[1.02] shadow-sm focus:outline-none"
                aria-label="Sacola de compras"
              >
                <ShoppingBag className="w-4 h-4 text-[#E5C07B]" />
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
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative w-full max-w-xs bg-[#111111] h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-300">
            {/* Mobile Menu Header */}
            <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
              <BrandLogo variant="dark" size="sm" symbolOnly />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-neutral-400 hover:text-white rounded-full"
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
                  className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium text-neutral-200 hover:bg-white/10 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {link.label}
                    {link.highlight && (
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                    )}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {link.badge && (
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-black text-white font-bold">
                        {link.badge}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-neutral-500" />
                  </div>
                </Link>
              ))}

              <div className="pt-6 border-t border-neutral-800 mt-6">
                <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-2 px-2">
                  Atendimento & Loja Física
                </div>
                <div className="p-3 bg-white/5 rounded-xl space-y-2 text-xs text-neutral-400">
                  <p className="font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                    SIAROM MULTIMARCAS
                  </p>
                  <p>Rua Herotildes Serafim dos Santos, 616</p>
                  <p>Sousa - PB</p>
                  <a
                    href="https://wa.me/5583999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#C5A059] font-bold pt-1 hover:underline"
                  >
                    Falar com Consultor no WhatsApp →
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-4 border-t border-neutral-800 bg-black/20">
              <Link
                href="/conta"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#d6b35f] text-black text-xs font-semibold rounded-lg"
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

