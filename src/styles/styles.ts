import type { ThemeTypes } from '../types/themeTypes'

import whiteSun from './../assets/icon-white-sun.svg'
import whiteMoon from './../assets/icon-white-moon.svg'
import blackSun from './../assets/icon-light-theme.svg'
import blackMoon from './../assets/icon-dark-theme.svg'
import darkThemeLogo from './../assets/logo-dark-theme.svg'
import lightThemeLogo from './../assets/logo-light-theme.svg'
import lightIconTheme from './../assets/icon-theme.svg'
import darkIconTheme from './../assets/icon-dark-theme.svg'
import lightIconLogout from './../assets/icon-logout.svg'
import darkIconLogout from './../assets/icon-logout-dark.svg'
import lightCopyIcon from './../assets/icon-copy.svg'
import darkCopyIcon from './../assets/icon-copy-dark.svg'




const themes: ThemeTypes[] = [
    {
        mode: 'light',
        bg: 'bg-light-neutral-100',
        logo: lightThemeLogo,
        headerText: 'text-light-neutral-900',
        paragraphOne: 'text-light-neutral-800',
        paragraphTwo: 'text-light-neutral-900',
        inputBorder: 'border-light-neutral-500',
        buttonBg: 'bg-teal-700',
        errorBg: 'bg-new-red-800',
        errorBorder: 'border-new-red-800',
        sun: blackSun,
        moon: blackMoon,
        iconTheme: lightIconTheme,
        iconLogout: lightIconLogout,
        iconCopy: lightCopyIcon
    },
    {
        mode: 'dark',
        bg: 'bg-dark-neutral-900',
        logo: darkThemeLogo,
        headerText: 'text-white',
        paragraphOne: 'text-dark-neutral-100',
        paragraphTwo: 'text-white',
        inputBorder: 'border-dark-neutral-300',
        buttonBg: 'bg-teal-700',
        errorBg: 'bg-new-red-800',
        errorBorder: 'border-new-red-800',
        sun: whiteSun,
        moon: whiteMoon,
        iconTheme: darkIconTheme,
        iconLogout: darkIconLogout,
        iconCopy: darkCopyIcon
    }
]

export default themes