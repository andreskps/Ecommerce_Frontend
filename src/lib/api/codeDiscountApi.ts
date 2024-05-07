import { DiscountCode } from "@/app/interface/discount/discountCode.interface";


export const applyCodeDiscount = async (code: string) => {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/coupons/code/${code}`
    );

    if (!response.ok) {
        return null;
    }

    const discount:DiscountCode = await response.json();



    return discount;
}