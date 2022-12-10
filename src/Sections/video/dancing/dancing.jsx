import React from 'react'

import Dancing_image from './components/dancing_image'
import Dancing_text from './components/dancing_text'

const Dancing = () => {
    return(
        <div className='md:flex mb-20 items-center justify-center gap-[100px]'>
            <Dancing_image />
            <Dancing_text />
        </div>
    )
}

export default Dancing