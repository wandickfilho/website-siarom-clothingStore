import Link from 'next/link';

export default function BrandLogo({ isDark = false }: { isDark?: boolean }) {
  return (
    <Link href="/" className="group inline-flex flex-col items-center leading-none" aria-label="SIAROM Multimarcas - Início">
      <span className={`font-editorial text-[25px] font-bold tracking-[-.06em] sm:text-[30px] ${isDark ? 'text-white' : 'text-[#151310]'}`}>SIAROM</span>
      <span className={`mt-1 text-[7px] font-bold uppercase tracking-[.52em] sm:text-[8px] ${isDark ? 'text-[#d6b35f]' : 'text-[#8b7139]'}`}>Multimarcas</span>
    </Link>
  );
}
