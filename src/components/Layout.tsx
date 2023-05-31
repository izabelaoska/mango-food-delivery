import React from 'react'
import { MainCard } from './MainCard'

export const Layout = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-[#FFE3BA] to-[#F5D7AC]">
      <div className="h-full px-32 py-12">
        <MainCard />
      </div>
    </div>
  )
}
