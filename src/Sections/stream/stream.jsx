import React from 'react'

import Stream_items from './components/stream_items'
import Stream_text from './components/stream_text'

const Stream = () => {
    return (
        <div className='mb-20 md:hidden block'>
            <Stream_text />
            <Stream_items />
        </div>
    )
}

export default Stream