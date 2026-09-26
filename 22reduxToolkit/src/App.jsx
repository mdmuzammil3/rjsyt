import React, { useState } from 'react'
import './App.css'
import { decrement, increaseByAmount, increment } from './redux/features/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const dispatch = useDispatch() //action dispatch karta hain
  const count = useSelector((state) => state.counter.value) //change value dekata hain

  const [num, setNum] = useState(0)

  return (
    <div className=' '>

      <h1 className='text-3xl font-bold ml-23' >{count}</h1>

      <button onClick={() => { dispatch(increment()) }} className='bg-gray-400 p-3 m-3 hover:bg-sky-700 '>
        Increase
      </button>

      <button onClick={() => { dispatch(decrement()) }} className='bg-gray-400 p-3 m-3 hover:bg-sky-700 '>
        Decrease
      </button>

      <input type="number" value={num} onChange={(e) => { setNum(e.target.value) }}
        className='bg-gray-400 p-3 m-3 ' />

      <button onClick={() => { dispatch(increaseByAmount(Number(num))) }} className='bg-gray-400 p-3 m-3 hover:bg-sky-700 '>
        Increase by Amount
      </button>
    </div>
  )
}

export default App