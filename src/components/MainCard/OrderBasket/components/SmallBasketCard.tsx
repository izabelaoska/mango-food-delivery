import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrderStore } from '../../../../stores/orderStore'

type SmallCardProps = {
  label: string
  price: string
  imgSrc: string
  quantity: number
}
export const SmallBasketCard: React.FC<SmallCardProps> = ({
  label,
  imgSrc,
  quantity,
}) => {
  const removeItem = useOrderStore(
    (state) => state.removeItem
  )
  const handleRemoveItem = () => {
    console.log('label', label)
    removeItem(label)
  }
  return (
    <>
      <div className="flex items-center gap-4 p-6 mb-2 rounded-lg shadow-md bg-secondary">
        <div className="p-4 rounded-full bg-orange_50">
          <img
            src={imgSrc}
            alt={label}
            className="object-cover w-10 h-10 rounded-full"
          />
        </div>
        <div>
          <h2 className="text-md">{label}</h2>
          <p className="text-sm font-semibold">
            <span className="text-orange_fill">x </span>
            <span className="text-gray-600">
              {quantity}
            </span>
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 ml-auto align-middle">
          <button
            className="icon"
            onClick={handleRemoveItem}
          >
            <FontAwesomeIcon
              icon={faTrash}
              className="text-orange_fill"
            />
          </button>
        </div>
      </div>
    </>
  )
}
