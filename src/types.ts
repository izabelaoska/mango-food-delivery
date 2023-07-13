interface ItemData {
  label: string
  price: string
  imgSrc: string // if Pizza1 is a string, otherwise adjust the type accordingly
}
interface Item {
  count: number
  data: ItemData
}

export type CountedProduct = {
  [key: string]: Item
}
