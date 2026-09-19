import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, ShieldCheck, CreditCard, RefreshCw, Truck } from 'lucide-react';
import BrandLogo from './BrandLogo';
import InstagramIcon from '@/components/ui/InstagramIcon';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-neutral-800">
      {/* Faixa de Confiança e Benefícios */}
      <div className="border-b border-neutral-800/80 py-8 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-neutral-300">
            
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Envio para Todo Brasil
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Frete grátis em compras acima de R$ 499
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Primeira Troca Grátis
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Até 7 dias corridos após o recebimento
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Até 10x Sem Juros
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Ou 5% de desconto à vista no PIX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-[#C5A059] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Loja Física em Sousa-PB
                </h4>
                <p className="text-[11px] text-neutral-400">
                  Atendimento seguro e consultoria real
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Coluna 1: Marca & Endereço Oficial */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" size="md" />
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              SIAROM MULTIMARCAS — Moda contemporânea com curadoria impecável das marcas mais prestigiadas. A loja que vai ficar na sua mente.
            </p>

            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span>Rua Herotildes Serafim dos Santos, 616 — Sousa - PB</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>WhatsApp: (83) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>contato@siarommultimarcas.com.br</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-[#C5A059] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#C5A059]" />
                <span>Siga @siarom.multimarcas no Instagram</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Departamentos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
              Departamentos
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/loja?categoria=feminino" className="hover:text-white transition-colors">
                  Moda Feminina
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=masculino" className="hover:text-white transition-colors">
                  Moda Masculina
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=calcados" className="hover:text-white transition-colors">
                  Calçados & Couros
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=acessorios" className="hover:text-white transition-colors">
                  Bolsas & Acessórios
                </Link>
              </li>
              <li>
                <Link href="/loja?filtro=novidades" className="hover:text-white transition-colors">
                  Novidades da Semana
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="hover:text-white transition-colors">
                  Todas as Marcas
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional & Ajuda */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <Link href="/sobre" className="hover:text-white transition-colors">
                  Sobre a SIAROM
                </Link>
              </li>
              <li>
                <Link href="/conta" className="hover:text-white transition-colors">
                  Meus Pedidos & Rastreamento
                </Link>
              </li>
              <li>
                <Link href="/favoritos" className="hover:text-white transition-colors">
                  Lista de Desejos
                </Link>
              </li>
              <li>
                <a
                  href="https://wa.me/5583999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Falar com Consultor
                </a>
              </li>
              <li>
                <span className="text-neutral-500">Horário: Seg a Sáb 08h às 18h</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Políticas & Segurança */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059]">
              Políticas
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Política de Trocas e Devoluções
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Envios e Prazos de Entrega
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Termos e Condições
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacidade e Dados (LGPD)
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Certificado de Autenticidade
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Métodos de Pagamento & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p>
              © {new Date().getFullYear()} SIAROM MULTIMARCAS. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-neutral-600 mt-0.5">
              Rua Herotildes Serafim dos Santos, 616 — Sousa - PB • CNPJ sob consulta.
            </p>
          </div>

          {/* Formas de Pagamento em Selos Discretos */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] font-bold text-neutral-300">
              PIX (5% OFF)
            </span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] font-bold text-neutral-300">
              VISA
            </span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] font-bold text-neutral-300">
              MASTERCARD
            </span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] font-bold text-neutral-300">
              ELO
            </span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] font-bold text-neutral-300">
              HIPERCARD
            </span>
            <span className="px-2 py-1 bg-neutral-900 border border-neutral-800 rounded text-[10px] font-bold text-neutral-300">
              BOLETO
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

