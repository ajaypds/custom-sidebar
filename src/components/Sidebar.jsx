import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material'
import React, { useRef, useState } from 'react'
import SidebarListItem from './SidebarListItem'

const Sidebar = () => {
  const [visible, setVisible] = useState(false)
  const sidebar = useRef()
  const clickHandler = () => {
    if (visible) {
      sidebar.current.classList.remove('w-80')
      sidebar.current.classList.add('w-0')
      setVisible(false)
    } else {
      sidebar.current.classList.remove('w-0')
      sidebar.current.classList.add('w-80')
      setVisible(true)
    }
  }
  return (
    <>
        <div className='w-0 h-full -z-0 border bg-gray-300/10 border-t-0 border-r-gray-300/40 transition-all duration-500 transform translate-x-0 overflow-hidden' ref={sidebar}>
              <div className='w-full flex flex-col justify-center mt-8 gap-4' >
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
                <SidebarListItem />
              </div>
            </div>

            <div className='w-8 h-full overflow-hidden border-l-0 border-gray-400' >
              <button className='transition-all duration-300 translate-y-80 -translate-x-3 hover:translate-x-0 opacity-60 hover:opacity-80 bg-gray-400/80 text-white py-4 rounded-r-md text-sm my-6' onClick={clickHandler} >
                {visible ? <KeyboardDoubleArrowLeft /> : <KeyboardDoubleArrowRight />}
              </button>
            </div>
    </>
  )
}

export default Sidebar