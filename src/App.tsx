import { Routes, Route } from "react-router-dom"
import StartingPage from "./pages/startingPage"
import LoggedIn from "./pages/loggedIn"
import Users from "./pages/Users"

function App() {
  return (
      <Routes>
        <Route path="/" element={<StartingPage />} />
        <Route path="/home" element={<LoggedIn />} />
        <Route path="/users" element={<Users />} />
      </Routes>
  )
}

export default App
