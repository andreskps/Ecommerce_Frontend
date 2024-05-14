interface ProductImage {
  id: number;
  url: string;
}

interface Discount {
  id: number;
  name: string;
  percentage: number;
  isActive: boolean;
  expiresAt: string;
  startsAt: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  slug: string;
  isActive: boolean;
  isPopular: boolean;
  isNew: boolean;
  productImages: ProductImage[];
  discount: Discount | null;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}
