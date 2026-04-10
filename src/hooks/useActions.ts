import useBookmarks from "./useBookmark";

const REGEX = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
}

export const useActions = () => {
    const {
        archiveItems,
        setIsTitleValid,
        setIsDescriptionValid,
        setIsURLValid,
        setIsTagsValid,
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
        setIsEmpty,
        setAddTitle,
        setAddTags,
        setAddURL,
        setAddDescription,
        setAddFavicon,
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
        setEmailError(!isValid);
    }

    function handlePasswordChange(value: string) {
        setPasswordLogin(value)
        setPasswordCreateAcc(value)
        const isValid = REGEX.password.test(value);
        setPasswordError(!isValid);
    }

    function handleTextsChange(value: string) {
        setFullName(value)
        setSearchBar(value)
        setIsEmpty(value.trim() === '')
    }

    function handleTitleChange(value: string) {
        setAddTitle(value);
        setIsTitleValid(value.trim() !== '')
    }

    function handleDescriptionChange(value: string) {
        setAddDescription(value);
        setIsDescriptionValid(value.trim() !== '')
    }

    function handleTagsChange(value: string) {
        setAddTags(value)
        setIsTagsValid(value.trim() !== '')
    }

    function handleURLChange(value: string) {
        setAddURL(value)
        setIsURLValid(value.trim() !== '')
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 1. Grab the first file the user selected
        const file = e.target.files?.[0];

        if (file) {
            // 2. Create a FileReader to convert the image into a string
            const reader = new FileReader();

            // 3. Tell the reader what to do once it finishes reading the file
            reader.onloadend = () => {
                // reader.result is your Base64 string! Save it to state.
                setAddFavicon(reader.result as string);
            };

            // 4. Actually start reading the file
            reader.readAsDataURL(file);
        }
    };




    return {
        handleSelectItem,
        handleDeleteItem,
        handlePinnedItem,
        handleEmailChange,
        handlePasswordChange,
        handleTextsChange,
        handleTitleChange,
        handleDescriptionChange,
        handleTagsChange,
        handleURLChange,
        handleImageUpload
    };
}