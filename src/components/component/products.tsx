import {
  Product,
  ProductsResponse,
} from "@/app/interface/products/ProductsResponse";
import { Categories } from "../native/categories/categories";
import { Filters } from "../native/filters/filters";
import ProductsList from "../native/products/productsList";
import { getCategories } from "@/lib/api/categoriesApi";
import { getBrands } from "@/lib/api/brandsApi";
import { CategoriesMobile } from "../pet/categoriesMobile";
import { FiltersMobile } from "../pet/filtersMobile";
import { PaginationProducts } from "./pagination";

interface Props {
  title: string;
  cantPages: number;
  description: string;
  products: Product[];
  subcategory?: string;
}

export async function ProductsByPet({
  title,
  description,
  products,
  subcategory,
  cantPages
}: Props) {
  const [brands, categories] = await Promise.all([
    getBrands(),
    getCategories(),
  ]);


  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-12 md:py-10">
      <div className="md:flex md:flex-col gap-6 hidden">
        <Categories categories={categories} />
        <Filters brands={brands} />
      </div>
      <div className="md:hidden flex flex-col ">
        {/* <CategoriesMobile categories={categories} /> */}
        <FiltersMobile brands={brands} categories={categories}/>
      </div>
    
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
  <div className="space-y-2">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
      {title}
    </h2>
    {/* <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
      {description}
    </p> */}
    <p className="text-sm text-gray-500">{subcategory}</p>
  </div>
  <ProductsList products={products} />
  <div className="flex justify-center w-full">
    <PaginationProducts total={cantPages} />
  </div>
</div>
    </div>
   
  );
}
