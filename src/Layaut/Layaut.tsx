import React, { ReactNode } from 'react'
import Navbar from './Navbar'

interface LayutProps {
  children: ReactNode
}

const Layaut = ({ children }: LayutProps) => {
  return (
    <div className="flex justify-center gradient-03">
      <Navbar />
      {children}
    </div>
  )
}

export default Layaut