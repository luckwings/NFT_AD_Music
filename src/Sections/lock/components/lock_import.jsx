import React from 'react'

const Lock_import = () => {
    return(
        <div className='text-center relative mb-[40px] md:px-[100px] lg:px-[200px] xl:px-[300px]'>
            <p className='text-[65px] font-bold'>Lock-up your handle now!</p>
            <p className='text-[17px] mb-5 font-bold'>Select a username</p>
            <div className='flex justify-center'>
                <input type='text' className='border w-[50%] text-base rounded-xl px-2 py-1 mr-10 focus:ring-1 outline-none focus:border-green-500' placeholder='blla.net'></input>
                <img src='./items/lock/Path.svg' alt=' ' className='w-12' />
            </div>
        </div>
    )
}

export default Lock_import