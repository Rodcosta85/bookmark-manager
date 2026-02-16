import useBookmarks from "../hooks/useBookmark"

interface inputCompProps {
  label: string
}

const InputComp: React.FC<inputCompProps> = ({ label }) => {

  const { activeTheme } = useBookmarks()

  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      <p className={`${activeTheme.paragraphTwo}`}>{label}</p>
      <div className={`flex justify-start items-center gap-100 
      p-150 rounded-8 
      border ${activeTheme.inputBorder}`}>
        <img
          src={activeTheme.iconSearch}
          alt="a magnifying glass"
          className='w-5 h-5'
        />
        <input 
        type="text" 
        placeholder='Search'
        className={`text-preset-4-medium ${activeTheme.paragraphTwo} 
        focus:outline-none border-none 
        bg-transparent`}
        />
      </div>
      <p className={`${activeTheme.paragraphTwo}`}>This is a hint text to help the user.</p>
    </div>
  )
}

export default InputComp