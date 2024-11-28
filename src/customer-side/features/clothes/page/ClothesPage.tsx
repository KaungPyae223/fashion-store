import Heros from '@/customer-side/components/Heros'
import React from 'react'
import ClothesContainer from '../components/ClothesContainer'
import { title } from 'process'

const ClothesPage = () => {
  return (
    <div>
        <Heros previousSection={[{title:"Home",link:"/"}]} title='clothing'/>
        <ClothesContainer/>
    </div>
  )
}

export default ClothesPage