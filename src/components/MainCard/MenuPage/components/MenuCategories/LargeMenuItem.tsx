import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCirclePlus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import { Rating } from '../../../../../helpers/components/Rating.tsx'

import { useOrderStore } from '../../../../../stores/orderStore.ts'

import React from 'react'

interface Props {
  label: string
  price: string
  imgSrc: string
}
export const LargeMenuItem: React.FC<Props> = ({
  label,
  price,
  imgSrc,
}) => {
  console.log('LargeMenuItem rendered')
  const addItem = useOrderStore((state) => state.addItem)
  const handleAddToCart = () => {
    const item = {
      label: label,
      price: price,
      imgSrc: imgSrc,
    }
    addItem(item)
  }

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
          <div>
            <h2 className="text-sm">{label}</h2>
            <p className="text-xs font-semibold">{price}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-16">
          <Rating />
          <button
            className="icon"
            onClick={handleAddToCart}
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
