import React, { useState } from 'react'

const App = () => {

 const [num, setNum] = useState([10,20,30])  //{name:"raj" , age:23}    [10,20,30]

  const btnChange = () =>{
    //setNum(prev =>({...prev, name: "muzz" }))
    // const newNum = {...num}//destructure karne ref point same nahi hota newNum kavref alag hoga
    // newNum.name = "muzz"
    // setNum(newNum)
    //setNum(prev => ([...prev, 30]))
    // setNum(prev => prev+1)//batch update
    // setNum(prev => prev+1)
    // setNum(prev => prev+1)
     const newNum= num.map((elem)=>elem *2)

     setNum(newNum)

  }
  return (
    <div>
      <h1>hii this is {num}</h1>
      <button onClick={btnChange}>CLick here</button>
    </div>
  )
}

export default App