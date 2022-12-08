import { motion } from 'framer-motion'
import React from 'react'
import { TypingText } from './CustomText'
import { BsEyeFill } from 'react-icons/bs'
import { url } from 'inspector'
import Link from 'next/link'
import { useStateContext } from '../context/UseDataContext'

interface CardProjectProps {
  project: {
    title: string
    image: string
    link: string
  }
}

const CardProject = ({ project }: CardProjectProps) => {

  const { setProject, project: a } = useStateContext()

  console.log(a)

  return (

    <motion.div className='bg-gray-300 w-full md:w-[520px] h-[250px] rounded-lg overflow-hidden mb-12 lg:mx-12 bg-cover cursor-pointer group '
      style={{
        backgroundImage: `url(${project.image})`,
      }}
    >
      <TypingText text={project?.title || ''} styleText='gradient-text-02 sm:text-3xl text-2xl font-bold sm:font-bold text-center ' />
      <Link
      className='w-full h-full'
        href='/components/DetailsProject'
        onClick={() => setProject(project)}
      >

        <BsEyeFill className='relative left-0 top-0 z-10 group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all text-2xl text-gray-300 group-hover:text-8xl' />






      </Link>
    </motion.div>

  )
}

export default CardProject