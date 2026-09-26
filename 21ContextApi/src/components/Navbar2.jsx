import React, { useContext } from 'react'
import ThemeContext, { ThemeDataContext } from '../Context/ThemeContext'


const Navbar2 = () => {
    const [theme, setTheme] = useContext(ThemeDataContext)

    return (

        <div >
            <div className='nav2'>
                <p>home</p>
                <p>Courses</p>
                <p>Contact</p>
                <p>about</p>
                <p>{theme}</p>
            </div>
        </div>
    )
}

export default Navbar2