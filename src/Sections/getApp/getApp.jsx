import React from 'react'

import AppText from './components/appText'
import AppMobile from './components/appMobile'

const GetApp = () => {
    return (
        <div className='md:flex justify-center w-[100%] px-[20px] md:px-[50px] lg:px-[100px] xl:px-[300px] gap-[50px]'>
            <AppText />
            <AppMobile />
        </div>
    )
}

export default GetApp