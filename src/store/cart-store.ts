import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  idProduct: string;
  slug: string;
  title: string;
  quantity: number;
  variant: {
    id: number;
    attribute: string;
    value: string;
    unitPrice: number;
  };
  image: string;
}

interface State {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (
    idProduct: string,
    variantId: number,
    quantity: number
  ) => void;
  removeFromCart: (idProduct: string, variantId: number) => void;
  getTotal: () => number;
  getInformations: () => { subtotal: number; shipping: number; total: number };
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotal: () => {
        const { cart } = get();
        return cart.reduce(
          (acc, item) => acc + item.quantity * item.variant.unitPrice,
          0
        );
      },
      getInformations: () => {
        const subtotal = get().getTotal();
        const shipping = 10000;
        const total = subtotal + shipping;
        return { subtotal, shipping, total };
      },

      addToCart: (product: CartItem) => {
        const { cart } = get();

        const productExist = cart.find(
          (item) =>
            item.idProduct === product.idProduct &&
            item.variant.id === product.variant.id
        );

        if (!productExist) {
          set((state) => ({
            cart: [...state.cart, product],
          }));

          return;
        }

        const updatedCart = cart.map((item) => {
          if (
            item.idProduct === product.idProduct &&
            item.variant.id === product.variant.id
          ) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }

          return item;
        });

        set({ cart: updatedCart });
      },
      updateQuantity: (
        idProduct: string,
        variantId: number,
        quantity: number
      ) => {
        const { cart } = get();

        const updatedCart = cart.map((item) => {
          if (item.idProduct === idProduct && item.variant.id === variantId) {
            return {
              ...item,
              quantity: quantity,
            };
          }

          return item;
        });

        set({ cart: updatedCart });
      },
      removeFromCart: (idProduct: string, variantId: number) => {
        const { cart } = get();

        const updatedCart = cart.filter(
          (item) =>
            item.idProduct !== idProduct || item.variant.id !== variantId
        );

        set({ cart: updatedCart });
      },
    }),
    {
      name: "cart-storage", // unique name
    }
  )
);
