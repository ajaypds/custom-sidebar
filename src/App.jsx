import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight } from '@mui/icons-material'
import { IconButton } from '@mui/joy'
import { useRef, useState } from 'react'
import bgimage from './assets/bg.jpg'

function App() {
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false)
  const sidebar = useRef()
  const sidebarContent = useRef()
  const content = useRef()
  const clickHandler = () => {
    if (visible) {
      sidebar.current.classList.remove('w-60')
      sidebar.current.classList.add('w-0')
      setVisible(false)
    } else {
      sidebar.current.classList.remove('w-0')
      sidebar.current.classList.add('w-60')
      setVisible(true)
    }
  }
  return (
    <>
      <div className='w-screen h-screen bg-gray-300 bg-cover' style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1350788409/photo/pink-color-background.webp?b=1&s=170667a&w=0&k=20&c=w2q6NV8dHpNIWpYpq_capQau6-RDNoJepXXMhRH5ySo=')`,
        
      }} >
        <div className='w-screen h-screen backdrop-blur-sm bg-white/70' >
        <div className='flex flex-col w-full' >
          <div className='w-full h-16 border border-gray-400'  >
            {/* AppBar */}
          </div>
          <div className='flex flex-row h-[calc(100vh-4rem)] w-full' >
            <div className='w-0 h-full -z-0 border bg-slate-300/50 backdrop-blur-sm border-gray-400 transition-all duration-500 transform translate-x-0 overflow-hidden' ref={sidebar}>
              <div ref={sidebarContent} >
                {/* Sidebar */}
              </div>
            </div>

            <div className='w-8 h-full overflow-hidden border-l-0 border-gray-400' >
              <button className='transition-all duration-300 translate-y-80 -translate-x-3 hover:translate-x-0 opacity-60 hover:opacity-80 bg-gray-400 text-white py-4 rounded-r-md text-sm my-6' onClick={clickHandler} >
                {visible ? <KeyboardDoubleArrowLeft /> : <KeyboardDoubleArrowRight />}
              </button>
            </div>

            <div className='w-full h-full overflow-y-auto transition-transform duration-500 transform translate-x-0' ref={content} >

              <div className='w-full h-full' >
                {/* Content */}
              </div>

            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
