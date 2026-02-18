import { Navigate, Routes, Route } from "react-router-dom"
import useBookmarks from "./hooks/useBookmark"
import InitialModal from "./components/Forms/initialModal"
import LoggedIn from "./pages/loggedIn"

function App() {

  const { activeTheme, isLoggedIn } = useBookmarks()

  return (
    <div className={`font-manrope
      w-screen h-screen 
      relative
    ${activeTheme.bg}`}>
      <Routes>
        <Route
          path="/"

          // condicional para renderizar o mesmo component só que com outro title, 
          // subtitle e buttonText caso isLoggedIn seja true?
          element={isLoggedIn ?
            <InitialModal
              title="Log in to your account"
              subtitle="Welcome back! Please enter your details."
              buttonText="Log in"
            />
            :
            <InitialModal 
            title="Create your account"
            subtitle="Join us and start saving your favorite links — organized, searchable, and always within reach."
            buttonText="Create account"
            />
          }
        />
        <Route path="/home" element={<LoggedIn />} />
      </Routes>
    </div>

  )
}

export default App
