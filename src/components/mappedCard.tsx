import useBookmarks from "../hooks/useBookmark"
import Tag from "./tag"
import FreeCodeCamp from './../assets/favicon-freecodecamp.png'
import DropdownMappedCard from "./dropdownMappedCard"

interface MappedCardProps {
    handleCardDropdown: (e: any) => void
}

const MappedCard: React.FC<MappedCardProps> = ({ handleCardDropdown }) => {

    const { currentTheme, cardDropdown } = useBookmarks()

    return (
        <div className="flex flex-col
        w-84.5 h-fit
        rounded-12
        border border-black
        ">
            <div className="flex flex-col gap-200 
            p-4
            border-b border-b-light-neutral-300
            ">
                {/* imagem, titulos e tres pontos */}
                <div className="flex justify-between gap-150
                pb-4
                border-b border-b-light-neutral-300">
                    <div className="flex gap-100">
                        <img
                            src={FreeCodeCamp}
                            alt=""
                            className="w-11 h-11 rounded-8 border border-light-neutral-100"
                        />
                        <div className="flex flex-col gap-050">
                            <h2 className="text-preset-2 text-light-neutral-900">Frontend Mentor</h2>
                            <p className="text-preset-5 text-light-neutral-800">frontendmentor.io</p>
                        </div>
                    </div>

                    <div className="relative flex flex-col items-end">
                        <button
                            className={`flex justify-center items-center
                            w-8 h-8
                            rounded-8
                            border ${cardDropdown ? 'border-2 border-teal-700' : 'border-light-neutral-400'}
                            cursor-pointer`}
                            onClick={handleCardDropdown}
                        >
                            <img src={`${currentTheme.iconThreeDots}`} alt="" />
                        </button>
                        {cardDropdown ?
                        <DropdownMappedCard />
                        :
                        null
                        }
                    </div>

                </div>
                {/* imagem, titulos e tres pontos */}
                <p className="text-preset-4-medium text-light-neutral-800">Improve your front-end coding skills by building real projects. Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs.</p>
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
                        <img src={`${currentTheme.iconEye}`} alt="" />
                        <p className="text-preset-5 text-light-neutral-800">47</p>
                    </div>
                    <div className="flex items-center gap-075 w-fit">
                        <img src={`${currentTheme.iconClock}`} alt="" />
                        <p className="text-preset-5 text-light-neutral-800">23 Sep </p>
                    </div>
                    <div className="flex items-center gap-075 w-fit">
                        <img src={`${currentTheme.iconCalendar}`} alt="" />
                        <p className="text-preset-5 text-light-neutral-800">15 Jan</p>
                    </div>
                </div>
                <button className="cursor-pointer">
                    <img src={`${currentTheme.iconPin}`} alt="" />
                </button>

            </div>
            {/* infos + pin */}
        </div>
    )
}

export default MappedCard