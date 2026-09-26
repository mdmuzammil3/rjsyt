import React, { createContext, useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'


const Button = () => {

    const [theme, setTheme] = useContext(ThemeDataContext)

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div>
            <button onClick={changeTheme}>click here to change</button>
        </div>
    )
}

export default Button