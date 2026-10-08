export interface ShowcaseSlide {
  id: string;
  image: string;
  video?: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: 'vitrine-01',
    image: '/imagens/imagem2.jpg',
    video: '/videos/videos_stories/brinquedo_carrinho&boneca.mp4',
    alt: 'Produto em destaque na vitrine Mega Toys',
    tag: 'Destaque da semana',
    title: 'O queridinho da vitrine.',
    description:
      'Comece por aqui: a seleção que mais chama atenção na loja e combina com qualquer idade.',
    ctaLabel: 'Ver na loja',
    ctaHref: '/loja',
  },
  {
    id: 'vitrine-02',
    image: '/imagens/imagem3.jpg',
    video: '/videos/videos_stories/brinquedo_boneca.mp4',
    alt: 'Novidade disponível na vitrine Mega Toys',
    tag: 'Novidade',
    title: 'Acabou de chegar.',
    description:
      'A vitrine se renova toda semana. Confira o que acabou de chegar na loja e no site.',
    ctaLabel: 'Ver novidades',
    ctaHref: '/loja?filtro=novidades',
  },
  {
    id: 'vitrine-03',
    image: '/imagens/imagem5.jpg',
    alt: 'Brinquedo selecionado pela Mega Toys',
    tag: 'Para todas as idades',
    title: 'Diversão que cresce junto.',
    description:
      'Do primeiro brincar aos jogos em família: opções para cada fase da criançada.',
    ctaLabel: 'Explorar catálogo',
    ctaHref: '/loja',
  },
  {
    id: 'vitrine-04',
    image: '/imagens/imagem6.jpg',
    video: '/videos/videos_stories/brinquedo_quebraCabeca.mp4',
    alt: 'Presente em destaque na vitrine Mega Toys',
    tag: 'Presente certo',
    title: 'Acerte no presente.',
    description:
      'Em dúvida no que levar? Esta seleção foi montada para agradar em qualquer ocasião.',
    ctaLabel: 'Ver ofertas',
    ctaHref: '/loja?filtro=ofertas',
  },
  {
    id: 'vitrine-05',
    image: '/imagens/imagem7.jpg',
    alt: 'Brinquedo em destaque na vitrine Mega Toys',
    tag: 'Brincar e criar',
    title: 'Histórias para inventar.',
    description:
      'Brinquedos que estimulam a imaginação e transformam a hora de brincar em aventura.',
    ctaLabel: 'Ver na loja',
    ctaHref: '/loja',
  },
];
