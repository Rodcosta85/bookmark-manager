import { create } from 'zustand'
import type { DataTypes } from '../types/dataTypes'
import type { ThemeTypes } from '../types/themeTypes'
import themes from './../styles/styles'

interface BookmarkStates {
    data: DataTypes[],
    sliderTheme: number,
    sidebar: boolean, // mobile only
    profileDropdown: boolean,
    searchBar: string,
    inputs: string,
    cardDropdown: boolean,
    sortBy: boolean,
    currentTheme: ThemeTypes,
    limit: boolean

    setData: (data: DataTypes[]) => void,
    setSliderTheme: (slider: number) => void,
    setSideBar: () => void, // mobile only
    setProfileDropdown: () => void,
    setSearchBar: (searchBar: string) => void,
    setInputs: (inputs: string) => void,
    setCardDropdown: (id: string) => void,
    setSortBy: (sortBy: boolean) => void,
    setCurrentTheme: (theme: ThemeTypes) => void,
    setLimit: (limit: boolean) => void
}

const useBookmarks = create<BookmarkStates>((set) => ({
    data: [] as DataTypes[],
    sliderTheme: 1,
    sidebar: false, // mobile only
    profileDropdown: false,
    searchBar: '',
    inputs: '',
    cardDropdown: false,
    sortBy: false,
    currentTheme: themes[0],
    limit: false,

    setData: (data: DataTypes[]) => set({ data }),
    setSliderTheme: () => set({}),
    setSideBar: () => set({ sidebar: true }), // mobile only
    setProfileDropdown: () => set({ profileDropdown: true }),
    setSearchBar: (newValue: string) => set({ searchBar: newValue }),
    setInputs: (newValue: string) => set({ inputs: newValue }),
    setCardDropdown: (id: string) => set({ cardDropdown: true }),
    setSortBy: () => set({ sortBy: true }),
    setCurrentTheme: (theme) => set({ currentTheme: theme  }),
    setLimit: () => set({ limit: true })
}))

export default useBookmarks