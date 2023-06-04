// import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegFlag } from 'react-icons/fa'

export const Board = () => {
    return (
        <div className="w-[90%] mx-auto md:w-[100%] md:px-[0.5rem] xl:px-[2rem] overflow-auto md:scrollbar md:scrollbar-w-[3px] scrollbar-thumb-[#31759a] scrollbar-track-zinc-300 scroll-smooth ">
            <div className="board mt-[1rem] flex w-[60rem] mx-auto md:w-[100%] md:grid md:grid-cols-4 gap-x-2">
                <div className="backlog w-[100%]">
                    <div className="head flex items-center justify-between">
                        <p className='flex items-center gap-2 text-[11px] font-medium'>
                            Backlog
                            <span className='text-[9px] text-zinc-500'>4</span>
                        </p>
                        
                        <div className='flex items-center gap-1 text-[11px]'>
                            <button className="bg-gray-200 p-[4px] rounded-sm outline-0">
                                <AiOutlinePlus className='text-[12px]' />
                            </button>
                            <button className='outline-0'>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </button>
                        </div>
                    </div>
                    
                    <div className="logs mt-[1rem] md:overflow-auto md:scrollbar md:scrollbar-w-[3px] scrollbar-thumb-[#31759a] scrollbar-track-zinc-300 scroll-smooth  md:h-[69vh]">
                        <div className="log bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="log-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>

                        <div className="log bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="log-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>

                        <div className="log bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="log-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>

                        <div className="log bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="log-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>
                        
                        <div className="log bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="log-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>

                        <div className="log bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="log-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>
                    </div>
                </div>

                {/* Todo */}
                <div className="todo w-[100%]">
                    <div className="head flex items-center justify-between pb-1">
                        <p className='flex items-center gap-2 text-[11px] font-medium'>
                            Todo
                            <span className='text-[9px] text-zinc-500'>2</span>
                        </p>

                        <button className='outline-0'>
                            <BsThreeDotsVertical className='text-[12px]' />
                        </button>
                    </div>
                    
                    <div className="todo-container mt-[1rem] overflow-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-[#31759a] scrollbar-track-zinc-300 scroll-smooth md:h-[69vh]">
                        <div className="todo bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="todo-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>

                        <div className="todo bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="todo-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>
                    </div>
                </div>

                {/* In-progress */}
                <div className="inprogress w-[100%]">
                    <div className="head flex items-center justify-between pb-1">
                        <p className='flex items-center gap-2 text-[11px] font-medium'>
                            Inprogress
                            <span className='text-[9px] text-zinc-500'>1</span>
                        </p>

                        <button className='outline-0'>
                            <BsThreeDotsVertical className='text-[12px]' />
                        </button>
                    </div>
                    
                    <div className="inprogress-container mt-[1rem] overflow-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-[#31759a] scrollbar-track-zinc-300 scroll-smooth md:h-[69vh]">
                        <div className="inprogress bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="todo-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>
                    </div>
                </div>

                {/* Completed */}
                <div className="completed w-[100%]">
                    <div className="head flex items-center justify-between pb-1">
                        <p className='flex items-center gap-2 text-[11px] font-medium'>
                            Done
                            <span className='text-[9px] text-zinc-500'>0</span>
                        </p>

                        <button className='outline-0'>
                            <BsThreeDotsVertical className='text-[12px]' />
                        </button>
                    </div>
                    
                    <div className="completed-container mt-[1rem] overflow-auto scrollbar scrollbar-w-[3px] scrollbar-thumb-[#31759a] scrollbar-track-zinc-300 scroll-smooth md:h-[69vh]">
                         <div className="completed bg-white p-3 rounded-md mb-[0.5rem]">
                            {/* Head */}
                            <div className="head flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {/* Priority */}
                                    <p className="priority">
                                        <FaRegFlag className='text-red-700 text-[12px]' />
                                    </p>
                                    {/* Due date */}
                                    <p className='flex items-center gap-1 text-[9px] font-medium bg-zinc-100 py-[2.5px] px-[7px] rounded-sm'>
                                        Due :
                                        <span className='text-[8px]'>2 May</span>
                                    </p>
                                </div>
                                <BsThreeDotsVertical className='text-[12px]' />
                            </div>

                            {/* Task name */}
                            <div className="todo-name my-2">
                                <h2 className='text-[12px] font-medium tracking-wide'>
                                    Design the customize section of the e-shop web app.
                                </h2>
                            </div>

                            {/* Description */}
                            <div className="description">
                                <p className='text-[10px]'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, delectus?
                                </p>
                            </div>

                            {/* Tags */}
                            <div className="tags flex items-center gap-1 mt-2">
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Work
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Personal
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    UI|UX Design
                                </p>
                                <p className='bg-zinc-100 text-[8px] font-medium py-[3px] px-[5px]'>
                                    Web App
                                </p>
                            </div>

                            {/* Add Subtask */}
                            <button className="add-subtask flex items-center gap-1 text-[10px] font-medium mt-3 text-cyan-600">
                                <AiOutlinePlus className='text-[12px]' />
                                Add Subtask
                            </button>
                        </div>
                    </div>
                </div>
                <div className="expired"></div>
            </div>
        </div>
    )
}
