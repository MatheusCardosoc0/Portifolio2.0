import React from 'react'
import { TypingText } from './CustomText'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'

interface ElementHistoryProps{
  text: string
}

const ElementHistory = ({text}:ElementHistoryProps) => {
  return (
    <div className='md:w-[32rem] mx-auto flex items-center flex-col mb-2'>
      <TypingText text={text}
        styleText='' />

      <motion.hr className='relative h-20 border-x-4 border-blue-500 top-[0] left-10 z-[-1]'
        variants={slideIn('up', 'tween', 0.25, 1)}
        initial={"hidden"}
        whileInView={"show"} />
    </div>
  )
}

export default ElementHistory