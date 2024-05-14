interface ProductImage {
  id: number;
  url: string;
}

interface ProductVariant {
  id: number;
  price: string;
  stock: number;
  isActive: boolean;
}

interface Discount {
  id: number;
  name: string;
  percentage: number;
  isActive: boolean;
  expiresAt: null | string;
  startsAt: null | string;
  deletedAt: null | string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  slug: string;
  isActive: boolean;
  isPopular: boolean;
  isNew: boolean;
  discount: null | Discount;
  productImages: ProductImage[];
  productVariants: ProductVariant[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
}

