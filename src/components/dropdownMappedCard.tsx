import useBookmarks from "../hooks/useBookmark"


const dropdownMappedCard = () => {

    const { activeTheme } = useBookmarks()

    return (
        <div className={`absolute top-500
        flex flex-col gap-150
        w-50 h-fit p-100
        rounded-8
        ${activeTheme.secondaryBg}
        border ${activeTheme.cardBorder}`}>
            <button className={`flex justify-start items-center gap-125 
            p-100
            rounded-8
            border-2 border-transparent hover:border-teal-700
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img src={activeTheme.iconVisit} alt="" />
                Visit
            </button>
            <button className={`flex justify-start items-center gap-125 
            p-100
            rounded-8
            border-2 border-transparent hover:border-teal-700
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img src={activeTheme.iconCopy} alt="" />
                Copy URL
            </button>

            {/* se já estiver arquivado, pin nao aparece mais */}
            <button className={`flex justify-start items-center gap-125 
            p-100
            rounded-8
            border-2 border-transparent hover:border-teal-700
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img src={activeTheme.iconPin} alt="" />
                Pin
            </button>

            {/* se já estiver arquivado, edit nao aparece mais */}
            <button className={`flex justify-start items-center gap-125 
            p-100
            rounded-8
            border-2 border-transparent hover:border-teal-700
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img src={activeTheme.iconEdit} alt="" />
                Edit
            </button>

            {/* se já estiver arquivado, o texto muda para "unarchive e o icone tbm" */}
            <button className={`flex justify-start items-center gap-125 
            p-100
            rounded-8
            border-2 border-transparent hover:border-teal-700
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img src={activeTheme.iconArchive} alt="" />
                Archive
            </button>

            {/* se já estiver arquivado, a opção de deletar aparece" */}
            {/* <button classNme="{`flex justify-start items-center gap-125 
            p-100
            rounded-8
            border-2 border-transparent hover:border-teal-700
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img src={`${currentTheme.iconArchive}`} alt="" />
                Delete Permanently
            </button> */}
        </div>
    )
} 

export default dropdownMappedCard