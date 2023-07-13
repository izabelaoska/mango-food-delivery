import { create } from 'zustand'

import { MenuState } from './menuStore'

type OrderItem = MenuState & { id: number }

type OrderStore = {
  items: OrderItem[]
  addItem: (item: MenuState) => void
  removeItem: (id: number) => void
}

let id = 0

export const useOrderStore = create<OrderStore>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => ({
      items: [...state.items, { ...item, id: id++ }],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}))
