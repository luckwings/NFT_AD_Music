import React from 'react'

import Hero_text from './components/hero_text'
import Hero_video from './components/hero_video'

const Hero = () => {
    return (
        <div className='w-[100%] md:px-[80px] lg:px-[150px] xl:px-[200px] px-[20px] pt-10 mb-20 gap-[20px]'>
            <img src='./items/logo.png' alt=' ' className='mb-20' />
            <img src='./items/hero/hero.png' alt=' ' className='block md:hidden' />
            <div className='flex items-center'>
                <Hero_text />
                <Hero_video />
            </div>
            <img src='./items/hero/big_fan.png' alt=' ' className='mt-10 ml-[40%]'/>
        </div>
    )
}

export default Hero