import {Link, NavLink } from 'react-router';
import useCartContext from '../contexts/useCartContext';
function Header() {
    let { productCount } = useCartContext();
    return (
        <div>
            <header className='w-full h-16 bg-gray-700 text-white flex items-center justify-between px-4'>
                <div>
                    <h1 className='text-2xl ml-1'>Shopping Cart</h1>
                </div>
                <nav>
                    <ul className='flex space-x-4'>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 text-lg" : "text-gray-950 dark:text-gray-300 text-lg  hover:text-blue-500 duration-200"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/cart' className={({ isActive }) => isActive ? "text-blue-500 text-lg" : "text-gray-950 dark:text-gray-300 text-lg  hover:text-blue-500 duration-200"}>Cart</NavLink>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Link to="/cart">
                     <span>Cart: {productCount} items</span> 
                    </Link>
                      
                 
                </div>
            </header>
        </div>
    );
}

export default Header;