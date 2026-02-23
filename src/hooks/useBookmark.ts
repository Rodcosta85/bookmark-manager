import { create } from 'zustand'
import data from './../data.json'
import type { DataTypes } from '../types/dataTypes'
import themes from './../styles/styles'

// modal de "sort by"
type SortType = 'recently_added' | 'recently_visited' | 'most_visited'
type HomeArchived = 'home' | 'archived'
type themeChanger = typeof themes[number]

interface BookmarkStates {
    tagsFilters: string[],
    activeTheme: themeChanger,
    bookmarks: DataTypes[],
    sidebar: boolean,
    appearprofDrop: boolean,
    searchBar: string,
    textareaVal: string,
    cardId: string | null,
    cardDropdown: boolean,
    limit: boolean,
    sortDropdown: boolean,
    activeSort: string,
    contentType: string,
    appearNotif: boolean,
    isLoggedIn: boolean,
    showPassword: boolean,
    showBookmarkEditor: boolean,


    setTagsFilters: (tagsFilters: string[]) => void,
    setActiveTheme: (theme: themeChanger) => void,
    setSidebar: () => void,
    setAppearprofDrop: () => void,
    setSearchBar: (searchBar: string) => void,
    setTextareaVal: (textareaVal: string) => void,
    setCardDropdown: (id: string) => void,
    setLimit: (limit: boolean) => void,
    setSortDropdown: () => void,
    setSortType: (type: SortType) => void,
    setHomeArchived: (type: HomeArchived) => void,
    setAppearNotif: () => void,
    setIsLoggedIn: () => void,
    setShowPassword: (visible: boolean) => void,
    setShowBookmarkEditor: () => void,
}

const useBookmarks = create<BookmarkStates>((set) => ({
    tagsFilters: [],

    // data.json  
    bookmarks: data as DataTypes[],

    // tema
    activeTheme: themes[0],

    // barra lateral
    sidebar: false,

    // dropdown do perfil que faz aparecer o profileDropdown
    appearprofDrop: false,

    // barra de procura do header
    searchBar: '',

    // textarea
    textareaVal: '',

    // card em si
    cardId: null,

    // dropdown dos tres pontos verticais
    cardDropdown: false,

    // limite de caracteres da textarea
    limit: false,

    // ativação do dropdown do "sort by"
    sortDropdown: false,

    // sort em si
    activeSort: 'recently_added',

    // home ou archived dentro da sidebar
    contentType: 'home',

    // notificação de ação
    appearNotif: false,

    // controla se o usuario esta logado ou nao
    isLoggedIn: true,

    // input de password
    passwordInput: '',

    // alterna entre os tipos de input e olhos
    showPassword: false,

    // abre o popup do "add bookmark"
    showBookmarkEditor: false,

    setTagsFilters: (tagsFilters) => set({ tagsFilters }),
    setActiveTheme: (activeTheme) => set({ activeTheme }),
    setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
    setAppearprofDrop: () => set((state) => ({ appearprofDrop: !state.appearprofDrop })),
    setSearchBar: (newValue: string) => set({ searchBar: newValue }),
    setTextareaVal: (newValue: string) => set({ textareaVal: newValue }),

    setCardDropdown: (id) => set((state) => {
        if (state.cardId === id && state.cardDropdown) {
            return { cardDropdown: false, cardId: null };
        }
        return { cardDropdown: true, cardId: id };
    }),

    setLimit: () => set({ limit: true }),
    setSortDropdown: () => set((state) => ({ sortDropdown: !state.sortDropdown })),
    setSortType: (type) => set({ activeSort: type }),
    setHomeArchived: (type) => set({ contentType: type }),
    setAppearNotif: () => set((state) => ({ appearNotif: !state.appearNotif })),
    setIsLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
    setShowPassword: () => set((state) => ({ showPassword: !state.showPassword })),
    setShowBookmarkEditor: () => set((state) => ({ showBookmarkEditor: !state.showBookmarkEditor })),
}))

export default useBookmarks