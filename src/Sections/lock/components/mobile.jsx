import React from 'react'

const Mobile = () => {
    return (
        <div className='flex justify-center w-[90%] md:hidden md:w-6/12'>
            <div className='relative items-center'>
                <img src='./items/app/app.png' alt=' ' className='w-[300px]' />
                <img src='./items/app/phonecase.svg' alt=' ' className='absolute w-[300px] top-[-30px]' />
                <img src='./items/app/app_circle.png' alt=' ' className='absolute max-w-[120px] top-[550px] right-[-60px]' />
                <img src='./items/app/X.png' alt=' ' className='absolute top-[0] max-w-[50px] top-[80px] right-[-10px]' />
            </div>
        </div>
    )
}

export default Mobile