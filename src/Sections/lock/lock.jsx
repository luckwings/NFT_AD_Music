import React from 'react'

import Lock_image from './components/lock_image'
import Lock_import from './components/lock_import'
import Mobile from './components/mobile'
import Small_pipe from './components/small_pipe'

const Lock = () => {
    return(
        <div className='mb-40'>
            <Lock_image />
            <Lock_import />
            <Small_pipe />
            <Mobile />
        </div>
    )
}

export default Lock