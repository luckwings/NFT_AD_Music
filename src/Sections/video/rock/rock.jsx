import React from 'react'

import RockImage from './components/rock_image'
import RockVideo from './components/rock_video'

const Rock = () => {
    return (
        <div className='md:flex hidden mb-20 justify-center gap-[100px]'>
            <RockImage />
            <RockVideo />
        </div>
    )
}

export default Rock