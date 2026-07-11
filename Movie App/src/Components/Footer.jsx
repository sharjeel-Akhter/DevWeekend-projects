import React from 'react';
import { Link } from 'react-router';

function Footer(props) {
    return (
        <main>
        

<footer className="bottom-0 bg-neutral-primary-soft rounded-base shadow-xs border border-gray-600 h-24  dark:bg-gray-800 dark:text-white">
    <div className="w-full mx-auto mt-6  p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-body sm:text-center">© 2023 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
        <li>
            <a href="/" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="/" className="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="/" className="hover:underline me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="/" className="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>

        </main>
    );
}

export default Footer;