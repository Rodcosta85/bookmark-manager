import useBookmarks from '../hooks/useBookmark'
import { useNavigate } from "react-router-dom"
import type { BaseSyntheticEvent } from "react";
import themes from '../styles/styles'
import avatar from './../assets/Avatar.png'



const ProfileDropdown = () => {

    const navigate = useNavigate();

    async function handleLogout(e: BaseSyntheticEvent) {
        e.preventDefault();
        navigate("/");
    }

    const { activeTheme, setActiveTheme } = useBookmarks()

    return (
        <div className={`
        absolute top-600 z-99  
        flex flex-col justify-between
        w-62 h-42.75
        rounded-8
        ${activeTheme.secondaryBg}
        border ${activeTheme.cardBorder}
        `}>
            <div className={`flex justify-start items-center gap-150
            p-150 w-full
            border-b ${activeTheme.cardBorder}`}>
                <img src={avatar} alt="" className='rounded-full w-10 h-10' />
                <div className='flex flex-col'>
                    <p className={`text-preset-4 ${activeTheme.paragraphOne}`}>Emily Carter</p>
                    <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>emily101@gmail.com</p>
                </div>
            </div>
            <div className={`flex justify-between items-center
            p-150 w-full
            border-b ${activeTheme.cardBorder}`}>
                <div className='flex items-center gap-150'>
                    <img src={activeTheme.iconTheme} alt="" className='w-4 h-4' />
                    <p className={`text-preset-4 ${activeTheme.paragraphOne}`}>Theme</p>
                </div>
                <div className={`flex justify-between items-center
                w-16 h-7.5 p-025
                rounded-4
                ${activeTheme.terciaryBg}`}>
                    <button
                        onClick={() => setActiveTheme(themes[0])}
                        className={`flex justify-center items-center
                    w-7.5 h-full p-050 
                    rounded-4
                    ${activeTheme === themes[0] && activeTheme.secondaryBg}
                    cursor-pointer`}>
                        <img src={activeTheme.sun} alt="a sun icon" className='w-3.5 h-3.5' />
                    </button>
                    <button
                        onClick={() => setActiveTheme(themes[1])}
                        className={`flex justify-center items-center
                    w-7.5 h-full p-050 
                    rounded-4
                    ${activeTheme === themes[1] && activeTheme.secondaryBg}
                    cursor-pointer`}>
                        <img src={activeTheme.moon} alt="a moon icon" className='w-3.5 h-3.5' />
                    </button>
                </div>
            </div>

            {/* vale a pena criar um modal de "confirmação de log out"? */}
            <button 
            onClick={handleLogout}
            className={`flex justify-start items-center gap-150
            p-150
            text-preset-4 ${activeTheme.paragraphOne}
            cursor-pointer`}>
                <img
                    src={activeTheme.iconLogout}
                    alt="an icon for exit/log out"
                    className='w-4 h-4'
                />
                Logout
            </button>
        </div>
    )
}

export default ProfileDropdown