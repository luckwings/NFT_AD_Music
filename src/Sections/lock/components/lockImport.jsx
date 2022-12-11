import React from 'react'

const LockImport = () => {
    return(
        <div className='relative md:top-[250px]'>
            <p className='title md:text-[65px] text-[45px] font-bold'>Lock-up your handle now!</p>
            <p className='text-[17px] font-bold my-[20px]'>Select a username</p>
            <div className='flex justify-center items-center gap-[20px]'>
                <input type='text' className='lock_input w-[100%] text-base outline-none' placeholder='/username' /><span className='absolute left-[10px]'>billa.net</span>
                <img src='./items/lock/Path.svg' alt=' ' className='w-12' />
            </div>
        </div>
    )
}

export default LockImport