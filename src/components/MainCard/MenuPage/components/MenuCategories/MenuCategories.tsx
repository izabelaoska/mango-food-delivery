import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'
import { SmallMenuCard } from './SmallMenuCard'
import { LargeMenuCard } from './LargeMenuCard'

export const MenuCategories = () => {
  return (
    <>
      <div className="flex justify-between p-5">
        <div className="text-xl font-semibold">
          Menu Category
        </div>
        <div className="flex items-center justify-between gap-2">
          <h3>View all</h3>
          <button className="icon">
            <FontAwesomeIcon
              icon={faSquareCaretRight}
              size="lg"
              className="text-orange_fill"
            />
          </button>
        </div>
      </div>
      <SmallMenuCard />
      <LargeMenuCard />
    </>
  )
}
