// import React from 'react'
import { FaSitemap } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'

export const ProjectsList = () => {
    return (
        <div>
            <div className="head">
                <p className='flex items-center gap-3 capitalize'>
                    <FaSitemap className='text-[14px]' />
                    <span>Projects</span>
                </p>
                <button className='bg-zinc-100 p-1 rounded-md'>
                    <TiPlus className="text-[11px]" />
                </button>
            </div>
            <div className="projects"></div>
        </div>
    )
}
