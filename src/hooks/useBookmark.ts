import { create } from 'zustand'
import data from './../data.json'
import type { DataTypes } from '../types/dataTypes'
import type { ThemeTypes } from '../types/themeTypes'
import themes from './../styles/styles'

interface BookmarkStates {
    bookmarks: DataTypes[],
    sliderTheme: number,
    sidebar: boolean, // mobile only
    profileDropdown: boolean,
    searchBar: string,
    inputs: string,
    cardDropdown: boolean,
    sortBy: boolean,
    currentTheme: ThemeTypes,
    limit: boolean

    setSliderTheme: (slider: number) => void,
    setSidebar: () => void, // mobile only
    setProfileDropdown: () => void,
    setSearchBar: (searchBar: string) => void,
    setInputs: (inputs: string) => void,
    setCardDropdown: (id: string) => void,
    setSortBy: (sortBy: boolean) => void,
    setCurrentTheme: (theme: ThemeTypes) => void,
    setLimit: (limit: boolean) => void
}

const useBookmarks = create<BookmarkStates>((set) => ({
    bookmarks: data as DataTypes[],
    sliderTheme: 1,
    sidebar: false, // mobile only
    profileDropdown: false,
    searchBar: '',
    inputs: '',
    cardDropdown: false,
    sortBy: false,
    currentTheme: themes[0],
    limit: false,

    setSliderTheme: () => set({}),
    setSidebar: () => set((state) => ({ sidebar: !state.sidebar })), // mobile only
    setProfileDropdown: () => set({ profileDropdown: true }),
    setSearchBar: (newValue: string) => set({ searchBar: newValue }),
    setInputs: (newValue: string) => set({ inputs: newValue }),
    setCardDropdown: (id: string) => set({ cardDropdown: true }),
    setSortBy: () => set({ sortBy: true }),
    setCurrentTheme: (theme) => set({ currentTheme: theme  }),
    setLimit: () => set({ limit: true })
}))

export default useBookmarks