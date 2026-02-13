import magGlass from './../assets/icon-search.svg'

interface inputCompProps {
  label: string
}

const InputComp: React.FC<inputCompProps> = ({ label }) => {


  return (
    <div className="flex flex-col gap-1.5 text-preset-4">
      <p className="text-light-neutral-900">{label}</p>
      <div className='flex justify-start items-center gap-100 
      p-150 rounded-8 
      border border-light-neutral-500
      '>
        <img
          src={magGlass}
          alt="a magnifying glass"
          className='w-5 h-5'
        />
        <input 
        type="text" 
        placeholder='Search'
        className='text-preset-4-medium focus:outline-none border-none bg-transparent'
        />
      </div>
      <p>This is a hint text to help the user.</p>
    </div>
  )
}

export default InputComp