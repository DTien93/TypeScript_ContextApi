import { ReactNode, useState } from 'react'
import { createContext } from 'react'
import { PropTypes } from '@material-ui/core'


interface ThemeContextProps {
    children: ReactNode
}

interface ThemeContextDefault {
    theme: PropTypes.Color
    toggleTheme: (theme: PropTypes.Color) => void
}

const themeContextDefaultData = {
    theme: 'secondary' as PropTypes.Color,
    toggleTheme: () => null
}

// Interface ThemeCOntextProvider
export const ThemeContext = createContext<ThemeContextDefault>(themeContextDefaultData)

const ThemeContextProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState<PropTypes.Color>(themeContextDefaultData.theme)

    // Actually 
    const toggleTheme = (theme: PropTypes.Color) => setTheme(theme)

    const themeContextDynamicData = { theme, toggleTheme }
    
    return <ThemeContext.Provider value={themeContextDynamicData}>
            { children }
    </ThemeContext.Provider>
}

export default ThemeContextProvider