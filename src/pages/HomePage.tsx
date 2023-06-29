import { MenuPage } from '../components/MainCard/MenuPage'
import { OrderBasket } from '../components/MainCard/OrderBasket'

export const HomePage = () => {
  return (
    <>
      <div className="flex-grow bg-[#F9F9FB] rounded-3xl md:rounded-none">
        <MenuPage />
      </div>
      <div className="flex-grow">
        <OrderBasket />
      </div>
    </>
  )
}
