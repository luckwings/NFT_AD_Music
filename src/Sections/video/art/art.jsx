import React from 'react'

import Art_component from './components/art_component'
import Art_video from './components/art_video'

const Art = () => {
    return (
        <div className='md:flex mb-20 justify-center gap-[100px]'>
            <Art_component />
            <Art_video />
        </div>
    )
}

export default Art