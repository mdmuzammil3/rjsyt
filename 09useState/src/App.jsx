import React, { useState } from 'react'
import './App.css'
const App = () => {

  const [num, setNum] = useState(0)
  
  function increaseNum(){
    setNum(num+1)
  }

  function decreaseNum (){
    setNum(num-1)
  }

  function increaseby5(){
    setNum(num+5)
  }

  return (
    <div className='h-150 w-150 bg-black '>
      <h1 className='bg-blue-700 text-white w-50 h-50 rounded-full ml-30 p-20 text-5xl'>{num}</h1>
      <button onClick={increaseNum} className='bg-amber-200 m-10 p-10 rounded-2xl text-3xl'>increase</button>
      <button onClick={decreaseNum} className='bg-amber-200 m-10 p-10 rounded-2xl text-3xl'>decrease</button>
      <button onClick={increaseby5} className='bg-amber-200 m-10 p-10 rounded-2xl text-3xl'>increase by 5</button>

    </div>
  )
}

export default App