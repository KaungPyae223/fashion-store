import Heros from '@/customer-side/components/Heros'
import React from 'react'
import ClothesContainer from '../components/ClothesContainer'

const ClothesPage = () => {
  return (
    <div>
        <Heros title='clothes'/>
        <ClothesContainer/>
    </div>
  )
}

export default ClothesPage