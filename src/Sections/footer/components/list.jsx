import React from 'react'

const List = () => {
    return (
        <div className='md:flex justify-between'>
            <div className='md:w-6/12 md:flex md:text-base text-xl font-bold'>
                <div className='w-6/12 mb-10'>
                    <p className=''>TWITTER</p>
                    <p className=''>DISCORD</p>
                    <img src='./items/app_store.png' alt=' ' className='mt-10 w-[70px] md:flex hidden' />
                </div>
                <div className='md:w-6/12 mb-10'>
                    <p className=''>TERMS & CONDITIONS</p>
                    <p className=''>PRIVACY POLICY</p>
                </div>
            </div>
            <div className=''>
                <img src='./items/logo.png' />
            </div>
        </div>
    )
}

export default List