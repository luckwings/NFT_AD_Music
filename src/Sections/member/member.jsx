import React from 'react'

import MemberMark from './components/member_mark'
import MemberText from './components/member_text'

const Member = () => {
    return (
        <div className='px-[100px] block'>
            <div className='flex items-center'>
                <MemberMark />
                <MemberText />
            </div>
            <img src='./items/member/member_mark.png' alt=' ' className='block md:hidden' />
        </div>
    )
}

export default Member