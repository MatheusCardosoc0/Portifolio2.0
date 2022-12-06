import { motion } from 'framer-motion'
import React from 'react'
import { TypingText } from './CustomText'
import { BsEyeFill } from 'react-icons/bs'
import { url } from 'inspector'
import Link from 'next/link'

interface CardProjectProps {
  project: {
    title: string
    image: string
    link: string
  }
}

const CardProject = ({ project }: CardProjectProps) => {
  return (
    <motion.div className='bg-gray-300  rounded-lg overflow-hidden mb-12 mx-12'>

      <TypingText text={project?.title || ''} styleText='text-black sm:font-bold text-center' />

      <Link href={project.link} target={'_blank'}>
        <div className={`w-[520px] h-[300px] bg-contain bg-no-repeat  group cursor-pointer`}
          style={{
            backgroundImage: `url(${project.image})`,
          }}>

          <BsEyeFill className='relative left-0 top-0 z-10 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all text-2xl text-gray-300 group-hover:text-7xl' />
        </div>
      </Link>
    </motion.div>
  )
}

export default CardProject