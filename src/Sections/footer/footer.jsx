import React from 'react'

import List from './components/list'
import Contact from './components/contact'

import './styles.css'

const Footer = () => {
    return (
        <div className='title py-20 xl:px-[300px] lg:px-[200px] md:px-[100px] px-[50px] bg-[#00000022]'>
            <List />
            <Contact />
        </div>
    )
}

export default Footer