import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'
import { SmallMenuCard } from './SmallMenuCard'

export const MenuCategories = () => {
  return (
    <>
      <div className="flex justify-between p-5">
        <div className="text-xl font-semibold">
          Menu Category
        </div>
        <div className="flex justify-between gap-2">
          <h3>View all</h3>
          <div>
            <FontAwesomeIcon
              icon={faSquareCaretRight}
              color="#FB9401"
              size="lg"
            />
          </div>
        </div>
      </div>
      <SmallMenuCard />
    </>
  )
}
