import { useActions } from "../../hooks/useActions"
import useBookmarks from "../../hooks/useBookmark"
import InputComp from "../input-and-textarea/inputComp"
import TextareaComp from "../input-and-textarea/textareaComp"

const AddBookmark: React.FC = ({  }) => {

    const { handleTextsChange } = useActions()
    const { activeTheme, textField, isEmpty, setShowModal, handleConfirm } = useBookmarks()

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
                    <button className={`flex justify-center items-center self-start
                    w-8 h-8 
                    rounded-8 
                    border ${activeTheme.cardBorder}`}>
                        <img src={activeTheme.iconClose} alt="" />
                    </button>
                </div>

                {/* titulos e botao de fechar */}

                <form
                    action=""
                    className="flex flex-col gap-250"
                >
                    <InputComp
                        label="Title *"
                        type="text"
                        id=""
                        value={textField}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleTextsChange(e.target.value)}
                    />
                    <TextareaComp
                        label="Description *"
                        id=""
                        value={textField}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                    />
                    <InputComp
                        label="Website URL *"
                        type="url"
                        id=""
                        value={textField}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleTextsChange(e.target.value)}
                    />
                    <InputComp
                        label="Tags *"
                        type="text"
                        id=""
                        placeholder="e.g. Design, Learning, Tools"
                        value={textField}
                        isValid={isEmpty}
                        errorText="This field cannot be empty."
                        onChange={(e) => handleTextsChange(e.target.value)}
                    />
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
                            onClick={handleConfirm}
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