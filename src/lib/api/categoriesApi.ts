import { Category } from "@/app/interface/categories/Categories.interface";


export const getCategories = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
    );
    
    const categories: Category[] = await response.json();
    return categories;
}


