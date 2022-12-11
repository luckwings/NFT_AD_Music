import React from 'react'

import MemberMark from './components/memberMark'
import MemberText from './components/memberText'

const Member = () => {
    return (
        <div className='md:px-[100px] px-[20px] block'>
            <div className='flex items-center'>
                <MemberMark />
                <MemberText />
            </div>
            <img src='./items/member/member_mark.png' alt=' ' className='block md:hidden' />
        </div>
    )
}

export default Member