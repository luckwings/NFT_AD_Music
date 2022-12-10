import React from 'react'

const AppText = () => {
    return (
        <div className='md:w-6/12 text-[65px] leading-[60px] mb-[40px]'>
            <p className='font-bold'>No Ads.</p>
            <p className='font-bold'>No Rugs.</p>
            <p className='hidden md:block font-bold'>You in control.</p>
            <div className='flex items-end mt-[30px] relative'>
                <p className='text-[150px] font-extrabold text-[#0000ff]'>80</p>
                <p className='text-[40px] absolute bottom-[-40px] left-[180px] font-bold text-[#0000ff]'>%</p>
            </div>
            <p className='font-bold text-[17px] text-[#0000ff] my-[20px]'>Goes to creators</p>
            <div className='flex items-end mt-[-20px]'>
                <p className='text-4xl font-extrabold text-[#0000ff]'>20</p>
                <p className='text-xl font-bold text-[#0000ff]'>%</p>
            </div>
            <p className='font-bold text-[17px] text-[#0000ff]'>Goes for running the service</p>
            <p className='mb-5 text-[17px] font-light leading-[20px]'>Unlike big tech, you deserve more than crumbs. We don't shove ads down users' throats, we don't sell their data, and the importantly it is all about you.</p>
            <button className='md:block w-full flex justify-center'><img src='./items/button.svg' alt=' ' /></button>
        </div>
    )
}

export default AppText