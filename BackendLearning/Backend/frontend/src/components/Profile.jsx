import React, { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router';


function Profile() {
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProfile = async () => {
            await axios.get('http://localhost:8000/users/profile', { withCredentials: true })
                .then((res) => setUser(res.data.user))
        }
        fetchProfile()
    }, [])
    const handleClick = async () => {
        try {
            await axios.post('http://localhost:8000/users/logout', {}, { withCredentials: true })

            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='flex flex-col items-center py-4 gap-4 font-bold text-3xl'>
            <h1>Welcome Back User!</h1>
            <h1>{user?._id}</h1>
            <h1>{user?.username}</h1>

            <button onClick={handleClick} className="w-fit bg-black dark:bg-black text-white dark:text-white p-2.5 rounded-lg mt-2 cursor-pointer  hover:bg-gray-800 dark:hover:bg-gray-700">Logout</button>

        </div>
    );
}

export default Profile;