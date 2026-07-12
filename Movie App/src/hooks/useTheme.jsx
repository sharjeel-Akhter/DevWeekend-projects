import { children, createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem('theme') || 'light'
    });
    let toggleTheme = { };

    return(
        <ThemeContext.Provider value = {{theme, toggleTheme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}
