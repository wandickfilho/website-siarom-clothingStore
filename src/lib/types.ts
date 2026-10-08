export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: 'veiculos' | 'bonecas' | 'pelucias' | 'educativos';
  price: number;
  originalPrice?: number;
  pixDiscountPercent: number; // e.g. 5% off on PIX
  images: string[];
  description: string;
  composition: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface FilterState {
  category: string;
  brand: string;
  size: string;
  color: string;
  priceRange: [number, number];
  sortBy: 'relevance' | 'newest' | 'price-asc' | 'price-desc' | 'bestsellers';
  onlyDiscount: boolean;
}

