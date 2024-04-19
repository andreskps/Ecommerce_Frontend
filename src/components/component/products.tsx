import {
  Product,
  ProductsResponse,
} from "@/app/interface/products/ProductsResponse";
import { Categories } from "../native/categories/categories";
import { Filters } from "../native/filters/filters";
import ProductsList from "../native/products/productsList";
import { PaginationProducts } from "./pagination";
import { Category } from "@/app/interface/categories/Categories.interface";
import { Brand } from "@/app/interface/brands/Brands.interface";

interface Props {
  title: string;
  description: string;
  products: Product[];
  subcategory?: string;
}

export async function ProductsByPet({
  title,
  description,
  products,
  subcategory,
}: Props) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
  );
  const responseBrands = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/brands`);

   
  const brands:Brand[] = await responseBrands.json();

  const categories: Category[] = await response.json();

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-12 md:py-24">
      <div className="md:flex md:flex-col gap-6  hidden">
        <Categories categories={categories} />
        <Filters brands={brands}/>
      </div>
      <div className="grid gap-8">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {title}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {description}
            </p>
            <p className="text-sm text-gray-500">{subcategory}</p>
          </div>
          <ProductsList products={products} />
        </div>
        <PaginationProducts />
      </div>
    </div>
  );
}
