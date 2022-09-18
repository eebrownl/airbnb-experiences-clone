import React from 'react';
import logo from './airbnb.png'

const Navbar = () => {
    return(
        <nav>
            <img src={logo} alt="logo" className='logo'></img>
        </nav>
    )
}

export default Navbar