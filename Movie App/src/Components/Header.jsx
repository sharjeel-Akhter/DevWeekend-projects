import React from 'react';
import { NavLink } from 'react-router'
import { useTheme } from '../hooks/useTheme';
import { CiDark,CiLight } from "react-icons/ci";

function Header() {
    const {theme, setTheme} = useTheme('')
    const toggleTheme = () => setTheme((prev) => prev === 'light'? 'dark': 'light')
        
    React.useEffect(() => {
    const html = document.documentElement;

    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }   

}, [theme]);

    return (
        <>
            <header className='sticky w-full h-20 border border-gray-300 dark:border-gray-700 dark:bg-gray-800  dark:text-white'>
                <div className='flex justify-between items-center mt-6'>
                    <span className='text-3xl ml-2.5 text-center'>Cinmeate</span>
                    <ul className='flex gap-3'>
                       
                            <li>
                                <NavLink to='/' className={({ isActive }) => isActive ? "text-red-800 text-lg" : "text-gray-950 dark:text-gray-300 text-lg  hover:text-red-800 duration-300"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies/top' className={({ isActive }) => isActive ? "text-red-800 text-lg" : "text-gray-950 dark:text-gray-300 text-lg hover:text-red-800 duration-300"}>Top</NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies/popular' className={({ isActive }) => isActive ? "text-red-800 text-lg" : "text-gray-950 dark:text-gray-300 text-lg  hover:text-red-800 duration-300"}>Popular </NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies/upcoming' className={({ isActive }) => isActive ? "text-red-800 text-lg" : "text-gray-950 dark:text-gray-300 text-lg hover:text-red-800 duration-300"}>Upcoming</NavLink>
                            </li>
                            
                        
                    </ul>
                    <button onClick={toggleTheme} className='border border-gray-600 py-2 px-2 rounded-md text-xl hover:bg-gray-300 dark:hover:bg-gray-700'>
                        {theme === 'light' ?  <CiDark />:   <CiLight />}
                    </button>
                   

                    <div className='mr-3.5'>
                        <form>
                            <input className='py-2 px-1.5 border border-gray-700 rounded-lg' type="text" placeholder='Search here' />
                        </form>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;