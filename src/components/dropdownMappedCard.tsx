import { useState } from "react"
import useBookmarks from "../hooks/useBookmark"
import type { DataTypes } from "../types/dataTypes"

interface dropdownCardProps {
    item: DataTypes
}

const dropdownMappedCard: React.FC<dropdownCardProps> = ({ item }) => {

    const { activeTheme } = useBookmarks()
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = async (url: string, id: any) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id); // Set the ID of the item just clicked
      
      // Reset the feedback after 2 seconds
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

    return (
        <div className={`absolute top-500 z-99
        flex flex-col gap-150
        w-50 h-fit p-100
        rounded-8
        ${activeTheme.secondaryBg}
        border ${activeTheme.cardBorder}`}>
            <a href={item.url} target="_blank">
                <button className={`flex justify-start items-center gap-125 
                w-full p-100
                rounded-8
                border-2 border-transparent hover:border-teal-700
                text-preset-4 ${activeTheme.paragraphOne}
                cursor-pointer`}>
                    <img src={activeTheme.iconVisit} alt="" />
                    Visit
                </button>
            </a>

            <button 
            onClick={() => handleCopy(item.url, item.id)}
            className={`flex justify-start items-center gap-125 
            p-100
            rounded-8
            border-2 border-transparent hover:border-teal-700
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img src={activeTheme.iconCopy} alt="" />
                {copiedId === item.id ? 'Copied 🎉' : 'Copy URL'}
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