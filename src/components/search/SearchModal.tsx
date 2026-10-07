'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, TrendingUp, Sparkles, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { formatCurrency } from '@/lib/utils';
import { Product } from '@/lib/types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const popularSearches = [
    'Vestido Midi',
    'Blazer Linho',
    'Camisa Pima',
    'Scarpin Salto',
    'Bolsa Couro',
    'Animale',
    'Osklen',
    'Reserva',
  ];

  const popularBrands = ['ANIMALE', 'OSKLEN', 'RESERVA', 'CALVIN KLEIN', 'SCHUTZ', 'DUDALINA'];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      setResults([]);
      return;
    }

    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.brand.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white/98 backdrop-blur-lg animate-in fade-in duration-200">
      {/* Header da Busca */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-neutral-400 stroke-[2]" />
          
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busque por produto, marca ou categoria (ex: Vestido, Linho, Animale)..."
            className="flex-1 text-base sm:text-lg font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none bg-transparent"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full"
              aria-label="Limpar texto"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-600 hover:text-black rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>

      {/* Conteúdo da Busca */}
      <div className="flex-1 overflow-y-auto max-w-4xl w-full mx-auto px-4 sm:px-6 py-6">
        {/* Quando o usuário ainda não digitou */}
        {!query && (
          <div className="space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Buscas Populares */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                <TrendingUp className="w-4 h-4 text-[#052A97]" />
                Termos Mais Buscados
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-3.5 py-1.5 text-xs rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>

            {/* Marcas em Destaque */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3">
                <Tag className="w-4 h-4 text-[#052A97]" />
                Marcas em Destaque
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {popularBrands.map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setQuery(brand)}
                    className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:border-[#052A97] transition-all text-left"
                  >
                    <span className="text-xs font-semibold tracking-wider text-neutral-900">
                      {brand}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Sugestões de Curadoria */}
            <div className="p-4 rounded-xl bg-[#F7F7F5] border border-neutral-200/70">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-900 mb-1">
                <Sparkles className="w-4 h-4 text-[#052A97]" />
                Novidades da Semana • MEGA TOYS Sousa-PB
              </div>
              <p className="text-xs text-neutral-600 mb-3">
                Acabamos de receber novidades e lançamentos para você e para a criançada.
              </p>
              <Link
                href="/loja?filtro=novidades"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#052A97] hover:underline"
              >
                Conferir todos os lançamentos <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Resultados Instantâneos Conforme Digita */}
        {query && (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                {results.length === 0
                  ? 'Nenhum resultado encontrado'
                  : `${results.length} produto(s) encontrado(s)`}
              </span>
              {results.length > 0 && (
                <Link
                  href={`/loja?q=${encodeURIComponent(query)}`}
                  onClick={onClose}
                  className="text-xs font-bold text-white hover:text-[#052A97] flex items-center gap-1"
                >
                  Ver todos no catálogo <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    href={`/produto/${product.slug}`}
                    onClick={onClose}
                    className="group flex gap-3 p-2.5 rounded-xl border border-neutral-100 hover:border-neutral-300 hover:shadow-sm transition-all bg-white"
                  >
                    <div className="relative w-20 h-24 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-col justify-center min-w-0 flex-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#052A97]">
                        {product.brand}
                      </span>
                      <h4 className="text-xs font-medium text-neutral-900 truncate group-hover:text-black">
                        {product.name}
                      </h4>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="text-xs font-bold text-neutral-900">
                          {formatCurrency(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-neutral-400 line-through">
                            {formatCurrency(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-neutral-500 mt-0.5">
                        {product.sizes.length} tamanhos disp.
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-neutral-400 space-y-2">
                <p className="text-sm font-medium text-neutral-700">
                  Não encontramos produtos para &quot;{query}&quot;
                </p>
                <p className="text-xs">
                  Tente buscar por termos mais genéricos como &ldquo;vestido&rdquo;, &ldquo;camisa&rdquo;, &ldquo;linho&rdquo; ou a marca desejada.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

