import useBookmarks from "./useBookmark";

const REGEX = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
}

export const useActions = () => {
    const {
        archiveItems,
        setShowModal,
        setShowDeleteModal,
        setIsArchiving,
        setItemId,
        setCardDropdown,
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
        setShowDeleteModal(true);
        setCardDropdown(id);
        setItemId(id);
    }

    function handlePinnedItem(id: string) {
        setPinnedItem(id);
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

    function handleTextsChange(value: string) {
        setFullName(value)
        setSearchBar(value)
        setIsEmpty(value.trim() === '')
    }

    return {
        handleSelectItem,
        handleDeleteItem,
        handlePinnedItem,
        handleEmailChange,
        handlePasswordChange,
        handleTextsChange
    };
}