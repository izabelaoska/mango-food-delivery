import {
  faBell,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EmojiAvatar from '../../../../resources/images/EmojiAvatar.png'

export const OrderBasketHeader = () => {
  return (
    <>
      <div className="px-8 py-4">
        <div className="flex items-center justify-end gap-4">
          <FontAwesomeIcon
            icon={faBell}
            size="lg"
            className="p-4 rounded-full bg-secondary text-orange_fill"
          />
          <img src={EmojiAvatar} className="w-16 h-16" />
          <div>
            <h2 className="font-semibold text-md">
              Jeremy
            </h2>
            <p className="text-sm">User</p>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="lg"
            className="p-4 rounded-full bg-secondary text-orange_fill"
          />
        </div>
      </div>
    </>
  )
}
