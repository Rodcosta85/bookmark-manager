import useBookmarks from "../hooks/useBookmark"
import Tag from "./tag"
import FreeCodeCamp from './../assets/favicon-freecodecamp.png'
import DropdownMappedCard from "./dropdownMappedCard"

const MappedCard: React.FC = () => {

    const { activeTheme, cardDropdown, setCardDropdown } = useBookmarks()

    return (
        <div className={`flex flex-col
        w-84.5 h-fit
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
                            src={FreeCodeCamp}
                            alt=""
                            className={`w-11 h-11 rounded-8 border ${activeTheme.cardBorder}`}
                        />
                        <div className="flex flex-col gap-050">
                            <h2 className={`text-preset-2 ${activeTheme.headerText}`}>Frontend Mentor</h2>
                            <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>frontendmentor.io</p>
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
                <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.</p>
                <div className="flex flex-wrap gap-100">
                    <Tag label="Practice" />
                    <Tag label="Learning" />
                    <Tag label="Community" />
                </div>
            </div>


            {/* infos + pin */}
            <div className="flex justify-between
            pl-200 pr-200 pt-150 pb-150">
                <div className="flex gap-200
                w-fit">
                    <div className="flex items-center gap-075 w-fit">
                        <img src={activeTheme.iconEye} alt="" />
                        <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>47</p>
                    </div>
                    <div className="flex items-center gap-075 w-fit">
                        <img src={activeTheme.iconClock} alt="" />
                        <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>23 Sep </p>
                    </div>
                    <div className="flex items-center gap-075 w-fit">
                        <img src={activeTheme.iconCalendar} alt="" />
                        <p className={`text-preset-5 ${activeTheme.paragraphOne}`}>15 Jan</p>
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