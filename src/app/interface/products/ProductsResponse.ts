interface ProductImage {
  id: number;
  url: string;
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
}

export interface ProductsResponse {
  products: Product[];
}
