import useBookmarks from "./../../hooks/useBookmark"
import ColoredButton from "../Buttons/coloredButton"
import BorderButton from "../Buttons/borderButton"

interface DialogModalProps {
    title: string,
    subtitle: string,
    
}

const dialogModal: React.FC<DialogModalProps> = ({ title, subtitle }) => {

    const { activeTheme } = useBookmarks()

    const buttonCondition = title.includes('Archive') ? 'Archive' : 'Unarchive'

    return (
        <div className={`flex flex-col gap-300
        w-85 p-200
        rounded-12
        ${activeTheme.cardBg}`}>

            {/* titulos e botao de fechar */}
            <div className="flex justify-between items-start">

                {/* title e subtitle */}
                <div className="flex flex-col gap-100">
                    <h2 className={`text-preset-1 ${activeTheme.headerText}`}>{title}</h2>
                    <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>{subtitle}</p>
                </div>
                {/* title e subtitle */}

                <button className="w-5 h-5 cursor-pointer">
                    <img src={activeTheme.iconClose} alt="an X button" />
                </button>
            </div>
            {/* titulos e botao de fechar */}

            <div className="flex justify-end items-center gap-200
            w-full">
                <BorderButton label="Cancel" />
                <ColoredButton label={buttonCondition} type="button"/>
            </div>
        </div>
    )
}

export default dialogModal