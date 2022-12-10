import React from 'react'

import RockImage from './components/rockImage'
import RockVideo from './components/rockVideo'

const Rock = () => {
    return (
        <div className='md:flex hidden mb-20 justify-center gap-[100px]'>
            <RockImage />
            <RockVideo />
        </div>
    )
}

export default Rock