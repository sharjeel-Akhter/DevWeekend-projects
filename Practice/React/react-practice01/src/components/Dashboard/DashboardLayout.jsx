
import { NavLink, Outlet } from 'react-router';

function DashboardLayout() {
    return (
        <div className='flex' >
            <aside className='bg-gray-700 h-screen w-sm'>
                <h1 className='text-4xl text-center'>DashBoard</h1>
                <NavLink className="text-gray-300 text-lg mt-1.5 hover:underline" to="userprofile">Profile</NavLink><br />
                <NavLink className="text-gray-300 text-lg mt-1.5 hover:underline" to="settings">Settings</NavLink><br />
                <NavLink className="text-gray-300 text-lg mt-1.5 hover:underline" to="products/1">Product 1</NavLink><br />
                <NavLink className="text-gray-300 text-lg mt-1.5 hover:underline" to="products/2">Product 2</NavLink><br />
                <NavLink className="text-gray-300 text-lg mt-1.5 hover:underline" to="products/3">Product 3</NavLink><br />
                <NavLink className="text-gray-300 text-lg mt-1.5 hover:underline" to="products/4">Product 4</NavLink><br />
            </aside>

            <main className='text-center bg-gray-900 w-screen'>
                <Outlet />
            </main>

        </div>
    );
}

export default DashboardLayout;