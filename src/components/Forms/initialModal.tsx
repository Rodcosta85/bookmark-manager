import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import useBookmarks from "../../hooks/useBookmark"
import InputComp from "../input-and-textarea/inputComp"
import type { BaseSyntheticEvent } from "react";

const InitialModal: React.FC = () => {

  const navigate = useNavigate();

  const { activeTheme, isLoggedIn, setIsLoggedIn } = useBookmarks()
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")


  async function handleLogin(e: BaseSyntheticEvent) {
    e.preventDefault();

    try {
      // 2. Pass the hardcoded variables here
      const userCredential = await signInWithEmailAndPassword(auth, userEmail, userPassword);

      console.log("Success! Firebase logged in:", userCredential.user);

      // 2. ONLY navigate to home if the login was successful
      navigate("/home");

    } catch (error: any) {
      // 3. Catch wrong passwords or invalid emails
      console.error("Login failed:", error.message);
      alert("Invalid email or password!");
    }
  }

  async function handleCreateAccount(e: BaseSyntheticEvent) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className={`
    flex flex-col gap-8 
    w-md h pt-500 pb-500 pl-400 pr-400
    rounded-12
    ${activeTheme.cardBg}
    border ${activeTheme.cardBorder}`}>
      <img
        src={activeTheme.logo}
        alt="the logo for Bookmark Manager"
        className="w-53.5 h-8"
      />
      <div className="flex flex-col gap-075">
        <h2 className={`text-preset-1 ${activeTheme.headerText}`}>
          {isLoggedIn ? "Log in to your account" : "Create your account"}
        </h2>
        <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>
          {
            isLoggedIn
              ? "Welcome back! Please enter your details."
              : "Join us and start saving your favorite links — organized, searchable, and always within reach."
          }
        </p>
      </div>
      <form
        onSubmit={isLoggedIn ? handleLogin : handleCreateAccount}
        className="flex flex-col gap-4">
        {isLoggedIn ?
          <div className="flex flex-col gap-4">
            <InputComp
              label="Email"
              type="email"
              id=""
              onChange={(e) => setUserEmail(e.target.value)} />
            <InputComp
              label="Password"
              type="password"
              id=""
              onChange={(e) => setUserPassword(e.target.value)} />
          </div>
          :
          <div className="flex flex-col gap-4">
            <InputComp label="Full name *" type="text" id="" />
            <InputComp label="Email address *" type="email" id="" />
            <InputComp label="Password *" type="password" id="" />
          </div>
        }
        <button
          type="submit"
          className="w-full pl-200 pr-200 pt-150 pb-150
        rounded-8
        text-center text-preset-3 text-white
        bg-teal-700 cursor-pointer">
          {isLoggedIn ? "Log in" : "Create account"}
        </button>
      </form>

      {isLoggedIn ? (
        <div className="flex flex-col gap-150">

          {/* forgot password */}
          <div className="flex justify-center items-center gap-075">
            <span className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>Forgot your password?</span>
            <button className={`text-preset-4 ${activeTheme.paragraphTwo} cursor-pointer`}>Reset it</button>
          </div>

          {/* dont have an account */}
          <div className="flex justify-center items-center gap-075">
            <span className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>Don’t have an account?</span>
            <button className={`text-preset-4 ${activeTheme.paragraphTwo} cursor-pointer`} onClick={setIsLoggedIn}>Sign up</button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-075">
          <span className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>Already have an account?</span>
          <button className={`cursor-pointer text-preset-4 ${activeTheme.paragraphTwo}`} onClick={setIsLoggedIn}>Log in</button>
        </div>
      )}
      {/* forgot password e dont have an account */}
    </div>
  )
}

export default InitialModal