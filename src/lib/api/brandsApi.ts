import { Brand } from "@/app/interface/brands/Brands.interface";

export const getBrands = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/brands`,
        {
        next:{
            revalidate: 4200,
        }
        }
    );
    const brands:Brand[] = await response.json();
    return brands;
}