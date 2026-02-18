import { type MouseEvent } from "react"
import useBookmarks from "../hooks/useBookmark"
import ProfileDropdown from "../components/profileDropdown"
import AddBookmark from "../components/Forms/addBookmark"
import MappedCard from "../components/mappedCard"
import SidebarComp from "../components/sidebarComp"
import SortBy from "../components/sortBy"
import SortButton from "../components/Buttons/sortButton"
import HambMenu from "../components/Buttons/hambMenu"
import DialogModal from "../components/dialogModal"
import NotificationPopup from "../components/notificationPopup"

const loggedIn = () => {

    const { sidebar,
        sortDropdown,
        activeTheme,
        appearNotif,
        bookmarks,
        setSidebar,
        setCardDropdown,
        setSortDropdown,
        setAppearNotif } = useBookmarks()

    const handleSideBar = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setSidebar()
    }

    const handleCardDropdown = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCardDropdown
    }

    const handleSortDropdown = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setSortDropdown()
    }

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
        <div className="flex flex-col gap-8">
            <ProfileDropdown />
            <AddBookmark />
            <MappedCard handleCardDropdown={handleCardDropdown} />
            <HambMenu handleSideBar={handleSideBar} />
            {sidebar ?
                <SidebarComp
                    handleSidebar={handleSideBar}
                    sortedTags={sortedUniqueTags}
                    elementCount={elementCount}
                />
                :
                null
            }
            <div className="flex flex-col gap-2.5 w-fit h-fit">
                <SortButton handleSortDropdown={handleSortDropdown} />
                {sortDropdown ?
                    <SortBy />
                    :
                    null
                }
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