import React from 'react'

import AppText from './components/appText'
import AppMobile from './components/appMobile'

const GetApp = () => {
    return (
        <div className='md:flex justify-center w-[100%] lg:px-[200px] xl:px-[300px] px-[20px] gap-[50px]'>
            <AppText />
            <AppMobile />
        </div>
    )
}

export default GetApp