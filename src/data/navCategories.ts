import type { LucideIcon } from 'lucide-react';
import {
  Baby,
  Bike,
  Car,
  Dices,
  Drama,
  Flame,
  Gamepad2,
  PawPrint,
  Puzzle,
  Sparkles,
  Store,
  ToyBrick,
} from 'lucide-react';

export type NavTone = 'blue' | 'red' | 'amber' | 'green' | 'sky' | 'orange';

export interface NavCategory {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  tone: NavTone;
  special?: boolean;
}

export const NAV_CATEGORIES: NavCategory[] = [
  { id: 'pelucias', label: 'Pelúcias', href: '/loja?categoria=pelucias', icon: PawPrint, tone: 'red' },
  { id: 'veiculos', label: 'Carrinhos', href: '/loja?categoria=veiculos', icon: Car, tone: 'blue' },
  { id: 'bonecas', label: 'Bonecas', href: '/loja?categoria=bonecas', icon: Drama, tone: 'amber' },
  { id: 'bebes', label: 'Bebês', href: '/loja?categoria=bonecas', icon: Baby, tone: 'sky' },
  { id: 'jogos', label: 'Jogos', href: '/loja?categoria=educativos', icon: Dices, tone: 'green' },
  { id: 'montar', label: 'Montar', href: '/loja?categoria=educativos', icon: ToyBrick, tone: 'orange' },
  { id: 'educativos', label: 'Educativos', href: '/loja?categoria=educativos', icon: Puzzle, tone: 'blue' },
  { id: 'ar-livre', label: 'Ao ar livre', href: '/loja?categoria=veiculos', icon: Bike, tone: 'green' },
  { id: 'eletronicos', label: 'Eletrônicos', href: '/loja?categoria=educativos', icon: Gamepad2, tone: 'sky' },
  { id: 'novidades', label: 'Novidades', href: '/loja?filtro=novidades', icon: Sparkles, tone: 'red', special: true },
  { id: 'ofertas', label: 'Ofertas', href: '/loja?filtro=ofertas', icon: Flame, tone: 'orange', special: true },
  { id: 'marcas', label: 'Marcas', href: '/marcas', icon: Store, tone: 'blue', special: true },
];
