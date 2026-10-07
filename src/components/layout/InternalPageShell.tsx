'use client';

import { usePathname } from 'next/navigation';
import BrandSymbol from './BrandSymbol';

export default function InternalPageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/') {
    return children;
  }

  return (
    <div className="internal-page-shell">
      <div className="internal-page-atmosphere" aria-hidden="true">
        <BrandSymbol variant="light" size="watermark" />
      </div>
      <div className="internal-page-content">{children}</div>
    </div>
  );
}
