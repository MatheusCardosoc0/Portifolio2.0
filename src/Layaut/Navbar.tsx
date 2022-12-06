import { motion } from "framer-motion"
import LinksElement from "../assets/LinksElement"
import { navVariants } from "../utils/motion"

interface NavbarProps {
  pageCurrent: string
  setPageCurrent: React.Dispatch<React.SetStateAction<string>>
}

const Navbar = ({ pageCurrent, setPageCurrent }: NavbarProps) => {
  return (
    <section className="w-full lg:max-w-[1248px] fixed top-0 z-10">

      <motion.div variants={navVariants}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="gradient-01 w-full h-[80px] top-0" />


      <motion.div variants={navVariants}
        className="text-4xl text-white flex justify-between p-4 items-center"
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}>



        <h1 className="font-bold">Matheus Cardoso</h1>

        <div>
          <ul className="flex gap-2">
            <li onClick={() => setPageCurrent('1')}>
              <LinksElement href="/components/About" text="Sobre"
                Activate={pageCurrent == '1' && true} />
            </li>
            |
            <li onClick={() => setPageCurrent('2')}>
              <LinksElement href="/components/Projects" text="Projetos"
                Activate={pageCurrent == '2' && true} />
            </li>
            |
            <li onClick={() => setPageCurrent('3')}>
              <LinksElement href="/components/Habilities" text="Histórico"
                Activate={pageCurrent == '3' && true} />
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default Navbar