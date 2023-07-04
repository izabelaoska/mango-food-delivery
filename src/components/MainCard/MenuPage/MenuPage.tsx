import { MenuCategories } from './components/MenuCategories/MenuCategories'
import { MenuHeader } from './components/MenuHeader/MenuHeader'

export const MenuPage = () => {
  return (
    <div className="flex flex-col h-full">
      <MenuHeader />
      <MenuCategories />
    </div>
  )
}
