import React from 'react'
import { TypingText } from './CustomText'

const CardProject = () => {
  return (
    <div className='bg-gray-300 lg:w-[40%] lg:h-[40%] rounded-lg overflow-hidden mb-12 mx-12'>

      <TypingText text='Nome do projeto' styleText='text-black sm:font-bold text-center' />

      <div>
      <img src='/e-commerce-2.png'
        className=' hover:animate-pulse cursor-pointer ' />
      </div>
    </div>
  )
}

export default CardProject