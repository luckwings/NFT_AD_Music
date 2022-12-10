import React from 'react'

import AppText from './components/app_text'
import AppMobile from './components/app_mobile'

const Get_app = () => {
    return (
        <div className='md:flex justify-center w-[100%] lg:px-[200px] xl:px-[300px] px-[20px] gap-[50px]'>
            <AppText />
            <AppMobile />
        </div>
    )
}

export default Get_app