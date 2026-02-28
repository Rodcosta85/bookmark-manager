import useBookmarks from "../../hooks/useBookmark"

const hambMenu: React.FC = () => {

    const { activeTheme, sidebar, setSidebar } = useBookmarks()

    return (
        <button
            onClick={setSidebar}
            type="button"
            className={`flex flex-col justify-between
            w-10 h-10 p-125
            rounded-8
            border ${activeTheme.cardBorder}
            cursor-pointer`}>
            <div className={`w-full h-[1.5px] 
                    rounded-full 
                    border-none 
                    ${activeTheme.hambBg}`}></div>
            <div className={`w-full h-[1.5px] 
                    rounded-full 
                    border-none 
                    ${activeTheme.hambBg}
                    ${sidebar ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-full h-[1.5px] 
                    rounded-full 
                    border-none 
                    ${activeTheme.hambBg}`}></div>
        </button>
        
    )
}

export default hambMenu