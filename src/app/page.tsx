import HeroCampaign from '@/components/home/HeroCampaign';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedSection from '@/components/home/FeaturedSection';
import EditorialLookbook from '@/components/home/EditorialLookbook';
import BrandsShowcase from '@/components/home/BrandsShowcase';
import InstagramFeed from '@/components/home/InstagramFeed';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Fashion Campaign */}
      <HeroCampaign />

      {/* 2. Categorias Visuais */}
      <CategoryGrid />

      {/* 3. Novidades & Destaques de Produtos */}
      <FeaturedSection />

      {/* 4. Lookbook Editorial (Vogue/Revista de Moda) */}
      <EditorialLookbook />

      {/* 5. Curadoria de Marcas Multimarcas */}
      <BrandsShowcase />

      {/* 6. Instagram & Prova Social Oficial */}
      <InstagramFeed />
    </>
  );
}

