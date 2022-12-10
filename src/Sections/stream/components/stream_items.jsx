import React from 'react'

const StreamItems = () => {
    return (
        <div className='flex justify-center relative'>
            <img src='./items/stream/globe.png' alt=' ' className='w-[30px] h-[30px] absolute left-[20px]' />
            <img src='./items/stream/stream.png' alt=' ' className='' />
            <img src='./items/stream/phonecase.svg' alt=' ' className='absolute -mt-[25px]' />
            <img src='./items/stream/stick.png' alt=' ' className='w-[90px] h-[97px] absolute -bottom-[40px] right-[20%]' />
        </div>
    )
}

export default StreamItems