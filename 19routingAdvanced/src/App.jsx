import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import NotFound from './NotFound'
import Courses from './Courses'
import CoursesDetails from './CoursesDetails'
import Navbar2 from './components/Navbar2'


const App = () => {
  return (
    <div className='bg-black h-screen text-white font-bold'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App