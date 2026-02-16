import useBookmarks from "../hooks/useBookmark"

interface TagProps {
    label: string
}

const tag: React.FC<TagProps> = ({ label }) => {

    const { activeTheme } = useBookmarks()

    return (
        <p className={`pl-100 pr-100 pt-025 pb-025
        rounded-4
        text-center text-preset-5 ${activeTheme.paragraphOne}
        ${activeTheme.tagBg}`}>
            {label}
        </p>
    )
}

export default tag