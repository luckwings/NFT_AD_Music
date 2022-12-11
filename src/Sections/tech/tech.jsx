import React from 'react'
import './styles.css'

const Tech = () => {
    return (
        <div className='hidden md:block lg:px-[15%] xl:px-[20%] px-[20px]'>
            <div className='my-40 block text-center leading-[70px]'>
                <p className='max-w-[700px] w-[90%] title  m-auto leading-[1.3] md:text-[35px] text-[30px] '>You are the hero, not the big tech.</p>
                <div className='h-[20px]'></div>
                <p className='max-w-[600px] w-[90%] text-[17px] m-auto leading-[20px] mt-[20px]'>We are doing this to eliminate the middle man, so case in point, we take zero commission, your earning are yours, fully.</p>
            </div>
            <img src='./items/tech/small_pip.png' alt=' ' className='ml-[30%] mb-40' />
        </div>
    )
}

export default Tech