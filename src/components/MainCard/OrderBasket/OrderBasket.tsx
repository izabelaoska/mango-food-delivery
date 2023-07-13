import { OrderBasketHeader } from './components/OrderBasketHeader'
import { OrderMenu } from './components/OrderMenu'

export const OrderBasket = () => {
  return (
    <div className="flex flex-col">
      <div>
        <OrderBasketHeader />
      </div>
      <div className="h-[64vh]">
        <OrderMenu />
      </div>
    </div>
  )
}
