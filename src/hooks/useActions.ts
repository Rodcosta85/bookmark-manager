import useBookmarks from "./useBookmark";

export const useActions = () => {
    const {
        archiveItems,
        setShowModal,
        setIsArchiving,
        setIsDeleting,
        setItemId
    } = useBookmarks();


    function handleSelectItem(id: string) {
        const isArchived = archiveItems.some(a => String(a.id) === String(id));
        setIsArchiving(!isArchived);
        setItemId(id);
        setShowModal(true);
    }

    function handleDeleteItem(id: string) {
    const deletedItems = archiveItems.filter(item => item.id !== id);
    console.log(deletedItems);
    setItemId(id);
    setIsDeleting(true);
}

    // Return the functions so your components can use them
    return { handleSelectItem, handleDeleteItem };
}