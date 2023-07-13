import { create } from 'zustand'
import Pizza1 from '../resources/images/Pizza1.png'
import Pizza2 from '../resources/images/Pizza2.png'
import Pizza3 from '../resources/images/Pizza3.png'

export type MenuState = {
  items: {
    label: string
    price: string
    imgSrc: string
  }[]
}

export const useMenuStore = create<MenuState>(() => ({
  items: [
    {
      label: 'Mushroom Pizza',
      price: '£8.50',
      imgSrc: Pizza1,
    },
    {
      label: 'Italian Pizza',
      price: '£9.50',
      imgSrc: Pizza2,
    },
    {
      label: 'Sausage Pizza',
      price: '£10.50',
      imgSrc: Pizza3,
    },
  ],
}))
