import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-4 py-2 bg-amber-500'>
            <h2 className='uppercase text-2xl font-bold'>ihs</h2>
            <div className='flex items-center gap-10'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/product'>Product</Link>
            </div>
        </div>
    )
}

export default Navbar