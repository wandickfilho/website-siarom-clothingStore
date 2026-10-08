import ToyShowcase from '@/components/home/ToyShowcase';
import HeroCampaign from '@/components/home/HeroCampaign';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedSection from '@/components/home/FeaturedSection';

export default function HomePage() {
  return (
    <>
      {/* 1. Vitrine digital de brinquedos em destaque */}
      <ToyShowcase />

      {/* 2. Hero com vídeo institucional */}
      <HeroCampaign />

      {/* 3. Categorias Visuais */}
      <CategoryGrid />

      {/* 4. Novidades & Destaques de Produtos */}
      <FeaturedSection />
    </>
  );
}