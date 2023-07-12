import { OrderBasketHeader } from './components/OrderBasketHeader'
import { OrderMenu } from './components/OrderMenu'

export const OrderBasket = () => {
  return (
    <div className="flex flex-col h-full">
      <OrderBasketHeader />
      <OrderMenu />
    </div>
  )
}
