import React from 'react'

import List from './components/list'
import Contact from './components/contact'

const Footer = () => {
    return (
        <div className='py-20 xl:px-[300px] lg:px-[200px] md:px-[100px] px-[50px] bg-[#00000022]'>
            <List />
            <Contact />
        </div>
    )
}

export default Footer