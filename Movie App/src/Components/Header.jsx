import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router'
import { useTheme } from '../hooks/useTheme';
import { CiDark, CiLight } from "react-icons/ci";
import logo from '../assets/logo.webp'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';


function Header() {
    const { theme, setTheme } = useTheme()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toggleTheme = () => setTheme((prev) => prev === 'light' ? 'dark' : 'light')

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
        setIsOpen(false);
        e.preventDefault();
        let queryTerm = e.target.search.value;
        e.target.reset();
        return navigate(`/search?q=${queryTerm}`);
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
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8 font-medium lg:gap-16">
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
                    </nav>

                    <div className='hidden md:block'>
                        <form onSubmit={handleSubmit}>
                            <input className='py-2 px-1.5 border border-gray-700 rounded-lg' name='search' type="text" placeholder='Search here' autoComplete='off' />
                        </form>

                    </div>
                    <button onClick={toggleTheme} className='mr-4 border border-gray-600 py-2 px-2 rounded-md text-xl hover:bg-gray-300 dark:hover:bg-gray-700'>
                        {theme === 'light' ? <CiDark /> : <CiLight />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className='text-3xl mr-5 text-gray-700 transition-colors duration-300 dark:text-white md:hidden'>{isOpen ? <HiOutlineX /> : <HiOutlineMenu />}</button>
                </div>

                {isOpen && (
                    <nav className='border-t border-gray-200 bg-white shadow-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900 md:hidden'>
                        <ul className="flex flex-col gap-5 p-5 font-medium">
                            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Home</NavLink>

                            <NavLink to="/movies/top" onClick={() => setIsOpen(false)} className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Top</NavLink>

                            <NavLink to="/movies/popular" onClick={() => setIsOpen(false)} className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Popular</NavLink>

                            <NavLink to="/movies/upcoming" onClick={() => setIsOpen(false)} className={({ isActive }) =>
                                isActive
                                    ? "font-semibold text-blue-600 dark:text-blue-400"
                                    : "text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"}>Upcoming</NavLink>
                            <form onSubmit={handleSubmit}>
                                <div className="mt-2 flex items-center rounded-full bg-gray-100 px-4 py-2 transition-colors dark:bg-slate-800">
                                    <FiSearch className="text-gray-500 dark:text-gray-400" />
                                    <input type="search" name="search" autoComplete="off" placeholder="Search products..." className="ml-2 w-full bg-transparent text-gray-900 outline-none placeholder:text-gray-500 dark:text-white dark:placeholder:text-gray-400" />
                                </div>
                            </form>
                        </ul>
                    </nav>
                )}
            </header>
        </>
    );
}

export default Header;