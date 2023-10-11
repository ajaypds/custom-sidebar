import { Dashboard } from '@mui/icons-material'
import React from 'react'

const SidebarListItem = () => {
  return (
    <button className='flex gap-4 h-12 bg-gray-300/40 hover:bg-gray-300/60 active:bg-gray-300/50 rounded-md items-center mx-2 pl-4' >
        <div className='text-gray-500' ><Dashboard /></div>
        <div className='text-gray-500' >Menu Item</div>
    </button>
  )
}

export default SidebarListItem