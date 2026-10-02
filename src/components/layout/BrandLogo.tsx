import Link from 'next/link';
import BrandSymbol from './BrandSymbol';

interface BrandLogoProps {
  isDark?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  symbolOnly?: boolean;
  wordmarkTailOnly?: boolean;
  className?: string;
}

const sizeStyles = {
  sm: {
    title: 'text-[19px] sm:text-[22px]',
    subtitle: 'text-[6px] sm:text-[7px]',
  },
  md: {
    title: 'text-[23px] sm:text-[28px]',
    subtitle: 'text-[7px] sm:text-[8px]',
  },
  lg: {
    title: 'text-[30px] sm:text-[36px]',
    subtitle: 'text-[9px] sm:text-[10px]',
  },
};

export default function BrandLogo({
  isDark,
  variant = 'light',
  size = 'md',
  symbolOnly = false,
  wordmarkTailOnly = false,
  className = '',
}: BrandLogoProps) {
  const darkMode = isDark ?? variant === 'dark';
  const currentSize = sizeStyles[size] || sizeStyles.md;

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 leading-none sm:gap-2.5 ${className}`}
      aria-label="SIAROM Multimarcas - Início"
    >
      <BrandSymbol variant={darkMode ? 'dark' : 'light'} size={size} />
      {!symbolOnly && (
        <span className="flex flex-col items-start">
          <span className={`font-editorial tracking-[-.06em] ${currentSize.title} ${darkMode ? 'text-white' : 'text-[#151310]'}`}>
            {wordmarkTailOnly ? 'IAROM' : 'SIAROM'}
          </span>
          <span className={`mt-1 font-bold uppercase tracking-[.42em] ${currentSize.subtitle} ${darkMode ? 'text-[#d6b35f]' : 'text-[#8b7139]'}`}>
            Multimarcas
          </span>
        </span>
      )}
    </Link>
  );
}
