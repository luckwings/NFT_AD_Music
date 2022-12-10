import React from 'react'

import ArtComponent from './components/art_component'
import ArtVideo from './components/art_video'

const Art = () => {
    return (
        <div className='md:flex mb-20 justify-center gap-[100px]'>
            <ArtComponent />
            <ArtVideo />
        </div>
    )
}

export default Art