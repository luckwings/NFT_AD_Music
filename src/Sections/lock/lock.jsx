import React from 'react'

import LockImage from './components/lock_image'
import LockImport from './components/lock_import'
import Mobile from './components/mobile'
import SmallPipe from './components/small_pipe'

const Lock = () => {
    return(
        <div className='mb-40'>
            <LockImage />
            <LockImport />
            <SmallPipe />
            <Mobile />
        </div>
    )
}

export default Lock