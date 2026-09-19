export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  image: string;
  count: number;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'fem',
    name: 'Feminino',
    slug: 'feminino',
    subtitle: 'Vestidos, Alfaiataria & Seda',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
    count: 48,
  },
  {
    id: 'masc',
    name: 'Masculino',
    slug: 'masculino',
    subtitle: 'Blazers, Linho & Algodão Pima',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
    count: 52,
  },
  {
    id: 'calc',
    name: 'Calçados',
    slug: 'calcados',
    subtitle: 'Couro Nobre, Scarpins & Sneakers',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
    count: 36,
  },
  {
    id: 'acess',
    name: 'Acessórios',
    slug: 'acessorios',
    subtitle: 'Bolsas, Cintos & Detalhes Ouro',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    count: 29,
  },
];

