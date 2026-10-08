export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  image: string;
  /** Presente somente quando há vídeo real correspondente em videos_stories. */
  video?: string;
  count: number;
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'veic',
    name: 'Veículos & Aventura',
    slug: 'veiculos',
    subtitle: 'Carrinhos, trens, bicicletas e patinetes',
    image: '/imagens/produtos/carrinho.jpg',
    video: '/videos/videos_stories/brinquedo_carrinho&boneca.mp4',
    count: 42,
  },
  {
    id: 'bone',
    name: 'Bonecas & Bebês',
    slug: 'bonecas',
    subtitle: 'Bonecas, fantoches e brinquedos de banho',
    image: '/imagens/produtos/boneca.jpg',
    video: '/videos/videos_stories/brinquedo_boneca.mp4',
    count: 31,
  },
  {
    id: 'pelu',
    name: 'Pelúcias & Personagens',
    slug: 'pelucias',
    subtitle: 'Ursos, dinossauros e heróis do dia a dia',
    image: '/imagens/produtos/pelucia.jpg',
    count: 27,
  },
  {
    id: 'educ',
    name: 'Jogos & Educativos',
    slug: 'educativos',
    subtitle: 'Jogos, blocos, quebra-cabeças e robôs',
    image: '/imagens/produtos/jogo.jpg',
    video: '/videos/videos_stories/brinquedo_quebraCabeca.mp4',
    count: 48,
  },
];

export const CATEGORY_LABELS: Record<string, string> = {
  veiculos: 'Veículos & Aventura',
  bonecas: 'Bonecas & Bebês',
  pelucias: 'Pelúcias & Personagens',
  educativos: 'Jogos & Educativos',
};
