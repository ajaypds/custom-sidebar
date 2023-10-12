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
                backgroundImage: `url('image-url')`,

            }} >
                <div className='w-screen h-screen backdrop-blur-sm bg-white/70' >
                    <div className='flex flex-col w-full' >
                        <div className='w-full h-16 border border-b-gray-300/50'  >
                            <AppBar />
                        </div>
                        <div className='flex flex-row h-[calc(100vh-4rem)] w-full' >

                            <Sidebar />

                            <div className='w-full h-full overflow-hidden transition-transform duration-500 transform translate-x-0' ref={content} >
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