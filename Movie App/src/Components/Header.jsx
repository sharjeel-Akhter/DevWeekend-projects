import React from 'react';
import {Link, NavLink, useNavigate } from 'react-router'
import { useTheme } from '../hooks/useTheme';
import { CiDark,CiLight } from "react-icons/ci";
import logo from '../assets/logo.webp'


function Header() {
    const {theme, setTheme} = useTheme()
    const navigate = useNavigate()

    const toggleTheme = () => setTheme((prev) => prev === 'light'? 'dark': 'light')
    
    React.useEffect(() => {
    const html = document.documentElement;

    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }  
    localStorage.setItem('theme', theme) 

}, [theme]);

const handleSubmit = (e) => {
    e.preventDefault();
    let queryTerm = e.target.search.value;
    e.target.reset();
    return navigate(`/search?q=${queryTerm}`)
}

    return (
        <>
            <header className='sticky w-full h-25 border border-gray-300 dark:border-gray-700 dark:bg-gray-800  dark:text-white'>
                <div className='flex justify-between items-center mt-6'>
                    <Link to='/'>
                    <div className='flex'> 
                        
                        <img className='ml-1 h-12' src={logo} alt="" />
                        <span className='text-2xl font-bold text-blue-500 text-center mt-1.5'>Cinemate</span>
                    </div>
                       </Link>
                    
                    <ul className='flex gap-16'>
                       
                            <li>
                                <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 text-lg" : "text-gray-950 dark:text-gray-300 text-lg  hover:text-blue-500 duration-200"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies/top' className={({ isActive }) => isActive ? "text-blue-500 text-lg" : "text-gray-950 dark:text-gray-300 text-lg hover:text-blue-500 duration-200"}>Top</NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies/popular' className={({ isActive }) => isActive ? "text-blue-500 text-lg" : "text-gray-950 dark:text-gray-300 text-lg  hover:text-blue-500 duration-200"}>Popular </NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies/upcoming' className={({ isActive }) => isActive ? "text-blue-500 text-lg" : "text-gray-950 dark:text-gray-300 text-lg hover:text-blue-500 duration-200"}>Upcoming</NavLink>
                            </li>
                            
                        
                    </ul>
                    <button onClick={toggleTheme} className='border border-gray-600 py-2 px-2 rounded-md text-xl hover:bg-gray-300 dark:hover:bg-gray-700'>
                        {theme === 'light' ?  <CiDark />:   <CiLight />}
                    </button>
                   

                    <div className='mr-3.5'>
                        <form onSubmit={handleSubmit}>
                            <input className='py-2 px-1.5 border border-gray-700 rounded-lg' name = 'search' type="text" placeholder='Search here' autoComplete='off' />
                        </form>
                    </div>
                </div>

            </header>
        </>
    );
}

export default Header;