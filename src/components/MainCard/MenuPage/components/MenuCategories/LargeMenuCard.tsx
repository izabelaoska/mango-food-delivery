import React from 'react'
import Pizza1 from '../../../../../resources/images/Pizza1.png'
import Pizza2 from '../../../../../resources/images/Pizza2.png'
import Pizza3 from '../../../../../resources/images/Pizza3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { Rating } from '../../../../../helpers/components/Rating.tsx'

interface LargeMenuCardProps {
  label: string
  price: string
  imgSrc: string
}

export const LargeMenuItem: React.FC<
  LargeMenuCardProps
> = ({ label, price, imgSrc }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-48 h-48 p-5 overflow-hidden bg-white rounded-lg shadow-sm">
        <div className="pb-2">
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
          <FontAwesomeIcon
            icon={faCirclePlus}
            color="#FB9401"
            size="xl"
            className="mb-2"
          />
        </div>
      </div>
    </>
  )
}
export const LargeMenuCard: React.FC = () => {
  const largeMenuItems = [
    {
      label: 'Mushroom Pizza',
      price: '£8.50',
      imgSrc: Pizza1,
    },
    {
      label: 'Italian Pizza',
      price: '£9.50',
      imgSrc: Pizza2,
    },
    {
      label: 'Sausage Pizza',
      price: '£10.50',
      imgSrc: Pizza3,
    },
  ]
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
