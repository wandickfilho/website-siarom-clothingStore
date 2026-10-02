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
  title: 'SIAROM MULTIMARCAS | Moda Contemporânea & Luxo em Sousa - PB',
  description:
    'A loja que vai ficar na sua mente. Curadoria das maiores marcas de moda feminina, masculina, calçados e acessórios em Sousa - PB. Compre online com entrega para todo o Brasil.',
  keywords: [
    'Siarom Multimarcas',
    'Moda Sousa PB',
    'Roupas de Luxo',
    'Multimarcas Sousa',
    'Animale',
    'Osklen',
    'Reserva',
    'Calvin Klein',
    'Dudalina',
    'Schutz',
  ],
  authors: [{ name: 'SIAROM MULTIMARCAS' }],
  openGraph: {
    title: 'SIAROM MULTIMARCAS | Moda Contemporânea & Luxo',
    description:
      'A loja que vai ficar na sua mente. Rua Herotildes Serafim dos Santos, 616, Sousa - PB. Novidades toda semana.',
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
      <body className="min-h-screen flex flex-col bg-[#0A0A0A] text-[#F7F4ED] antialiased font-sans-clean selection:bg-[#C5A059] selection:text-black">
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

