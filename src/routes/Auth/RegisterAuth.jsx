// import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../../appwrite';
import { v4 as uuidv4 } from 'uuid';
import useAuthStore from '../../store/authStore'


export const RegisterAuth = () => {
    const navigate = useNavigate(); //
    const setUser = useAuthStore((state) => state.setUser); // Accessing setUser method

    // Form Data
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // Called the create
    const HandleRegisterAuth = async (e) => {
        e.preventDefault();
        try {
            // Register user using Appwrite
            const response = await account.create(uuidv4(), email, password, name);
            // Set the user in Zustand store
            setUser(response);
            // Save session to LocalStorage
            localStorage.setItem('session', JSON.stringify(response));
            // Redirect to home route
            navigate('/home')
        }
        catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div className="w-[100%] h-[100vh] flex justify-center items-center">
            <div className='w-[98%] mx-auto p-5 my-8 bg-lighterBlue rounded-sm sm:w-[55%] lg:w-[28%] md:p-8'>
                <div className="head flex items-center justify-center mb-5">
                    <img src="/task.png" alt="" />
                    <h2 className='app_name text-center text-[15px] font-semibold ml-2 md:text-[16px]'>
                        Task.
                    </h2>
               </div>
                <h2 className='text-[15px] text-center font-medium mb-5 md:text-[14px]'>
                    Create an account
                </h2>
                <form className='w-[100%] flex flex-col'method='POST'>
                    <input
                        type="text"
                        placeholder='Username please'
                        id="name"
                        name='name'
                        autoComplete='name'
                        required
                        className=' border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px] mb-3'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                    <input
                        type="email"
                        placeholder='Your email please'
                        id='email'
                        name='email'
                        autoComplete='email'
                        required
                        className='border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px] mb-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder='Your password please'
                        id='password'
                        name='password'
                        autoComplete='password'
                        required
                        className='border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px]'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button
                        type='submit'
                        className='bg-amber-700 my-3 py-2 rounded-md text-[12px] text-white outline-none hover:bg-amber-600'
                        onClick={HandleRegisterAuth}
                    >
                        Create an account
                    </button>
                    {/* Info */}
                   
                </form>
                
                <p className='text-[11px] font-medium text-center flex justify-center'>Already Have An Account?
                    <Link to="/"
                        className='text-amber-700 font-semibold cursor-pointer hover:text-amber-600 ml-1'>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
