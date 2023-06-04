// import React from 'react'

import { FcGoogle } from "react-icons/fc"
import { Link, useLocation, useNavigate } from "react-router-dom";

export const LoginAuth = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirect = new URLSearchParams(search).get('redirect') || '/';
    const HandleLoginAuth = () => {
        navigate(redirect | '/home');
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
                    Login to your account
                </h2>
                <form className='w-[100%] flex flex-col' onSubmit={HandleLoginAuth}>
                    <input type="email" placeholder='Your email please' className='border border-slate-500 bg-transparent rounded-md py-2 px-4 text-[11px]' id='email' name='email'/>
                    
                    <button
                        className='bg-amber-700 my-3 py-2 rounded-md text-[12px] text-white outline-none hover:bg-amber-600'>
                        Login
                    </button>
                    {/* Info */}
                    <p className='text-[11px] text-center font-medium my-2'>OR Login With</p>
                </form>
                {/* Social Authentication Buttons */}
                <div className="social_btns w-[100%] my-3">
                    <button
                        className='w-[100%] flex items-center justify-center bg-slate-200 py-2 rounded-md mb-3 outline-none hover:bg-slate-300'>
                        <FcGoogle />
                        <p className='text-[12px] font-medium ml-1 dark:text-slate-800'>Continue with Google</p>
                    </button>
                
                </div>
                <p className='text-[11px] font-medium text-center flex justify-center'>Don't Have An Account?
                    <Link to={`/registerAuth?redirect${redirect}`}
                    className='text-amber-700 font-semibold cursor-pointer hover:text-amber-600 ml-1'>
                        Create One
                    </Link>
                </p>
            </div>
        </div>
    )
}
