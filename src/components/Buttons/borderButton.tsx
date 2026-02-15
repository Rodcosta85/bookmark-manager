interface borderButtonProps {
    label: string
}

const borderButton: React.FC<borderButtonProps> = ({ label }) => {
    return (
        <button className="pt-3 pb-3 pl-4 pr-4 
        rounded-8 
        border border-light-neutral-400 
        text-light-neutral-900 
        cursor-pointer">
            {label}
        </button>
    )
}

export default borderButton