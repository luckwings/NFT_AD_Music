import React from 'react'

import LockImage from './components/lockImage'
import LockImport from './components/lockImport'
import Mobile from './components/mobile'
import SmallPipe from './components/smallPipe'

const Lock = () => {
    return(
        <div className='mb-40 px-[20px] md:px-[100px] lg:px-[200px] xl:px-[400px]'>
            <LockImage />
            <LockImport />
            <SmallPipe />
            <Mobile />
        </div>
    )
}

export default Lock