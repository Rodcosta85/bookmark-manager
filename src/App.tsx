// import { useEffect } from "react"
import { type MouseEvent } from "react"
import useBookmarks from "./hooks/useBookmark"
// import type { DataTypes } from "./types/dataTypes"
// import themes from './styles/styles'
import ProfileDropdown from "./components/profileDropdown"
import InputComp from "./components/inputComp"
import TextareaComp from "./components/textareaComp"
import AddBookmark from "./components/addBookmark"
import MappedCard from "./components/mappedCard"
import SidebarComp from "./components/sidebarComp"

function App() {

  const { sidebar, setSidebar } = useBookmarks()

  const handleSideBar = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setSidebar()
  }

  return (
    <div className="font-manrope flex flex-col gap-8 p-8 relative">
      <ProfileDropdown />
      <InputComp label="" />
      <TextareaComp label="" />
      <AddBookmark />
      <MappedCard />
      <button
        onClick={handleSideBar}
        type="button"
        className="cursor-pointer">
        OPEN SIDE BAR
      </button>
      {sidebar ?
        <SidebarComp handleSidebar={handleSideBar} />
        :
        null
      }
    </div>
  )
}

export default App
