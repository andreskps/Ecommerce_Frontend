export interface CreateOrder {
  name: string;
  email: string;
  lastName: string;
  phone: string;
  namePet: string;

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
