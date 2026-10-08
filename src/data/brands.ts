export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  origin: string;
  featured: boolean;
}

export const BRANDS: BrandItem[] = [
  { id: 'lego', name: 'LEGO', tagline: 'Blocos que viram qualquer coisa que a imaginação criar', origin: 'Dinamarca', featured: true },
  { id: 'hot-wheels', name: 'HOT WHEELS', tagline: 'Carrinhos, pistas e velocidade para quem brinca sério', origin: 'EUA', featured: true },
  { id: 'barbie', name: 'BARBIE', tagline: 'Bonecas e mundos inteiros para inventar histórias', origin: 'EUA', featured: true },
  { id: 'fisher-price', name: 'FISHER-PRICE', tagline: 'Brincar desde os primeiros passos com segurança', origin: 'EUA', featured: true },
  { id: 'hasbro', name: 'HASBRO', tagline: 'Jogos e brinquedos que juntam a família na mesa', origin: 'EUA', featured: true },
  { id: 'bandai', name: 'BANDAI', tagline: 'Personagens, figuras e colecionáveis para fãs', origin: 'Japão', featured: true },
  { id: 'mattel', name: 'MATTEL', tagline: 'Diversão clássica para todas as idades', origin: 'EUA', featured: true },
  { id: 'caloi', name: 'CALOI', tagline: 'Bicicletas brasileiras que acompanham gerações', origin: 'Brasil', featured: true },
];
