import type { ThemeTypes } from '../types/themeTypes'

import whiteSun from './../assets/icon-white-sun.svg'
import whiteMoon from './../assets/icon-white-moon.svg'
import blackSun from './../assets/icon-light-theme.svg'
import blackMoon from './../assets/icon-dark-theme.svg'
import darkThemeLogo from './../assets/logo-dark-theme.svg'
import lightThemeLogo from './../assets/logo-light-theme.svg'
import lightIconTheme from './../assets/icon-theme.svg'
import darkIconTheme from './../assets/icon-theme-dark.svg'
import lightIconLogout from './../assets/icon-logout.svg'
import darkIconLogout from './../assets/icon-logout-dark.svg'
import lightCopyIcon from './../assets/icon-copy.svg'
import darkCopyIcon from './../assets/icon-copy-dark.svg'
import lightCloseIcon from './../assets/icon-close.svg'
import darkCloseIcon from './../assets/icon-close-dark.svg'
import lightThreeDots from './../assets/icon-three-dots-light.svg'
import darkThreeDots from './../assets/icon-three-dots-dark.svg'
import lightPinIcon from './../assets/icon-pin.svg'
import darkPinIcon from './../assets/icon-pin-dark.svg'
import lightEyeIcon from './../assets/icon-eye.svg'
import darkEyeIcon from './../assets/icon-eye-dark.svg'
import lightClock from './../assets/icon-clock.svg'
import darkClock from './../assets/icon-clock-dark.svg'
import lightCalendarIcon from './../assets/icon-calendar.svg'
import darkCalendarIcon from './../assets/icon-calendar-dark.svg'
import lightArchive from './../assets/icon-archive.svg'
import darkArchive from './../assets/icon-archive-dark.svg'
import lightHome from './../assets/icon-home.svg'
import darkHome from './../assets/icon-home-dark.svg'
import lightVisit from './../assets/icon-visit.svg'
import darkVisit from './../assets/icon-visit-dark.svg'
import lightEdit from './../assets/icon-edit.svg'
import darkEdit from './../assets/icon-edit-dark.svg'
import lightCheck from './../assets/icon-check.svg' 
import darkCheck from './../assets/icon-check-dark.svg'
import lightMagGlass from './../assets/icon-search.svg'
import darkMagGlass from './../assets/icon-search-dark.svg'
import lightSort from './../assets/icon-sort.svg'
import darkSort from './../assets/icon-sort-dark.svg'
import lightRestore from './../assets/icon-restore.svg'
import darkRestore from './../assets/icon-restore-dark.svg'
import lightDelete from './../assets/icon-delete.svg'
import darkDelete from './../assets/icon-delete-dark.svg'




const themes: ThemeTypes[] = [
    {
        mode: 'light',
        bg: 'bg-light-neutral-100',
        secondaryBg: 'bg-white', 
        terciaryBg: 'bg-light-neutral-300',
        quaternaryBg: 'bg-light-neutral-500',
        tagBg: 'bg-light-neutral-100',
        cardBg: 'bg-white',
        hambBg: 'bg-light-neutral-900',
        notificationBg: 'bg-white',
        logo: lightThemeLogo,
        headerText: 'text-light-neutral-900',
        paragraphOne: 'text-light-neutral-800',
        paragraphTwo: 'text-light-neutral-900',
        inputBorder: 'border-light-neutral-500',
        cardBorder:  'border-light-neutral-100',
        buttonBg: 'bg-teal-800',
        buttonBorder: 'border-light-neutral-400',
        errorBg: 'bg-new-red-800',
        errorBorder: 'border-new-red-800',
        sun: blackSun,
        moon: blackMoon,
        iconTheme: lightIconTheme,
        iconLogout: lightIconLogout,
        iconCopy: lightCopyIcon,
        iconClose: lightCloseIcon,
        iconThreeDots: lightThreeDots,
        iconEye: lightEyeIcon,
        iconClock: lightClock,
        iconCalendar: lightCalendarIcon,
        iconPin: lightPinIcon,
        iconArchive: lightArchive,
        iconHome: lightHome,
        iconVisit: lightVisit,
        iconEdit: lightEdit,
        iconCheck: lightCheck,
        iconSearch: lightMagGlass,
        iconSort: lightSort,
        iconRestore: lightRestore,
        iconDelete: lightDelete
    },
    {
        mode: 'dark',
        bg: 'bg-dark-neutral-900',
        secondaryBg: 'bg-dark-neutral-600',
        terciaryBg: 'bg-dark-neutral-500',
        quaternaryBg: '',
        tagBg: 'bg-dark-neutral-600',
        cardBg: 'bg-dark-neutral-800',
        hambBg: 'bg-white',
        notificationBg: 'bg-dark-neutral-500',
        logo: darkThemeLogo,
        headerText: 'text-white',
        paragraphOne: 'text-dark-neutral-100',
        paragraphTwo: 'text-white',
        inputBorder: 'border-dark-neutral-300',
        cardBorder: 'border-dark-neutral-500',
        buttonBg: 'bg-teal-700',
        buttonBorder: 'border-dark-neutral-400',
        errorBg: 'bg-new-red-800',
        errorBorder: 'border-new-red-800',
        sun: whiteSun,
        moon: whiteMoon,
        iconTheme: darkIconTheme,
        iconLogout: darkIconLogout,
        iconCopy: darkCopyIcon,
        iconClose: darkCloseIcon,
        iconThreeDots: darkThreeDots,
        iconEye: darkEyeIcon,
        iconClock: darkClock,
        iconCalendar: darkCalendarIcon,
        iconPin: darkPinIcon,
        iconArchive: darkArchive,
        iconHome: darkHome,
        iconVisit: darkVisit,
        iconEdit: darkEdit,
        iconCheck: darkCheck,
        iconSearch: darkMagGlass,
        iconSort: darkSort,
        iconRestore: darkRestore,
        iconDelete: darkDelete
    }
]

export default themes