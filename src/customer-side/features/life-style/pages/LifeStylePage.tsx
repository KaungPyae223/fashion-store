import Heros from '@/customer-side/components/Heros'
import React from 'react'
import LifeStyleContainer from '../components/LifeStyleContainer'

const LifeStylePage = () => {
  return (
    <div>
        <Heros previousSection={[{title:"Home",link:"/"}]} title='Life Style'/>
        <LifeStyleContainer/>
    </div>
  )
}

export default LifeStylePage