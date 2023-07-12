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
    <button className="button">
      <FontAwesomeIcon
        icon={icon}
        size="xl"
        className="text-orange_fill"
      />
      <p className="text-sm">{label}</p>
      <FontAwesomeIcon
        icon={faCircleRight}
        className="text-orange_fill"
        size="sm"
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
    <div className="flex justify-between px-8">
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
