import useBookmarks from "../hooks/useBookmark"

interface NotificationPopupProps {
    img: string,
    label: string
}

const notificationPopup: React.FC<NotificationPopupProps> = ({ img, label }) => {

    const { activeTheme } = useBookmarks()

    return (
        <div className={`flex justify-between items-center
        w-85 h-fit pt-125 pb-125 pl-150 pr-150
        rounded-8
        ${activeTheme.notificationBg }
        ${activeTheme.cardBorder}`}>
            <div className="flex items-center gap-150">
                <img src={img} alt="a check icon" />
                <p className={`text-preset-4-medium ${activeTheme.headerText}`}>
                    {label}
                </p>
            </div>
            <button className="cursor-pointer">
                <img src={activeTheme.iconClose} alt="an X icon" />
            </button>
        </div>
    )
}

export default notificationPopup