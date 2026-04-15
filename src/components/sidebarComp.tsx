import useBookmarks from "../hooks/useBookmark"
import Sidebar from "./sidebar";

const SidebarComp: React.FC = () => {

    const {
        toggleSidebar,
    } = useBookmarks()

    return (
        <div className={`fixed top-0 left-0 z-99 
        w-screen h-screen
        bg-[#00000083]
        transition-opacity duration-300
        ${toggleSidebar ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <Sidebar />
        </div>
    )
}

export default SidebarComp