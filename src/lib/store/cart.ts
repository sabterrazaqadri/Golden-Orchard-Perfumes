// lib/store/cart.ts
import { create } from 'zustand';

type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
  description: string;
};

type CartState = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      if (state.cart.find((item) => item.slug === product.slug)) return state; // Avoid duplicates
      return { cart: [...state.cart, product] };
    }),
  removeFromCart: (slug) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.slug !== slug),
    })),
}));
