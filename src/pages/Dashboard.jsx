import React from 'react'
import DataBox from '../components/DataBox'

const Dashboard = () => {
  return (
    <div className='h-auto w-full flex' >
        {/* Data Boxes */}
        <div className='grid grid-cols-4 gap-8 w-full mx-8 my-10 ' >
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
        </div>
    </div>
  )
}

export default Dashboard