import React from 'react'
import { useStateContext } from '../../context/UseDataContext'
import { motion } from 'framer-motion'
import { TypingText, TypingTitle } from '../../assets/CustomText'
import { AiFillEye, AiFillGithub, AiOutlineArrowLeft } from 'react-icons/ai'
import LinksElement from '../../assets/LinksElement'


const DetailsProject = () => {

  const { project } = useStateContext()

  return (
    <section className='section gradient-03 items-center gap-20 flex flex-col'>

      <div className='absolute text-4xl font-bold left-0 flex gap-2 gradient-03 rounded-r-xl items-center p-1'>
        <AiOutlineArrowLeft />
        <LinksElement text='Voltar' href='/components/Projects'/>
      </div>

      <TypingTitle text={'Projeto: ' + project.title} styleText="text-gray-900" />

      <motion.img src={project.image} className="w-[90%] rounded-lg" />

      <motion.div className='flex items-center gap-20'>
        <span className='text-center text-xl font-bold w-[10rem]'>
          <p>Data de criação:</p>
          <TypingText text={project.date} styleText="text-center md:text-2xl text-black" />
        </span>

        <span className='text-center text-xl font-bold w-[24rem]'>
          <p>Tecnologias usadas:</p>
          <TypingText text={project.technologies} styleText="text-center md:text-2xl text-black" />
        </span>
      </motion.div>

      <div className='w-[40rem] flex flex-col gap-2'>
        <p className='text-xl font-bold w-[24rem]'>Descrição do projeto</p>
        <TypingText text={project.description} styleText="sm:font-bold md:text-2xl text-black" />
      </div>

      <div className='flex gap-40'>
        {project.link && (
          <a className='gradient-04 border-4 border-yellow-500 flex items-center gap-2 p-2 rounded-xl text-2xl cursor-pointer group'
            href={project.link}
            target={"_blank"}>

            <AiFillEye className='text-black group-hover:text-4xl' />

            <p className='gradient-text-02 drop-shadow-[3px_2px_black] text-transparent font-bold'>
              Visualizar projeto
            </p>

          </a>
        )}

        {project.repository && (
          <a className='bg-black border-4 border-white flex items-center gap-2 p-2 rounded-xl text-2xl cursor-pointer group'
            href={project.repository}
            target={"_blank"}>

            <AiFillGithub className='text-white group-hover:text-4xl' />

            <p className='gradient-text-01 drop-shadow-[3px_2px_black] text-transparent font-bold'>
              Ver o codigo
            </p>

          </a>
        )}
      </div>

    </section>
  )
}

export default DetailsProject