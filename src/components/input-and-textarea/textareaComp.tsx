import { useState } from 'react'
import useBookmarks from '../../hooks/useBookmark'

interface textareCompProps {
  label: string
}

const TextareaComp: React.FC<textareCompProps> = ({ label }) => {

  const { limit, activeTheme, setTextareaVal, setLimit } = useBookmarks()
  const [charCount, setCharCount] = useState(0);

  const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextareaVal(value);
    setCharCount(value.length);
  }

  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      <p className={`${activeTheme.paragraphTwo}`}>{label}</p>

      {/* textarea + contador de caracteres */}
      <div className='flex flex-col gap-1.5'>

        {/* textarea */}
        <div className={`flex justify-start items-start gap-100 
      h-fit p-150 rounded-8 
      border ${limit ? 'border-new-red-800' : `${activeTheme.inputBorder}`} 
      `}>
          <img
            src={activeTheme.iconSearch}
            alt="a magnifying glass"
            className='w-5 h-5'
          />
          <textarea
            placeholder='Search'
            className={`w-full
            text-preset-4-medium ${activeTheme.paragraphTwo} placeholder-${activeTheme.paragraphOne}
            focus:outline-none border-none 
            bg-transparent`}
            onChange={handleCharCount}
          />
        </div>
        {/* textarea */}
        <p className={`text-preset-5 self-end ${activeTheme.paragraphOne}`}>{charCount}/280</p>
      </div>
      {/* textarea + contador de caracteres */}

      <p className={`${activeTheme.paragraphTwo}`}>This is a hint text to help the user.</p>
    </div>
  )
}

export default TextareaComp