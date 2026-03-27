import useBookmarks from "../../hooks/useBookmark"

const DeleteDialogModal = () => {

    const { activeTheme, setShowDeleteModal, handleConfirm } = useBookmarks()

    return (
        <div className="fixed top-0 left-0 z-99 
        flex justify-center items-center
        w-screen h-screen 
        bg-[#00000083]
        transition-opacity duration-300">
            <div className={`flex flex-col gap-300
            w-85 p-200
            rounded-12
            ${activeTheme.cardBg}`}>

                {/* titulos e botao de fechar */}
                <div className="flex justify-between items-start">

                    {/* title e subtitle */}
                    <div className="flex flex-col gap-100">
                        <h2 className={`text-preset-1 ${activeTheme.headerText}`}>Delete bookmark</h2>
                        <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>Are you sure you want to delete this bookmark?</p>
                    </div>
                    {/* title e subtitle */}

                    <button className="w-5 h-5 cursor-pointer">
                        <img src={activeTheme.iconClose} alt="an X button" />
                    </button>
                </div>
                {/* titulos e botao de fechar */}

                <div className="flex justify-end items-center gap-200
                w-full">
                    <button
                        type="button"
                        onClick={() => setShowDeleteModal(false)}
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
                    bg-new-red-800
                    text-white cursor-pointer">
                        Delete Permanently
                    </button>
                </div>
            </div>
        </div>

    )
}

export default DeleteDialogModal