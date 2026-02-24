import useBookmarks from "../../hooks/useBookmark"
import Eye from "./../../assets/eye.png"
import ClosedEye from "./../../assets/hidden.png"

interface inputCompProps {
  label: string,
  type?: 'text' | 'number' | 'email' | 'password',
  id: string
}

const InputComp: React.FC<inputCompProps> = ({ label, type, id }) => {

  const { activeTheme, showPassword, setShowPassword } = useBookmarks()

  const handleEye = (e: React.MouseEvent) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }


  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      {id !== "search-bar" ? 
      (<p className={`text-left ${activeTheme.paragraphTwo}`}>{label}</p>) : null}
      

      {/* div da img/input + olho */}
      <div className={`
      flex justify-between items-center
      px-150 py-125 rounded-8 
      border ${activeTheme.inputBorder}
      `}>

        {/* div da img + input */}
        <div className="flex justify-start items-center gap-100">
          <img
            src={activeTheme.iconSearch}
            alt="a magnifying glass"
            className='w-5 h-5'
          />
          <input
            id={id}
            type={showPassword ? 'text' : type}
            name={type}
            placeholder={label === 'Tags *' ? 'e.g. design, learning, tools' : 'Search'}
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
      {id !== "search-bar" ? (<p className={`text-left ${activeTheme.paragraphTwo}`}>This is a hint text to help the user.</p>) : null}
      
    </div>
  )
}

export default InputComp