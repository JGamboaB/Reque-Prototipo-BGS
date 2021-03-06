import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap/'
import './Login.css'
import stock_photo from "../../images/BGS_stock-photo.png"
import "../global"


const Login = () => {

    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[remember, setRemember] = useState(""); 

    function handleSubmit(event){
        event.preventDefault();
        console.log(user, password, remember);
    }


    return (
        
        <div className="Main">
            <div className="form">
                <Form onSubmit={handleSubmit}>
                    <Form.Label className="labelA"> Online Banking </Form.Label> 

                    <Form.Group className="inputF" controlId="formGroupUser">
                        <Form.Control 
                            type="text" placeholder="Username"
                            value = {user} onChange={(e) => setUser(e.target.value)}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Group className="inputF" controlId="formGroupPassword">
                        <Form.Control 
                            type="password" placeholder="Password" 
                            value = {password} onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <br/>
                    <Form.Check
                        type="checkbox"
                        id="rememberC"
                        className="mb-2"
                        label="Remember Username"
                        checked={remember} onChange={(e) => setRemember(e.target.checked)}
                    />
                    <br/>

                    <Button className="buttonLogIn" type="submit" >Login</Button>
                    <br/> <br/>

                    <nav>
                        <a class="nav-link active" href="/">Forgot password?</a> 
                        <a class="nav-link active" href="/register">Register</a>
                    </nav>
                </Form>
            </div>
            <div className="picture">
                <img src={stock_photo} alt="" /> 
            </div>
        </div>
    );
}

export default Login