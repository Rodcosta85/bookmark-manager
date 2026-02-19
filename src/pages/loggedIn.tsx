import useBookmarks from "../hooks/useBookmark"
import ProfileDropdown from "../components/ProfileDropdown"
import AddBookmark from "../components/Forms/addBookmark"
import MappedCard from "../components/mappedCard"
import SidebarComp from "../components/sidebarComp"
import SortBy from "../components/sortBy"
import SortButton from "../components/Buttons/sortButton"
import HambMenu from "../components/Buttons/hambMenu"
import DialogModal from "../components/dialogModal"
import NotificationPopup from "../components/notificationPopup"

const loggedIn = () => {

    const {
        sidebar,
        sortDropdown,
        activeTheme,
    } = useBookmarks()

    return (
        <div className="flex flex-col gap-8">
            <ProfileDropdown />
            <AddBookmark />
            <MappedCard />
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
                label="Bookmark added successfully." />
        </div>
    )
}

export default loggedIn