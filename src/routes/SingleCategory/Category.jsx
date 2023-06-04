// import React from 'react'
import BottomNav from '../../components/BottomNav'
import SideMenu from '../../components/SideMenu'
import TopNav from '../../components/TopNav'
import CalendarScheduler from '../../components/CalendarScheduler'
import { TbScreenShare } from 'react-icons/tb'
import { BiFilterAlt, BiSortAlt2 } from 'react-icons/bi'
import { BsGridFill, BsListTask, BsSearch } from 'react-icons/bs'
import { Board } from '../../components/Board'


const Category = () => {
    return (
        <div className=' md:max-h-screen flex relative md:w-[100%]'>
            <div className="left hidden fixed h-[100%] md:block md:w-[21%] lg:w-[22%] xl:w-[17%] z-20">
                <SideMenu />
            </div>
            <div className="right w-[100%] absolute right-0 pb-[3.5rem] md:pb-[5rem] md:overflow-hidden md:py-[1rem]  md:w-[79%] lg:w-[78%] xl:w-[83%] md:h-screen">
                <div className="w-[90%] mx-auto md:w-[100%] md:px-[0.5rem] xl:px-[2rem]">
                     <TopNav />
                </div>
                {/* Category Head */}
                <div className="head w-[90%] mx-auto md:w-[100%] md:px-[0.5rem] xl:px-[2rem]">
                    <div className="flex items-center justify-between">
                        <h1 className='category-name text-[14px] font-medium my-[1rem]'>Design</h1>
                        <button className='flex items-center gap-1 text-[10.5px] bg-gray-200 py-[3px] px-[7px] rounded-sm'>
                            <TbScreenShare className='text-[14px]' />
                            Invite
                        </button>
                    </div>
                    {/* Tabs */}
                    <div className="tabs flex items-center justify-between">
                        <div className="flex items-center gap-5 text-[11.6px]">
                            <p className='font-medium border-b-[2px] border-cyan-600 pb-[0.7rem]'>
                                Board
                            </p>
                            {/* <p className='pb-[0.7rem]'>Timeline</p> */}
                            <p className='pb-[0.7rem]'>Calendar</p>
                        </div>

                        <div className="hidden items-center gap-4 pb-[0.8rem] md:flex">
                            <button className='sort flex items-center gap-1 text-[11px]'>
                                <BiFilterAlt />
                                Filter
                            </button>
                            <button className="sort flex items-center gap-1 text-[11px]">
                                <BiSortAlt2 className='text-[12px]' />
                                Sort
                            </button>
                            <div className="display-mood text-[12px] flex items-center gap-1">
                                <button className='bg-gray-200 py-[3px] px-[5px] rounded-sm'>
                                    <BsGridFill />
                                </button>
                                <button>
                                    <BsListTask />
                                </button>
                            </div>
                            <div className="search">
                                <BsSearch className='text-[11px]' />
                            </div>
                        </div>
                    </div>
                    <div className="line w-[100%] bg-slate-300 h-[0.5px]"></div>
                </div>
                <Board />
                {/* <CalendarScheduler /> */}
                <BottomNav />
            </div>

        </div>
    )
}

export default Category