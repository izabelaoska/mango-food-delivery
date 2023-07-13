import { create } from 'zustand'
import { nanoid } from 'nanoid'

export type Product = {
  id: string
  label: string
  price: string
  imgSrc: string
}

type OrderState = {
  items: Product[]
}

type OrderActions = {
  addItem: (item: {
    label: string
    price: string
    imgSrc: string
  }) => void
  removeItem: (label: string) => void
}

const initialState: OrderState = {
  items: [] as Product[],
}

export const useOrderStore = create<
  OrderState & OrderActions
>((set, get) => ({
  ...initialState,
  addItem: (item) => {
    const items = get().items
    const newItem = {
      ...item,
      id: nanoid(),
    }
    set({
      items: [...items, newItem],
    })
  },
  removeItem: (label) => {
    const items = get().items
    const elementIndexToRemove = items.findIndex(
      (item) => item.label === label
    )
    set({
      items: items.filter(
        (_, i) => i !== elementIndexToRemove
      ),
    })
  },
}))
