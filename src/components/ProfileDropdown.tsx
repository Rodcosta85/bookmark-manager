import useBookmarks from '../hooks/useBookmark'
import { useNavigate } from "react-router-dom"
import type { BaseSyntheticEvent } from "react";
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore"; // Add these
import { auth, db } from '../services/firebase';
import themes from '../styles/styles'
// import rodrigo from './../assets/rodrigo.jpg'



const ProfileDropdown = () => {

    const navigate = useNavigate();

    async function handleLogout(e: BaseSyntheticEvent) {
        e.preventDefault();
        navigate("/");
    }

    const { activeTheme, user, setActiveTheme, setUser } = useBookmarks()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const docRef = doc(db, "users", firebaseUser.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const userData = docSnap.data();

                    // Now this matches 'MyUser' perfectly!
                    setUser({
                        uid: firebaseUser.uid,
                        email: firebaseUser.email,
                        displayName: userData.name, // Pulling the name from Firestore
                        photo: userData.photo
                    });
                }
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, [setUser]);

    console.log(user);

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
                <img src={user?.photo} alt="" className='rounded-full w-10 h-10' />
                <div className='flex flex-col'>
                    <p className={`text-preset-4 ${activeTheme.paragraphOne}`}>{user?.displayName}</p>
                    <p className={`text-preset-4-medium ${activeTheme.paragraphOne}`}>{user?.email}</p>
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