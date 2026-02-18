import useBookmarks from "../../hooks/useBookmark"

interface HambMenuProps {
    handleSideBar: (e: any) => void
}

const hambMenu: React.FC<HambMenuProps> = ({ handleSideBar }) => {

    const { activeTheme, sidebar } = useBookmarks()

    return (
        <div className={`flex justify-end items-center w-full h-15`}>
            <button 
            onClick={handleSideBar}
            type="button"
            className={`flex flex-col justify-between
            w-10 h-10 p-125
            rounded-8
            border ${activeTheme.cardBorder}
            cursor-pointer`}>
                <div className={`w-full h-[1.5px] 
                    rounded-full 
                    border-none 
                    ${activeTheme.hambBg}
                    transition-transform duration-200 ease-in-out ${sidebar && 'transform rotate-45 translate-y-[8px]'}`}></div>
                <div className={`w-full h-[1.5px] 
                    rounded-full 
                    border-none 
                    ${activeTheme.hambBg}
                    ${sidebar ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`w-full h-[1.5px] 
                    rounded-full 
                    border-none 
                    ${activeTheme.hambBg}
                    transition-transform duration-200 ease-in-out ${sidebar && 'transform -rotate-45 -translate-y-[8px]'}`}></div>
            </button>
        </div>
    )
}

export default hambMenu