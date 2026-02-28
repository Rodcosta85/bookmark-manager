import { create } from 'zustand'
import data from './../data.json'
import type { DataTypes } from '../types/dataTypes'
import themes from './../styles/styles'

// modal de "sort by"
export type SortType = 'recently_added' | 'recently_visited' | 'most_visited'
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
    archiveItems: DataTypes[],



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
    setArchiveItems: (id: string) => void,
    restoreItem: (id: string) => void, 
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

    // array dos items do json que foram arquivados
    archiveItems: [] as DataTypes[],



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
    setHomeArchived: (type) => set({ contentType: type }),
    setAppearNotif: () => set((state) => ({ appearNotif: !state.appearNotif })),
    setIsLoggedIn: () => set((state) => ({ isLoggedIn: !state.isLoggedIn })),
    setShowPassword: () => set((state) => ({ showPassword: !state.showPassword })),
    setShowBookmarkEditor: () => set((state) => ({ showBookmarkEditor: !state.showBookmarkEditor })),

    // organiza o array de bookmarks/faz o "sort"
    setSortType: (type: SortType) => set((state) => {
        const sortedArray = [...state.bookmarks].sort((a, b) => {
            if (type === 'most_visited') return (b.visitCount || 0) - (a.visitCount || 0);
            if (type === 'recently_added') return (new Date(b.createdAt).getTime() || 0) - (new Date(a.createdAt).getTime() || 0);
            if (type === 'recently_visited') return (new Date(b.lastVisited).getTime() || 0) - (new Date(a.lastVisited).getTime() || 0);
            return 0;
        });
        return {
            bookmarks: sortedArray,
            activeSort: type
        };
    }),

    setArchiveItems: (id: string) => set((state) => {
        const itemToArchive = state.bookmarks.find((item) => item.id === id);
        if (!itemToArchive) return state;
        const remainingBookmarks = state.bookmarks.filter((item) => item.id !== id);
        const newArchivedBucket = [...state.archiveItems, itemToArchive];
        return {
            bookmarks: remainingBookmarks,
            archiveItems: newArchivedBucket
        };
    }),

    restoreItem: (id: string) => set((state) => {
        const itemToRestore = state.archiveItems.find((item) => item.id === id);
        if (!itemToRestore) return state;
        const remainingArchive = state.archiveItems.filter((item) => item.id !== id);
        const newBookmarks = [...state.bookmarks, itemToRestore];
        return {
            archiveItems: remainingArchive,
            bookmarks: newBookmarks
        }
    })

}))

export default useBookmarks