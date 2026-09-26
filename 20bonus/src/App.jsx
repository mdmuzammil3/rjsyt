import React, { useState } from 'react'
import Navbar from './component/Navbar'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <h1  >This theme is {theme}</h1>

      <Navbar theme={setTheme} setTheme={setTheme} />

    </div>
  )
}

export default App