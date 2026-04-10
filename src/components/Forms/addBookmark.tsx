import { useActions } from "../../hooks/useActions"
import useBookmarks from "../../hooks/useBookmark"
import InputComp from "../input-and-textarea/inputComp"
import TextareaComp from "../input-and-textarea/textareaComp"


const AddBookmark: React.FC = ({ }) => {

    const {
        handleTitleChange,
        handleTagsChange,
        handleURLChange,
        handleImageUpload,
    } = useActions()

    const {
        activeTheme,
        isTitleValid,
        isDescriptionValid,
        isURLValid,
        isTagsValid,
        addTitle,
        addDescription,
        addURL,
        addTags,
        addFavicon,
        setShowModal,
        addBookmark,
        setShowBookmarkEditor,
        setAddTitle,
        setAddURL,
        setAddDescription,
        setAddTags,
    } = useBookmarks()


    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        const formattedTags = addTags
            .split(',')                     // Chop the string at every comma
            .map(tag => tag.trim())         // Remove extra spaces (e.g., " react " -> "react")
            .filter(tag => tag.length > 0); // Remove any empty strings if they typed ",,"


        addBookmark({
            id: Date.now().toString(),
            title: addTitle,
            url: addURL,
            description: addDescription,
            tags: formattedTags,
            pinned: false,
            isArchived: false,
            visitCount: 500,
            createdAt: new Date().toISOString(),
            lastVisited: new Date().toISOString(),
            favicon: addFavicon
        });

        setAddTitle('')
        setAddDescription('')
        setAddTags('')
        setAddURL('')
        setShowBookmarkEditor;
    }

    return (
        <div className="fixed top-0 left-0 z-99 
        flex justify-center items-center
        w-screen h-screen pl-200 pr-200
        bg-[#00000083]
        transition-opacity duration-300">
            <div className={`
        flex flex-col gap-400
        w-fit h-fit p-400
        rounded-16
        ${activeTheme.cardBg}`}>
                {/* titulos e botao de fechar */}
                <div className="flex justify-between gap-300">
                    <div className="flex flex-col gap-100
                    w-[90%] md:w-full lg:w-full">
                        <h2 className={`text-left text-preset-1 ${activeTheme.headerText}`}>Add a Bookmark</h2>
                        <p className={`text-left text-preset-4-medium ${activeTheme.paragraphOne}`}>Save a link with details to keep your collection organized.</p>
                    </div>
                    <button
                        className={`flex justify-center items-center self-start
                    w-8 h-8 
                    rounded-8 
                    border ${activeTheme.cardBorder}`}
                        onClick={setShowBookmarkEditor}
                    >
                        <img src={activeTheme.iconClose} alt="" />
                    </button>
                </div>

                {/* titulos e botao de fechar */}

                <form
                    action=""
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-250"
                >
                    <InputComp
                        label="Title *"
                        type="text"
                        id=""
                        value={addTitle}
                        isValid={!isTitleValid}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleTitleChange(e.target.value)}
                    />
                    <TextareaComp
                        label="Description *"
                        id=""
                        value={addDescription}
                        isValid={!isDescriptionValid}
                        errorText="This field cannot be empty."
                    />
                    <InputComp
                        label="Website URL *"
                        type="url"
                        id=""
                        value={addURL}
                        isValid={!isURLValid}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleURLChange(e.target.value)}
                    />
                    <InputComp
                        label="Tags *"
                        type="text"
                        id=""
                        placeholder="e.g. Design, Learning, Tools"
                        value={addTags}
                        isValid={!isTagsValid}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleTagsChange(e.target.value)}
                    />
                    <div className="flex flex-col justify-between gap-4">
                        <input
                            type="file"
                            name=""
                            id=""
                            accept="image/*" // Only allow images (png, jpg, gif, etc.)
                            onChange={handleImageUpload}
                            className="cursor-pointer"
                        />
                        {addFavicon && (
                            <img
                                src={addFavicon}
                                alt="Preview"
                                className="w-12.5 h-12.5"
                            />
                        )}
                    </div>

                    <div className="flex justify-end gap-200">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className={`w-fit pt-3 pb-3 pl-4 pr-4 
                    rounded-8 
                    border ${activeTheme.buttonBorder} 
                    ${activeTheme.headerText} 
                    cursor-pointer`}>
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-fit pt-3 pb-3 pl-4 pr-4 
                    rounded-8 
                    bg-teal-700 
                    text-white cursor-pointer">
                            Add Bookmark
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddBookmark