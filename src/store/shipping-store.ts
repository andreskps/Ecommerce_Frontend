import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  shipping: {
    email: string;
    name: string;
    lastName: string;
    phone: string;
    namePet: string;
    department: string;
    province: string;
    address: string;
    instructions?: string;
    neighborhood?: string;
  };

  setShipping: (shipping: State["shipping"]) => void;
}

export const useShippingStore = create<State>()(
  persist(
    (set, get) => ({
      shipping: {
        email: "",
        name: "",
        lastName: "",
        phone: "",
        namePet: "",
        department: "",
        province: "",
        address: "",
        instructions: "",
        neighborhood: "",
      },

      setShipping: (shipping) => {
        set({ shipping });
      },
    }),
    {
      name: "shipping-store",
    }
  )
);
