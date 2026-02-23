import useBookmarks from "../hooks/useBookmark"
import ProfileDropdown from "../components/profileDropdown"
import AddBookmark from "../components/Forms/addBookmark"
import MappedCard from "../components/mappedCard"
import SortBy from "../components/sortBy"
import SortButton from "../components/Buttons/sortButton"
import DialogModal from "../components/dialogModal"
import NotificationPopup from "../components/notificationPopup"
import Header from './../components/layout/Header'
import IconPlus from "./../assets/icon-plus.svg"
import Avatar from "./../assets/Avatar.png"

const loggedIn = () => {

    const {
        bookmarks,
        sidebar,
        sortDropdown,
        activeTheme,
        appearprofDrop,
        setAppearprofDrop
    } = useBookmarks()

    return (
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
            w-full h-full pt-300 pb-300 pl-200 pr-200 
            overflow-y-scroll 
            ">
                <div className="flex justify-between items-center">
                    <h2 className={`text-preset-2 ${activeTheme.headerText}`}>All Bookmarks</h2>
                    <div className="flex flex-col items-end relative">
                        <SortButton />
                        {sortDropdown && <SortBy />}
                    </div>
                </div>
                {bookmarks.map((item) => (
                    <MappedCard
                        item={item}
                        key={item.id} />
                ))}
            </div>


            {/* 
            <AddBookmark />
            
            <HambMenu />
            {sidebar && <SidebarComp />}
            <div className="flex flex-col gap-2.5 w-fit h-fit">
                <SortButton />
                {sortDropdown && <SortBy />}
            </div>
            <DialogModal
                title="Archive bookmark"
                subtitle="Are you sure you want to archive this bookmark?" />
            <NotificationPopup
                img={activeTheme.iconCheck}
                label="Bookmark added successfully." /> */}
        </div>
    )
}

export default loggedIn