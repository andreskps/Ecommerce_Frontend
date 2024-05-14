import { Product } from "@/app/interface/products/ProductsResponse";

type ParamsByCategory = {
  category: string;
  subcategory: string;
  pet: string;
  page?: number;
};

export const getProductsByCategory = async (params: ParamsByCategory) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/byCategory/${params.category}?subcategory=${params.subcategory}&pet=${params.pet}&page=${params.page}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  // const products:Product[] = await response.json();
  // return products;
  return response;
};

type ParamsByPet = {
  pet: string;
  subcategory?: string;
  brand?: string;
  page?: number;
};

export const getProductsByPet = async (params: ParamsByPet) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/byPet/${params.pet}?subcategory=${params.subcategory}&brand=${params.brand}&page=${params.page}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );
  // const products:Product[] = await response.json();
  // return products;
  return response;
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
