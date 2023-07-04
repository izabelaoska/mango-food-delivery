import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { HomePage } from '../../pages/HomePage'
import { ChatPage } from '../../pages/ChatPage'
import { FavouritesPage } from '../../pages/FavouritesPage'
import { SettingsPage } from '../../pages/SettingsPage'

// TODO: LOGIN AND SIGNUP PAGES -> if not logged in redirected to them
// + ADD Account settings which will redirect to Settings Page

export const MainCard = () => {
  return (
    <div className="flex w-full h-full px-20">
      <div className="flex flex-row w-full shadow-xl rounded-3xl bg-[#FFFFFF]">
        <div className="justify-center hidden md:flex md:w-24">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route
            path="/favourites"
            element={<FavouritesPage />}
          />
          <Route
            path="/settings"
            element={<SettingsPage />}
          />
        </Routes>
      </div>
    </div>
  )
}
