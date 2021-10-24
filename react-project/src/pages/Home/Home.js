import React, { useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import "./Home.css"
import companyLogo from "../../images/invertedLogo.png"

const Home = () => {
    


    return (
        <div className="main">
            <div className="upperline"/>

            <div className="container-md">
                <img src={companyLogo} alt="BGS Logo"/>
            </div>

            

        </div>
    );
}

export default Home

