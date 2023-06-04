import { HiOutlineLogout, HiViewGrid } from 'react-icons/hi'
import { AiFillSetting } from 'react-icons/ai'
import { MdManageAccounts, MdToday, MdUpcoming } from 'react-icons/md'
import { FaSitemap } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { TiPlus } from 'react-icons/ti'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsCalendarRange, BsThreeDotsVertical } from 'react-icons/bs'
import NewCategory from './NewCategory'
import { Link, useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const SideMenu = () => {
    const { pathname } = useLocation();
    const currentRoute = pathname.split('/')[1];

    // console.log(currentRoute);
    return (
         <div className='bg-white pt-6 pb-10 shadow-sm h-full'>
            <div className="current_user flex items-center gap-1 mb-4 px-4">
                <img src="/task.png" alt="" className='w-[1.5rem]' />
                <h2 className='app_name text-[1.2rem] font-medium'>
                    Task.
                </h2>
            </div>
            <div className="menus">
                <ul>
                    <div className="border-b-[0.8px] border-slate-200 pb-2 mb-3">
                        <Link to="/home" className={`flex items-center gap-3 text-[12px] font-medium py-[0.5rem] px-4  capitalize ${currentRoute === 'home' && 'text-slate-800 bg-zinc-100 border-r-[3px] border-slate-700'} `}>
                            <HiViewGrid className='text-[14px]' />
                            Overview
                        </Link>
                        <li className='flex items-center gap-3 text-[12px] font-medium py-[0.5rem] px-4 '>
                            <MdToday className='text-[14px]' />
                            Today
                        </li>
                        <li className='flex items-center gap-3 text-[12px] font-medium py-[0.5rem] px-4 capitalize'>
                            <MdUpcoming className='text-[14px]' />
                            Upcoming
                        </li>
                    </div>

                    {/* Tasks Category */}
                    <li className="tasks-category">
                        <Link to="/projects" className={`projects flex items-center justify-between text-[12px] font-medium py-[0.5rem] px-4 mb-2 cursor-pointer relative ${currentRoute === 'projects' && 'text-slate-800 bg-zinc-100 border-r-[3px] border-slate-700'} `}>
                            <p className='flex items-center gap-3 capitalize'>
                                <FaSitemap className='text-[14px]' />
                                <span>Projects</span>
                            </p>
                            <button className='bg-zinc-100 p-1 rounded-md hover:bg-zinc-200'>
                                <TiPlus className="text-[11px]" />
                            </button>
                            
                        </Link>
                        {/* Add category component */}
                        <div className="hidden add-category-component absolute top-[2.3rem] left-[3rem] z-20">
                            <NewCategory />
                        </div>
                        {/* Tasks */}
                        <div className="tasks_container ml-[2rem]">
                            <li className="task flex items-center justify-between mb-3 mr-5">
                                <div className="flex items-center gap-2">
                                    <p className='indicator'>
                                        <GoPrimitiveDot className='text-[11px] text-cyan-600' />
                                    </p>
                                    <p className='text-[11px] font-medium'>
                                        Design
                                    </p>
                                </div>
                                <p>
                                    <BsThreeDotsVertical className='text-[12px]' />
                                </p>
                            </li>

                            <li className="task flex items-center justify-between mb-3 mr-5">
                                <div className="flex items-center gap-2">
                                    <p className='indicator'>
                                        <GoPrimitiveDot className='text-[11px] text-cyan-600' />
                                    </p>
                                    <p className='text-[11px] font-medium'>
                                        Bug Tracking
                                    </p>
                                </div>
                                <p>
                                    <BsThreeDotsVertical className='text-[12px]' />
                                </p>
                            </li>
                        </div>
                    </li>

                    {/* Notes */}
                    <li className='notes'>
                        <li className={`flex items-center justify-between text-[12px] font-medium py-[0.75rem] px-4 capitalize ${currentRoute === 'note' && 'text-slate-800 bg-zinc-100 border-r-[3px] border-slate-700'} `}>
                            <p className='flex item gap-3'>
                                <GiNotebook className='text-[14px]' />
                                <span>Notes</span>
                            </p>
                            <button className='bg-zinc-100 p-1 rounded-md'>
                                <TiPlus className="text-[11px]" />
                            </button>
                        </li>

                        {/* Notes */}
                        <div className="notes_container ml-[2rem]">
                            <li className="task flex items-center justify-between mb-3 mr-5">
                                <div className="flex items-center gap-2">
                                    <p className='indicator'>
                                        <GoPrimitiveDot className='text-[11px] text-slate-500' />
                                    </p>
                                    <p className='text-[11px] font-medium relative'>
                                        Design
                                        <span className='tag text-[7px] bg-cyan-600 text-white font-medium py-[1px] px-[3px] rounded-sm absolute top-[-0.2rem] right-[-1.6rem]'>
                                            New
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    <BsThreeDotsVertical className='text-[12px]' />
                                </p>
                            </li>

                            <li className="task flex items-center justify-between mb-3 mr-5">
                                <div className="flex items-center gap-2">
                                    <p className='indicator'>
                                        <GoPrimitiveDot className='text-[11px] text-slate-500' />
                                    </p>
                                    <p className='text-[11px] font-medium relative'>
                                        Bug Tracking
                                        <span className='tag text-[7px] bg-cyan-600 text-white font-medium py-[1px] px-[3px] rounded-sm absolute top-[-0.2rem] right-[-1.6rem]'>
                                            New
                                        </span>
                                    </p>
                                </div>
                                <p>
                                    <BsThreeDotsVertical className='text-[12px]' />
                                </p>
                            </li>
                        </div>
                    </li>
                    {/* Calendar */}
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <BsCalendarRange className='text-[14px]' />
                        <span>Calendar</span>
                    </li>


                    <p className='flex items-center gap-1 text-[10.5px] font-medium text-zinc-400 mt-6 mb-2 px-5 uppercase'>
                        <AiFillSetting />
                        Settings
                    </p>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <MdManageAccounts className='text-[14px]' />
                        Account
                    </li>
                    <li className='flex items-center gap-3 text-[12px] font-medium py-[0.75rem] px-4 capitalize text-zinc-600'>
                        <HiOutlineLogout className='text-[14px]' />
                        Logout
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu