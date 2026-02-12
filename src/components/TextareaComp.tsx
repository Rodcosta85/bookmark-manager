import magGlass from './../assets/icon-search.svg'

const TextareaComp = () => {
  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      <p>Label do input</p>
      <div className='flex justify-start items-start gap-100 
      p-150 rounded-8 
      border border-light-neutral-500
      '>
        <img
          src={magGlass}
          alt="a magnifying glass"
          className='w-5 h-5'
        />
        <textarea
        placeholder='Search'
        className='text-preset-4-medium focus:outline-none border-none bg-transparent w-full'
        />
      </div>
      <p>This is a hint text to help the user.</p>
    </div>
  )
}

export default TextareaComp