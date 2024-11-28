import { title } from 'process'
import React from 'react'

const SectionSubTitle = ({title}:{title:string}) => {
  return (
    <p className="uppercase tracking-widest font-medium mb-3">{title}</p>
    
  )
}

export default SectionSubTitle