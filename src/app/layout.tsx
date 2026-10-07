import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import Header from '@/components/layout/Header';
import BottomNav from '@/components/layout/BottomNav';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import InternalPageShell from '@/components/layout/InternalPageShell';

export const metadata: Metadata = {
  title: 'MEGA TOYS | Brinquedos, Jogos e Presentes em Sousa - PB',
  description:
    'Loja de brinquedos em Sousa - PB. Brinquedos, jogos e presentes para crianças e famílias. Diversão para todas as idades, com entrega para todo o Brasil.',
  keywords: [
    'Mega Toys',
    'Brinquedos Sousa PB',
    'Loja de Brinquedos',
    'Presentes Infantis',
    'Jogos',
    'Brinquedos em Sousa',
  ],
  authors: [{ name: 'MEGA TOYS' }],
  openGraph: {
    title: 'MEGA TOYS | Brinquedos, Jogos e Presentes',
    description:
      'Brinquedos, jogos e presentes para crianças e famílias em Sousa - PB. Novidades toda semana.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#141414] antialiased font-sans-clean selection:bg-[#052A97] selection:text-white">
        <CartProvider>
          <WishlistProvider>
            {/* Header Desktop & Mobile */}
            <Header />

            {/* Conteúdo Principal com espaço para Bottom Nav no mobile */}
            <main className="flex-1 pb-16 lg:pb-0">
              <InternalPageShell>{children}</InternalPageShell>
            </main>

            {/* Carrinho Lateral / Bottom Sheet */}
            <CartDrawer />

            {/* Barra Inferior Mobile-First */}
            <BottomNav />

            {/* Rodapé Completo */}
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

