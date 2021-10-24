import React from 'react'
import './style.css'
import logo from "../../images/LateralW.png"

const UNavbar = () => {
    return (
        <div className="nav1">
            <nav class="navbar navbar-expand-lg">
                <a class="navbar-brand" href="/home">
                    <img src={logo} alt="" height="40"/> 
                </a>
                <a class="nav-link active" href="/">Exit</a>
            </nav>
        </div>
    );
}

export default UNavbar

