import React from 'react'

const HeroText = () => {
    return (
        <div className='md:w-5/12 md:pr-[20px]'>
            <p className='title leading-[1.3] md:text-[35px] text-[30px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0'>Creators earn crypto, fans earn creds.</p>
            <p className='mb-[15px] 2xl:mb-[20px] hidden md:block text-[15px] 2xl:text-[20px] font-bold'>The web3 way of taking control of your content monetization.</p>
            <div className='app-wrap'>
                <img src='./items/apple.png' alt=' ' className='h-[30px]' />
                <p className='app-content'>Get the app</p>
            </div>
        </div>
    )
}

export default HeroText