import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faCommentDots,
  faHeart,
  faGear,
} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center w-32">
      <div className="mt-10">
        <FontAwesomeIcon icon={faHome} color="#FB9401" size="lg" />
      </div>
      <div className="mt-8">
        <FontAwesomeIcon icon={faCommentDots} color="#FB9401" size="lg" />
      </div>
      <div className="mt-8">
        <FontAwesomeIcon icon={faHeart} color="#FB9401" size="lg" />
      </div>
      <div className="mt-8">
        <FontAwesomeIcon icon={faGear} color="#FB9401" size="lg" />
      </div>
    </div>
  )
}
