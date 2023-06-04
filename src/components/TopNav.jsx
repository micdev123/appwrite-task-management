// import React from 'react'
import { AiFillBell } from "react-icons/ai"
import { HiViewGrid } from "react-icons/hi"
import { MdFeedback } from 'react-icons/md'

const TopNav = () => {
    return (
        <div className="w-[100%] bg-white py-2 px-4 flex items-center justify-between rounded-md mt-[1.5rem] md:mt-0">
            <p className="font-medium text-[11px] flex items-center gap-2 relative md:text-[12px]">
                <HiViewGrid className='text-[15px]' />
                Overview
            </p>
            <div className="others flex items-center gap-2">
                <div className="notification bg-zinc-100 p-[2px] rounded-sm md:p-1">
                    <AiFillBell className="text-[13px] md:text-[16px]" />
                </div>
                <div className="current_user flex items-center gap-1">
                    <div className="image w-[1.3rem] md:w-[1.5rem]">
                        <img src="/user.jpg" alt="" className="rounded-full" />
                    </div>
                    <h3 className="hidden text-[11px] font-medium md:block">Michael L Bangura</h3>
                </div>
                <div className="user-feedback bg-zinc-100 p-[2px] rounded-sm md:p-1 md:ml-2">
                    <MdFeedback className="text-[13px] md:text-[16px]" />
                </div>
            </div>
        </div>
    )
}

export default TopNav