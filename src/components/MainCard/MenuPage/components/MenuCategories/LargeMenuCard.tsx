import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCirclePlus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { Rating } from '../../../../../helpers/components/Rating.tsx'
import {
  useMenuStore,
  MenuState,
} from '../../../../../stores/menuStore.ts'

import { useOrderStore } from '../../../../../stores/orderStore.ts'

interface LargeMenuCardProps {
  label: string
  price: string
  imgSrc: string
}

export const LargeMenuItem: React.FC<
  LargeMenuCardProps
> = ({ label, price, imgSrc }) => {
  const addItem = useOrderStore((state) => state.addItem)

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-48 h-48 p-5 overflow-hidden bg-white rounded-lg shadow-sm">
        <div className="pb-2">
          <button className="absolute icon top-3 right-3">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-orange_fill"
            />
          </button>
          <img
            src={imgSrc}
            alt={label}
            className="object-cover w-24 h-24 mt-2"
          />
        </div>
        <div className="flex flex-col w-full">
          <div className="">
            <h2 className="text-sm">{label}</h2>
            <p className="text-xs font-semibold">{price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-16">
          <Rating />
          <button
            className="icon"
            onClick={() => {
              addItem({ label, price, imgSrc }) // Add item to the order store
            }}
          >
            <FontAwesomeIcon
              icon={faCirclePlus}
              size="xl"
              className="mb-2 text-orange_fill"
            />
          </button>
        </div>
      </div>
    </>
  )
}
export const LargeMenuCard: React.FC = () => {
  const largeMenuItems = useMenuStore(
    (state: MenuState) => state.items
  )
  return (
    <div className="flex justify-between px-8 py-4">
      {largeMenuItems.map((item) => (
        <LargeMenuItem
          label={item.label}
          price={item.price}
          imgSrc={item.imgSrc}
        />
      ))}
    </div>
  )
}
