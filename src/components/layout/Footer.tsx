import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, ShieldCheck, CreditCard, RefreshCw, Truck } from 'lucide-react';
import BrandLogo from './BrandLogo';
import InstagramIcon from '@/components/ui/InstagramIcon';

export default function Footer() {
  return (
    <footer className="bg-white text-[#141414] border-t border-neutral-200">
      {/* Faixa de Confiança e Benefícios */}
      <div className="border-b border-[#051D6F] py-8 bg-[#052A97]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-[#FBCC0F] flex-shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Envio para Todo Brasil
                </h4>
                <p className="text-[11px] text-white/80">
                  Frete grátis em compras acima de R$ 499
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-[#FBCC0F] flex-shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Primeira Troca Grátis
                </h4>
                <p className="text-[11px] text-white/80">
                  Até 7 dias corridos após o recebimento
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-[#FBCC0F] flex-shrink-0">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Até 10x Sem Juros
                </h4>
                <p className="text-[11px] text-white/80">
                  Ou 5% de desconto à vista no PIX
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-[#FBCC0F] flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Loja Física em Sousa-PB
                </h4>
                <p className="text-[11px] text-white/80">
                  Atendimento seguro e de perto
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Conteúdo Principal do Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Coluna 1: Marca & Loja */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="light" size="md" wordmarkTailOnly />
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed">
              MEGA TOYS — Brinquedos, jogos e presentes para crianças e famílias. Diversão para todas as idades, em Sousa - PB e online.
            </p>

            <div className="space-y-2 pt-2 text-xs text-neutral-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EB1019] flex-shrink-0 mt-0.5" />
                <span>Rua Coronel José Vicente, 52 — Centro<br />Sousa - PB</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EB1019] flex-shrink-0 mt-0.5" />
                <span>
                  Seg a sex 08h às 17h30<br />
                  Sábado 08h às 13h<br />
                  Domingo fechado
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EB1019] flex-shrink-0" />
                <a
                  href="https://wa.me/5583993250859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EB1019] transition-colors font-medium"
                >
                  WhatsApp (83) 99325-0859
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/megatoys.sousa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#052A97] hover:text-[#EB1019] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#EB1019]" />
                <span>Siga @megatoys.sousa no Instagram</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Departamentos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#052A97]">
              Departamentos
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li>
                <Link href="/loja?categoria=veiculos" className="hover:text-[#EB1019] transition-colors">
                  Veículos & Aventura
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=bonecas" className="hover:text-[#EB1019] transition-colors">
                  Bonecas & Bebês
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=pelucias" className="hover:text-[#EB1019] transition-colors">
                  Pelúcias & Personagens
                </Link>
              </li>
              <li>
                <Link href="/loja?categoria=educativos" className="hover:text-[#EB1019] transition-colors">
                  Jogos & Educativos
                </Link>
              </li>
              <li>
                <Link href="/loja?filtro=novidades" className="hover:text-[#EB1019] transition-colors">
                  Novidades da Semana
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="hover:text-[#EB1019] transition-colors">
                  Todas as Marcas
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional & Ajuda */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#052A97]">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li>
                <Link href="/sobre" className="hover:text-[#EB1019] transition-colors">
                  Sobre a Mega Toys
                </Link>
              </li>
              <li>
                <Link href="/conta" className="hover:text-[#EB1019] transition-colors">
                  Meus Pedidos & Rastreamento
                </Link>
              </li>
              <li>
                <Link href="/favoritos" className="hover:text-[#EB1019] transition-colors">
                  Lista de Desejos
                </Link>
              </li>
              <li>
                <span className="text-neutral-400">Atendimento via WhatsApp</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Políticas & Segurança */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#052A97]">
              Políticas
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500">
              <li>
                <span className="hover:text-[#EB1019] transition-colors cursor-pointer">
                  Política de Trocas e Devoluções
                </span>
              </li>
              <li>
                <span className="hover:text-[#EB1019] transition-colors cursor-pointer">
                  Envios e Prazos de Entrega
                </span>
              </li>
              <li>
                <span className="hover:text-[#EB1019] transition-colors cursor-pointer">
                  Termos e Condições
                </span>
              </li>
              <li>
                <span className="hover:text-[#EB1019] transition-colors cursor-pointer">
                  Privacidade e Dados (LGPD)
                </span>
              </li>
              <li>
                <span className="hover:text-[#EB1019] transition-colors cursor-pointer">
                  Certificado de Autenticidade
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Métodos de Pagamento & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            <p>
              © {new Date().getFullYear()} MEGA TOYS. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Sousa - PB • CNPJ sob consulta.
            </p>
          </div>

          {/* Formas de Pagamento em Selos Discretos */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-[10px] font-bold text-neutral-600">
              PIX (5% OFF)
            </span>
            <span className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-[10px] font-bold text-neutral-600">
              VISA
            </span>
            <span className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-[10px] font-bold text-neutral-600">
              MASTERCARD
            </span>
            <span className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-[10px] font-bold text-neutral-600">
              ELO
            </span>
            <span className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-[10px] font-bold text-neutral-600">
              HIPERCARD
            </span>
            <span className="px-2 py-1 bg-neutral-100 border border-neutral-200 rounded text-[10px] font-bold text-neutral-600">
              BOLETO
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
