import { create } from 'zustand'
import type { DataProps } from '../types/typings'

interface BookmarkStates {
    data: DataProps[],
    sliderTheme: number,
    sidebar: boolean, // mobile only
    profileDropdown: boolean,
    searchBar: string
    cardDropdown: boolean


    setData: (data: DataProps[]) => void,
    setSliderTheme: (slider: number) => void,
    setSideBar: () => void, // mobile only
    setProfileDropdown: () => void,
    setSearchBar: (searchBar: string) => void
    setCardDropdown: (id: string) => void
}

const useBookmarks = create<BookmarkStates>((set) => ({
    data: [] as DataProps[],
    sliderTheme: 1,
    sidebar: false, // mobile only
    profileDropdown: false,
    searchBar: '',
    cardDropdown: false,


    setData: (data: DataProps[]) => set({ data }),
    setSliderTheme: () => set({}),
    setSideBar: () => set({ sidebar: true }), // mobile only
    setProfileDropdown: () => set({ profileDropdown: true }),
    setSearchBar: (newValue: string) => set({ searchBar: newValue }),
    setCardDropdown: (id: string) => set({ cardDropdown: true })
}))

export default useBookmarks