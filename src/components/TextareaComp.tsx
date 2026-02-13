import { useState } from 'react'
import useBookmarks from '../hooks/useBookmark'
import magGlass from './../assets/icon-search.svg'

interface textareCompProps {
  label: string
}

const TextareaComp: React.FC<textareCompProps> = ({ label }) => {

  const { inputs, setInputs, limit, setLimit } = useBookmarks()
  const [charCount, setCharCount] = useState(0);

  const handleCharCount = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInputs(value);
    setCharCount(value.length);
  }

  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      <p className="text-light-neutral-900">{label}</p>

      {/* textarea + contador de caracteres */}
      <div className='flex flex-col gap-1.5'>

        {/* textarea */}
        <div className={`flex justify-start items-start gap-100 
      h-fit p-150 rounded-8 
      border ${limit ? 'border-new-red-800' : 'border-light-neutral-500'} 
      `}>
          <img
            src={magGlass}
            alt="a magnifying glass"
            className='w-5 h-5'
          />
          <textarea
            placeholder='Search'
            className='text-preset-4-medium focus:outline-none border-none bg-transparent w-full'
            onChange={handleCharCount}
          />
        </div>
        {/* textarea */}
        <p className='text-preset-5 self-end'>{charCount}/280</p>
      </div>
      {/* textarea + contador de caracteres */}

      <p>This is a hint text to help the user.</p>
    </div>
  )
}

export default TextareaComp