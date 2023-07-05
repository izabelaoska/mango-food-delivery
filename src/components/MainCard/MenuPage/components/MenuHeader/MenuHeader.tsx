import { SearchTab } from './SearchTab'
import { SmallHero } from './SmallHero'

export const MenuHeader = () => {
  return (
    <>
      <div className="flex justify-between flex-grow-0 flex-shrink p-8 h-1/6">
        <h1 className="pt-2 text-xl font-semibold">
          Today Menu
        </h1>
        <div>
          <SearchTab />
        </div>
      </div>
      <div>
        <SmallHero />
      </div>
    </>
  )
}
