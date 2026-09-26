import React from 'react'
import Card from './Components/Card'
import './App.css'

const App = () => {
  
  return (
    <div className="parent">
      <Card name= 'Muzz' age={23} img='https://images.unsplash.com/photo-1690106505816-6ba357b09c45?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card name='Raj' age={18} img="https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

    </div>
  )
}

export default App
