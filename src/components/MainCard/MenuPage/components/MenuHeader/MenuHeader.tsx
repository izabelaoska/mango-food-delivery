import { SearchTab } from './SearchTab'

export const MenuHeader = () => {
  return (
    <div className="flex justify-between flex-grow-0 flex-shrink p-8 border-2 h-1/3">
      <h1 className="pt-2 text-2xl font-semibold">
        Today Menu
      </h1>
      <div>
        <SearchTab />
      </div>
    </div>
  )
}
