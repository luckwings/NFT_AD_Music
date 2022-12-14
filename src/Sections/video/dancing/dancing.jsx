import React from 'react'

import DancingImage from './components/dancingImage'
import DancingText from './components/dancingText'

const Dancing = () => {
    return(
        <div className='md:flex mb-20 items-center justify-center gap-[100px] xl:gap-[200px] w-full'>
            <DancingImage />
            <DancingText />
        </div>
    )
}

export default Dancing