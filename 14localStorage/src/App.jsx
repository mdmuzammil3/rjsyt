import React from 'react'

const App = () => {

  // localStorage.setItem("user", "muzz")

  // const user =localStorage.getItem("user")
  // console.log(user);

  const user = {
    user:"muzammil",
    age:24,
    gender:"male"
  }

  localStorage.setItem("user", JSON.stringify(user))

  const users = JSON.parse(localStorage.getItem("user"))
  console.log(users);
  
  return (
    <div>App</div>
  )
}

export default App