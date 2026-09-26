import React from 'react'
import './App.css'
const App = () => {

  function btnClicked(){
    console.log('you clicked')
  }

  function change(val){
    console.log(val)
  }
  return (
    <>
      <button onClick={btnClicked}>CLick me!!</button>

    <input onChange={function changing(elem){
      // console.log(elem.target.value)
      change(elem.target.value)
    }} placeholder='enter name'/>

    <div id='box' onMouseMove={(elem)=> {
      console.log(elem.clientX)
    }}></div>
    </>
   
  )
}

export default App