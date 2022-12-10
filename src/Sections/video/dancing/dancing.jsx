import React from 'react'

import DancingImage from './components/dancing_image'
import DancingText from './components/dancing_text'

const Dancing = () => {
    return(
        <div className='md:flex mb-20 items-center justify-center gap-[100px]'>
            <DancingImage />
            <DancingText />
        </div>
    )
}

export default Dancing