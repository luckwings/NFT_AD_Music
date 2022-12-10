import React from 'react'

import Member_mark from './components/member_mark'
import Member_text from './components/member_text'

const Member = () => {
    return (
        <div className='px-[100px] block'>
            <div className='flex items-center'>
                <Member_mark />
                <Member_text />
            </div>
            <img src='./items/member/member_mark.png' alt=' ' className='block md:hidden' />
        </div>
    )
}

export default Member