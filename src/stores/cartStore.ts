import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '../lib/db/types';

interface CartState {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product) =>
        set((state) => ({
          items: [...state.items, product],
        })),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        })),
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);