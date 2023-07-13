import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'

import {
  Product,
  useOrderStore,
} from '../../../../stores/orderStore'
import { SmallBasketCard } from './SmallBasketCard'
import { CountedProduct } from '../../../../types'

export const OrderMenu = () => {
  const items = useOrderStore((state) => state.items)

  function renderBasketCardsWithQuantity() {
    // const duplicates = {
    //   'Mushroom Pizza': {
    //     count: 2,
    //     data: {
    //       label: 'Mushroom Pizza',
    //       price: '£8.50',
    //       imgSrc: Pizza1,
    //     }
    //   }
    // }

    const duplicates: CountedProduct = {}
    for (const item of items) {
      const label = item.label

      if (!duplicates[label]) {
        duplicates[label] = {
          count: 1,
          data: {
            label,
            imgSrc: item.imgSrc,
            price: item.price,
          },
        }
      } else {
        duplicates[label].count += 1
      }
    }
    console.log('duplicates', duplicates)

    const values = Object.values(duplicates)
    return values.map((value, i) => (
      <SmallBasketCard
        key={i}
        label={value.data.label}
        price={value.data.price}
        imgSrc={value.data.imgSrc}
        quantity={value.count}
      />
    ))
  }

  return (
    <>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center justify-between gap-2 pb-4">
          <div className="text-xl font-semibold">
            Order Menu
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-4 overflow-y-auto">
          {items.length === 0 && (
            <div>Your basket is currently empty!</div>
          )}
          {renderBasketCardsWithQuantity()}
        </div>
      </div>
      {items.length > 0 && (
        <div className="flex-shrink-0 mt-auto text-center">
          <button className="mt-auto border-none btn btn-secondary btn-md rounded-2xl btn-wide bg-orange_fill hover:bg-orange_fill">
            CHECKOUT
          </button>
        </div>
      )}
    </>
  )
}
