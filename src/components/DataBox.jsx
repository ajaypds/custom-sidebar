import { Alarm, Brightness5 } from '@mui/icons-material'
import React from 'react'

const DataBox = () => {
  return (
    <div className='bg-gray-400/50 h-64 rounded-xl flex flex-col justify-center items-center' >
        <div className='w-16 h-16 rounded-full flex justify-center items-center text-2xl text-white font-bold bg-gradient-to-br from-gray-300 to-gray-400' >
            W
        </div>
        <div className='text-4xl font-bold text-gray-600 pt-6' >22</div>
        <div className='text-xl font-light text-gray-600 pt-2' >Alert text</div>
    </div>
  )
}

export default DataBox