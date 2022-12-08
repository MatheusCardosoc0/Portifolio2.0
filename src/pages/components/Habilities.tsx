import React from 'react'
import { TypingText, TypingTitle } from '../../assets/CustomText'
import { motion } from 'framer-motion'
import { slideIn } from '../../utils/motion'
import ElementHistory from '../../assets/ElementHistory'
import { ConstHabilities } from '../../Constants/ConstantsHabilities'

const Habilities = () => {
  return (
    <section className='section gradient-04 flex text-center flex-col gap-20 md:gap-40 overflow-y-scroll'>

      <TypingTitle text='Inicio' styleText='sm:text-5xl' />

      <main>
        {ConstHabilities.map((hability) => (
          <ElementHistory text={hability.text} />
        ))}
      </main>



      <TypingTitle text='Em andamento...' styleText='sm:text-5xl' />
    </section>
  )
}

export default Habilities