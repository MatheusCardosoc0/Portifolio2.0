import { motion } from "framer-motion"
import { useState } from "react"
import LinksElement from "../assets/LinksElement"
import { navVariants } from "../utils/motion"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

interface NavbarProps {
  pageCurrent: string
  setPageCurrent: React.Dispatch<React.SetStateAction<string>>
}

const Navbar = ({ pageCurrent, setPageCurrent }: NavbarProps) => {

  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <section className="w-full lg:max-w-[1248px] fixed top-0 z-10">

      <motion.div variants={navVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="gradient-01 w-full h-[80px] top-0" />


      <motion.div variants={navVariants}
        className=" text-white flex justify-between p-4 "
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}>



        <h1 className="font-bold md:text-4xl text-2xl">Matheus Cardoso</h1>

        <div className={` ${showMenu && 'bg-teal-500/40 fixed h-[1800px] top-0 left-0 w-full'}
         md:h-[initial] md:w-[initial] md:top-[initial] md:left-[initial] md:static md:bg-transparent`}>

          {showMenu &&
            <button className="p-2 relative md:hidden" onClick={(e) => setShowMenu(false)}>
              <AiOutlineClose className="text-8xl" />
            </button>}


          <ul className={`md:flex flex-col md:flex-row gap-20 md:gap-4 text-5xl ${showMenu ? 'flex' : 'hidden'} md:relative
           fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:text-3xl `}>
            <li onClick={() => setPageCurrent('1')}>
              <LinksElement href="/components/About" text="Sobre"
                Activate={pageCurrent == '1' && true} />
            </li>
            <b className="hidden md:flex"> |</b>
            <li onClick={() => setPageCurrent('2')}>
              <LinksElement href="/components/Projects" text="Projetos"
                Activate={pageCurrent == '2' && true} /> 
            </li>
            <b className="hidden md:flex"> |</b>
            <li onClick={() => setPageCurrent('3')}>
              <LinksElement href="/components/Habilities" text="Histórico"
                Activate={pageCurrent == '3' && true} />
            </li>
          </ul>


        </div>

        <button className=" relative md:hidden" onClick={(e) => setShowMenu(true)}>
          <AiOutlineMenu className="text-3xl" />
        </button>

      </motion.div>


    </section>
  )
}

export default Navbar