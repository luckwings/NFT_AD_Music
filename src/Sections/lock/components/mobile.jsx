import React from 'react'

const Mobile = () => {
    return (
        <div className='flex justify-center md:hidden md:w-6/12'>
            <div className='relative items-center'>
                <img src='./items/app/app.png' alt=' ' className='w-[300px]' />
                <img src='./items/app/phonecase.svg' alt=' ' className='absolute w-[300px] top-[-30px]' />
                <img src='./items/app/app_circle.png' alt=' ' className='absolute top-[550px] right-[-80px]' />
                <img src='./items/app/X.png' alt=' ' className='absolute top-[0] top-[80px] right-[-20px]' />
            </div>
        </div>
    )
}

export default Mobile