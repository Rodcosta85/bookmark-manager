interface greenButtonProps {
    label: string,
    type?: "button" | "submit" | "reset";
}

const greenButton: React.FC<greenButtonProps> = ({ label, type="submit" }) => {
  return (
    <button 
    type={type}
    className="pt-3 pb-3 pl-4 pr-4 
    rounded-8 
    bg-teal-700 
    text-white cursor-pointer">
        {label}
    </button>
  )
}

export default greenButton