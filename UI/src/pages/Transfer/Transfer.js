import React, {useState} from 'react'
import {Card, Table, Row, Col, Form, Button} from 'react-bootstrap'
import "./Transfer.css"
import "../global"

const Transfer = () => {
    var giverID = global.userid;
    const[receiverID, setReceiverID] = useState("");
    const[desc, setDesc] = useState("");
    const[amount, setAmount] = useState("");

    function validateForm(){
        //validate receiverID and amount is a number and less than balance
        var amountV = amount <= global.balance && !isNaN(amount); // must call sql procedure that does a transaction
        return amountV
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(giverID, receiverID, desc, amount);
    }

    return (
        <div className="main">
            <div className="rectangle">
                <div className="homediv searchdiv">
                    <Form onSubmit={handleSubmit}>
                        <Card>
                            <Card.Body>
                                <Table responsive="sm">
                                    <thead><tr><th>Transfer to BGS accounts</th></tr></thead>
                                </Table>
                                <Row>
                                    <Col>
                                        <Form.Label>Type of transaction</Form.Label>
                                        <Form.Control as="select">
                                            <option>Individual</option>
                                            <option>Multiple</option>
                                        </Form.Control>
                                    </Col>
                                    <Col>
                                        <Form.Label>Origin account</Form.Label>
                                        <Form.Control as="select">
                                            <option>{global.accountid}</option>
                                        </Form.Control>
                                    </Col>
                                </Row>
                                <br/>
                                <Table responsive="sm">
                                    <thead><tr><th></th></tr></thead>
                                </Table>
                                <br/>
                                <Row>
                                    <Col>
                                        <Form.Label>Destination account</Form.Label>
                                        <Form.Control value={receiverID} onChange={(e) => setReceiverID(e.target.value)}/>
                                    </Col>
                                    <Col>
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control value={amount} onChange={(e) => setAmount(e.target.value)}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col>
                                        <Form.Label>(Optional) Description</Form.Label>
                                        <Form.Control as="textarea" style={{ height: '100px' }}
                                        value={desc} onChange={(e) => setDesc(e.target.value)}/>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col className="center-text">
                                        <Button variant="primary"
                                        type="submit" disabled={!validateForm()}>Confirm</Button>{' '}
                                        <Button variant="primary">Clean</Button>{' '}
                                    </Col>
                                </Row>
                            </Card.Body>    
                        </Card>
                    </Form>
                </div>
            </div>         
        </div>
    );
}

export default Transfer