import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink className="navlink1" to="/" exact>
                Web
            </NavLink>
        </nav>
    );
}

export default Navbar

//Used in app