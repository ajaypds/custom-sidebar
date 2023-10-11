import { Logout } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const AppBar = () => {
    return (
        <div className='h-full flex items-center justify-between px-5' >
            {/* LOGO */}
            <div className='flex items-center' >
                <div className='bg-gray-400/50 w-12 h-12 rounded-full' ></div>
                <div className='ml-4'>
                    <div className='text-gray-400 font-bold text-xl mb-0' >BRAND</div>
                    <div className='text-gray-400 text-xs mt-0' >SUB BRAND TEXT</div>
                </div>
            </div>

            {/* MENU */}
            <div >
                <button className='text-gray-400 h-10 w-10 rounded-full bg-gray-200/40 hover:bg-gray-200/75 active:bg-gray-200/60' >
                    <Logout fontSize='small' />
                </button>
                
            </div>
        </div>
    )
}

export default AppBar