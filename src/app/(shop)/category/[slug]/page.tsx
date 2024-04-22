import { Category } from "@/app/interface/categories/Categories.interface";
import { Filters } from "@/components/category/Filters";
import { ProductsByCategory } from "@/components/component/productsByCategory";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Product } from "@/app/interface/products/ProductsResponse";
import ProductsList from "@/components/native/products/productsList";
import { SheetDemo } from "../../../../components/native/categories/categoriesMobile";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FiltersMobile } from "@/components/category/FiltersMobile";
interface Props {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = params;
  
  const {subcategory ="", pet=""} = searchParams;


  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
  );

  const categories: Category[] = await response.json();

  const category = categories.find(
    (category) => category.name.toLowerCase() === slug
  );

  if (!category) {
    notFound();
  }
  const responseProduct = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/byCategory/${category.name}?subcategory=${subcategory}&pet=${pet}`,
    {
      method: "GET",
      cache: "no-cache",
    }
  );

  

  const products = await responseProduct.json();

 

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-12 md:py-24">
      <div className="md:flex md:flex-col gap-6 hidden">
        <Filters
          categories={categories}
          subcategories={category?.subcategories || []}
        />
      </div>

      <FiltersMobile
        categories={categories}
        subcategories={category?.subcategories || []}
      />

      <div className="">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {category.name}
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400"></p>
          </div>
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
}
