import React from 'react'

const AppMobile = () => {
    return (
        <div className='md:w-5/12 md:flex hidden'>
            <div className='relative items-center'>
                <img src='./items/app/app.png' alt=' ' className='max-w-[280px]' />
                <img src='./items/app/app_circle.png' alt=' ' className='absolute top-[350px] right-[-80px]' />
                <img src='./items/app/X.png' alt=' ' className='absolute top-[0] top-[270px] right-[-80px]' />
            </div>
        </div>
    )
}

export default AppMobile