import { v4 as uuidv4 } from "uuid";

interface ProductProps {
  content_name: string;
  content_ids: string[];
  value: number;
  currency: string;
  fbp?: string;
  fbc?: string;
}

async function trackEvent(eventType: string, product: ProductProps, apiEndpoint: string) {
  const eventID = uuidv4();
  const eventTime = Math.floor(Date.now() / 1000);

  // if (typeof window !== 'undefined' && (window as any).fbq) {
  //   (window as any).fbq("track", eventType, {
  //     content_name: product.content_name,
  //     content_ids: product.content_ids,
  //     value: product.value,
  //     currency: product.currency,
  //   },{
  //     eventID: eventID.toString(),
  //   });
  // }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${apiEndpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        event_id: eventID,
        event_time: eventTime,
        user_data:{
          fbp: product.fbp  || "",
          fbc: product.fbc || "",
        },
        custom_data: {
          content_name: product.content_name,
          content_ids: product.content_ids,
          value: product.value,
          currency: "COP",
        },
      }),
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

export const AddToCartTrigger = (product: ProductProps) => trackEvent("AddToCart", product, "/api/pixel");
export const viewContent = (product: ProductProps) => trackEvent("ViewContent", product, "/api/pixel/viewcontent");
export const InitiateCheckoutTrigger = (product: ProductProps) => trackEvent("InitiateCheckout", product, "/api/pixel/initiatecheckout");