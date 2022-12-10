import React from 'react'

import ArtComponent from './components/artComponent'
import ArtVideo from './components/artVideo'

const Art = () => {
    return (
        <div className='md:flex mb-20 justify-center gap-[100px]'>
            <ArtComponent />
            <ArtVideo />
        </div>
    )
}

export default Art