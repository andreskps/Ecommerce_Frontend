export interface CreateOrder {
  name: string;
  email: string;
  lastName: string;
  phone: string;
  namePet: string;
  paymentMethod:string,
  coupon?:string;

  user_data?:{
    fbp?:string;
    fbc?:string;
  }



  variants: {
    id: number;
    quantity: number;
  }[];

  address: {
    address: string;
    neighborhood?: string;
    addressDetail?: string;
    municipioId: number;
  };
}
