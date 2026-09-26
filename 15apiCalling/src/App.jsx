import React, { useState } from 'react'
import axios from 'axios'
const App = () => {

  // async function addData(){
  //   const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
  //   // console.log(response);
  //   const data = await response.json()
  //   console.log(data);

  // }

// const addData = async ()=>{
//   const response = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
//   const data = await response.json()
//   console.log(data);
  
// }

const [data, setData] = useState([])
const addData = async ()=>{
  const response= await axios.get("https://picsum.photos/v2/list?page=2&limit=30")
  // console.log(response.data);
  setData(response.data)
  
}
  return (
    <div>
      <button onClick={addData}>Click me</button>
      <div>
        {data.map((elem, idx)=>{
          return <h3 key={idx}>{elem.author}, {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App