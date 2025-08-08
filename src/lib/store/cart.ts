import { create } from 'zustand'

type Product = {
  id: string
  name: string
  price: number
  image: string
  slug: string
}

type CartItem = Product & { quantity: number }

type CartState = {
  items: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  getCount: () => number
  getTotal: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  addToCart: (product, quantity = 1) => {
    set(state => {
      const existing = state.items.find(item => item.id === product.id)
      if (existing) {
        return {
          items: state.items.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        }
      }
      return { items: [...state.items, { ...product, quantity }] }
    })
  },
  removeFromCart: id =>
    set(state => ({
      items: state.items.filter(item => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
  getCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  getTotal: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
}))