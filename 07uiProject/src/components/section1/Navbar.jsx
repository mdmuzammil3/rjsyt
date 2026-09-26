import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Navbar = () => {
  return (
    <div className='w-full bg-white flex justify-between center'>
      <h3 className='bg-black text-white uppercase m-3 rounded-full p-2 text-sm'>Target Audience</h3>
      <button className='bg-gray-200 rounded-full p-2 m-2 uppercase text-xs'><i className="ri-corner-down-right-line"></i> Digital Banking PLatform</button>
    </div>
  )
}

export default Navbar