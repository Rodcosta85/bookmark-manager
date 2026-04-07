import { useEffect } from "react"
import useBookmarks from "./../../hooks/useBookmark"

const NotificationPopup: React.FC = ({ }) => {

    const { activeTheme, appearNotif, setAppearNotif } = useBookmarks()

    useEffect(() => {
        if (appearNotif) {
            const timer = setTimeout(() => {
                setAppearNotif()
            }, 3000)
            return () => clearTimeout(timer);
        }
    }, [appearNotif, setAppearNotif])

    return (
        <div className={`flex justify-between items-center
        w-85 h-fit pt-125 pb-125 pl-150 pr-150
        rounded-8
        ${activeTheme.notificationBg}
        ${activeTheme.cardBorder}`}>
            <div className="flex items-center gap-150">
                <img src={activeTheme.iconCheck} alt="a check icon" />
                <p className={`text-preset-4-medium ${activeTheme.headerText}`}>
                    Bookmark added successfully.
                </p>
            </div>
            <button
                onClick={() => setAppearNotif()} 
                type="button"
                className="cursor-pointer">
                <img src={activeTheme.iconClose} alt="an X icon" />
            </button>
        </div>
    )
}

export default NotificationPopup