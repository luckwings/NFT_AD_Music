import React from 'react'

// import Train_text from './components/train_text'
// import Train_mobile from './components/train_mobile'

const Train = () => {
    return (
        <div className='items-center md:flex hidden relative'>
            {/* <Train_text />
            <Train_mobile /> */}
            <img src='./items/train/train.png' alt=' ' className='-ml-[15%]' />
            <img src='./items/train/phonecase.svg' alt='' className='absolute right-[25%] top-[150px]' />
            <img src='./items/train/stick.png' alt=' ' className='-ml-[15%] absolute right-[22%]' />
            <img src='./items/train/globe.png' alt=' ' className='absolute right-[25%] top-[40%]' />
        </div>
    )
}

export default Train