import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useNavigate, Link } from 'react-router'
import axios from 'axios'
function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
    const onSubmit = (data) => {
        axios.post('http://localhost:8000/users/login', data, {
            withCredentials: true
        })
            .then(() => (
                navigate('/profile')
            ))
            .catch((error) => {
                console.log(error.response?.data?.message)
            })
        console.log(data, 'message sent')
    }
    return (
        <div className='mt-10 flex flex-col items-center '>
            <h1 className='text-2xl font-bold'>Log In</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="relative max-w-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-zinc-900 py-5 flex flex-col items-center gap-4 mt-6 mb-6 w-[50%] rounded-xl shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Enter Credentials</h2>

                <input className="border w-[50%] border-gray-400 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-2.5 rounded-lg outline-none focus:border-2 focus:border-green-400" type="text" {...register("name", { required: "Name is required" })} placeholder="Your Name" autoComplete="off" />
                {errors.name && <p className="text-red-400 text-sm -mt-2">{errors.name.message}</p>}

                <div className="relative w-[50%]">
                    <input className="border w-full border-gray-400 dark:border-gray-600 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 p-2.5 pr-10 rounded-lg outline-none focus:border-2 focus:border-green-400" type={showPassword ? "text" : "password"} {...register("password", { required: "password is required", })} placeholder="Your Password" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xl">{showPassword ? <IoEyeOffOutline className='text-gray-400' /> : <IoEyeOutline className='text-gray-400' />}</button>
                </div>
                {errors.password && <p className="text-red-400 text-sm -mt-2">{errors.password.message}</p>}

                <button type="submit" disabled={isSubmitting} className="w-[50%] bg-black dark:bg-white text-white dark:text-black p-2.5 rounded-lg mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 dark:hover:bg-gray-300">{isSubmitting ? "Logging In..." : "Log In"}</button>
            </form>

            <Link to='/' className='w-fit bg-black dark:bg-black text-white dark:text-white p-2.5 rounded-lg mt-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 dark:hover:bg-gray-800 text-center'>Back To Home</Link>
        </div>
    );
}

export default Login;