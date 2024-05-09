import { CreateOrder } from "@/app/interface/order/order.interface";


export const createOrder = async (order: CreateOrder) => {

    const response = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    });

    
    return response

}