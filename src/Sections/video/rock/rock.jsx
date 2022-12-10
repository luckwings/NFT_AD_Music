import React from 'react'

import Rock_image from './components/rock_image'
import Rock_video from './components/rock_video'

const Rock = () => {
    return (
        <div className='md:flex hidden mb-20 justify-center gap-[100px]'>
            <Rock_image />
            <Rock_video />
        </div>
    )
}

export default Rock