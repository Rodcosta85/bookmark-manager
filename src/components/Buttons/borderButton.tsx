import useBookmarks from "../../hooks/useBookmark"

interface borderButtonProps {
    label: string
}

const borderButton: React.FC<borderButtonProps> = ({ label }) => {
    
    const { activeTheme } = useBookmarks()

    return (
        <button className={`pt-3 pb-3 pl-4 pr-4 
        rounded-8 
        border ${activeTheme.buttonBorder} 
        ${activeTheme.headerText} 
        cursor-pointer`}>
            {label}
        </button>
    )
}

export default borderButton