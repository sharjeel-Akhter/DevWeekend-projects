
import { NavLink } from 'react-router';

function DashboardLayout() {
    return (
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl text-center'>DashBoard</h1>
          <NavLink to="userprofile">Profile</NavLink><br />
          <NavLink to="settings">Settings</NavLink>
        </div>
    );
}

export default DashboardLayout;