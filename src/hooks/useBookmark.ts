import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import data from './../data.json'
import type { DataTypes } from '../types/dataTypes'
import themes from './../styles/styles'

// modal de "sort by"
export type SortType = 'recently_added' | 'recently_visited' | 'most_visited' | 'restore_original'
type HomeArchived = 'home' | 'archived'
type themeChanger = typeof themes[number]

interface UserProfile {
    uid: string,
    email: string | null,
    displayName: string | null,
    photo: string
}

interface BookmarkStates {
    bookmarks: DataTypes[],
    archiveItems: DataTypes[],
    pinnedItems: DataTypes[],

    tagsFilters: string[],
    activeTheme: themeChanger,
    sidebar: boolean,
    appearprofDrop: boolean,
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
    user: UserProfile | null,
    showModal: boolean,
    showDeleteModal: boolean,
    itemId: string | null,
    isArchiving: boolean,
    isDeleting: boolean,

    // variáveis dos inputs e textarea
    searchBar: string,
    emailLogin: string,
    emailCreateAcc: string,
    passwordLogin: string,
    passwordCreateAcc: string,
    fullName: string,
    textField: string,

    // form de adicionar bookmark
    addTitle: string,
    addDescription: string,
    addURL: string,
    addTags: string,
    addFavicon: string,

    // variáveis de validação
    emailError: boolean
    passwordError: boolean,
    isEmpty: boolean,

    setTagsFilters: (tagsFilters: string[]) => void,
    setActiveTheme: (theme: themeChanger) => void,
    setSidebar: () => void,
    setAppearprofDrop: () => void,
    setTextareaVal: (textareaVal: string) => void,
    setCardDropdown: (id: string) => void,
    setLimit: (limit: boolean) => void,
    setSortDropdown: (value: boolean) => void,
    setSortType: (type: SortType) => void,
    setHomeArchived: (type: HomeArchived) => void,
    setAppearNotif: () => void,
    setIsLoggedIn: () => void,
    setShowPassword: (visible: boolean) => void,
    setShowBookmarkEditor: () => void,
    setArchiveItems: (id: string) => void,
    setPinnedItem: (id: string) => void,
    setBookmarks: (id: string) => void,
    addBookmark: (newBookmark: DataTypes) => void;
    editBookmark: (updatedBookmarks: DataTypes) => void;
    restoreItem: (id: string) => void,
    setUser: (user: UserProfile | null) => void;
    setShowModal: (showModal: boolean) => void,
    setShowDeleteModal: (showDeleteModal: boolean) => void,
    setItemId: (id: string) => void,
    setIsArchiving: (isArchiving: boolean) => void,
    handleConfirm: () => void,
    setIsDeleting: (isDeleting: boolean) => void,

    // funções dos inputs e textarea
    setSearchBar: (searchBar: string) => void,
    setEmailLogin: (emailLogin: string) => void,
    setEmailCreateAcc: (emailCreateAcc: string) => void,
    setPasswordLogin: (passwordLogin: string) => void,
    setPasswordCreateAcc: (passwordCreateAcc: string) => void,
    setFullName: (fullNamme: string) => void,
    setTextField: (textField: string) => void,

    // funções do form de adicionar bookmark
    setAddTitle: (addTitle: string) => void,
    setAddDescription: (addDescription: string) => void,
    setAddURL: (addURL: string) => void,
    setAddTags: (addTags: string) => void,
    setAddFavicon: (addFavicon: string) => void,

    // funções de erro
    setEmailError: (emailError: boolean) => void,
    setPasswordError: (passwordError: boolean) => void
    setIsEmpty: (isEmpty: boolean) => void
}

