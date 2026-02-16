import useBookmarks from "../hooks/useBookmark"
import InputComp from "./inputComp"
import TextareaComp from "./textareaComp"
import GreenButton from "./Buttons/greenButton"
import BorderButton from './Buttons/borderButton'

const AddBookmark = () => {

    const { activeTheme } = useBookmarks()

    return (
        <div className={`flex flex-col gap-400
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
                <InputComp label="Title *" />
                <TextareaComp label="Description *" />
                <InputComp label="Website URLs *" />
                <InputComp label="Tags *" />
            </form>
            <div className="flex justify-end gap-200">
                <BorderButton label="Cancel" />
                <GreenButton label="Save Bookmark"/>
            </div>
        </div>
    )
}

export default AddBookmark