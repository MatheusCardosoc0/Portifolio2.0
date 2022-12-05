import React from 'react'
import { motion } from 'framer-motion'
import { TypingTitle } from '../../assets/CustomText'
import CardProject from '../../assets/CardProject'

const Projects = () => {
  return (
    <section className='section gradient-03 overflow-x-hidden overflow-y-scroll'>

      <motion.div className='text-center'>


        <TypingTitle text='Melhores projetos'
          styleText='text-xl sm:text-5xl drop-shadow-[5px_2px_black] sm:font-black p-1 inline' />

        <select className='ml-2 '>
          <option>Melhores projetos</option>
          <option>Projetos iniciantes</option>
          <option>Mobile</option>
        </select>

      </motion.div>


      <motion.div className='flex flex-wrap items-center lg:justify-between justify-center  mt-24 '>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />

      </motion.div>

    </section>
  )
}

export default Projects