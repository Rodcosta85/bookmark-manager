import useBookmarks from '../hooks/useBookmark'
import avatar from './../assets/Avatar.png'

// interface profDropProps {
//     handleSlider: (e: React.ChangeEvent<HTMLInputElement>) => void
// }

const ProfileDropdown = ({  }) => {

    const { sliderTheme, currentTheme } = useBookmarks()


    return (
        <div className='flex flex-col justify-between gap-050
    w-62 h-42.75
    rounded-8
    border border-light-neutral-100
    '>
            <div className='flex justify-start items-center gap-150
        p-150 w-full
        border-b border-b-light-neutral-100'>
                <img src={avatar} alt="" className='rounded-full w-10 h-10' />
                <div className='flex flex-col'>
                    <p className='text-preset-4'>Emily Carter</p>
                    <p className='text-preset-4-medium'>emily101@gmail.com</p>
                </div>
            </div>
            <div className='flex justify-between items-center
            p-150 w-full
            border-b border-b-light-neutral-100'>
                <div className='flex items-center gap-150'>
                    <img src={`${currentTheme.iconTheme}`} alt="" className='w-4 h-4' />
                    <p className='text-preset-4'>Theme</p>
                </div>
                <div className='flex justify-between items-center
                w-16 h-7.5 p-050
                rounded-4
                bg-red-500'>
                    <button className='flex justify-center items-center
                    w-7.5 p-050 
                    rounded-4
                    bg-white'>
                        <img src={`${currentTheme.sun}`} alt="a sun icon" className='w-3.5 h-3.5' />
                    </button>
                    <button className='flex justify-center items-center
                    w-7.5 p-050 
                    rounded-4
                    bg-white'>
                       <img src={`${currentTheme.moon}`} alt="a moon icon" className='w-3.5 h-3.5' /> 
                    </button>   
                </div>
            </div>
            <div className='flex justify-start items-center gap-150
            p-150
            '>
                <img
                    src={`${currentTheme.iconLogout}`}
                    alt="an icon for exit/log out"
                    className='w-4 h-4'
                />
                <p className='text-preset-4'>Logout</p>
            </div>
        </div>
    )
}

export default ProfileDropdown