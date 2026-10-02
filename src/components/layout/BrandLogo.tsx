import Link from 'next/link';

interface BrandLogoProps {
  isDark?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeStyles = {
  sm: {
    title: 'text-[20px] sm:text-[24px]',
    subtitle: 'text-[6px] sm:text-[7px]',
  },
  md: {
    title: 'text-[25px] sm:text-[30px]',
    subtitle: 'text-[7px] sm:text-[8px]',
  },
  lg: {
    title: 'text-[32px] sm:text-[38px]',
    subtitle: 'text-[9px] sm:text-[10px]',
  },
};

export default function BrandLogo({
  isDark,
  variant = 'light',
  size = 'md',
  className = '',
}: BrandLogoProps) {
  const darkMode = isDark ?? variant === 'dark';
  const currentSize = sizeStyles[size] || sizeStyles.md;

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center leading-none ${className}`}
      aria-label="SIAROM Multimarcas - Início"
    >
      <span
        className={`font-editorial font-bold tracking-[-.06em] ${currentSize.title} ${
          darkMode ? 'text-white' : 'text-[#151310]'
        }`}
      >
        SIAROM
      </span>
      <span
        className={`mt-1 font-bold uppercase tracking-[.52em] ${currentSize.subtitle} ${
          darkMode ? 'text-[#d6b35f]' : 'text-[#8b7139]'
        }`}
      >
        Multimarcas
      </span>
    </Link>
  );
}

