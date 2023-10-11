import React from 'react'
import { useRef, useState } from 'react'
import bgimage from '../assets/bg.jpg'
import Sidebar from '../components/Sidebar'
import AppBar from '../components/AppBar'
import Content from './Content'

const Layout = () => {
    const content = useRef()
    return (
        <>
            <div className='w-screen h-screen bg-gray-300 bg-cover' style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1350788409/photo/pink-color-background.webp?b=1&s=170667a&w=0&k=20&c=w2q6NV8dHpNIWpYpq_capQau6-RDNoJepXXMhRH5ySo=')`,

            }} >
                <div className='w-screen h-screen backdrop-blur-sm bg-white/70' >
                    <div className='flex flex-col w-full' >
                        <div className='w-full h-16 border border-b-gray-300/50'  >
                            <AppBar />
                        </div>
                        <div className='flex flex-row h-[calc(100vh-4rem)] w-full' >

                            <Sidebar />

                            <div className='w-full h-full overflow-y-auto transition-transform duration-500 transform translate-x-0' ref={content} >
                                <div className='w-full h-full' >
                                    <Content />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout