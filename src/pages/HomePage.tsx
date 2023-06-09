import { MenuPage } from '../components/MainCard/MenuPage/MenuPage'
import { OrderBasket } from '../components/MainCard/OrderBasket/OrderBasket'

export const HomePage = () => {
  return (
    <>
      <div className="w-2/3 bg-secondary rounded-3xl md:rounded-none">
        <MenuPage />
      </div>
      <div className="w-1/3">
        <OrderBasket />
      </div>
    </>
  )
}
