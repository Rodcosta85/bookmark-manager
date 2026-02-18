import useBookmarks from "../hooks/useBookmark"

interface inputCompProps {
  label: string,
  type?: 'text' | 'number' | 'email' | 'password'
}

const InputComp: React.FC<inputCompProps> = ({ label, type }) => {

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
        type={type} 
        name={type}
        placeholder={label === 'Tags *' ? 'e.g. design, learning, tools' : 'Search'}
        className={`text-preset-4-medium ${activeTheme.paragraphTwo} placeholder-${activeTheme.paragraphOne} 
        focus:outline-none border-none 
        bg-transparent`}
        />
      </div>
      <p className={`${activeTheme.paragraphTwo}`}>This is a hint text to help the user.</p>
    </div>
  )
}

export default InputComp