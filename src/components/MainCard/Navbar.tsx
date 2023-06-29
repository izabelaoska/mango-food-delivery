import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faCommentDots,
  faHeart,
  faGear,
} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <div className="flex flex-col items-center">
      <Link to="/" className=" mt-14">
        <FontAwesomeIcon icon={faHome} color="#FB9401" size="lg" />
      </Link>
      <Link to="/chat" className="mt-10">
        <FontAwesomeIcon icon={faCommentDots} color="#FB9401" size="lg" />
      </Link>
      <Link to="/favourites" className="mt-10">
        <FontAwesomeIcon icon={faHeart} color="#FB9401" size="lg" />
      </Link>
      <Link to="/settings" className="mt-10">
        <FontAwesomeIcon icon={faGear} color="#FB9401" size="lg" />
      </Link>
    </div>
  )
}
