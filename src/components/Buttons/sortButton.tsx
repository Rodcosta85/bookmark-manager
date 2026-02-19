import useBookmarks from "../../hooks/useBookmark"

const sortButton: React.FC = () => {

    const { activeTheme, setSortDropdown } = useBookmarks()

    return (
        <button 
        onClick={setSortDropdown}
        type="button"
        className={`flex justify-between items-center gap-200
        w-fit h-10.5 pl-150 pr-150 pt-125 pb-125
        rounded-8
        border ${activeTheme.cardBorder}
        ${activeTheme.cardBg}
        text-preset-3 ${activeTheme.paragraphTwo}
        cursor-pointer`}>
            <img src={activeTheme.iconSort} alt="two arrows, one pointing up, the other point down" />
            Sort by
        </button>
    )
}

export default sortButton