// import { useEffect } from "react"
import useBookmarks from "./hooks/useBookmark"
// import type { DataTypes } from "./types/dataTypes"
// import themes from './styles/styles'
import ProfileDropdown from "./components/ProfileDropdown"
import InputComp from "./components/InputComp"
import TextareaComp from "./components/TextareaComp"
import AddBookmark from "./components/AddBookmark"
import MappedCard from "./components/mappedCard"

function App() {

  // const { data, sliderTheme, currentTheme, setData, setSliderTheme, setCurrentTheme } = useBookmarks()

  return (
    <div className="font-manrope flex flex-col gap-8 p-8">
      <ProfileDropdown  />
      <InputComp label="" />
      <TextareaComp label="" />
      <AddBookmark />
      <MappedCard />
    </div>
  )
}

export default App
