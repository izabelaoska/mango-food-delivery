import React from 'react'
import { Navbar } from './Navbar'
import { MenuPage } from './MenuPage'
import { OrderBasket } from './OrderBasket'

export const MainCard = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-row w-full shadow-xl rounded-3xl bg-[#FFFFFF]">
        <Navbar />
        <div className="flex-grow bg-[#F9F9FB]">
          <MenuPage />
        </div>
        <div className="flex-grow">
          <OrderBasket />
        </div>
      </div>
    </div>
  )
}
