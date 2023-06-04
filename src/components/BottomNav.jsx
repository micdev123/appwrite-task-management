import React from 'react'
import { AiFillSetting } from 'react-icons/ai'
import { FaSitemap } from 'react-icons/fa'
import { HiViewGrid } from 'react-icons/hi'
import { BsCalendarRange } from 'react-icons/bs'
import { GiNotebook } from 'react-icons/gi'
// import { Popover } from '@headlessui/react'

const BottomNav = () => {
    return (
        <nav className='w-[100%] bg-zinc-100 fixed bottom-0 md:hidden'>
            <ul className='w-[95%] mx-auto grid grid-cols-5 py-[3px]'>
                <li className='flex flex-col items-center text-[10px] font-medium text-zinc-800 border-t-[3px] border-cyan-600 py-[10px]'>
                    <HiViewGrid className='text-[14px] mb-1' />
                    Overview
                </li>
                <li className='flex flex-col items-center text-[10px] font-medium text-zinc-500 py-3'>
                    <FaSitemap className='text-[14px] mb-1' />
                    Projects
                </li>
                <li className='flex flex-col items-center text-[10px] font-medium text-zinc-500 py-3'>
                     <GiNotebook className='text-[14px] mb-1' />
                    Notes
                </li>
                <li className='flex flex-col items-center text-[10px] font-medium text-zinc-500 py-3'>
                    <BsCalendarRange className='text-[14px] mb-1' />
                    Calendar
                </li>
                <li className='flex flex-col items-center text-[10px] font-medium text-zinc-500 py-3'>
                    <AiFillSetting className='text-[14px] mb-1' />
                    Settings
                </li>
            </ul>
        </nav>
    )
}

export default BottomNav