import React from 'react';
import {NavLink} from 'react-router'
function Home() {
    return (
        <div>
           <div className='text-center flex justify-between gap-4 mt-3 bg-teal-950 py-5 px-8 text-2xl text-white w-grow'>
               <NavLink to='/signin'>Sign In</NavLink>
               <NavLink to='/login'>Log In</NavLink>
               <NavLink to='/profile'>Profile</NavLink>
           </div>
        </div>
    );
}

export default Home;