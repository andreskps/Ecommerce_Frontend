import { Product } from "@/app/interface/products/ProductsResponse";

type ParamsByCategory = {
  category: string;
  subcategory: string;
  pet: string;
};

export const getProductsByCategory = async (params: ParamsByCategory) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/byCategory/${params.category}?subcategory=${params.subcategory}&pet=${params.pet}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const products:Product[] = await response.json();
  return products;
};

type ParamsByPet = {
  pet: string;
  subcategory?: string;
  brand?: string;
};

export const getProductsByPet = async (params: ParamsByPet) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/byPet/${params.pet}?subcategory=${params.subcategory}&brand=${params.brand}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  const products:Product[] = await response.json();
  return products;
};



export const getProductsBySlug = async (slug: string) => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products/slug/${slug}`,
        {
        method: "GET",
        cache: "no-cache",
        }
    );
    const product = await response.json();
    return product;
}
