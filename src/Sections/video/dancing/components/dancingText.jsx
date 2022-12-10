import React from 'react'

const DancingText = () => {
    return (
        <div className='md:w-6/12 relative max-w-[350px]'>
            <div className='flex mb-5'>
                <div className='flex'>
                    <img src='./items/video/dancing/eth.png' alt=' ' className='w-[100px] h-[100px]' />
                    <img src='./items/video/dancing/metamask.png' alt=' ' className='w-[100px] h-[100px]' />
                </div>
                <img src='./items/video/dancing/flow.png' alt=' ' className='absolute right-[-100px] bottom-[-500px] md:top-[-100px]' />
            </div>
            <p className='text-6xl font-bold mb-5'>Crypto is here to stay.</p>
            <p className='md:block hidden text-[17px]'>We are doing this to eliminate the middle man, so case in point, we take zero commission, your earning are yours, fully.</p>
        </div>
    )
}

export default DancingText