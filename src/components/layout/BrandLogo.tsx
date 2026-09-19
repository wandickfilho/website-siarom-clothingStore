import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function BrandLogo({
  variant = 'dark',
  className = '',
  size = 'md',
}: BrandLogoProps) {
  const isLight = variant === 'light'; // Light background means black text

  const sizeStyles = {
    sm: {
      crown: 'w-4 h-3.5 -top-2.5 right-6',
      siarom: 'text-lg tracking-wider',
      multi: 'text-[7px] tracking-[0.35em] -mt-1',
    },
    md: {
      crown: 'w-6 h-5 -top-3.5 right-8',
      siarom: 'text-2xl tracking-[0.08em]',
      multi: 'text-[9px] tracking-[0.45em] -mt-1',
    },
    lg: {
      crown: 'w-8 h-7 -top-5 right-12',
      siarom: 'text-3xl md:text-4xl tracking-[0.09em]',
      multi: 'text-[11px] tracking-[0.55em] -mt-1.5',
    },
  }[size];

  return (
    <Link
      href="/"
      className={`group relative inline-flex flex-col items-center select-none ${className}`}
      aria-label="SIAROM MULTIMARCAS - Página Inicial"
    >
      <div className="relative flex flex-col items-center">
        {/* Coroa Dourada Real com gradiente e detalhes */}
        <div className={`absolute ${sizeStyles.crown} pointer-events-none transform -rotate-12 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
          <svg
            viewBox="0 0 100 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-[0_2px_4px_rgba(197,160,89,0.35)]"
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2B2" />
                <stop offset="40%" stopColor="#D4AF37" />
                <stop offset="70%" stopColor="#AA820A" />
                <stop offset="100%" stopColor="#E5C07B" />
              </linearGradient>
            </defs>
            {/* Base e pontas da coroa com 5 bicos e diamantes */}
            <path
              d="M10 65 L90 65 Q90 74 50 75 Q10 74 10 65 Z"
              fill="url(#goldGradient)"
            />
            <path
              d="M12 63 L18 30 L38 52 L50 18 L62 52 L82 30 L88 63 Z"
              fill="url(#goldGradient)"
              stroke="#8A6805"
              strokeWidth="1.5"
            />
            {/* Pequenos diamantes nos picos */}
            <polygon points="50,11 53,16 50,21 47,16" fill="#FFF9DF" />
            <polygon points="18,24 21,28 18,32 15,28" fill="#FFF9DF" />
            <polygon points="82,24 85,28 82,32 79,28" fill="#FFF9DF" />
            <polygon points="38,48 40,51 38,54 36,51" fill="#FFF9DF" />
            <polygon points="62,48 64,51 62,54 60,51" fill="#FFF9DF" />
          </svg>
        </div>

        {/* Wordmark SIAROM */}
        <span
          className={`font-extrabold uppercase transition-colors duration-300 ${
            sizeStyles.siarom
          } ${isLight ? 'text-black' : 'text-white'}`}
          style={{ fontFamily: '"Arial Black", "Impact", "Montserrat", sans-serif' }}
        >
          SIAROM
        </span>

        {/* Subtitle MULTIMARCAS com espaçamento generoso */}
        <span
          className={`font-semibold uppercase ${sizeStyles.multi} ${
            isLight ? 'text-neutral-700' : 'text-neutral-200'
          }`}
        >
          M U L T I M A R C A S
        </span>
      </div>
    </Link>
  );
}

