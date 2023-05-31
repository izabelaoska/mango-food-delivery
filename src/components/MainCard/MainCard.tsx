import React from 'react'
import { Navbar } from './Navbar'

export const MainCard = () => {
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-row w-full shadow-xl rounded-3xl bg-base-200">
        <Navbar />
        <div className="flex-grow" />
      </div>
    </div>
  )
}
