import Link from 'next/link'
import React from 'react'

interface LinksProps {
  href: string
  text: string
  Activate?: boolean
}

const LinksElement = ({ href, text, Activate }: LinksProps) => {
  return (
    <Link href={href}
      className={`cursor-pointer bg-gradient-to-tr gradient-text-01  hover:text-transparent hover:drop-shadow-[2px_3px_0px_black] hover:font-bold transition-colors ${Activate && 'gradient-text-01 text-transparent drop-shadow-[2px_3px_0px_black] font-bold'}`}>
      {text}
    </Link>
  )
}

export default LinksElement