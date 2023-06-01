import React from 'react'
import { MainCard } from '../MainCard/MainCard'

export const Layout = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-[710px] bg-gradient-to-r from-[#FFE3BA] to-[#F5D7AC] p-12">
      <MainCard />
    </div>
  )
}
