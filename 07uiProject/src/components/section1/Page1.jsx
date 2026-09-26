import React from 'react'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

const Page1 = (props) => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18'>
        <LeftSection/>
        <RightSection user ={props.user}/>
    </div>
  )
}

export default Page1