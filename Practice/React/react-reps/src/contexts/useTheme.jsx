import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";


const themeContext = createContext();

export default function ThemeProvider( {children} ){
    const [theme, setTheme] = useLocalStorage("contextTheme", "light");

    const toggleTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light")
    }

    useEffect(() => {
        const html = document.documentElement;

        if(theme === 'dark'){
            html.classList.add("dark")
        }else{
            html.classList.remove("dark")
        }
    }, [theme])

    return (
        <themeContext.Provider value={ {theme, toggleTheme} }>
            {children}
        </themeContext.Provider>
    )
}

export function useTheme(){
    return useContext(themeContext);
}