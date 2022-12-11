import React from 'react'


const HeroText = () => {
    return (
        <div className='md:w-5/12 md:pr-[20px]'>
            <p className='text-[70px] font-black mb-5 leading-[60px]'>Creators earn crypto, fans earn creds.</p>
            <p className='mb-5 hidden md:block text-[19px] font-bold'>The web3 way of taking control of your content monetization.</p>
            <button className='md:block flex justify-center w-[100%]'><img src='./items/button.svg' alt=' ' /></button>
        </div>
    )
}

export default HeroText