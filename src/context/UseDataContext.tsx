import React, { createContext, ReactNode, useContext, useState } from 'react'

export interface projectProps{

    title: string
    link: string
    description: string
    technologies: string
    date: string
    repository: string
    image: string
  
}

interface context {
  project: projectProps
  setProject: any
}

const projectInitial = {
  
    title: '',
    link: '',
    description: '',
    technologies: '',
    date: '',
    repository: '',
    image: '',
  
}

const initial = {
  project: {
    title: '',
    link: '',
    description: '',
    technologies: '',
    date: '',
    repository: '',
    image: '',
  },
  setProject: () => {}
}

interface UseDataContextProps{
  children: ReactNode
}

export const DataContext = createContext<context>(initial)

const UseDataContext = ({children}: UseDataContextProps) => {

  const [project, setProject] = useState<projectProps>(projectInitial)

  return (
    <DataContext.Provider value={
      {
        project,
        setProject
      }
    }>
      {children}
    </DataContext.Provider>
  )
}

export default UseDataContext

export const useStateContext = () => useContext(DataContext)