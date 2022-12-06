import React, { ReactNode, useState } from 'react'
import Navbar from './Navbar'

interface LayutProps {
  children: ReactNode
}

const Layaut = ({ children }: LayutProps) => {

  const [pageCurrent,setPageCurrent] = useState<string>('1')

  return (
    <div className={`flex justify-center
     ${pageCurrent == '1' && 'gradient-02'}
     ${pageCurrent == '2' && 'gradient-03'}
     ${pageCurrent == '3' && 'gradient-04'} `}>
      <Navbar pageCurrent={pageCurrent} setPageCurrent={setPageCurrent} />
      {children}
    </div>
  )
}

export default Layaut