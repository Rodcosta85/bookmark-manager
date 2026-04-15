import { useActions } from "../../hooks/useActions"
import useBookmarks from "../../hooks/useBookmark"
import InputComp from "../input-and-textarea/inputComp"
import TextareaComp from "../input-and-textarea/textareaComp"


const EditBookmark = () => {

    const {
        handleTitleChange,
        handleTagsChange,
        handleURLChange,
        handleImageUpload,
    } = useActions()

    const {
        selectedBookmark,
        activeTheme,
        isEmpty,
        addTitle,
        addDescription,
        addURL,
        addTags,
        addFavicon,
        isDragging,
        setIsDragging,
        editBookmark,
        setShowBookmarkEditor,
        setAddTitle,
        setAddURL,
        setAddDescription,
        setAddTags,
        setSelectedBookmark,
        setAddFavicon
    } = useBookmarks()


    const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        setIsDragging(false);

        // Grab the dropped file
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];

            // Convert the file to a displayable URL and set it to your state
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    // Assuming setAddFavicon is your state setter!
                    setAddFavicon(event.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedBookmark) {
            console.error("No bookmark selected for editing");
            return;
        };

        // 1. Check tags: If empty, keep original tags. If typed, format the new ones.
        const finalTags = addTags.trim() !== ''
            ? addTags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
            : selectedBookmark.tags;


        editBookmark({
            id: selectedBookmark.id,

            // If addTitle isn't empty, use it. Otherwise, keep the old title.
            title: addTitle.trim() !== '' ? addTitle : selectedBookmark.title,

            // Apply the same logic to the rest of the text fields:
            url: addURL.trim() !== '' ? addURL : selectedBookmark.url,
            description: addDescription.trim() !== '' ? addDescription : selectedBookmark.description,
            favicon: addFavicon !== '' ? addFavicon : selectedBookmark.favicon,
            tags: finalTags,

            pinned: selectedBookmark.pinned,
            isArchived: selectedBookmark.isArchived,
            visitCount: selectedBookmark.visitCount,
            createdAt: selectedBookmark.createdAt,
            lastVisited: new Date().toISOString(),
        });

        console.log(selectedBookmark);

        setAddTitle('')
        setAddDescription('')
        setAddTags('')
        setAddURL('')
        setShowBookmarkEditor();
        setSelectedBookmark(null);
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
                        <h2 className={`text-left text-preset-1 ${activeTheme.headerText}`}>Edit Bookmark</h2>
                        <p className={`text-left text-preset-4-medium ${activeTheme.paragraphOne}`}>
                            Update your saved link details — change the title,
                            <br />
                            description, URL, or tags anytime.
                        </p>
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
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-250"
                >
                    <InputComp
                        label="Title *"
                        type="text"
                        id=""
                        value={addTitle}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleTitleChange(e.target.value)}
                    />
                    <TextareaComp
                        label="Description *"
                        id=""
                        value={addDescription}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                    />
                    <InputComp
                        label="Website URL *"
                        type="url"
                        id=""
                        value={addURL}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleURLChange(e.target.value)}
                    />
                    <InputComp
                        label="Tags *"
                        type="text"
                        id=""
                        placeholder="e.g. Design, Learning, Tools"
                        value={addTags}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleTagsChange(e.target.value)}
                    />
                    <div className="flex justify-between gap-4">
                        <label
                            htmlFor="edit-form-file"
                            className={`flex justify-center items-center
                            w-full p-1
                            border ${activeTheme.inputBorder} rounded-16
                            text-preset-4-medium ${activeTheme.paragraphTwo}
                            cursor-pointer
                            ${isDragging
                                    ? 'border-teal-500' // Colors when actively dragging
                                    : 'border-teal-600' // Default colors
                                }`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6 pointer-events-none">
                                {/* The pointer-events-none above prevents flickering when dragging over the text/icon */}
                                <svg className={`w-8 h-8 mb-4 ${isDragging ? 'text-teal-700 animate-bounce' : 'text-teal-600'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p className="mb-2 text-sm text-teal-800">
                                    <span className={`text-preset-4-medium ${activeTheme.paragraphTwo}`}>
                                        {isDragging ? 'Drop it here!' : 'Click or drag to upload'}
                                    </span>
                                </p>
                                <p className={`text-preset-5 ${activeTheme.filteredText}`}>SVG, PNG, JPG or GIF</p>
                            </div>
                        </label>
                        <input
                            type="file"
                            id="edit-form-file"
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            accept="image/*" // Only allow images (png, jpg, gif, etc.)
                            onChange={handleImageUpload}
                            className="hidden"
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
                            onClick={setShowBookmarkEditor}
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
                            Edit Bookmark
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default EditBookmark