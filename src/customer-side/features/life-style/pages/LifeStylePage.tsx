import Heros from '@/customer-side/components/Heros'
import React from 'react'
import LifeStyleContainer from '../components/LifeStyleContainer'
import LifeStyleImage from "@/assets/LifeStyleImage.jpg"

const LifeStylePage = () => {
  return (
    <div>
        <Heros image={LifeStyleImage.src} previousSection={[{title:"Home",link:"/"}]} title='Life Style'/>
        <LifeStyleContainer/>
    </div>
  )
}

export default LifeStylePage