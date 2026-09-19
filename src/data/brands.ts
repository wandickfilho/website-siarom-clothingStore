export interface BrandItem {
  id: string;
  name: string;
  tagline: string;
  origin: string;
  featured: boolean;
}

export const BRANDS: BrandItem[] = [
  { id: 'animale', name: 'ANIMALE', tagline: 'Sofisticação brasileira e alfaiataria magnética', origin: 'Brasil', featured: true },
  { id: 'osklen', name: 'OSKLEN', tagline: 'Luxo sustentável, linho puro e minimalismo orgânico', origin: 'Rio de Janeiro', featured: true },
  { id: 'reserva', name: 'RESERVA', tagline: 'Elegância contemporânea com o mais puro algodão Pima', origin: 'Brasil', featured: true },
  { id: 'calvin-klein', name: 'CALVIN KLEIN', tagline: 'Design icônico nova-iorquino, precisão e sobriedade', origin: 'New York', featured: true },
  { id: 'dudalina', name: 'DUDALINA', tagline: 'A mais alta camisaria em sedas e algodões nobres', origin: 'Brasil', featured: true },
  { id: 'schutz', name: 'SCHUTZ', tagline: 'Calçados autorais para mulheres de atitude e estilo', origin: 'Brasil', featured: true },
  { id: 'tommy', name: 'TOMMY HILFIGER', tagline: 'Clássico americano revisitado com frescor e exclusividade', origin: 'USA', featured: true },
  { id: 'arezzo', name: 'AREZZO', tagline: 'Couros nobres, bolsas e acessórios de impacto', origin: 'Brasil', featured: true },
];

