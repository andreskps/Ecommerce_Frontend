

import { v4 as uuidv4 } from "uuid";

interface PropsAddToCart {
  content_name: string;
  content_ids: string[];
  value: number;
  currency: string;
}

export async function AddToCartTrigger(product: PropsAddToCart) {
  const eventID =Math.floor(Math.random() * 10000000000);
  const eventTime = Math.floor(Date.now() / 1000);

  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq("track", "AddToCart", {
      content_name: product.content_name,
      content_ids: product.content_ids,
      value: product.value,
      currency: product.currency,
    },{
      eventID: eventID.toString(),
    }
  );
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pixel`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        event_id: eventID,
        event_time: eventTime,
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



type PropsViewContent = {
  content_name: string;
  content_ids: string[];
  value: number;
  currency: string;

}


export async function viewContent(product: PropsViewContent){
  const eventID = Math.floor(Math.random() * 10000000000);
  const eventTime = Math.floor(Date.now() / 1000);

  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq("track", "ViewContent", {
      content_name: product.content_name,
      content_ids: product.content_ids,
      value: product.value,
      currency: product.currency,
    },{
      eventID: eventID.toString(),
    }
  );
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/pixel/viewcontent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache",
      },
      body: JSON.stringify({
        event_id: eventID,
        event_time: eventTime,
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
