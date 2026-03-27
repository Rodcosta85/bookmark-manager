import useBookmarks from "./useBookmark";

const REGEX = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
}

export const useActions = () => {
    const {
        bookmarks,
        archiveItems,
        pinnedItems,
        setShowModal,
        setShowDeleteModal,
        setIsArchiving,
        setItemId,
        setCardDropdown,
        setBookmarks,
        setPinnedItem,
        setEmailLogin,
        setEmailCreateAcc,
        setPasswordLogin,
        setPasswordCreateAcc,
        setFullName,
        setSearchBar,
        setEmailError,
        setPasswordError,
        setIsEmpty
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
        setShowDeleteModal(true);
        setCardDropdown(id);
    }

    function handlePinnedItem(id: string) {
    // 1. Check if it's already at the top (optional optimization)
    const isAlreadyFirst = bookmarks[0]?.id === id;
    if (!isAlreadyFirst) {
        // 2. Call the store action we defined earlier to rearrange the array
        setPinnedItem(id);
    }
    // 3. (Optional) If you need to track which ID was last pinned for UI effects
    setItemId(id); 
}

    function handleEmailChange(value: string) {
        setEmailLogin(value)
        setEmailCreateAcc(value)
        const isValid = REGEX.email.test(value);
        setEmailError(isValid)
    }

    function handlePasswordChange(value: string) {
        setPasswordLogin(value)
        setPasswordCreateAcc(value)
        const isValid = REGEX.password.test(value);
        setPasswordError(isValid);
    }

    function handleTextsChange(value:string) {
        setFullName(value)
        setSearchBar(value)
        setIsEmpty(value.trim() === '')
    }

    // Return the functions so your components can use them
    return { 
        handleSelectItem, 
        handleDeleteItem, 
        handlePinnedItem,
        handleEmailChange, 
        handlePasswordChange,
        handleTextsChange 
    };
}