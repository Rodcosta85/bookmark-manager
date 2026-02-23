import useBookmarks from "../../hooks/useBookmark"
import InputComp from "../input-and-textarea/inputComp"
import TextareaComp from "../input-and-textarea/textareaComp"
import GreenButton from "../Buttons/greenButton"
import BorderButton from '../Buttons/borderButton'

const AddBookmark = () => {

    const { activeTheme } = useBookmarks()

    return (
        <div className={`
        fixed top-[20%] left-[25%] z-99
        flex flex-col gap-400
        w-142.5 h-fit p-400
        rounded-16
        ${activeTheme.cardBg}`}>
            {/* titulos e botao de fechar */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-100">
                    <h2 className={`text-preset-1 ${activeTheme.headerText}`}>Add a Bookmark</h2>
                    <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>Save a link with details to keep your collection organized.</p>
                </div>
                <button className={`flex justify-center items-center
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
                    <BorderButton label="Cancel" />
                    <GreenButton label="Save Bookmark" type="submit" />
                </div>
            </form>
            
        </div>
    )
}

export default AddBookmark