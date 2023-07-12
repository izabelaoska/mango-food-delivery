import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'

export const OrderMenu = () => {
  return (
    <div className="flex flex-col h-full p-8">
      <div className="flex items-center justify-between gap-2">
        <div className="text-xl font-semibold">
          Order Menu
        </div>
        <div className="flex justify-between gap-2">
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
      <div>This will be order</div>
      <div className="mt-auto text-center">
        <button className="mt-auto border-none btn btn-secondary btn-md rounded-2xl btn-wide bg-orange_fill hover:bg-orange_fill">
          CHECKOUT
        </button>
      </div>
    </div>
  )
}
