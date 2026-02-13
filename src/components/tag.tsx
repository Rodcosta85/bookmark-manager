interface TagProps {
    label: string
}

const tag: React.FC<TagProps> = ({ label }) => {
    return (
        <p className="pl-100 pr-100 pt-025 pb-025
        rounded-4
        text-center text-preset-5 text-light-neutral-800
        bg-light-neutral-100">
            {label}
        </p>
    )
}

export default tag