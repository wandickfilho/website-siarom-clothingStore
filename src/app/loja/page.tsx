'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SlidersHorizontal, ChevronDown, X, Check, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { BRANDS } from '@/data/brands';
import ProductCard from '@/components/product/ProductCard';
import { CATEGORY_LABELS } from '@/data/categories';

const DEPARTMENTS = [
  { label: 'Todos os Produtos', value: 'todos' },
  ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({ label, value })),
];

function StoreContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('categoria') || 'todos';
  const initialBrand = searchParams.get('marca') || 'todas';
  const initialFilter = searchParams.get('filtro') || '';
  const initialQuery = searchParams.get('q') || '';

  // Filtros de Estado
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [selectedSize, setSelectedSize] = useState<string>('todos');
  const [onlyDiscount, setOnlyDiscount] = useState(initialFilter === 'ofertas');
  const [sortBy, setSortBy] = useState<'relevance' | 'newest' | 'price-asc' | 'price-desc'>('relevance');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Produtos Filtrados e Ordenados
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Categoria
      if (selectedCategory !== 'todos' && p.category !== selectedCategory) {
        return false;
      }
      // Marca
      if (selectedBrand !== 'todas' && p.brand.toLowerCase() !== selectedBrand.toLowerCase()) {
        return false;
      }
      // Tamanho
      if (selectedSize !== 'todos' && !p.sizes.some((s) => s.includes(selectedSize))) {
        return false;
      }
      // Promoção
      if (onlyDiscount && !p.originalPrice) {
        return false;
      }
      // Busca Textual
      if (initialQuery) {
        const q = initialQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q);
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return b.rating - a.rating;
    });
  }, [selectedCategory, selectedBrand, selectedSize, onlyDiscount, sortBy, initialQuery]);

  const resetFilters = () => {
    setSelectedCategory('todos');
    setSelectedBrand('todas');
    setSelectedSize('todos');
    setOnlyDiscount(false);
    setSortBy('relevance');
  };

  const activeFiltersCount =
    (selectedCategory !== 'todos' ? 1 : 0) +
    (selectedBrand !== 'todas' ? 1 : 0) +
    (selectedSize !== 'todos' ? 1 : 0) +
    (onlyDiscount ? 1 : 0);

  const getCategoryTitle = () => {
    if (initialQuery) return `Resultados para "${initialQuery}"`;
    if (CATEGORY_LABELS[selectedCategory]) return CATEGORY_LABELS[selectedCategory];
    if (selectedBrand !== 'todas') return `Coleção ${selectedBrand.toUpperCase()}`;
    if (onlyDiscount) return 'Seleção Especial em Oferta';
    return 'Catálogo Completo';
  };

  return (
    <div className="bg-white min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Editorial */}
        <nav className="flex items-center gap-2 text-[11px] text-neutral-400 uppercase tracking-widest mb-4">
          <Link href="/" className="hover:text-black transition-colors">
            Início
          </Link>
          <span>/</span>
          <Link href="/loja" className="hover:text-black transition-colors">
            Loja
          </Link>
          {selectedCategory !== 'todos' && (
            <>
              <span>/</span>
              <span className="text-black font-semibold">{getCategoryTitle()}</span>
            </>
          )}
        </nav>

        {/* Título & Descrição Editorial da Categoria */}
        <div className="border-b border-neutral-100 pb-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#052A97] block mb-1">
                Curadoria MEGA TOYS
              </span>
              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-normal">
                {getCategoryTitle()}
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mt-2 leading-relaxed">
                Brinquedos, jogos e presentes escolhidos com cuidado para cada idade, com disponibilidade imediata na loja física de Sousa - PB e entrega rápida para todo o Brasil.
              </p>
            </div>

            <div className="text-xs text-neutral-400 font-medium whitespace-nowrap">
              Exibindo <strong className="text-neutral-900">{filteredProducts.length}</strong> peças
            </div>
          </div>
        </div>

        {/* Barra de Controles (Filtros & Ordenação) */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-100 gap-4">
          
          {/* Botão de Filtros no Mobile */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 px-4 py-2 border border-neutral-300 rounded text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:border-black transition-colors lg:hidden"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#052A97] text-white text-[10px] flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {/* Filtros Ativos Chips (Desktop & Mobile) */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap text-xs">
            <span className="text-neutral-400 text-[11px] uppercase tracking-wider font-semibold">
              Filtros:
            </span>
            {selectedCategory !== 'todos' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full text-neutral-800 text-[11px]">
                Categoria: {CATEGORY_LABELS[selectedCategory] ?? selectedCategory}
                <button onClick={() => setSelectedCategory('todos')} className="hover:text-rose-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedBrand !== 'todas' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full text-neutral-800 text-[11px]">
                Marca: {selectedBrand}
                <button onClick={() => setSelectedBrand('todas')} className="hover:text-rose-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedSize !== 'todos' && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full text-neutral-800 text-[11px]">
                Tamanho: {selectedSize}
                <button onClick={() => setSelectedSize('todos')} className="hover:text-rose-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {onlyDiscount && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#052A97]/15 text-[#051D6F] font-medium rounded-full text-[11px]">
                Apenas Ofertas
                <button onClick={() => setOnlyDiscount(false)} className="hover:text-rose-500">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-[11px] text-neutral-500 hover:text-black underline ml-2"
              >
                Limpar todos
              </button>
            )}
          </div>

          {/* Dropdown de Ordenação */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="hidden sm:inline text-xs text-neutral-500 font-medium">
              Ordenar por:
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-white border border-neutral-300 hover:border-black rounded px-3 py-2 pr-8 text-xs font-semibold text-neutral-800 focus:outline-none cursor-pointer"
              >
                <option value="relevance">Mais Relevantes</option>
                <option value="newest">Mais Recentes / Novidades</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-neutral-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Layout Principal: Sidebar Desktop + Grid de Produtos */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar de Filtros (Desktop) */}
          <aside className="hidden lg:block space-y-8 pr-4 border-r border-neutral-100">
            {/* Categorias */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                Departamentos
              </h3>
              <ul className="space-y-2 text-xs">
                {DEPARTMENTS.map((item) => (
                  <li key={item.value}>
                    <button
                      onClick={() => setSelectedCategory(item.value)}
                      className={`w-full text-left py-1 transition-colors flex items-center justify-between ${
                        selectedCategory === item.value
                          ? 'font-bold text-black'
                          : 'text-neutral-600 hover:text-black'
                      }`}
                    >
                      <span>{item.label}</span>
                      {selectedCategory === item.value && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#052A97]" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marcas */}
            <div className="space-y-3 pt-6 border-t border-neutral-100">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                Marcas
              </h3>
              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-2">
                <button
                  onClick={() => setSelectedBrand('todas')}
                  className={`w-full text-left py-1 text-xs transition-colors flex items-center justify-between ${
                    selectedBrand === 'todas' ? 'font-bold text-black' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  <span>Todas as Marcas</span>
                  {selectedBrand === 'todas' && <Check className="w-3.5 h-3.5 text-[#052A97]" />}
                </button>
                {BRANDS.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => setSelectedBrand(brand.name)}
                    className={`w-full text-left py-1 text-xs transition-colors flex items-center justify-between ${
                      selectedBrand.toLowerCase() === brand.name.toLowerCase()
                        ? 'font-bold text-black'
                        : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    <span>{brand.name}</span>
                    {selectedBrand.toLowerCase() === brand.name.toLowerCase() && (
                      <Check className="w-3.5 h-3.5 text-[#052A97]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tamanho */}
            <div className="space-y-3 pt-6 border-t border-neutral-100">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900">
                Tamanho
              </h3>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => setSelectedSize('todos')}
                  className={`py-1.5 text-center text-xs border rounded transition-colors ${
                    selectedSize === 'todos'
                      ? 'border-black bg-black text-white font-bold'
                      : 'border-neutral-200 text-neutral-700 hover:border-black'
                  }`}
                >
                  Todos
                </button>
                {['Único'].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`py-1.5 text-center text-xs border rounded transition-colors ${
                      selectedSize === s
                        ? 'border-black bg-black text-white font-bold'
                        : 'border-neutral-200 text-neutral-700 hover:border-black'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Promoções Toggle */}
            <div className="pt-6 border-t border-neutral-100">
              <label className="flex items-center gap-2 text-xs font-medium text-neutral-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={onlyDiscount}
                  onChange={(e) => setOnlyDiscount(e.target.checked)}
                  className="rounded border-neutral-300 text-black focus:ring-black"
                />
                <span>Apenas produtos em promoção</span>
              </label>
            </div>
          </aside>

          {/* Grid de Produtos */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-neutral-50 rounded-xl space-y-3">
                <p className="text-base font-medium text-neutral-800">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
                <p className="text-xs text-neutral-500">
                  Experimente remover os filtros aplicados para visualizar outras peças.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-2 px-5 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors"
                >
                  Limpar Todos os Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Drawer / Bottom Sheet de Filtros no Mobile */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-neutral-900" />
                <h3 className="text-sm font-bold uppercase tracking-wider">Filtros</h3>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1.5 text-neutral-400 hover:text-black rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Categorias */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                  Departamentos
                </h4>
                <div className="space-y-1 text-xs">
                  {DEPARTMENTS.map(({ label, value }) => (
                    <button
                      key={value}
                      onClick={() => setSelectedCategory(value)}
                      className={`block w-full text-left py-1.5 ${
                        selectedCategory === value ? 'font-bold text-black' : 'text-neutral-600'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Marcas */}
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2">
                  Marcas
                </h4>
                <div className="space-y-1 text-xs max-h-40 overflow-y-auto">
                  <button
                    onClick={() => setSelectedBrand('todas')}
                    className={`block w-full text-left py-1.5 ${
                      selectedBrand === 'todas' ? 'font-bold text-black' : 'text-neutral-600'
                    }`}
                  >
                    Todas as Marcas
                  </button>
                  {BRANDS.map((b) => (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBrand(b.name)}
                      className={`block w-full text-left py-1.5 ${
                        selectedBrand.toLowerCase() === b.name.toLowerCase()
                          ? 'font-bold text-black'
                          : 'text-neutral-600'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Promoções */}
              <div className="pt-4 border-t border-neutral-100">
                <label className="flex items-center gap-2 text-xs font-medium text-neutral-800">
                  <input
                    type="checkbox"
                    checked={onlyDiscount}
                    onChange={(e) => setOnlyDiscount(e.target.checked)}
                    className="rounded border-neutral-300 text-black"
                  />
                  <span>Apenas produtos com desconto</span>
                </label>
              </div>
            </div>

            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex gap-2">
              <button
                onClick={resetFilters}
                className="w-1/2 py-2.5 border border-neutral-300 text-neutral-700 text-xs font-semibold rounded hover:bg-neutral-100"
              >
                Limpar
              </button>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-1/2 py-2.5 bg-black text-white text-xs font-bold rounded uppercase tracking-wider"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StorePage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs text-neutral-400">Carregando catálogo...</div>}>
      <StoreContent />
    </Suspense>
  );
}

