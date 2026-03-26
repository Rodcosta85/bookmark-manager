import useBookmarks from "./useBookmark";

export const useActions = () => {
    const {
        archiveItems,
        setShowModal,
        setIsArchiving,
        setItemId,
        setCardDropdown,
        setBookmarks,
    } = useBookmarks();

    function handleSelectItem(id: string) {
        const isArchived = archiveItems.some(a => String(a.id) === String(id));
        setIsArchiving(!isArchived);
        setItemId(id);
        setShowModal(true);
        setCardDropdown(id);
    }

    function handleDeleteItem(id: string) {
        setBookmarks(id);
    }

    // Return the functions so your components can use them
    return { handleSelectItem, handleDeleteItem };
}