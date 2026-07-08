import { useEffect, useState } from 'react';
export default function useTheme(){
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
    });


const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));

}

console.log(theme)
console.log(localStorage.getItem('theme'))

useEffect(() => {
    const html = document.documentElement;

    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }   
    localStorage.setItem('theme', theme);

}, [theme]);


return {theme, toggleTheme};
}

