import React from 'react'
import { Navbar } from './Navbar'
import { MenuPage } from './MenuPage'
import { OrderBasket } from './OrderBasket'

export const MainCard = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-row w-full shadow-xl rounded-3xl bg-base-200">
        <Navbar />
        <div className="flex-grow border-r border-gray-300">
          <MenuPage />
        </div>
        <div className="flex-grow">
          <OrderBasket />
        </div>
      </div>
    </div>
  )
}
