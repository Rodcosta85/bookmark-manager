import useBookmarks from "../../hooks/useBookmark"
import InputComp from "../input-and-textarea/inputComp"
import TextareaComp from "../input-and-textarea/textareaComp"

interface AddBookProps {
    title: string,
}

const AddBookmark: React.FC<AddBookProps> = ({ title }) => {

    const { activeTheme, setShowModal, handleConfirm } = useBookmarks()

    const buttonCondition = title.includes('Archive') ? 'Archive' : 'Unarchive'

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
                    <InputComp label="Title *" id="" />
                    <TextareaComp label="Description *" />
                    <InputComp label="Website URLs *" id="" />
                    <InputComp label="Tags *" id="" />
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
                            type="button"
                            className="w-fit pt-3 pb-3 pl-4 pr-4 
                    rounded-8 
                    bg-teal-700 
                    text-white cursor-pointer">
                            {buttonCondition}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default AddBookmark