import React from 'react'
import {Card, Table, Row, Col, Form, Button} from 'react-bootstrap'
import "./Transfer.css"

const Transfer = () => {
    return (
        <div className="main">
            <div className="rectangle">
                <div className="homediv searchdiv">
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
                                        <option>CR24548589731906176662</option>
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
                                    <Form.Control/>
                                </Col>
                                <Col>
                                    <Form.Label>Amount</Form.Label>
                                    <Form.Control/>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col>
                                    <Form.Label>(Optional) Description</Form.Label>
                                    <Form.Control as="textarea" style={{ height: '100px' }}/>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col className="center-text">
                                    <Button variant="primary">Confirm</Button>{' '}
                                    <Button variant="primary">Clean</Button>{' '}
                                </Col>
                            </Row>
                        </Card.Body>    
                    </Card>
                </div>
            </div>         
        </div>
    );
}

export default Transfer