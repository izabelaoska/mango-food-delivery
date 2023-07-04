import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const SearchTab = () => {
  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        placeholder="Search by food name"
        className="w-full max-w-xs pr-8 input rounded-3xl"
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        color="#9CA3AF"
        className="absolute pr-2 transform -translate-y-1/2 right-2 top-1/2"
      />
    </div>
  )
}
