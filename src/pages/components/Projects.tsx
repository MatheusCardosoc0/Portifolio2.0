import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TypingTitle } from '../../assets/CustomText'
import CardProject from '../../assets/CardProject'
import { ConstantsProjects } from '../../Constants/ConstantsProject'
import { fadeIn } from '../../utils/motion'

const Projects = () => {

  const [projectListTypeCurrent, setProjectListTypeCurrent] = useState<string>('1')

  return (
    <section className='section gradient-03 overflow-x-hidden overflow-y-scroll'>

      <motion.div className='text-center'
      variants={fadeIn('left', 'tween', 0.25, 1)}
      initial="hidden"
      whileInView={"show"}>


        <TypingTitle text='Melhores projetos'
          styleText='text-xl sm:text-5xl drop-shadow-[5px_2px_black] sm:font-black p-1 inline' />

        <select className='ml-2 ' onChange={e => setProjectListTypeCurrent(e.target.value)}>
          <option value={'1'}>Melhores projetos</option>
          <option value={'2'}>Projetos iniciantes</option>
          <option value={'3'}>Mobile</option>
        </select>

      </motion.div>


      {projectListTypeCurrent == '1' && 
        <div className='flex flex-wrap items-center lg:justify-between justify-center  mt-24 '>
        
        {ConstantsProjects.map((project, index) => (
          <CardProject key={project.title} project={project} />
        ))}
      </div>
      }

    </section>
  )
}

export default Projects