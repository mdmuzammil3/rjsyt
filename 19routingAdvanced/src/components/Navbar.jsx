import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex py-4 px-8 justify-between bg-cyan-500 text-white '>
            <h3 className='text-xl font-bold '>Muzz Collection</h3>
            <div className='flex  gap-8'>
                <Link className='text-lg font-bold ' to='/'>Home</Link>
                <Link className='text-lg font-bold ' to='/product'>Product</Link>
                <Link className='text-lg font-bold ' to='/contact'>Contact</Link>
                <Link className='text-lg font-bold ' to='/courses'>Courses</Link>
                <Link className='text-lg font-bold ' to='/about'>About</Link>

            </div>
        </div>
    )
}

export default Navbar