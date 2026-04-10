import type { InputHTMLAttributes } from "react"
import useBookmarks from "../../hooks/useBookmark"
import Eye from "./../../assets/eye.png"
import ClosedEye from "./../../assets/hidden.png"

interface InputCompProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  type?: 'text' | 'number' | 'email' | 'password' | 'url' | 'file',
  id: string
  value?: string,
  isValid?: boolean,
  errorText?: string
}

const InputComp: React.FC<InputCompProps> = ({ label, type, id, value, isValid, errorText, ...props }) => {

  const {
    activeTheme,
    showPassword,
    setShowPassword,
  } = useBookmarks()

  const handleEye = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }


  return (
    <div className={`relative flex flex-col gap-1.5 text-preset-4 ${id !== "search-bar" ? "mb-6" : "mb-0"}`}>
      {id !== "search-bar" ?
        (<p className={`text-left ${activeTheme.paragraphTwo}`}>{label}</p>) : null}


      {/* div da img/input + olho */}
      <div className={`
      flex justify-between items-center
      px-150 py-125 rounded-8 
      border ${!isValid || !value ? activeTheme.inputBorder : 'border-new-red-800'}
      `}>

        {/* div da img + input */}
        <div className="flex justify-start items-center gap-100 w-full">
          <img
            src={activeTheme.iconSearch}
            alt="a magnifying glass"
            className='w-5 h-5'
          />
          <input
            {...props}
            id={id}
            type={showPassword ? 'text' : type}
            name={type}
            value={value}
            // placeholder={label === 'Tags *' ? 'e.g. design, learning, tools' : ""}
            className={`text-preset-4-medium ${activeTheme.paragraphTwo} placeholder-${activeTheme.paragraphOne} 
        focus:outline-none border-none 
        bg-transparent [&::-internal-autofill-selected]:transparent
        w-[70%]`}
          />
        </div>
        {/* div da img + input */}

        {type === "password" ? (
          <button
            onClick={handleEye}
            className="cursor-pointer"
          >
            <img
              src={showPassword ? Eye : ClosedEye}
              alt={showPassword ? 'Hide password' : 'Show password'}
              className="w-5 h-5
              transition-all duration-200 ease-in-out transform active:scale-90 
              opacity-70 hover:opacity-100"
            />
          </button>
        ) : null}

      </div>
      {/* div da img/input + olho */}


      {
        id !== "search-bar" ?
          (
            <p className={`
              absolute -bottom-6
              text-preset-4-medium text-left text-new-red-800
              transition-all 0.2s ease-in-out
              ${!isValid || !value ? 'opacity-0' : 'opacity-100'}
            `}>
              {errorText}
            </p>
          )
          :
          null
      }


    </div>
  )
}

export default InputComp