import useBookmarks from "../hooks/useBookmark"
import type { SortType } from "../hooks/useBookmark"

const sortBy = () => {

    const { activeTheme, activeSort, setSortType } = useBookmarks()


    return (
        <div className={`
        absolute top-600 z-99   
        flex flex-col gap-200
        w-50 h-fit p-100
        rounded-8
        ${activeTheme.secondaryBg}
        shadow-xl`}>
            <button
                onClick={() => setSortType("recently_added")}
                className={`flex justify-between items-center
            w-full p-100
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                Recently Added
                <img
                    src={activeTheme.iconCheck}
                    alt="a check icon"
                    className={activeSort === 'recently_added' ? 'opacity-100' : 'opacity-0 transition duration-200 ease-in-out'}
                />
            </button>
            <button
                onClick={() => setSortType("recently_visited")}
                className={`flex justify-between items-center
            w-full p-100
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                Recently Visited
                <img
                    src={activeTheme.iconCheck}
                    alt="a check icon"
                    className={activeSort === 'recently_visited' ? 'opacity-100' : 'opacity-0 transition duration-100 ease-in-out'}
                />
            </button>
            <button
                onClick={() => setSortType('most_visited')}
                className={`flex justify-between items-center
            w-full p-100
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                Most Visited
                <img
                    src={activeTheme.iconCheck}
                    alt="a check icon"
                    className={activeSort === 'most_visited' ? 'opacity-100' : 'opacity-0 transition duration-100 ease-in-out'}
                />
            </button>
        </div>
    )
}

export default sortBy