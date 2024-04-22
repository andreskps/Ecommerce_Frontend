import { Category } from "@/app/interface/categories/Categories.interface";
import { Filters } from "@/components/category/Filters";
import { ProductsByCategory } from "@/components/component/productsByCategory";
import Link from "next/link";
import { notFound } from "next/navigation";

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
  return (
    // <ProductsByCategory/>
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 px-4 md:px-6 py-12 md:py-24">
      <div className="md:flex md:flex-col gap-6 hidden">
        <Filters
          categories={categories}
          subcategories={category?.subcategories || []}
        />
      </div>
    </div>
  );
}