const useBookmarks = create<BookmarkStates>()(
    persist(
        (set, get) => ({
            tagsFilters: [],

            // data.json  
            bookmarks: data as DataTypes[],

            // tema
            activeTheme: themes[0],

            // barra lateral
            sidebar: false,

            // dropdown do perfil que faz aparecer o profileDropdown
            appearprofDrop: false,

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

            // array dos items que foram "prendidos" + o resto
            pinnedItems: [] as DataTypes[],

            // usuário atual como registrado pelo firebase
            user: null,

            // mostra ou esconde ou modal de arquivar ou restaurar
            showModal: false,

            // mostra ou esconde o modal de deletar
            showDeleteModal: false,

            // vai usar a id do objeto do json para arquivar ou voltar com ele
            itemId: "",

            // controle do arquivamento de items
            isArchiving: false,

            // controle da eliminição de items
            isDeleting: false,

            // barra de procura do header
            searchBar: '',

            // input do email de login
            emailLogin: '',

            // input do email do create account
            emailCreateAcc: '',

            // senha do login
            passwordLogin: '',

            // senha do create account
            passwordCreateAcc: '',

            // input do nome completo/full name
            fullName: '',

            // textarea de dentro dos forms
            textField: '',

            // erro do email
            emailError: false,

            // erro da password
            passwordError: false,

            // erro do campo de texto em geral
            isEmpty: false,

            // input de title do add bookmarks
            addTitle: '',

            // input de description do add bookmarks
            addDescription: '',

            // input de URL do add bookmarks
            addURL: '',

            // input de tags do add bookmarks
            addTags: '',

            // input de favicon/imagem do add bookmarks
            addFavicon: '',

            // setTagsFilters: (tagsFilters) => set({ tagsFilters }),
            setTagsFilters: (tagsFilters: string[]) => set(() => {
                if (tagsFilters.length === 0) {
                    return {
                        bookmarks: data as DataTypes[],
                        tagsFilters: [],
                    }
                }
                const remainingBookmarks = (data as DataTypes[]).filter((item) => tagsFilters.some(tag => item.tags.includes(tag)));
                return {
                    bookmarks: remainingBookmarks,
                    tagsFilters,
                };
            }),
            setActiveTheme: (activeTheme) => set({ activeTheme }),
            setSidebar: () => set((state) => ({ sidebar: !state.sidebar })),
            setAppearprofDrop: () => set((state) => ({ appearprofDrop: !state.appearprofDrop })),

            setTextareaVal: (newValue: string) => set({ textareaVal: newValue }),

            setCardDropdown: (id) => set((state) => {
                if (state.cardId === id && state.cardDropdown) {
                    return { cardDropdown: false, cardId: null };
                }
                return { cardDropdown: true, cardId: id };
            }),

            setLimit: () => set({ limit: true }),
            setSortDropdown: (newValue: boolean) => set(() => ({ sortDropdown: newValue })),
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

            setBookmarks: (id: string) => set((state) => {
                const remainingBookmarks = state.bookmarks.filter((item) => item.id !== id);
                const remainingArchived = state.archiveItems.filter((item) => item.id !== id);
                return {
                    bookmarks: remainingBookmarks,
                    archiveItems: remainingArchived,
                };
            }),

            addBookmark: (newBookmark: DataTypes) => set((state) => ({
                bookmarks: [...state.bookmarks, newBookmark],
                appearNotif: true
            })),

            editBookmark: (updatedBookmark: DataTypes) => set((state) => ({
                bookmarks: state.bookmarks.map((item) =>
                    item.id === updatedBookmark.id ? updatedBookmark : item
                )
            })),

            restoreItem: (id: string) => set((state) => {
                const itemToRestore = state.archiveItems.find((item) => item.id === id);
                if (!itemToRestore) return state;
                const remainingArchive = state.archiveItems.filter((item) => item.id !== id);
                const newBookmarks = [itemToRestore, ...state.bookmarks];
                return {
                    archiveItems: remainingArchive,
                    bookmarks: newBookmarks
                }
            }),

            setPinnedItem: (id: string) => set((state) => {
                const itemToPin = state.bookmarks.find((item) => item.id === id);
                if (!itemToPin) return state;
                const isAlreadyPinned = itemToPin.pinned;
                const remainingBookmarks = state.bookmarks.filter((item) => item.id !== id);
                if (isAlreadyPinned) {
                    const pinnedAndBookmarks = [...remainingBookmarks, { ...itemToPin, pinned: false }];
                    return { bookmarks: pinnedAndBookmarks }
                }
                const pinnedAndBookmarks = [{ ...itemToPin, pinned: true }, ...remainingBookmarks]
                return { bookmarks: pinnedAndBookmarks }
            }),

            setUser: (user) => set({ user }),
            setShowModal: (showModal) => set({ showModal: showModal }),
            setShowDeleteModal: (showDeleteModal) => set({ showDeleteModal: showDeleteModal }),
            setItemId: (id) => set({ itemId: id }),
            setIsArchiving: (isArchiving) => set({ isArchiving: isArchiving }),
            handleConfirm: () => {
                const { itemId, isArchiving, setArchiveItems, restoreItem } = get();

                if (itemId) {
                    if (isArchiving) {
                        setArchiveItems(itemId);
                    } else {
                        restoreItem(itemId);
                    }
                    set({ showModal: false, itemId: null });
                } else {
                    console.error("No itemId found in store during handleConfirm!");
                }
            },
            setIsDeleting: (isDeleting) => set({ isDeleting: isDeleting }),

            setSearchBar: (newValue: string) => set({ searchBar: newValue }),
            setEmailLogin: (newValue: string) => set({ emailLogin: newValue }),
            setEmailCreateAcc: (newValue: string) => set({ emailCreateAcc: newValue }),
            setPasswordLogin: (newValue: string) => set({ passwordLogin: newValue }),
            setPasswordCreateAcc: (newValue: string) => set({ passwordCreateAcc: newValue }),
            setFullName: (newValue: string) => set({ fullName: newValue }),
            setTextField: (newValue: string) => set({ textField: newValue }),
            setEmailError: () => set((state) => ({ emailError: !state.emailError })),
            setPasswordError: () => set((state) => ({ passwordError: !state.passwordError })),
            setIsEmpty: () => set((state) => ({ isEmpty: !state.isEmpty })),
            setAddTitle: (newValue: string) => set({ addTitle: newValue }),
            setAddDescription: (newValue: string) => set({ addDescription: newValue }),
            setAddURL: (newValue: string) => set({ addURL: newValue }),
            setAddTags: (newValue: string) => set({ addTags: newValue }),
            setAddFavicon: (newValue: string) => set({ addFavicon: newValue }),
        }),
        {
            name: 'bookmarks-store', // This is the key that will be used in localStorage
        }
    )
);

export default useBookmarks