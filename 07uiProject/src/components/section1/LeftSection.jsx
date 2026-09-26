import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'

const LeftSection = () => {
  return (
    <div className='bg-white w-1/4 h-full flex flex-col justify-between' >
      <HeroText/>
      <Arrow/>
      
    </div>
  )
}

export default LeftSection