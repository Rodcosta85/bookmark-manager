import { create } from 'zustand'
import data from './../data.json'
import type { DataTypes } from '../types/dataTypes'
import type { ThemeTypes } from '../types/themeTypes'
import themes from './../styles/styles'

// modal de "sort by"
type SortType = 'recently_added' | 'recently_visited' | 'most_visited'
type HomeArchived = 'home' | 'archived'
type themeChanger = typeof themes[number]

interface BookmarkStates {
    activeTheme: themeChanger,
    bookmarks: DataTypes[],
    sidebar: boolean,
    profileDropdown: boolean,
    searchBar: string,
    inputs: string,
    cardId: string | null,
    cardDropdown: boolean,
    currentTheme: ThemeTypes,
    limit: boolean,
    sortDropdown: boolean,
    activeSort: string,
    contentType: string

    setActiveTheme: (theme: themeChanger) => void,
    setSidebar: () => void,
    setProfileDropdown: () => void,
    setSearchBar: (searchBar: string) => void,
    setInputs: (inputs: string) => void,
    setCardDropdown: (id: string) => void,
    setCurrentTheme: (theme: ThemeTypes) => void,
    setLimit: (limit: boolean) => void,
    setSortDropdown: () => void,
    setSortType: (type: SortType) => void,
    setHomeArchived: (type: HomeArchived) => void
}

const useBookmarks = create<BookmarkStates>((set) => ({
    bookmarks: data as DataTypes[],
    activeTheme: themes[0],
    sidebar: false,
    profileDropdown: false,
    searchBar: '',
    inputs: '',
    cardId: null,
    cardDropdown: false,
    currentTheme: themes[0],
    limit: false,
    sortDropdown: false,
    activeSort: 'recently_added',
    contentType: 'home',

    setActiveTheme: (theme) => set({activeTheme: theme}),
    setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
    setProfileDropdown: () => set((state) => ({ profileDropdown: !state.profileDropdown })),
    setSearchBar: (newValue: string) => set({ searchBar: newValue }),
    setInputs: (newValue: string) => set({ inputs: newValue }),

    setCardDropdown: (id) => set((state) => {
        if (state.cardId === id && state.cardDropdown) {
            return { cardDropdown: false, cardId: null };
        }
        return { cardDropdown: true, cardId: id };
    }),

    setCurrentTheme: (theme) => set({ currentTheme: theme }),
    setLimit: () => set({ limit: true }),
    setSortDropdown: () => set((state) => ({ sortDropdown: !state.sortDropdown })),
    setSortType: (type) => set({ activeSort: type }),
    setHomeArchived: (type) => set({ contentType: type })
}))

export default useBookmarks