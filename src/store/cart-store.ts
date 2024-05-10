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
  priceShipping: number;
  setPriceShipping: (price: number) => void;
  addToCart: (product: CartItem) => void;
  updateQuantity: (
    idProduct: string,
    variantId: number,
    quantity: number
  ) => void;
  removeFromCart: (idProduct: string, variantId: number) => void;
  getTotal: () => number;
  getInformations: () => { subtotal: number; shipping: number; total: number };
  getTotalItems: () => number;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      priceShipping: 0,
      clearCart: () => {
        set({ cart: [] });
      },
      getTotal: () => {
        const { cart } = get();
        return cart.reduce(
          (acc, item) => acc + item.quantity * item.variant.unitPrice,
          0
        );
      },
      getInformations: () => {
        const subtotal = get().getTotal();
        const shipping = get().priceShipping;
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
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => acc + item.quantity, 0);
      },
      setPriceShipping: (price: number) => {
        set({ priceShipping: price });
      },
    

    }),
    {
      name: "cart-storage", // unique name
    }
  )
);
