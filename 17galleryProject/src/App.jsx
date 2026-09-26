import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Card from './component/Card'


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=21`)
    //console.log(response.data)
    setUserData(response.data)

  }

  useEffect(function () {
    getData()
  }, [index])

  let printUserData = <h3 className='text-gray-300 text-sm text-center w-full mt-10 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {

      return <div key={idx} >
        <Card elem={elem} />
      </div>
    })
  }


  return (
    <div className='bg-black overflow-auto h-screen w-full text-white text-2xl'>
      <div className='flex flex-wrap gap-2 p-5'>{printUserData}</div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1)
              setUserData([])
            }
          }}
        >
          Prev
        </button>

        <h4>Page {index}</h4>

        <button
          className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold'
          onClick={() => {
            setUserData([])
            setIndex(index + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App