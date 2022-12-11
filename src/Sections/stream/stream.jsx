import React from 'react'

import StreamItems from './components/streamItems'
import StreamText from './components/streamText'

const Stream = () => {
    return (
        <div className='mt-[300px] mb-[100px] md:hidden block'>
            <StreamText />
            <StreamItems />
        </div>
    )
}

export default Stream