import React from 'react'

import Rock from './rock/rock'
import Dancing from './dancing/dancing'
import Art from './art/art'

const Video = () => {
    return (
        <div className='w-full mb-20 px-[20px] md:px-[100px] lg:px-[200px] xl:px-[300px] 2xl-[400px]'>
            <Rock />
            <Dancing />
            <Art />
            <div className='text-center md:text-[65px] text-[45px] font-bold leading-[60px]'>
                <p className='mb-[40px]'>Built for creators by Creators.</p>
                <button><img src='./items/button.svg' alt=' ' /></button>
            </div>
        </div>
    )
}

export default Video