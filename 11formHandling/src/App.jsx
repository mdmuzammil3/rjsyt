import React, { useState } from 'react'

const App = () => {
  
  const [title, setTitle] = useState('')
  const btnClicked = (e)=>{
    e.preventDefault()
    console.log("form submitted by", title)
    setTitle("")
  }
  return (
    //2 way binding
    <div>
       <form onSubmit={(e)=>{btnClicked(e)}}>
        <input type="text"
        placeholder='enter text'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          //console.log(e.target.value);

        }}
        />
        <button >Click me</button>
       </form>
    </div>
  )
}

export default App