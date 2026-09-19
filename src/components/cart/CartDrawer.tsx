'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency } from '@/lib/utils';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    discount,
    total,
    couponCode,
    applyCoupon,
    removeCoupon,
    amountToFreeShipping,
    freeShippingProgress,
    freeShippingThreshold,
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponError, setCouponError] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError(false);
    const success = applyCoupon(inputCoupon);
    if (!success) {
      setCouponError(true);
    } else {
      setInputCoupon('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
        onClick={closeCart}
      />

      {/* Drawer Container (Right side on Desktop, Bottom sheet / full on Mobile) */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          
          {/* Header do Drawer */}
          <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-neutral-900 stroke-[1.8]" />
              <h2 className="text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-900">
                Sua Sacola ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-neutral-400 hover:text-black rounded-full hover:bg-neutral-100 transition-colors"
              aria-label="Fechar sacola"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Barra de Progresso de Frete Grátis */}
          <div className="bg-[#F7F7F5] px-4 py-3 border-b border-neutral-200/70">
            <div className="flex items-center justify-between text-xs mb-1.5">
              {amountToFreeShipping > 0 ? (
                <span className="text-neutral-700">
                  Faltam <strong className="text-neutral-900">{formatCurrency(amountToFreeShipping)}</strong> para <strong className="text-[#C5A059]">FRETE GRÁTIS</strong>
                </span>
              ) : (
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  Parabéns! Você ganhou Frete Grátis
                </span>
              )}
              <span className="text-[10px] text-neutral-500 font-medium">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#C5A059] to-neutral-900 transition-all duration-500 rounded-full"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Lista de Produtos ou Estado Vazio */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                  <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-medium text-neutral-900">
                    Sua sacola está vazia
                  </h3>
                  <p className="text-xs text-neutral-500 max-w-xs">
                    Explore nossos lançamentos de moda contemporânea e adicione suas peças favoritas.
                  </p>
                </div>
                <button
                  onClick={closeCart}
                  className="mt-2 px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Explorar Novidades
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex gap-3.5 pb-4 border-b border-neutral-100 last:border-0"
                >
                  {/* Foto do produto */}
                  <div className="relative w-20 h-24 bg-neutral-50 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover object-top"
                      sizes="80px"
                    />
                  </div>

                  {/* Informações */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A059]">
                          {item.product.brand}
                        </span>
                        <button
                          onClick={() =>
                            removeFromCart(item.product.id, item.selectedSize, item.selectedColor)
                          }
                          className="text-neutral-400 hover:text-rose-500 p-0.5 transition-colors"
                          aria-label="Remover item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <h4 className="text-xs font-medium text-neutral-900 truncate mt-0.5">
                        {item.product.name}
                      </h4>

                      <div className="flex items-center gap-3 text-[11px] text-neutral-500 mt-1">
                        <span>Tam: <strong className="text-neutral-800">{item.selectedSize}</strong></span>
                        <span>•</span>
                        <span>Cor: <strong className="text-neutral-800">{item.selectedColor}</strong></span>
                      </div>
                    </div>

                    {/* Preço e Controles de Quantidade */}
                    <div className="flex items-center justify-between mt-2 pt-1">
                      <div className="flex items-center border border-neutral-200 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity - 1
                            )
                          }
                          className="p-1 text-neutral-500 hover:text-black hover:bg-neutral-50 transition-colors"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-neutral-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor,
                              item.quantity + 1
                            )
                          }
                          className="p-1 text-neutral-500 hover:text-black hover:bg-neutral-50 transition-colors"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs sm:text-sm font-bold text-neutral-900">
                          {formatCurrency(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cupom de Desconto e Resumo de Pagamento */}
          {cart.length > 0 && (
            <div className="border-t border-neutral-200 bg-neutral-50/70 p-4 sm:p-5 space-y-3">
              {/* Cupom */}
              {couponCode ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded text-xs text-emerald-800">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    Cupom: <strong>{couponCode}</strong>
                  </div>
                  <button
                    onClick={removeCoupon}
                    className="text-emerald-700 hover:text-emerald-900 font-semibold underline text-[11px]"
                  >
                    Remover
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    placeholder="Cupom (ex: SIAROM10)"
                    className="flex-1 px-3 py-1.5 text-xs bg-white border border-neutral-300 rounded focus:outline-none focus:border-black uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3.5 py-1.5 bg-neutral-900 text-white text-xs font-semibold rounded hover:bg-black uppercase tracking-wider"
                  >
                    Aplicar
                  </button>
                </form>
              )}
              {couponError && (
                <p className="text-[11px] text-rose-600">Cupom inválido. Tente &ldquo;SIAROM10&rdquo;.</p>
              )}

              {/* Linhas de Resumo */}
              <div className="space-y-1.5 pt-1 text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-neutral-900 font-medium">{formatCurrency(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Desconto ({couponCode})</span>
                    <span>-{formatCurrency(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Frete</span>
                  <span className="text-neutral-900 font-medium">
                    {subtotal >= freeShippingThreshold ? (
                      <strong className="text-emerald-700">GRÁTIS</strong>
                    ) : (
                      'Calculado no checkout'
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-2 border-t border-neutral-200 text-sm sm:text-base font-bold text-neutral-900">
                  <span>Total</span>
                  <span className="text-base sm:text-lg">{formatCurrency(total)}</span>
                </div>
              </div>

              {/* Botão de Finalizar Compra */}
              <Link
                href="/checkout"
                onClick={closeCart}
                className="w-full py-3 px-4 bg-black hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99]"
              >
                <span>Finalizar Compra</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-neutral-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Compra 100% Segura • Loja Física em Sousa-PB</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

