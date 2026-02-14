import useBookmarks from "../hooks/useBookmark"
import InputComp from "./inputComp"
import TextareaComp from "./textareaComp"

const AddBookmark = () => {

    const { currentTheme } = useBookmarks()

    return (
        <div className='flex flex-col gap-400
        w-142.5 h-fit p-400
        rounded-16
        border border-black
        bg-white   
        '>
            {/* titulos e botao de fechar */}
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-100">
                    <h2 className="text-preset-1 text-light-neutral-900">Add a Bookmark</h2>
                    <p className="text-preset-4-medium text-light-neutral-800">Save a link with details to keep your collection organized.</p>
                </div>
                <button className="flex justify-center items-center
                w-8 h-8 
                rounded-8 
                border border-light-neutral-400">
                    <img src={`${currentTheme.iconClose}`} alt="" />
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
                <button className="pt-3 pb-3 pl-4 pr-4 rounded-8 border border-light-neutral-400 text-light-neutral-900 cursor-pointer">Cancel</button>
                <button className="pt-3 pb-3 pl-4 pr-4 rounded-8 bg-teal-700 text-white cursor-pointer">Save Bookmark</button>
            </div>
        </div>
    )
}

export default AddBookmark