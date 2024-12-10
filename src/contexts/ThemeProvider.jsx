import { useEffect, createContext, useState } from "react"

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() =>{
        console.log(theme);
        console.log(document.querySelector('html').setAttribute('data-theme', theme))
    },[theme]);

    return <ThemeContext.Provider value={{theme, setTheme}}>{children}</ThemeContext.Provider>

}

