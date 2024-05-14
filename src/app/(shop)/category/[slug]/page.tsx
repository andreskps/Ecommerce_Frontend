import { Category } from "@/app/interface/categories/Categories.interface";
import { Filters } from "@/components/category/Filters";
import { notFound } from "next/navigation";
import { Product } from "@/app/interface/products/ProductsResponse";
import ProductsList from "@/components/native/products/productsList";
import { FiltersMobile } from "@/components/category/FiltersMobile";
import { getCategories } from "@/lib/api/categoriesApi";
import { getProductsByCategory } from "@/lib/api/productsApi";
import { ProductsGrid } from "@/components/native/products/productsGrid";
import { PaginationProducts } from "@/components/component/pagination";
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

  const { subcategory = "", pet = "", page = 1 } = searchParams;

  const categories = await getCategories();

  const category = categories.find(
    (category) => category.name.toLowerCase() === slug
  );

  if (!category) {
    notFound();
  }

  const response = await getProductsByCategory({
    category: category.name,
    subcategory: subcategory as string,
    pet: pet as string,
    page: parseInt(page as string),
  });

  if (!response.ok) {
    return notFound();
  }

  const data = await response.json();

  const products: Product[] = data.products;

  const totalPages = Math.ceil(data.total / 3);

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
        <PaginationProducts total={totalPages} />
      </div>
    </div>
  );
}
