import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'

import { useOrderStore } from '../../../../stores/orderStore'
import { SmallBasketCard } from './SmallBasketCard'

export const OrderMenu = () => {
  const orderItems = useOrderStore((state) => state.items)
  return (
    <>
      <div className="flex flex-col h-full p-8">
        <div className="flex items-center justify-between gap-2 pb-4">
          <div className="text-xl font-semibold">
            Order Menu
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-4 overflow-y-auto">
          {orderItems.length === 0 ? (
            <div>Your basket is currently empty!</div>
          ) : (
            orderItems.map((item) => (
              <SmallBasketCard
                key={item.id}
                label={item.label}
                price={item.price}
                imgSrc={item.imgSrc}
                id={item.id}
              />
            ))
          )}
        </div>
      </div>
      {orderItems.length > 0 && (
        <div className="flex-shrink-0 mt-auto text-center">
          <button className="mt-auto border-none btn btn-secondary btn-md rounded-2xl btn-wide bg-orange_fill hover:bg-orange_fill">
            CHECKOUT
          </button>
        </div>
      )}
    </>
  )
}
