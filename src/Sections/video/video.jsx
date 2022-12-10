import React from 'react'

import Rock from './rock/rock'
import Dancing from './dancing/dancing'
import Art from './art/art'

const Video = () => {
    return (
        <div className='mb-20 px-[10px] md:px-[100px] lg:px-[150px] xl:px-[300px]'>
            <Rock />
            <Dancing />
            <Art />
            <div className='text-center text-[65px] font-bold leading-[60px]'>
                <p className='mb-[40px]'>Built for creators by Creators.</p>
                <button><img src='./items/button.svg' alt=' ' /></button>
            </div>
        </div>
    )
}

export default Video