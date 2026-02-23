import useBookmarks from "../hooks/useBookmark"
import type { DataTypes } from "../types/dataTypes"
import Tag from "./tag"
import DropdownMappedCard from "./dropdownMappedCard"

interface MappedCardProps {
    item: DataTypes,
    key: string,
}

const MappedCard: React.FC<MappedCardProps> = ({ item, key }) => {

    const { activeTheme, cardDropdown, setCardDropdown } = useBookmarks()

    return (
        <div
            key={key}
            className={`flex flex-col
        h-fit
        rounded-12
        ${activeTheme.cardBg}`}>
            <div className={`flex flex-col gap-200 
            p-4
            border-b ${activeTheme.cardBorder}`}>
                {/* imagem, titulos e tres pontos */}
                <div className={`flex justify-between gap-150
                pb-4
                border-b ${activeTheme.cardBorder}`}>
                    <div className="flex gap-100">
                        <img
                            src={item.favicon}
                            alt=""
                            className={`w-11 h-11 rounded-8 border ${activeTheme.cardBorder}`}
                        />
                        <div className="flex flex-col gap-050">
                            <h2 className={`text-preset-2 ${activeTheme.headerText}`}>{item.title}</h2>
                            <a href={item.url} target="_blank">
                                <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>{item.url}</p>
                            </a>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-end">
                        <button
                            className={`flex justify-center items-center
                            w-8 h-8
                            rounded-8
                            ${cardDropdown ? 'border-2 border-teal-700' : 'border border-light-neutral-400'}
                            cursor-pointer`}
                            onClick={() => setCardDropdown("")}
                        >
                            <img src={activeTheme.iconThreeDots} alt="vertical three dots" />
                        </button>
                        {cardDropdown ?
                            <DropdownMappedCard />
                            :
                            null
                        }
                    </div>

                </div>
                {/* imagem, titulos e tres pontos */}
                <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>
                    {item.description}
                </p>
                <div className="flex flex-wrap gap-100">
                    {item.tags.map((tag, index) => (
                        <Tag label={tag} key={index} />
                    ))}
                </div>
            </div>


            {/* infos + pin */}
            <div className="flex justify-between
            pl-200 pr-200 pt-150 pb-150">
                <div className="flex gap-200
                w-fit">
                    <div className="flex items-center gap-075 w-fit">
                        <img src={activeTheme.iconEye} alt="" />
                        <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>{item.visitCount}</p>
                    </div>

                    {/* precisa de tratamento */}
                    <div className="flex items-center gap-075 w-fit">
                        <img src={activeTheme.iconClock} alt="" />
                        <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>{item.createdAt}</p>
                    </div>

                    {/* precisa de tratamento */}
                    <div className="flex items-center gap-075 w-fit">
                        <img src={activeTheme.iconCalendar} alt="" />
                        <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>{item.lastVisited}</p>
                    </div>
                </div>
                <button className="cursor-pointer">
                    <img src={activeTheme.iconPin} alt="" />
                </button>

            </div>
            {/* infos + pin */}
        </div>
    )
}

export default MappedCard