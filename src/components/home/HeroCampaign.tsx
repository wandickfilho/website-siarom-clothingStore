import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

export default function HeroCampaign() {
  return (
    <section className="relative isolate overflow-hidden bg-[#11100f] text-white">
      <div className="mx-auto grid min-h-[680px] max-w-[1500px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex items-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[10px] font-bold uppercase tracking-[.24em] text-[#e6c77b] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Novidades toda semana
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[.32em] text-white/55">SIAROM / Sousa — PB</p>
            <h1 className="font-editorial text-[clamp(3.5rem,8vw,7.5rem)] leading-[.82] tracking-[-.055em]">
              Vista o que<br/><span className="italic text-[#e6c77b]">marca.</span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/65 sm:text-base">
              Curadoria multimarcas para quem transforma presença em estilo. Peças atuais, combinações fortes e atendimento de perto.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/loja" className="group inline-flex items-center gap-3 rounded-full bg-[#e6c77b] px-7 py-4 text-xs font-extrabold uppercase tracking-[.16em] text-black transition hover:bg-white">
                Comprar agora <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/loja?filtro=novidades" className="inline-flex items-center rounded-full border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[.16em] transition hover:border-white hover:bg-white hover:text-black">
                Ver novidades
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-2 text-xs text-white/45">
              <MapPin className="h-4 w-4 text-[#e6c77b]" /> Rua Herotildes Serafim dos Santos, 616
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] lg:min-h-full">
          <Image src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=90" alt="Editorial de moda SIAROM" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#11100f]/50 via-transparent to-transparent lg:from-[#11100f]/25" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between rounded-3xl border border-white/20 bg-black/25 p-5 backdrop-blur-md sm:bottom-9 sm:left-9 sm:right-9">
            <div><p className="text-[10px] font-bold uppercase tracking-[.24em] text-[#e6c77b]">Drop 09/26</p><p className="mt-1 text-lg font-semibold">Nova seleção disponível</p></div>
            <Link href="/loja" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"><ArrowUpRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
