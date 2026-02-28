import useBookmarks from "../../hooks/useBookmark"
import InputComp from "../input-and-textarea/inputComp"
import TextareaComp from "../input-and-textarea/textareaComp"
import GreenButton from "../Buttons/coloredButton"
import BorderButton from '../Buttons/borderButton'

const AddBookmark = () => {

    const { activeTheme } = useBookmarks()

    return (
        <div className="fixed top-0 left-0 z-99 
        flex justify-center items-center
        w-screen h-screen 
        bg-[#00000083]
        transition-opacity duration-300">
           <div className={`
        flex flex-col gap-400
        w-[90%] h-fit p-400
        rounded-16
        ${activeTheme.cardBg}`}>
            <button className={`flex justify-center items-center self-end
                w-8 h-8 
                rounded-8 
                border ${activeTheme.cardBorder}`}>
                    <img src={activeTheme.iconClose} alt="" />
                </button>
            {/* titulos e botao de fechar */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-100">
                    <h2 className={`text-left text-preset-1 ${activeTheme.headerText}`}>Add a Bookmark</h2>
                    <p className={`text-left text-preset-4-medium ${activeTheme.paragraphOne}`}>Save a link with details to keep your collection organized.</p>
                </div>
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
        </div>
        
    )
}

export default AddBookmark