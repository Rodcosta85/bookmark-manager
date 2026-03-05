import { useEffect, useState } from "react"
import useBookmarks from "../hooks/useBookmark"
import MappedCard from "../components/mappedCard"
import SortBy from "../components/sortBy"
import SortButton from "../components/Buttons/sortButton"
import DialogModal from "../components/events//dialogModal"
// import NotificationPopup from "../components/events/notificationPopup"
import Header from './../components/layout/Header'


const loggedIn = () => {

    const {
        bookmarks,
        sortDropdown,
        activeTheme,
        contentType,
        archiveItems,
        restoreItem,
        setArchiveItems,
    } = useBookmarks()

    useEffect(() => {
        console.log(archiveItems);
    }, [archiveItems])

    const [showModal, setShowModal] = useState(false);
    const [itemId, setItemId] = useState<string>();
    const [isArchiving, setIsArchiving] = useState(false);


    const itemsToMap = contentType === 'home' ? bookmarks : archiveItems;

    function handleSelectItem(id: string) {
        const isArchived = archiveItems.some(a => a.id === id);
        setIsArchiving(!isArchived);
        setItemId(id);
        setShowModal(true);
    }

    function handleConfirm() {
        if (itemId) {
            if (contentType === 'home') {
                setArchiveItems(itemId);
            } else {
                restoreItem(itemId);
                // setAppearNotif()
            }
            setShowModal(false);
        }
    }


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
                    <h2 className={`text-preset-2 ${activeTheme.headerText}`}>
                        {contentType === 'home' ? 'All Bookmarks' : 'Archived Bookmarks'}
                    </h2>
                    <div className="flex flex-col items-end relative">
                        <SortButton />
                        {sortDropdown && <SortBy />}
                    </div>
                </div>

                {/* está dando um erro com a key!!! */}
                {itemsToMap.map((item) => (
                    <MappedCard
                        item={item}
                        key={item.id}
                        handleSelectItem={handleSelectItem}
                    />
                ))}
            </div>

            {showModal && (
                <DialogModal
                    title={`${isArchiving ? "Archive" : "Unarchive"} bookmark`}
                    subtitle={`Are you sure you want to ${isArchiving ? "archive" : "unarchive"} this bookmark?`}
                    onConfirm={handleConfirm}
                    onCancel={() => setShowModal(false)}
                />
            )}

            {/* <NotificationPopup
                img={activeTheme.iconCheck}
                label="Bookmark added successfully." /> */}
        </div>
    )
}

export default loggedIn