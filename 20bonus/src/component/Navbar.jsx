import React from 'react'

const Navbar = (props) => {
    const changeTheme = () => {
        console.log(props);

        props.setTheme('dark')
    }
    return (
        <div>
            <button onClick={changeTheme}>change theme</button>
        </div>
    )
}

export default Navbar