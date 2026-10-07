'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  CheckCircle,
  CreditCard,
  QrCode,
  Copy,
  Check,
  ChevronRight,
  Truck,
  MessageCircle,
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { formatCurrency, calculatePixPrice } from '@/lib/utils';
import BrandLogo from '@/components/layout/BrandLogo';

export default function CheckoutPage() {
  const { cart, total, subtotal, discount, couponCode, clearCart } = useCart();

  // Etapa do Checkout (1: Identificação & Endereço, 2: Pagamento, 3: Concluído)
  const [step, setStep] = useState<1 | 2 | 3>(1);
  // Dados do Cliente & Entrega
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cpf: '',
    cep: '58800-000',
    street: 'Rua Herotildes Serafim dos Santos',
    number: '616',
    complement: '',
    neighborhood: 'Centro',
    city: 'Sousa',
    state: 'PB',
    shippingMethod: 'pickup', // pickup | express | sedex
  });

  // Método de Pagamento
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'whatsapp'>('pix');
  const [copiedPix, setCopiedPix] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Cartão de Crédito
  const [cardData, setCardData] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: '',
    installments: '1',
  });

  const shippingPrice =
    formData.shippingMethod === 'pickup'
      ? 0
      : formData.shippingMethod === 'express'
      ? 18.9
      : 32.5;

  const finalTotal = total + shippingPrice;
  const pixFinalPrice = calculatePixPrice(finalTotal, 5);

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha nome e WhatsApp.');
      return;
    }
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishOrder = () => {
    const generatedOrder = `SIA-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setStep(3);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Chave PIX da loja — preencher quando fornecida pela Mega Toys
  const PIX_CODE = '';

  const copyPixCode = () => {
    if (!PIX_CODE) return;
    navigator.clipboard.writeText(PIX_CODE);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  if (cart.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
        <BrandLogo variant="light" size="md" className="mb-6" />
        <h2 className="text-xl font-bold text-neutral-900 mb-2">
          Sua sacola está vazia
        </h2>
        <p className="text-xs text-neutral-500 mb-6 max-w-sm">
          Adicione produtos para prosseguir com o pagamento seguro.
        </p>
        <Link
          href="/loja"
          className="px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800"
        >
          Ir às Compras
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F5] pb-16">
      {/* Header Minimalista de Checkout Seguro (Sem distrações) */}
      <header className="bg-white border-b border-neutral-200 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <BrandLogo variant="light" size="sm" wordmarkTailOnly />
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-600 font-medium">
            <Lock className="w-4 h-4 text-[#052A97]" />
            <span className="hidden sm:inline">Ambiente Seguro com Criptografia</span>
            <span className="sm:hidden">Checkout Seguro</span>
          </div>
        </div>
      </header>

      {/* Indicador de Passos */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs font-semibold tracking-wider uppercase">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-black font-bold' : 'text-neutral-400'}`}>
            <span className="w-5 h-5 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
              1
            </span>
            <span>Identificação & Entrega</span>
          </div>

          <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />

          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-black font-bold' : 'text-neutral-400'}`}>
            <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center ${step >= 2 ? 'bg-black text-white' : 'bg-neutral-200 text-neutral-600'}`}>
              2
            </span>
            <span>Pagamento</span>
          </div>

          <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />

          <div className={`flex items-center gap-1.5 ${step === 3 ? 'text-emerald-700 font-bold' : 'text-neutral-400'}`}>
            <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-neutral-200 text-neutral-600'}`}>
              3
            </span>
            <span>Confirmação</span>
          </div>
        </div>
      </div>

      {/* Conteúdo do Checkout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* TELA DE SUCESSO (Passo 3) */}
        {step === 3 ? (
          <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-neutral-200 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#052A97]">
                Pedido Registrado com Sucesso
              </span>
              <h2 className="font-editorial text-3xl font-normal text-neutral-900">
                Obrigado pela sua compra!
              </h2>
              <p className="text-xs text-neutral-600">
                Número do Pedido: <strong className="text-neutral-900 font-mono text-sm">{orderNumber}</strong>
              </p>
            </div>

            {paymentMethod === 'pix' && (
              <div className="bg-[#F7F7F5] p-5 rounded-xl border border-neutral-200 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                    Pague com PIX com 5% de Desconto:
                  </span>
                  <span className="text-xs font-bold text-emerald-700">
                    {formatCurrency(pixFinalPrice)}
                  </span>
                </div>
                <div className="flex justify-center p-3 bg-white rounded border border-neutral-200">
                  <QrCode className="w-32 h-32 text-black" />
                </div>
                <button
                  onClick={copyPixCode}
                  disabled={!PIX_CODE}
                  className="w-full py-2.5 px-3 bg-black text-white text-xs font-bold uppercase tracking-wider rounded flex items-center justify-center gap-2 hover:bg-neutral-800 disabled:opacity-50 disabled:hover:bg-black"
                >
                  {copiedPix ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Código PIX Copiado!
                    </>
                  ) : PIX_CODE ? (
                    <>
                      <Copy className="w-4 h-4" />
                      Copiar Código PIX
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Código PIX em breve
                    </>
                  )}
                </button>
              </div>
            )}

            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-900 text-left space-y-1">
              <p className="font-bold flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                Atendimento Personalizado no WhatsApp:
              </p>
              <p>
                Nosso time da MEGA TOYS em Sousa - PB enviará os detalhes do preparo e envio no seu WhatsApp.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
              >
                Voltar para a Página Inicial
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* COLUNA ESQUERDA: Formulários (Passo 1 ou Passo 2) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* PASSO 1: DADOS PESSOAIS & ENDEREÇO */}
              {step === 1 && (
                <form onSubmit={handleNextToPayment} className="space-y-6">
                  
                  {/* Identificação */}
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-3">
                      1. Identificação do Cliente
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Digite seu nome"
                          className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          WhatsApp / Telefone *
                        </label>
                        <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, "").slice(0, 11);

                          value = value
                            .replace(/^(\d{2})(\d)/, "($1) $2")
                            .replace(/(\d{5})(\d)/, "$1-$2");

                          setFormData({ ...formData, phone: value });
                        }}
                        maxLength={15}
                        inputMode="numeric"
                        placeholder="(83) 99999-9999"
                        className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                      />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          E-mail para Confirmação *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="seu@email.com"
                          className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          CPF (Para emissão de NF)
                        </label>
                        <input
                          type="text"
                          value={formData.cpf}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "").slice(0, 11);

                            value = value
                              .replace(/(\d{3})(\d)/, "$1.$2")
                              .replace(/(\d{3})(\d)/, "$1.$2")
                              .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

                            setFormData({ ...formData, cpf: value });
                          }}
                          maxLength={14}
                          inputMode="numeric"
                          placeholder="000.000.000-00"
                          className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Endereço & Opções de Entrega */}
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-3">
                      2. Opção de Entrega ou Retirada
                    </h3>

                    {/* Seletor de Modalidade */}
                    <div className="space-y-2.5">
                      <label
                        className={`flex items-center justify-between p-3.5 border rounded-lg cursor-pointer transition-colors ${
                          formData.shippingMethod === 'pickup'
                            ? 'border-black bg-neutral-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shipping"
                            checked={formData.shippingMethod === 'pickup'}
                            onChange={() => setFormData({ ...formData, shippingMethod: 'pickup' })}
                            className="text-black focus:ring-black"
                          />
                          <div>
                            <span className="text-xs font-bold text-neutral-900 block">
                              Retirada na Loja Física (Sousa - PB)
                            </span>
                            <span className="text-[11px] text-neutral-500">
                              Rua Herotildes Serafim dos Santos, 616 • Pronto em até 2 horas
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-700 uppercase">
                          GRÁTIS
                        </span>
                      </label>

                      <label
                        className={`flex items-center justify-between p-3.5 border rounded-lg cursor-pointer transition-colors ${
                          formData.shippingMethod === 'express'
                            ? 'border-black bg-neutral-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shipping"
                            checked={formData.shippingMethod === 'express'}
                            onChange={() => setFormData({ ...formData, shippingMethod: 'express' })}
                            className="text-black focus:ring-black"
                          />
                          <div>
                            <span className="text-xs font-bold text-neutral-900 block">
                              Envio Expresso Paraíba
                            </span>
                            <span className="text-[11px] text-neutral-500">
                              Entrega em 1 a 2 dias úteis
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-neutral-900">
                          R$ 18,90
                        </span>
                      </label>

                      <label
                        className={`flex items-center justify-between p-3.5 border rounded-lg cursor-pointer transition-colors ${
                          formData.shippingMethod === 'sedex'
                            ? 'border-black bg-neutral-50'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="shipping"
                            checked={formData.shippingMethod === 'sedex'}
                            onChange={() => setFormData({ ...formData, shippingMethod: 'sedex' })}
                            className="text-black focus:ring-black"
                          />
                          <div>
                            <span className="text-xs font-bold text-neutral-900 block">
                              Sedex Brasil Nacional
                            </span>
                            <span className="text-[11px] text-neutral-500">
                              Entrega em 3 a 5 dias úteis com código de rastreio
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-bold text-neutral-900">
                          R$ 32,50
                        </span>
                      </label>
                    </div>

                    {/* Campos de Endereço se for Envio */}
                    {formData.shippingMethod !== 'pickup' && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-neutral-100">
                        <div className="sm:col-span-1">
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            CEP
                          </label>
                          <input
                            type="text"
                            value={formData.cep}
                            onChange={(e) => setFormData({ ...formData, cep: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            Rua / Logradouro
                          </label>
                          <input
                            type="text"
                            value={formData.street}
                            onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            Número
                          </label>
                          <input
                            type="text"
                            value={formData.number}
                            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            Bairro
                          </label>
                          <input
                            type="text"
                            value={formData.neighborhood}
                            onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            Cidade / UF
                          </label>
                          <input
                            type="text"
                            value={`${formData.city} - ${formData.state}`}
                            readOnly
                            className="w-full px-3 py-2 text-xs bg-neutral-100 border border-neutral-300 rounded text-neutral-600"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
                  >
                    Prosseguir para o Pagamento →
                  </button>
                </form>
              )}

              {/* PASSO 2: FORMAS DE PAGAMENTO */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                        Escolha a Forma de Pagamento
                      </h3>
                      <button
                        onClick={() => setStep(1)}
                        className="text-xs text-neutral-500 hover:text-black flex items-center gap-1"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Alterar dados
                      </button>
                    </div>

                    {/* Seletor de Abas de Pagamento */}
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setPaymentMethod('pix')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'pix'
                            ? 'border-black bg-neutral-900 text-white'
                            : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-800'
                        }`}
                      >
                        <QrCode className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs font-bold block">PIX</span>
                        <span className="text-[10px] text-emerald-400 font-medium">5% OFF</span>
                      </button>

                      <button
                        onClick={() => setPaymentMethod('credit')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'credit'
                            ? 'border-black bg-neutral-900 text-white'
                            : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-800'
                        }`}
                      >
                        <CreditCard className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs font-bold block">Cartão</span>
                        <span className="text-[10px] opacity-75">Até 10x</span>
                      </button>

                      <button
                        onClick={() => setPaymentMethod('whatsapp')}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          paymentMethod === 'whatsapp'
                            ? 'border-black bg-neutral-900 text-white'
                            : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-800'
                        }`}
                      >
                        <MessageCircle className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-xs font-bold block">WhatsApp</span>
                        <span className="text-[10px] opacity-75">1-Clique</span>
                      </button>
                    </div>

                    {/* Detalhe do PIX */}
                    {paymentMethod === 'pix' && (
                      <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <strong className="text-emerald-900">Total no PIX com 5% de desconto:</strong>
                          <strong className="text-emerald-900 text-sm">{formatCurrency(pixFinalPrice)}</strong>
                        </div>
                        <p className="text-emerald-800">
                          A confirmação é imediata. Ao clicar em &ldquo;Finalizar Pedido&rdquo;, o QR Code será exibido instantaneamente na tela.
                        </p>
                      </div>
                    )}

                    {/* Detalhe do Cartão */}
                    {paymentMethod === 'credit' && (
                      <div className="space-y-3 pt-2">
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            Número do Cartão
                          </label>
                          <input
                            type="text"
                            inputMode="numeric"
                            autoComplete="cc-number"
                            placeholder="0000 0000 0000 0000"
                            maxLength={16}
                            value={cardData.number}
                            onChange={(e) => {
                              const digits = e.target.value.replace(/\D/g, '').slice(0, 16);
                              setCardData({ ...cardData, number: digits });
                            }}
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            Nome Impresso no Cartão
                          </label>
                          <input
                            type="text"
                            placeholder="Como está gravado no cartão"
                            value={cardData.holder}
                            onChange={(e) => setCardData({ ...cardData, holder: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none uppercase"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-neutral-700 mb-1">
                              Validade
                            </label>
                            <input
                              type="text"
                              inputMode="numeric"
                              autoComplete="cc-exp"
                              placeholder="MM/AA"
                              maxLength={5}
                              value={cardData.expiry}
                              onChange={(e) => {
                                const digits = e.target.value.replace(/\D/g, '').slice(0, 4);
                                setCardData({
                                  ...cardData,
                                  expiry: digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits,
                                });
                              }}
                              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-neutral-700 mb-1">
                              CVV
                            </label>
                            <input
                              type="text"
                              placeholder="123"
                              maxLength={4}
                              value={cardData.cvv}
                              onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                              className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-neutral-700 mb-1">
                            Número de Parcelas
                          </label>
                          <select
                            value={cardData.installments}
                            onChange={(e) => setCardData({ ...cardData, installments: e.target.value })}
                            className="w-full px-3 py-2 text-xs border border-neutral-300 rounded focus:border-black focus:outline-none bg-white"
                          >
                            <option value="1">1x de {formatCurrency(finalTotal)} sem juros</option>
                            <option value="2">2x de {formatCurrency(finalTotal / 2)} sem juros</option>
                            <option value="3">3x de {formatCurrency(finalTotal / 3)} sem juros</option>
                            <option value="6">6x de {formatCurrency(finalTotal / 6)} sem juros</option>
                            <option value="10">10x de {formatCurrency(finalTotal / 10)} sem juros</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Detalhe do WhatsApp */}
                    {paymentMethod === 'whatsapp' && (
                      <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
                        <p className="font-semibold text-neutral-900">
                          Finalização Humanizada com Consultor MEGA TOYS:
                        </p>
                        <p className="text-neutral-600">
                          Ao concluir, abriremos uma conversa no WhatsApp com todos os itens do seu pedido já organizados para você tirar dúvidas ou acertar detalhes de entrega e pagamento diretamente com nossa equipe da loja física em Sousa - PB.
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={handleFinishOrder}
                    className="w-full py-4 bg-black hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-[0.99]"
                  >
                    Confirmar e Finalizar Pedido →
                  </button>
                </div>
              )}

            </div>

            {/* COLUNA DIREITA: Resumo do Pedido */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-100 pb-3">
                  Resumo do Pedido ({cart.length} itens)
                </h3>

                {/* Lista de Itens */}
                <div className="space-y-3 max-h-64 overflow-y-auto pr-1 divide-y divide-neutral-100">
                  {cart.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex gap-3 pt-3 first:pt-0"
                    >
                      <div className="relative w-14 h-16 bg-neutral-100 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover object-top"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase text-[#052A97] block">
                          {item.product.brand}
                        </span>
                        <h4 className="text-xs font-medium text-neutral-900 truncate">
                          {item.product.name}
                        </h4>
                        <div className="text-[11px] text-neutral-500 mt-0.5">
                          {item.quantity}x {formatCurrency(item.product.price)} • {item.selectedSize}
                        </div>
                      </div>
                      <div className="text-xs font-bold text-neutral-900">
                        {formatCurrency(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Linhas de Valores */}
                <div className="space-y-2 pt-3 border-t border-neutral-100 text-xs text-neutral-600">
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
                    <span>Frete / Entrega</span>
                    <span className="text-neutral-900 font-medium">
                      {shippingPrice === 0 ? (
                        <strong className="text-emerald-700">GRÁTIS</strong>
                      ) : (
                        formatCurrency(shippingPrice)
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pt-2 border-t border-neutral-200 text-base font-bold text-neutral-900">
                    <span>Total</span>
                    <span className="text-lg">
                      {paymentMethod === 'pix'
                        ? formatCurrency(pixFinalPrice)
                        : formatCurrency(finalTotal)}
                    </span>
                  </div>

                  {paymentMethod === 'pix' && (
                    <div className="text-right text-[11px] text-emerald-700 font-semibold">
                      (Economia de {formatCurrency(finalTotal - pixFinalPrice)} no PIX)
                    </div>
                  )}
                </div>

                {/* Selos de Segurança */}
                <div className="pt-3 border-t border-neutral-100 space-y-2 text-[11px] text-neutral-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#052A97]" />
                    <span>Transação Criptografada SSL 256-bit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-[#052A97]" />
                    <span>Envio com Seguro de Carga Integrado</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

