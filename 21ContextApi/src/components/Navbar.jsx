import React, { useContext } from 'react'
import Navbar2 from './Navbar2'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)
    //console.log(theme);

    return (
        <div className={theme}>
            <h1>Muzz</h1>
            <Navbar2 />
        </div>
    )
}

export default Navbar