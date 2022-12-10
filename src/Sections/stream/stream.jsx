import React from 'react'

import StreamItems from './components/stream_items'
import StreamText from './components/stream_text'

const Stream = () => {
    return (
        <div className='mb-20 md:hidden block'>
            <StreamText />
            <StreamItems />
        </div>
    )
}

export default Stream