import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const NewCategory = () => {
    return (
        <div className='w-[20rem] bg-gray-100 p-4 rounded-md shadow-sm'>
            <div className="head flex justify-between items-center">
                <h2 className='text-[13px] font-medium tracking-wide'>New Category</h2>
                <button>
                    <MdOutlineCancel className='text-[16px]' />
                </button>
            </div>
            <div className="input my-[1rem]">
                <p>Category Name</p>
                <input type="text" className='w-[100%] bg-transparent text-[12px] font-medium py-[5px] px-2 border-b-[1px] border-slate-500 outline-0'/>
            </div>
            <button className='text-[10px] bg-zinc-900 text-white py-[5px] px-[10px] rounded-sm'>
                Create Category
            </button>
        </div>
    )
}

export default NewCategory