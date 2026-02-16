import { type MouseEvent } from "react"
import useBookmarks from "./hooks/useBookmark"
// import type { DataTypes } from "./types/dataTypes"
import ProfileDropdown from "./components/profileDropdown"
import AddBookmark from "./components/addBookmark"
import MappedCard from "./components/mappedCard"
import SidebarComp from "./components/sidebarComp"
import SortBy from "./components/sortBy"
import SortButton from "./components/Buttons/sortButton"
import HambMenu from "./components/Buttons/hambMenu"
import DialogModal from "./components/dialogModal"


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
      <HambMenu handleSideBar={handleSideBar} />
      {sidebar ?
        <SidebarComp handleSidebar={handleSideBar} />
        :
        null
      }
      <div className="flex flex-col gap-2.5 w-fit h-fit">
        <SortButton handleSortDropdown={handleSortDropdown} />
        {sortDropdown ?
          <SortBy />
          :
          null
        }
      </div>
      <DialogModal
        title="Archive bookmark"
        subtitle="Are you sure you want to archive this bookmark?" />
    </div>

  )
}

export default App
