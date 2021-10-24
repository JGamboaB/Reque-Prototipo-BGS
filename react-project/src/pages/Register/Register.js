import React, { useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import DatePicker from 'react-date-picker';
import "./Register.css"
import companyLogo from "../../images/invertedLogo.png"


const Register = () => {
    //Variables needed
    const[email, setEmail] = useState("");
    const[identification, setID] = useState("");
    const[card, setCard] = useState("");
    const[user, setUser] = useState("");
    const[password, setPassword] = useState("");
    const[phone, setPhone] = useState("");
    const[birthdate, setBirth] = useState(new Date());
    const[name, setName] = useState("");
    const[surname, setSurname] = useState("");
    const[type, setType] = useState("");

    function validateForm(){
        return email.length > 0 && password.length > 0
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(email, identification, card, user, password, phone, birthdate, name, surname, type);
    }

    return (
        <div className="main">
            <div className="upperline"/>

            <div className="container-md">
                <img src={companyLogo} alt="BGS Logo"/>
            </div>


            <div className="form2">
                <Form onSubmit={handleSubmit}>
                    <Form.Label className="LRegister">Register</Form.Label>
                    <br/><br/>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control type="text" placeholder="XXXX XXXX XXXX XXXX"
                            value={card} onChange={(e) => setCard(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Label>Identification</Form.Label>
                            <Form.Control type="text"
                            value={identification} onChange={(e) => setID(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name"
                            value={name} onChange={(e) => setName(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" placeholder="Enter surname"
                            value={surname} onChange={(e) => setSurname(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Label>Birthdate</Form.Label>
                            <br/>
                            <DatePicker
                            onChange={setBirth}
                            value = {birthdate}/>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter your email"
                            value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Col>
                        <Col>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text"
                            value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Create your username"
                            value={user} onChange={(e) => setUser(e.target.value)}/>
                            <Form.Text id = "userHelp" muted>
                                Your username must be unique and must not contain any special characters. 
                            </Form.Text>
                        </Col>
                        <Col>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <Form.Text id = "pwHelp" muted>
                                Your password must be 8-20 characters long, contain letters and numbers, and 
                                must not contain spaces or special characters.
                            </Form.Text>
                        </Col>
                    </Row>
                    <Form.Label>Type of user</Form.Label>
                    <Row>
                        <Col> 
                            <Form.Control as="select"
                            value={type} onChange={(e) => setType(e.target.value)}>
                                <option>Personal use</option>
                                <option>Business</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Button type="submit" disabled={!validateForm()}>Register</Button> 
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Register

//npm install react-date-picker
