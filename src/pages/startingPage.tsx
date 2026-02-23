import useBookmarks from "../hooks/useBookmark"
import InitialModal from "../components/Forms/initialModal"

const startingPage = () => {

    const { activeTheme } = useBookmarks()

    return (
        <div className={`
        flex justify-center items-center
        w-screen h-screen 
        font-manrope
        ${activeTheme.bg}
        `}>
            <InitialModal />
        </div>
    )
}

export default startingPage