import { Routes, Route } from "react-router-dom"
import useBookmarks from "./hooks/useBookmark"
import InitialModal from "./components/Forms/InitialModal"
import LoggedIn from "./pages/loggedIn"
import Users from "./pages/Users"

function App() {

  const { activeTheme } = useBookmarks()

  return (
    <div className={`font-manrope
      w-screen h-screen 
      relative
    ${activeTheme.bg}`}>
      <Routes>
        <Route path="/" element={<InitialModal />} />
        <Route path="/home" element={<LoggedIn />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>

  )
}

export default App
