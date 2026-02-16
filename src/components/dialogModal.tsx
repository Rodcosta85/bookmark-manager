import useBookmarks from "../hooks/useBookmark"
import GreenButton from "./Buttons/greenButton"
import BorderButton from "./Buttons/borderButton"

interface DialogModalProps {
    title: string,
    subtitle: string,
}

const dialogModal: React.FC<DialogModalProps> = ({ title, subtitle }) => {

    const { activeTheme } = useBookmarks()

    return (
        <div className={`flex flex-col gap-300
        w-[340px] p-200
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
                <GreenButton label="Archive" />
            </div>
        </div>
    )
}

export default dialogModal