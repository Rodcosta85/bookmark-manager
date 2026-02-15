import useBookmarks from "../hooks/useBookmark"
import iconCheck from './../assets/icon-check.svg'

interface sidebarProps {
    handleSidebar: (e: any) => void
}

const SidebarComp: React.FC<sidebarProps> = ({ handleSidebar }) => {

    const { bookmarks, contentType, currentTheme, setHomeArchived } = useBookmarks()

    const allTags = bookmarks.flatMap(item => item.tags);
    console.log(allTags);

    const elementCount = allTags.reduce((acc: Record<string, number>, tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
        return acc;
    }, {});
    console.log(elementCount);

    const sortedUniqueTags = Object.keys(elementCount).sort((a, b) => 
    a.localeCompare(b, undefined, { sensitivity: 'base' })
);

    return (
        <div className={`fixed top-0 left-0 z-99 
        w-screen h-screen
        bg-[#00000083]`}>
            <div className="flex flex-col gap-300
            w-74 h-screen p-250
            bg-white">

                {/* img + btn */}
                <div className="flex justify-between items-start
                P-125">
                    <img src={`${currentTheme.logo}`} alt="the logo for Bookmark Manager" />
                    <button
                        type="button"
                        onClick={handleSidebar}
                        className="cursor-pointer">
                        <img src={currentTheme.iconClose} alt="" />
                    </button>
                </div>
                {/* img + btn */}

                <div className="flex flex-col gap-200">

                    {/* home + archived */}
                    <div>
                        <button 
                        onClick={() => setHomeArchived('home')}
                        className={`flex justify-start items-center gap-150
                        w-full pl-150 pr-150 pt-100 pb-100
                        rounded-6
                        ${contentType === 'home' ? 'bg-light-neutral-100' : 'bg-transparent transtion-colors durantion-200 ease-in-out'}
                        text-preset-3 text-light-neutral-900
                        cursor-pointer`}>
                            <img src={`${currentTheme.iconHome}`} alt="" />
                            Home
                        </button>
                        <button 
                        onClick={() => setHomeArchived('archived')}
                        className={`flex justify-start items-center gap-150
                        w-full pl-150 pr-150 pt-100 pb-100
                        rounded-6
                        ${contentType === 'archived' ? 'bg-light-neutral-100' : 'bg-transparent transition-colors durantion-200 ease-in-out'}
                        text-preset-3 text-light-neutral-900
                        cursor-pointer`}>
                            <img src={`${currentTheme.iconArchive}`} alt="" />
                            Archived
                        </button>
                    </div>
                    {/* home + archived */}


                    {/* tags */}
                    <div className="flex flex-col gap-150
                    pl-150 pr-150">
                        <p className="text-preset-5 text-light-neutral-800 font-bold">TAGS</p>
                        <div className="flex flex-col gap-200">
                            {/* checkbox/label + numero de ocorrencias */}
                            {sortedUniqueTags.map((item, id) => (
                                <div
                                    key={id}
                                    className="flex justify-between items-center"
                                >
                                    {/* checkbox + label */}
                                    <div className="flex items-center gap-100">
                                        <button className="flex justify-center items-center
                                    w-4 h-4
                                    rounded-4
                                    border border-light-neutral-500
                                    cursor-pointer">
                                            <img src={iconCheck} alt="" />
                                        </button>
                                        <p className="text-preset-3 text-light-neutral-800">{item}</p>
                                    </div>
                                    {/* checkbox + label */}

                                    <p className="pt-025 pb-025 pl-100 pr-100
                                    rounded-full 
                                    bg-light-neutral-100
                                    border border-light-neutral-300
                                    text-center text-preset-5 text-light-neutral-800
                                    ">
                                        {elementCount[item]}
                                    </p>
                                </div>
                            ))}
                            {/* checkbox/label + numero de ocorrencias */}
                        </div>



                    </div>
                    {/* tags */}


                </div>
            </div>
        </div>
    )
}

export default SidebarComp