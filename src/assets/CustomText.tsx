import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textContainer, textVariant, textVariant2 } from '../utils/motion'

interface CustomTextProps {
  text: string
  styleText?: string
}

export const TypingTitle = ({ styleText, text }: CustomTextProps) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView={"show"}
    className={`text-lg px-2 sm:text-4xl text-gray-100 drop-shadow-[1px_1px_1px_black] font-bold ${styleText}`}>
    {text}
  </motion.p>
)


export const TypingText = ({ text, styleText }: CustomTextProps) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView={"show"}
    className={`font-normal text-sm px-2 drop-shadow-[1px_1px_1px_black]  md:text-xl text-white ${styleText}`}>
   {text}
  </motion.h2>
)