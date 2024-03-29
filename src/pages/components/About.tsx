import React from 'react'
import { motion } from 'framer-motion'
import { TypingText, TypingTitle } from '../../assets/CustomText'
import { fadeIn, zoomIn } from '../../utils/motion'
import { FaBook, FaBookOpen } from 'react-icons/fa'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const About = () => {
  return (
    <section className='section gradient-02  '>




      <div className=' flex gap-20 flex-col md:flex-row md:justify-around'>
        <div className='flex flex-col gap-4 md:w-[30rem]'>
          <TypingTitle text='Sobre mim' />

          <TypingText text='Me chamo Matheus possuo 19 anos, e desde maio de 2022 venho me aprimorando dia a dia na área da programação, principalmente na linguagem javascript e suas tecnologias para alcançar uma vaga na área da tecnólogia.' />

          <TypingText text='Tenho conhecimento tanto de back-end com nodejs quanto de front-end com react-js, possuo preferência na atuação com front-end.' />
        </div>

        <motion.div
          variants={zoomIn(0.25, 1)}
          initial="hidden"
          whileInView={"show"}>
          <img src='/profile.jpg'
            className='rounded-full photo-effect md:w-[300px] md:h-[300px] w-[200px] h-[200px] mx-auto md:mx-[initial]'
          />

         <div className='flex justify-around  text-4xl'>
         <a href='https://www.linkedin.com/in/matheus-cardoso-026488244/' target={"_blank"}>
            <AiFillLinkedin className='text-blue-500 bg-white rounded-lg cursor-pointer' />
          </a>
          <a href='https://github.com/MatheusCardosoc0' target={"_blank"}>
            <AiFillGithub className='bg-white rounded-full cursor-pointer' />
          </a>
         </div>

         <p className='mt-5 text-white drop-shadow-[1px_1px_1px_black] text-lg font-bold'>
          Numero de telefone: (62) 99604-2564
          </p>
        </motion.div>



      </div>

      <div className='flex flex-col gap-8 mt-20'>
        <TypingTitle text='Certificados' styleText='text-center' />

        <motion.div className='flex gap-4 lg:w-[50rem] mx-auto'
          variants={fadeIn('up', 'tween', 0.25, 1)}
          initial="hidden"
          whileInView={"show"}>

          <FaBook className='text-white text-2xl md:text-4xl' />
          <TypingText text='No momento estou cursando o primeiro semestre de analise e desenvolvimento de sistemas na universidade uninter.' />
        </motion.div>
      </div>

      <div className='flex flex-col gap-8 mt-20'>
        <TypingTitle text='Habilidades' styleText='text-center' />

        <motion.div className='flex gap-4 e-full lg:w-[50rem] mx-auto flex-col'
          variants={fadeIn('up', 'tween', 0.25, 1)}
          initial="hidden"
          whileInView={"show"}>



          <div className='flex gap-3 items-center'>
            <FaBookOpen className='text-white text-2xl md:text-4xl inline' />
            <b className='md:text-2xl text-white'>Linguagens:</b>
            <TypingText text=' javascript, html, css.' styleText='inline' />
          </div>

          <div className='flex gap-3 items-center'>
            <FaBookOpen className='text-white text-2xl md:text-4xl inline' />
            <b className='md:text-2xl text-white'>Frameworks:</b>
            <TypingText text='react-js, node-js, next-js, tailwindcss.' styleText='inline' />
          </div>

          <div className='flex gap-3 items-center'>
            <FaBookOpen className='text-white text-2xl md:text-4xl inline' />
            <b className='md:text-2xl text-white'>Bibliotecas:</b>
            <TypingText text='context-api, framer-motion .' styleText='inline' />
          </div>

          <div className='flex gap-3 items-center'>
            <FaBookOpen className='text-white text-2xl md:text-4xl inline' />
            <b className='md:text-2xl text-white'>Habilidades pessoais:</b>
            <TypingText text='Bom auto-controle, gostar de aprender coisas novas.' styleText='inline' />
          </div>

          <div className='flex gap-3 items-center'>
            <FaBookOpen className='text-white text-2xl md:text-4xl inline' />
            <b className='md:text-2xl text-white'>Outros:</b>
            <TypingText text='Prisma ORM, Rest-api, sanity.io .' styleText='inline' />
          </div>



        </motion.div>
      </div>



    </section>
  )
}

export default About