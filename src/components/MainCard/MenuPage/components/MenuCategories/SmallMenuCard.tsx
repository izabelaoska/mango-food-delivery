import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleRight,
  faPizzaSlice,
  faBurger,
  faHotdog,
  faCookie,
  faMugHot,
  faAppleWhole,
} from '@fortawesome/free-solid-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

import '../../../../../index.css'

interface MenuItemProps {
  icon: IconDefinition
  label: string
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
}) => {
  return (
    <button className="flex flex-col items-center justify-center w-24 h-32 gap-3 p-5 overflow-hidden bg-white rounded-lg shadow-sm button">
      <FontAwesomeIcon
        icon={icon}
        color="#FB9401"
        size="2xl"
      />
      <p>{label}</p>
      <FontAwesomeIcon
        icon={faCircleRight}
        color="#FB9401"
        size="lg"
      />
    </button>
  )
}

export const SmallMenuCard: React.FC = () => {
  const menuItems = [
    { icon: faPizzaSlice, label: 'Pizza' },
    { icon: faBurger, label: 'Burger' },
    { icon: faHotdog, label: 'Hotdog' },
    { icon: faCookie, label: 'Dessert' },
    { icon: faMugHot, label: 'Drink' },
    { icon: faAppleWhole, label: 'Snacks' },
  ]
  return (
    <div className="flex justify-between px-5">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
        />
      ))}
    </div>
  )
}
