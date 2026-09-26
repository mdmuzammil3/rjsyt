import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='bg-black text-white h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </div>
  )
}

export default App