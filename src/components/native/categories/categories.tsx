import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import React from "react";

interface Props {
  categories: {
    name: string;
    subcategories: string[];
  }[];
}

export const Categories = ({ categories }: Props) => {
  return (
    <div className="space-y-2 ">
      <h3 className="text-lg font-semibold">Categorías</h3>
      <div className="grid gap-2">
        {categories.map((category, i) => (
          <Category key={i} category={category} />
        ))}
      </div>
    </div>
  );
};

type CategoryProps = {
  category: {
    name: string;
    subcategories: string[];
  };
};

export const Category = ({ category }: CategoryProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900">
        {category.name}
        {/* <ChevronRightIcon className="h-4 w-4" /> */}
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2">
        <div className="grid gap-2 pl-4">
          {category.subcategories.map((subcategory, j) => (
            <Link
              key={j}
              href={`/products?category=${category.name}&subcategory=${subcategory}`}
              passHref
              className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
            >
                {subcategory}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
