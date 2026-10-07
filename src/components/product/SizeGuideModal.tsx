'use client';

import React, { useState } from 'react';
import { X, Ruler, Check } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export default function SizeGuideModal({ isOpen, onClose, category }: SizeGuideModalProps) {
  const [activeTab, setActiveTab] = useState<'roupas' | 'calcados'>(
    category === 'calcados' ? 'calcados' : 'roupas'
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-[#052A97]" />
            <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-900">
              Guia de Medidas Oficial MEGA TOYS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-black rounded-full transition-colors"
            aria-label="Fechar guia de medidas"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs de Seleção */}
        <div className="flex border-b border-neutral-200 px-5 pt-3 gap-6 text-xs font-semibold uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('roupas')}
            className={`pb-2.5 transition-colors relative ${
              activeTab === 'roupas'
                ? 'text-black font-bold'
                : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            Vestuário / Roupas (cm)
            {activeTab === 'roupas' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#052A97]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('calcados')}
            className={`pb-2.5 transition-colors relative ${
              activeTab === 'calcados'
                ? 'text-black font-bold'
                : 'text-neutral-400 hover:text-neutral-700'
            }`}
          >
            Calçados (BR)
            {activeTab === 'calcados' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#052A97]" />
            )}
          </button>
        </div>

        {/* Tabela de Medidas */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {activeTab === 'roupas' ? (
            <div className="space-y-4">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-neutral-200 text-neutral-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5">Tam.</th>
                    <th className="py-2.5">Tórax / Busto</th>
                    <th className="py-2.5">Cintura</th>
                    <th className="py-2.5">Quadril</th>
                    <th className="py-2.5">Comp.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-800">
                  <tr>
                    <td className="py-2.5 font-bold text-black">PP / 36</td>
                    <td className="py-2.5">82 - 86 cm</td>
                    <td className="py-2.5">64 - 68 cm</td>
                    <td className="py-2.5">90 - 94 cm</td>
                    <td className="py-2.5">68 cm</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="py-2.5 font-bold text-black">P / 38</td>
                    <td className="py-2.5">87 - 92 cm</td>
                    <td className="py-2.5">69 - 74 cm</td>
                    <td className="py-2.5">95 - 100 cm</td>
                    <td className="py-2.5">70 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-black">M / 40</td>
                    <td className="py-2.5">93 - 98 cm</td>
                    <td className="py-2.5">75 - 80 cm</td>
                    <td className="py-2.5">101 - 106 cm</td>
                    <td className="py-2.5">72 cm</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="py-2.5 font-bold text-black">G / 42</td>
                    <td className="py-2.5">99 - 106 cm</td>
                    <td className="py-2.5">81 - 88 cm</td>
                    <td className="py-2.5">107 - 114 cm</td>
                    <td className="py-2.5">74 cm</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-black">GG / 44</td>
                    <td className="py-2.5">107 - 114 cm</td>
                    <td className="py-2.5">89 - 96 cm</td>
                    <td className="py-2.5">115 - 122 cm</td>
                    <td className="py-2.5">76 cm</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-[#F7F7F5] p-3.5 rounded-lg text-xs text-neutral-600 space-y-1">
                <p className="font-semibold text-neutral-900 flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-[#052A97]" />
                  Dica de Caimento:
                </p>
                <p>
                  As peças de alfaiataria possuem caimento estruturado. Se você prefere um visual mais fluido e solto, recomendamos optar por um número acima.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-neutral-200 text-neutral-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-2.5">Brasil (BR)</th>
                    <th className="py-2.5">Palmilha (cm)</th>
                    <th className="py-2.5">Europa (EUR)</th>
                    <th className="py-2.5">EUA (US)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-neutral-800">
                  <tr>
                    <td className="py-2.5 font-bold text-black">35 BR</td>
                    <td className="py-2.5">23.3 cm</td>
                    <td className="py-2.5">37</td>
                    <td className="py-2.5">5.5</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="py-2.5 font-bold text-black">36 BR</td>
                    <td className="py-2.5">24.0 cm</td>
                    <td className="py-2.5">38</td>
                    <td className="py-2.5">6.0</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-black">37 BR</td>
                    <td className="py-2.5">24.7 cm</td>
                    <td className="py-2.5">39</td>
                    <td className="py-2.5">7.0</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="py-2.5 font-bold text-black">38 BR</td>
                    <td className="py-2.5">25.3 cm</td>
                    <td className="py-2.5">40</td>
                    <td className="py-2.5">7.5</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-black">39 BR</td>
                    <td className="py-2.5">26.0 cm</td>
                    <td className="py-2.5">41</td>
                    <td className="py-2.5">8.5</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="py-2.5 font-bold text-black">40 BR</td>
                    <td className="py-2.5">26.7 cm</td>
                    <td className="py-2.5">42</td>
                    <td className="py-2.5">9.0</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-bold text-black">41 BR</td>
                    <td className="py-2.5">27.3 cm</td>
                    <td className="py-2.5">43</td>
                    <td className="py-2.5">10.0</td>
                  </tr>
                  <tr className="bg-neutral-50/50">
                    <td className="py-2.5 font-bold text-black">42 BR</td>
                    <td className="py-2.5">28.0 cm</td>
                    <td className="py-2.5">44</td>
                    <td className="py-2.5">10.5</td>
                  </tr>
                </tbody>
              </table>

              <div className="bg-[#F7F7F5] p-3.5 rounded-lg text-xs text-neutral-600 space-y-1">
                <p className="font-semibold text-neutral-900">Como medir seu pé:</p>
                <p>
                  Pise em uma folha branca encostando o calcanhar na parede. Marque a ponta do dedo mais longo e meça a distância com uma régua.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between text-xs">
          <span className="text-neutral-500">Dúvidas com o tamanho?</span>
          <a
            href="https://www.instagram.com/megatoys.sousa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#052A97] font-bold hover:underline"
          >
            Consultar a loja no Instagram →
          </a>
        </div>
      </div>
    </div>
  );
}

