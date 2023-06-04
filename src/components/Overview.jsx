/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical } from 'react-icons/bs'
import Datecalendar from "./DateCalendar"
import { GoPrimitiveDot } from "react-icons/go"
// import Calendar from "./Calendar"

const Overview = () => {
    return (
        <div className="overview w-[100%] pb-[4rem] mt-[1rem] md:grid md:gap-x-1 lg:grid-cols-5 xl:grid-cols-3 xl:gap-x-2 md:pb-0 md:mt-[2rem] md:max-h-[84vh] md:overflow-x-hidden md:overflow-auto md:scrollbar md:scrollbar-w-[3px] md:scrollbar-thumb-[#31759a] md:scrollbar-track-zinc-300 scroll-smooth">
            
            <aside className="left lg:col-span-3 xl:col-span-2">
                <div className="greeting_stats bg-white flex rounded-md">
                    <div className="left py-[1.2rem] px-[1.2rem] md:py-[2rem] md:px-[1.5rem]">
                        <p className="font-medium">
                            Good day,
                            <span className="capitalize ml-2 text-cyan-700 tracking-wide">
                             Michael
                            </span>
                        </p>
                        <p className="text-[11px] font-medium my-1 md:text-[12px]">
                            Keep up the fantastic job; you are doing great. Look at the statistic of your tasks.
                        </p>

                        <select name="" id="" className="bg-cyan-700 text-white text-[10px] rounded-md py-[2px] px-[10px] mt-[1rem]">
                            <option value="">This Week</option>
                            <option value="">Last Week</option>
                        </select>
                        {/* Tasks Stats */}
                        <div className="stats flex items-center gap-4 mt-[2rem]">
                            <div className="flex flex-col items-center border-r-[1.5px] border-zinc-100 pr-4">
                                <p className="text-[1.6rem] font-semibold md:text-[1.8rem]">0</p>
                                <p className="text-[10px] font-medium md:text-[11px]">Completed</p>
                            </div>
                            <div className="flex flex-col items-center border-r-[1.5px] border-zinc-100 pr-4">
                                <p className="text-[1.6rem] font-semibold md:text-[1.8rem]">0</p>
                                <p className="text-[10px] font-medium md:text-[11px]">Upcoming</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="text-[1.6rem] font-semibold md:text-[1.8rem]">0</p>
                                <p className="text-[10px] font-medium md:text-[11px]">Expired</p>
                            </div>
                        </div>
                    </div>
                    {/* Image */}
                    <div className="right hidden xl:block xl:w-[23rem] md:p-2">
                        <img src="/welcome.jpg" alt="" />
                    </div>
                </div>

                {/* Note */}
                <div className="note bg-white rounded-md mt-[0.7rem] p-[1rem]">
                    <div className="head flex items-center justify-between">
                        <p className="text-[12px] font-medium">Notes</p>
                        <button className="flex items-center text-[10px] text-cyan-700 font-medium">
                            <AiOutlinePlus className="mr-[3px]" />
                            Create new
                        </button>
                    </div>
                    <div className="notes my-2">
                        <div className="note border-b-[1.5px] border-zinc-100 pb-2 mt-2">
                            <h2 className="text-[12px] font-medium mb-1 md:text-[13px]">Lorem ipsum dolor</h2>
                            <p className="text-[10.5px] tracking-wide md:text-[11px]">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium accusamus corporis quia doloribus maxime sint sapiente, odit deleniti nesciunt quam adipisci recusandae, nam excepturi necessitatibus quidem officia vitae blanditiis voluptatem!
                            </p>
                        </div>

                        <div className="note border-b-[1.5px] border-zinc-100 pb-2 mt-2">
                            <h2 className="text-[12px] font-medium mb-1 md:text-[13px]">
                                Lorem ipsum dolor
                            </h2>
                            <p className="text-[10.5px] tracking-wide md:text-[11px]">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium accusamus corporis quia doloribus maxime sint sapiente, odit deleniti nesciunt quam adipisci recusandae, nam excepturi necessitatibus quidem officia vitae blanditiis voluptatem!
                            </p>
                        </div>

                        <div className="note border-b-[1.5px] border-zinc-100 pb-2 mt-2">
                            <h2 className="text-[12px] font-medium mb-1 md:text-[13px]">
                                Lorem ipsum dolor
                            </h2>
                            <p className="text-[10.5px] tracking-wide md:text-[11px]">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium accusamus corporis quia doloribus maxime sint sapiente, odit deleniti nesciunt quam adipisci recusandae, nam excepturi necessitatibus quidem officia vitae blanditiis voluptatem!
                            </p>
                        </div>
                    </div>
                </div>
            </aside>

            <aside className="right mt-[0.5rem] bg-white rounded-md md:mt-0 lg:col-span-2 xl:col-span-1">
                <Datecalendar />

                <div className="bg-white py-[1.2rem] rounded-md px-[1.5rem] md:mt-3 md:py-0">
                    <div className="head flex items-center justify-between">
                        <p className="text-[12px] font-medium">Projects</p>
                        <button className="flex items-center text-[10px] text-cyan-700 font-medium">
                            <AiOutlinePlus className="mr-[3px]" />
                            Create new
                        </button>
                    </div>

                    <div className="tasks-category">
                        <div className="task flex items-center justify-between mt-3 border-b-[1.5px] border-zinc-100 pb-2">
                            <div className="flex items-center gap-1">
                                <GoPrimitiveDot className='text-[11px] text-cyan-600' />
                                <p className="task_text text-[11px] font-medium">
                                    Design
                                </p>
                            </div>
                            <p className="task_action ml-1">
                                <BsThreeDotsVertical className='text-[13px]' />
                            </p>
                        </div>

                        <div className="task mt-3 border-b-[1.5px] border-zinc-100 pb-2">
                            <div className="head flex items-center justify-between mb-2">
                                <div className="priority_tags flex items-center gap-3">
                                    <p className="task_priority border-[1.6px] border-red-600 text-red-500 font-medium text-[9px] px-[6px] rounded-[5px] bg-red-100 mr-[5px]">
                                        A1
                                    </p>
                                    <div className="tags flex items-center gap-1">
                                        <p className="text-[9px] bg-zinc-100 font-medium text-zinc-500 rounded-md py-[3px] px-2">
                                            Personal
                                        </p>
                                        <p className="text-[9px] bg-zinc-100 font-medium text-zinc-500 rounded-md py-[3px] px-2">
                                            Today
                                        </p>
                                    </div>
                                </div>
                                {/* Task Action */}
                                <p className="task_action ml-1">
                                    <BsThreeDotsVertical className='text-[13px]' />
                                </p>
                            </div>
                            
                            <p className="task_text text-[11px] font-medium">
                                Create a landing page for "New Arrivals"
                            </p>
                        </div>

                        <div className="task mt-3 border-b-[1.5px] border-zinc-100 pb-2">
                            <div className="head flex items-center justify-between mb-2">
                                <div className="priority_tags flex items-center gap-3">
                                    <p className="task_priority border-[1.6px] border-red-600 text-red-500 font-medium text-[9px] px-[6px] rounded-[5px] bg-red-100 mr-[5px]">
                                        A1
                                    </p>
                                    <div className="tags flex items-center gap-1">
                                        <p className="text-[9px] bg-zinc-100 font-medium text-zinc-500 rounded-md py-[3px] px-2">
                                            Personal
                                        </p>
                                        <p className="text-[9px] bg-zinc-100 font-medium text-zinc-500 rounded-md py-[3px] px-2">
                                            Today
                                        </p>
                                    </div>
                                </div>
                                {/* Task Action */}
                                <p className="task_action ml-1">
                                    <BsThreeDotsVertical className='text-[13px]' />
                                </p>
                            </div>
                            
                            <p className="task_text text-[11px] font-medium">
                                Create a landing page for "New Arrivals"
                            </p>
                        </div>

                        <div className="task mt-3 border-b-[1.5px] border-zinc-100 pb-2">
                            <div className="head flex items-center justify-between mb-2">
                                <div className="priority_tags flex items-center gap-3">
                                    <p className="task_priority border-[1.6px] border-red-600 text-red-500 font-medium text-[9px] px-[6px] rounded-[5px] bg-red-100 mr-[5px]">
                                        A1
                                    </p>
                                    <div className="tags flex items-center gap-1">
                                        <p className="text-[9px] bg-zinc-100 font-medium text-zinc-500 rounded-md py-[3px] px-2">
                                            Personal
                                        </p>
                                        <p className="text-[9px] bg-zinc-100 font-medium text-zinc-500 rounded-md py-[3px] px-2">
                                            Today
                                        </p>
                                    </div>
                                </div>
                                {/* Task Action */}
                                <p className="task_action ml-1">
                                    <BsThreeDotsVertical className='text-[13px]' />
                                </p>
                            </div>
                            
                            <p className="task_text text-[11px] font-medium">
                                Create a landing page for "New Arrivals"
                            </p>
                        </div>
                    </div>
                </div>
                {/* <Calendar /> */}
            </aside>
        </div>
    )
}

export default Overview