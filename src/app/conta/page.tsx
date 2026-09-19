'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Package, Clock, MapPin, Search, CheckCircle2, Truck, ArrowRight } from 'lucide-react';

export default function AccountPage() {
  const [trackingCode, setTrackingCode] = useState('');
  const [trackedOrder, setTrackedOrder] = useState<any>(null);

  const mockOrders = [
    {
      id: 'SIA-842910',
      date: '10/09/2026',
      status: 'Em Transporte',
      step: 3,
      items: 'Vestido Midi Alfaiataria (Preto / M)',
      total: 'R$ 689,00',
      destination: 'Sousa - PB (Retirada Loja)',
    },
    {
      id: 'SIA-781203',
      date: '28/08/2026',
      status: 'Entregue',
      step: 4,
      items: 'Blazer Slim Linho + Camisa Pima',
      total: 'R$ 1.239,00',
      destination: 'João Pessoa - PB',
    },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode) return;
    const found = mockOrders.find((o) => o.id.toLowerCase() === trackingCode.trim().toLowerCase());
    if (found) {
      setTrackedOrder(found);
    } else {
      setTrackedOrder({
        id: trackingCode.toUpperCase(),
        date: 'Hoje',
        status: 'Em Separação na Loja',
        step: 2,
        items: 'Pedido Recente em Separação',
        total: 'Aguardando confirmação',
        destination: 'Sousa - PB',
      });
    }
  };

  return (
    <div className="bg-white min-h-screen py-8 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="border-b border-neutral-100 pb-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] mb-1">
              <User className="w-4 h-4 text-[#C5A059]" />
              Painel do Cliente
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl text-neutral-900 font-normal">
              Meus Pedidos & Rastreamento
            </h1>
          </div>

          <a
            href="https://wa.me/5583999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-100 text-neutral-800 text-xs font-semibold rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Suporte via WhatsApp
          </a>
        </div>

        {/* Busca Rápida de Rastreio */}
        <div className="bg-[#F7F7F5] p-6 rounded-xl border border-neutral-200 mb-10">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-2">
            <Package className="w-4 h-4 text-[#C5A059]" />
            Rastrear Pedido pelo Código
          </h2>
          <form onSubmit={handleTrack} className="flex gap-2">
            <input
              type="text"
              placeholder="Digite o código (ex: SIA-842910)..."
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs bg-white border border-neutral-300 rounded focus:border-black focus:outline-none uppercase font-mono"
            />
            <button
              type="submit"
              className="px-5 py-2 bg-black text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-800"
            >
              Consultar
            </button>
          </form>

          {/* Resultado do Rastreamento */}
          {trackedOrder && (
            <div className="mt-6 p-4 bg-white rounded-lg border border-neutral-200 text-xs space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div>
                  <span className="text-neutral-400 text-[10px] uppercase font-bold block">Pedido</span>
                  <strong className="font-mono text-sm text-neutral-900">{trackedOrder.id}</strong>
                </div>
                <span className="px-2.5 py-1 bg-amber-50 text-amber-900 border border-amber-200 rounded font-semibold text-[11px]">
                  {trackedOrder.status}
                </span>
              </div>

              {/* Linha do Tempo */}
              <div className="grid grid-cols-4 gap-2 pt-2 text-center text-[10px]">
                <div className="space-y-1">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center mx-auto font-bold">
                    ✓
                  </div>
                  <span className="font-semibold text-black">Aprovado</span>
                </div>

                <div className="space-y-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto font-bold ${
                    trackedOrder.step >= 2 ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    2
                  </div>
                  <span className={trackedOrder.step >= 2 ? 'font-semibold text-black' : 'text-neutral-400'}>
                    Em Separação
                  </span>
                </div>

                <div className="space-y-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto font-bold ${
                    trackedOrder.step >= 3 ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    3
                  </div>
                  <span className={trackedOrder.step >= 3 ? 'font-semibold text-black' : 'text-neutral-400'}>
                    Em Rota
                  </span>
                </div>

                <div className="space-y-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mx-auto font-bold ${
                    trackedOrder.step >= 4 ? 'bg-emerald-600 text-white' : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    4
                  </div>
                  <span className={trackedOrder.step >= 4 ? 'font-semibold text-emerald-700' : 'text-neutral-400'}>
                    Entregue
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Histórico Recente */}
        <div className="space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
            Histórico Recente de Compras
          </h2>

          <div className="space-y-3">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="p-5 bg-white border border-neutral-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-black transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="font-mono text-xs text-neutral-900">{order.id}</strong>
                    <span className="text-neutral-400">•</span>
                    <span className="text-xs text-neutral-500">{order.date}</span>
                    <span className="text-neutral-400">•</span>
                    <span className="text-xs font-semibold text-[#C5A059]">{order.status}</span>
                  </div>
                  <p className="text-xs text-neutral-700 font-medium">
                    {order.items}
                  </p>
                  <p className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C5A059]" />
                    {order.destination}
                  </p>
                </div>

                <div className="text-right flex sm:flex-col items-center sm:items-end justify-between">
                  <strong className="text-sm font-bold text-neutral-900">{order.total}</strong>
                  <button
                    onClick={() => {
                      setTrackingCode(order.id);
                      setTrackedOrder(order);
                    }}
                    className="text-xs text-[#C5A059] hover:underline font-semibold"
                  >
                    Ver detalhes →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

