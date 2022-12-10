import React from 'react'

import StreamItems from './components/streamItems'
import StreamText from './components/streamText'

const Stream = () => {
    return (
        <div className='mb-20 md:hidden block'>
            <StreamText />
            <StreamItems />
        </div>
    )
}

export default Stream