interface BrandSymbolProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'watermark';
  className?: string;
}

const sizeStyles = {
  sm: { symbol: 'text-[35px] sm:text-[40px]', star: 'h-3.5 w-3.5 sm:h-4 sm:w-4' },
  md: { symbol: 'text-[43px] sm:text-[50px]', star: 'h-4 w-4 sm:h-5 sm:w-5' },
  lg: { symbol: 'text-[54px] sm:text-[62px]', star: 'h-5 w-5 sm:h-6 sm:w-6' },
  watermark: {
    symbol: 'text-[10rem] sm:text-[15rem] lg:text-[22rem]',
    star: 'h-12 w-12 sm:h-[4.5rem] sm:w-[4.5rem] lg:h-28 lg:w-28',
  },
};

export default function BrandSymbol({
  variant = 'light',
  size = 'md',
  className = '',
}: BrandSymbolProps) {
  const currentSize = sizeStyles[size];
  const color = variant === 'dark' ? 'text-white' : 'text-[#051D6F]';

  return (
    <span className={`relative flex shrink-0 items-center justify-center ${currentSize.symbol} ${color} ${className}`}>
      <svg className={`absolute -top-3 left-[52%] -translate-x-1/2 -rotate-[14deg] origin-bottom text-[#FBCC0F] ${currentSize.star}`} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" fill="currentColor" />
      </svg>
      <span className="font-editorial leading-none tracking-[-.12em]">M</span>
    </span>
  );
}
