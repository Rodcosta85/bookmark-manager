import { useEffect } from "react"
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from "firebase/firestore"; // Add these
import { auth, db } from '../../services/firebase';
import useBookmarks from "../../hooks/useBookmark"
import ProfileDropdown from "../../components/profileDropdown"
import SidebarComp from "../../components/sidebarComp"
import HambMenu from "../../components/Buttons/hambMenu"
import InputComp from "../../components/input-and-textarea/inputComp"
import IconPlus from "./../../assets/icon-plus.svg"
import Avatar from "./../../assets/Avatar.png"
import AddBookmark from "../Forms/addBookmark"


const Header = () => {

    const { sidebar,
        activeTheme,
        appearprofDrop,
        showBookmarkEditor,
        user,
        setShowBookmarkEditor,
        setAppearprofDrop,
        setUser } = useBookmarks()

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

    return (
        <header className={`
            flex justify-between items-center gap-125
            w-full h-fit px-200 py-150
            ${activeTheme.cardBg}
            border-b ${activeTheme.cardBorder}
            `}>
            <HambMenu />
            <InputComp label="" type="text" id="search-bar" />
            <button
                onClick={setShowBookmarkEditor}
                className="
                flex justify-center items-center
                w-10 h-10 p-125
                rounded-8
                bg-teal-700
                ">
                <img src={IconPlus} alt="a plus icon" className="w-5 h-5" />
                {showBookmarkEditor && <AddBookmark />}
            </button>
            <div className="flex flex-col items-end w-fit relative">
                <button onClick={setAppearprofDrop}>
                    <img
                        src={Avatar}
                        alt=""
                        className="rounded-full" />
                </button>
                {appearprofDrop && <ProfileDropdown />}
            </div>
            {sidebar && <SidebarComp />}
        </header>
    )
}

export default Header