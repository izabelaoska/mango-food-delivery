import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useOrderStore } from '../../../../stores/orderStore'

type SmallCardProps = {
  label: string
  price: string
  imgSrc: string
  id: number
}
export const SmallBasketCard: React.FC<SmallCardProps> = ({
  id,
  label,
  price,
  imgSrc,
}) => {
  const removeItem = useOrderStore(
    (state) => state.removeItem
  )
  const handleRemoveItem = () => {
    console.log('Removing item with id: ', id)
    removeItem(id)
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
            quantity here
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
