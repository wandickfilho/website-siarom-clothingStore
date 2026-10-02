interface BrandSymbolProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'watermark';
  className?: string;
}

const sizeStyles = {
  sm: { symbol: 'text-[35px] sm:text-[40px]', crown: 'h-3.5 w-6 sm:h-4 sm:w-7' },
  md: { symbol: 'text-[43px] sm:text-[50px]', crown: 'h-4 w-7 sm:h-5 sm:w-8' },
  lg: { symbol: 'text-[54px] sm:text-[62px]', crown: 'h-5 w-9 sm:h-6 sm:w-10' },
  watermark: {
    symbol: 'text-[10rem] sm:text-[15rem] lg:text-[22rem]',
    crown: 'h-12 w-20 sm:h-[4.5rem] sm:w-[7.5rem] lg:h-28 lg:w-44',
  },
};

export default function BrandSymbol({
  variant = 'light',
  size = 'md',
  className = '',
}: BrandSymbolProps) {
  const currentSize = sizeStyles[size];
  const color = variant === 'dark' ? 'text-white' : 'text-[#151310]';

  return (
    <span className={`relative flex shrink-0 items-center justify-center ${currentSize.symbol} ${color} ${className}`}>
      <svg className={`absolute -top-3 left-[48%] -translate-x-1/2 -rotate-[18deg] origin-bottom text-[#d6b35f] ${currentSize.crown}`} viewBox="0 0 32 20" fill="none" aria-hidden="true">
        <path d="M3 16h26l-2 2H5l-2-2Zm2.5-2L3 4l7 5 6-7 6 7 7-5-2.5 10h-21Z" fill="currentColor" />
      </svg>
      <span className="font-editorial leading-none tracking-[-.12em]">S</span>
    </span>
  );
}
