import React from 'react'

const List = () => {
    return (
        <div className='md:flex justify-between'>
            <div className='md:w-10/12 md:flex md:text-base text-xl font-bold'>
                <div className='w-4/12 mb-10'>
                    <p className=''>TWITTER</p>
                    <p className=''>DISCORD</p>
                    <img src='./items/app_store.png' alt=' ' className='mt-10 w-[110px] md:flex hidden' />
                </div>
                <div className='md:w-8/12 mb-10'>
                    <p className=''>TERMS & CONDITIONS</p>
                    <p className=''>PRIVACY POLICY</p>
                </div>
            </div>
            <div className=''>
                <img src='./items/logo.png' alt=' ' />
            </div>
        </div>
    )
}

export default List