import { useEffect } from "react"
import { type MouseEvent } from "react"
import useBookmarks from "./hooks/useBookmark"
// import type { DataTypes } from "./types/dataTypes"
import themes from './styles/styles'
import ProfileDropdown from "./components/profileDropdown"
import InputComp from "./components/inputComp"
import TextareaComp from "./components/textareaComp"
import AddBookmark from "./components/addBookmark"
import MappedCard from "./components/mappedCard"
import SidebarComp from "./components/sidebarComp"
import SortBy from './components/sortBy'
import whiteSun from './assets/icon-white-sun.svg'

function App() {

  const { sidebar, sortDropdown, activeTheme, setSidebar, setCardDropdown, setSortDropdown } = useBookmarks()

  const handleSideBar = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSidebar()
  }

  const handleCardDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setCardDropdown
  }

  const handleSortDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSortDropdown()
  }




  return (
    <div className={`font-manrope flex flex-col gap-8 p-8 relative
    ${activeTheme.bg}`}>
      <ProfileDropdown />
      <AddBookmark />
      <MappedCard handleCardDropdown={handleCardDropdown} />
      <button
        onClick={handleSideBar}
        type="button"
        className="w-fit cursor-pointer">
        OPEN SIDE BAR
      </button>
      {sidebar ?
        <SidebarComp handleSidebar={handleSideBar} />
        :
        null
      }
      <div className="relative w-fit">
        <button
          onClick={handleSortDropdown}
          type="button"
          className="w-fit cursor-pointer">OPEN SORT BY</button>
      </div>
      {sortDropdown ?
        <SortBy />
        :
        null
      }
    </div>

  )
}

export default App
