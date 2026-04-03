import { useState } from 'react'
import useBookmarks from '../../hooks/useBookmark'
import { useActions } from '../../hooks/useActions'

interface textareCompProps {
  label: string,
  id: string,
  value: string,
  isValid: boolean,
  errorText: string
}

const TextareaComp: React.FC<textareCompProps> = ({ label, id, value, isValid, errorText, ...props }) => {

  const { handleTextsChange } = useActions()
  const { limit, activeTheme, setTextareaVal } = useBookmarks()
  const [charCount, setCharCount] = useState(0);

  const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextareaVal(value);
    setCharCount(value.length);
  }

  const handleChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleCharCount(e)
    handleTextsChange(value)
  }

  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      <p className={`text-left ${activeTheme.paragraphTwo}`}>{label}</p>

      {/* textarea + contador de caracteres */}
      <div className='flex flex-col gap-1.5'>

        {/* textarea */}
        <div className={`flex justify-start items-start gap-100 
      h-fit p-150 rounded-8 
      border ${limit || isValid || !value ? `${activeTheme.inputBorder}` : "border-new-red-800"} 
      `}>
          <img
            src={activeTheme.iconSearch}
            alt="a magnifying glass"
            className='w-5 h-5'
          />
          <textarea
            {...props}
            className={`w-full
            text-preset-4-medium ${activeTheme.paragraphTwo} placeholder-${activeTheme.paragraphOne}
            focus:outline-none border-none 
            bg-transparent`}
            onChange={handleChanges}
          />
        </div>
        {/* textarea */}
        <p className={`text-preset-5 self-end ${activeTheme.paragraphOne}`}>{charCount}/280</p>
      </div>
      {/* textarea + contador de caracteres */}

      {
        id !== "search-bar" ?
          (
            <p className={`
              absolute -bottom-6
              text-preset-4-medium text-left text-new-red-800
              transition-all 0.2s ease-in-out
              ${isValid || !value ? 'opacity-0' : 'opacity-100'}
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

export default TextareaComp