import { useEffect } from "react"
import useBookmarks from "../hooks/useBookmark"
import MappedCard from "../components/mappedCard"
import SortBy from "../components/sortBy"
import SortButton from "../components/Buttons/sortButton"
import DialogModal from "../components/events//dialogModal"
import Header from './../components/layout/Header'
import DesktopSidebar from "../components/desktopSidebar"

const loggedIn = () => {

    const {
        bookmarks,
        sortDropdown,
        activeTheme,
        contentType,
        archiveItems,
        showModal,
        isArchiving,
        setSortDropdown,
    } = useBookmarks()

    const itemsToMap = contentType === 'home' ? bookmarks : archiveItems;

    useEffect(() => {
        document.addEventListener("click", () => {
            setSortDropdown(false);
        });
    }, []);

    return (
        <div className="flex">
            <DesktopSidebar />
            <div className={`
        relative
        flex flex-col
        w-screen h-screen
        font-manrope
        ${activeTheme.bg}
        `}>
                <Header />
                <div className="
            flex flex-col gap-250
            w-full h-full pt-300 pb-300 pl-200 xl:pl-400 pr-200 xl:pr-400
            overflow-y-scroll 
            ">
                    <div className="flex justify-between items-center">
                        <h2 className={`text-preset-2 ${activeTheme.headerText}`}>
                            {contentType === 'home' ? 'All Bookmarks' : 'Archived Bookmarks'}
                        </h2>
                        <div className="flex flex-col items-end relative">
                            <SortButton />
                            {sortDropdown && <SortBy />}
                        </div>
                    </div>

                    {itemsToMap.length === 0 ? (
                        <div className="flex justify-center items-center w-full h-screen">
                            <p className={`text-preset-3 ${activeTheme.paragraphTwo}`}>
                                Please archive an item to see it displayed here ⬇️
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-400 sm:gap-200 md:gap-400">
                            {itemsToMap.map((item) => (
                                <MappedCard
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {showModal && (
                    <DialogModal
                        title={`${isArchiving ? "Archive" : "Unarchive"} bookmark`}
                        subtitle={`Are you sure you want to ${isArchiving ? "archive" : "unarchive"} this bookmark?`}
                    />
                )}

                {/* <NotificationPopup
                img={activeTheme.iconCheck}
                label="Bookmark added successfully." /> */}
            </div>
        </div>

    )
}

export default loggedIn