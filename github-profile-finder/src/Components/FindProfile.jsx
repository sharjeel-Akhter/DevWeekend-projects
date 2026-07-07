import React, { useEffect, useRef, useState } from 'react';

function FindProfile(props) {
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null)
    const [error, setError] = useState(null);

    
    const fetchData = async () => {
            setUserData(null)
            setLoading(true);
            setError(null);
            try {
                let res = await fetch(`https://api.github.com/users/${search}`)
                if (!res.ok) {
                    throw new Error('User Not Found');
                }
                let data = await res.json();
                setUserData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
         
    const inputRef = useRef(null);
    useEffect(() =>{
        if(inputRef.current){
            inputRef.current?.focus();
        }
    },[])

    return (
        <div className='bg-black flex flex-col text-center  min-h-screen text-gray-200'>
          <h1 className='mt-4 text-4xl font-mono '>GitHub Profile Finder</h1>
            <input ref={inputRef} className='mt-4 mb-4 m-auto min-w-2xl border border-gray-300 rounded-md py-2 px-4 text-gray-300 placeholder-gray-500 focus: outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' type="text" placeholder='Enter the username' autoComplete='off' onChange={(e) => setSearch(e.target.value)} />
            {error && <p className='text-red-600 mb-1.5'>Error: {error}</p>}
            {loading && <p className='text-blue-500 mt-1.5'>Loading the Data...</p>}
            <button className='bg-amber-50 max-w-20 text-2xl text-gray-900 py-2 mt-3.5 m-auto px-1.5 rounded-md cursor-pointer hover:bg-gray-200' onClick={fetchData}>Search</button>
            {(!loading && userData) &&
                <div className='flex flex-col justify-between'>
                    <img className='mt-2.5 px-9 max-w-2xl m-auto' src={userData?.avatar_url} alt="" />
                    <p className='text-2xl mt-3 font-bold'>Name: {userData?.login}</p>
                   {userData.bio && <p className='text-2xl mt-3 font-bold'>Bio: {userData?.bio}</p>}
                    <p className='text-2xl mt-3 font-bold'>Followers: {userData?.followers}</p>
                </div>
            }

        </div>
    );
}

export default FindProfile;