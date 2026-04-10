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

  const { handleDescriptionChange } = useActions();
  const { activeTheme, setAddDescription } = useBookmarks();
  const [charCount, setCharCount] = useState(0);

  // We delete handleCharCount and put everything inside handleChanges
  const handleChanges = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // 1. Define 'value' at the top level of this function
    const value = e.target.value;

    // 2. Update your state from the useBookmarks hook
    setAddDescription(value);

    // 3. Update your local character count state
    setCharCount(value.length);

    // 4. Send the value to your useActions hook
    // It now knows exactly what 'value' is!
    handleDescriptionChange(value);
  }

  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      <p className={`text-left ${activeTheme.paragraphTwo}`}>{label}</p>

      {/* textarea + contador de caracteres */}
      <div className='flex flex-col gap-1.5'>

        {/* textarea */}
        <div className={`flex justify-start items-start gap-100 
      h-fit p-150 rounded-8 
      border ${charCount > 280 || !isValid || !value ? `${activeTheme.inputBorder}` : "border-new-red-800"} 
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
      
      {charCount > 280 && (
        <p className={`
               -bottom-6
              text-preset-4-medium text-left text-new-red-800
              transition-all 0.2s ease-in-out opacity-100
            `}>Limit exceeded</p>
      )}

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

export default TextareaComp