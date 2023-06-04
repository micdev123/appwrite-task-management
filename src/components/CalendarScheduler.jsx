// import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegFlag } from 'react-icons/fa'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'

const CalendarScheduler = () => {
    return (
        <div>
            <div className="w-[100%] head mt-[1rem] flex items-center justify-between md:px-[0.5rem] xl:px-[2rem]">
                {/* Navigation */}
                <div className="w-[40%] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="navigate flex items-center">
                            <button className='bg-white py-[4px] px-[5px] rounded-sm'>
                                <GrFormPrevious />
                            </button>
                            <div className="w-[1px] h-[13px] bg-zinc-300"></div>
                            <button className='bg-white py-[4px] px-[5px] rounded-sm'>
                                <GrFormNext />
                            </button>
                        </div>
                        <p className='bg-white py-[4px] px-[8px] text-[10px] font-medium'>
                            Today
                        </p>
                    </div>
                    {/* Current Month */}
                    <div className="month">
                        <p className='text-[13px] font-medium'>
                            May
                            <span className='text-[10px] font-normal'>
                                2023
                            </span>
                        </p>
                    </div>
                </div>
                
                {/* Tabs */}
                <div className="w-[60%] tabs flex items-center justify-end rounded-sm">
                    <p className='bg-white text-[9px] py-[4px] px-[7px] font-medium rounded-sm'>
                        Month
                    </p>
                    <p className='bg-cyan-600 text-white text-[9px] py-[4px] px-[7px] font-medium rounded-sm'>
                        Week
                    </p>
                    <p className='bg-white text-[9px] py-[4px] px-[7px] font-medium rounded-sm'>
                        Day
                    </p>
                </div>
            </div>
            <div className="w-[100%] mt-[2rem]">
                <table className='w-[100%]'>
                    <thead className='font-light border-t-[1px] border-b-[1px] border-zinc-300'>
                        <tr className='grid grid-cols-7 text-[11.5px] text-zinc-500 '>
                            <th className='font-normal border-r-[1px] border-zinc-300 py-[5px]'>Mon 01</th>
                            <th className='font-normal border-r-[1px] border-zinc-300 py-[5px]'>Tue 02</th>
                            <th className='font-normal border-r-[1px] border-zinc-300 py-[5px]'>Wed 03</th>
                            <th className='font-normal border-r-[1px] border-zinc-300 py-[5px]'>Thu 04</th>
                            <th className='font-normal border-r-[1px] border-zinc-300 py-[5px]'>Fri 05</th>
                            <th className='font-normal border-r-[1px] border-zinc-300 py-[5px]'>Sat 06</th>
                            <th className='font-normal border-r-[1px] border-zinc-300 py-[5px]'>Sun 07</th>
                        </tr>
                    </thead>
                    <tbody className='w-[100%]'>
                        <tr className='grid grid-cols-7 mb-1'>
                            <td className='col-start-1 col-end-3 border-r-[1px] border-zinc-300 px-1'>
                                <div className=" bg-white p-3 rounded-md">
                                    {/* Head */}
                                    <div className="head flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {/* Priority */}
                                            <p className="priority">
                                                <FaRegFlag className='text-red-700 text-[12px]' />
                                            </p>
                                            {/* Due date */}
                                            <p className='flex items-center gap-1 text-[8px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                                Due :
                                                <span className='text-[7px]'>2 May</span>
                                            </p>
                                        </div>
                                        <BsThreeDotsVertical className='text-[12px]' />
                                    </div>

                                    {/* Task name */}
                                    <div className="log-name my-2">
                                        <h2 className='text-[10px] font-medium tracking-wide'>
                                            Design the customize section of the e-shop web app.
                                        </h2>
                                    </div>

                                    {/* Tags */}
                                    <div className="tags flex items-center gap-1 mt-2">
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Work
                                        </p>
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Personal
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-start-3 col-end-5 border-r-[1px] border-zinc-300 px-1'>
                                <div className=" bg-white p-3 rounded-md">
                                    {/* Head */}
                                    <div className="head flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {/* Priority */}
                                            <p className="priority">
                                                <FaRegFlag className='text-red-700 text-[12px]' />
                                            </p>
                                            {/* Due date */}
                                            <p className='flex items-center gap-1 text-[8px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                                Due :
                                                <span className='text-[7px]'>2 May</span>
                                            </p>
                                        </div>
                                        <BsThreeDotsVertical className='text-[12px]' />
                                    </div>

                                    {/* Task name */}
                                    <div className="log-name my-2">
                                        <h2 className='text-[10px] font-medium tracking-wide'>
                                            Design the customize section of the e-shop web app.
                                        </h2>
                                    </div>

                                    {/* Tags */}
                                    <div className="tags flex items-center gap-1 mt-2">
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Work
                                        </p>
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Personal
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-start-5 col-end-8 border-r-[1px] border-zinc-300 px-1'>
                               <div className=" bg-white p-3 rounded-md">
                                    {/* Head */}
                                    <div className="head flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {/* Priority */}
                                            <p className="priority">
                                                <FaRegFlag className='text-red-700 text-[12px]' />
                                            </p>
                                            {/* Due date */}
                                            <p className='flex items-center gap-1 text-[8px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                                Due :
                                                <span className='text-[7px]'>2 May</span>
                                            </p>
                                        </div>
                                        <BsThreeDotsVertical className='text-[12px]' />
                                    </div>

                                    {/* Task name */}
                                    <div className="log-name my-2">
                                        <h2 className='text-[10px] font-medium tracking-wide'>
                                            Design the customize section of the e-shop web app.
                                        </h2>
                                    </div>

                                    {/* Tags */}
                                    <div className="tags flex items-center gap-1 mt-2">
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Work
                                        </p>
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Personal
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr className='grid grid-cols-7 mb-1'>
                            <td className='col-start-2 col-end-5 border-r-[1px] border-zinc-300 px-1'>
                                <div className=" bg-white p-3 rounded-md">
                                    {/* Head */}
                                    <div className="head flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {/* Priority */}
                                            <p className="priority">
                                                <FaRegFlag className='text-red-700 text-[12px]' />
                                            </p>
                                            {/* Due date */}
                                            <p className='flex items-center gap-1 text-[8px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                                Due :
                                                <span className='text-[7px]'>2 May</span>
                                            </p>
                                        </div>
                                        <BsThreeDotsVertical className='text-[12px]' />
                                    </div>

                                    {/* Task name */}
                                    <div className="log-name my-2">
                                        <h2 className='text-[10px] font-medium tracking-wide'>
                                            Design the customize section of the e-shop web app.
                                        </h2>
                                    </div>

                                    {/* Tags */}
                                    <div className="tags flex items-center gap-1 mt-2">
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Work
                                        </p>
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Personal
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>

                        <tr className='grid grid-cols-7 mb-1'>
                            <td className='col-start-3 col-end-4 border-r-[1px] border-zinc-300 px-1 mb-1'>
                                <div className=" bg-white p-3 rounded-md">
                                    {/* Head */}
                                    <div className="head flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {/* Priority */}
                                            <p className="priority">
                                                <FaRegFlag className='text-red-700 text-[12px]' />
                                            </p>
                                            {/* Due date */}
                                            <p className='flex items-center gap-1 text-[8px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                                Due :
                                                <span className='text-[7px]'>2 May</span>
                                            </p>
                                        </div>
                                        <BsThreeDotsVertical className='text-[12px]' />
                                    </div>

                                    {/* Task name */}
                                    <div className="log-name my-2">
                                        <h2 className='text-[10px] font-medium tracking-wide'>
                                            Design the customize section of the e-shop web app.
                                        </h2>
                                    </div>

                                    {/* Tags */}
                                    <div className="tags flex items-center gap-1 mt-2">
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Work
                                        </p>
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Personal
                                        </p>
                                    </div>
                                </div>
                            </td>

                            <td className='col-start-4 col-end- border-r-[1px] border-zinc-300 px-1 mb-1'>
                                <div className=" bg-white p-3 rounded-md">
                                    {/* Head */}
                                    <div className="head flex items-center justify-between mb-2">
                                        <div className="flex items-center gap-2">
                                            {/* Priority */}
                                            <p className="priority">
                                                <FaRegFlag className='text-red-700 text-[12px]' />
                                            </p>
                                            {/* Due date */}
                                            <p className='flex items-center gap-1 text-[8px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                                Due :
                                                <span className='text-[7px]'>2 May</span>
                                            </p>
                                        </div>
                                        <BsThreeDotsVertical className='text-[12px]' />
                                    </div>

                                    {/* Task name */}
                                    <div className="log-name my-2">
                                        <h2 className='text-[10px] font-medium tracking-wide'>
                                            Design the customize section of the e-shop web app.
                                        </h2>
                                    </div>

                                    {/* Tags */}
                                    <div className="tags flex items-center gap-1 mt-2">
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Work
                                        </p>
                                        <p className='bg-zinc-100 text-[7px] font-medium py-[3px] px-[5px]'>
                                            Personal
                                        </p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CalendarScheduler