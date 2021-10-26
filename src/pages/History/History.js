import React from 'react'
import {Card, Table, Row, Col, Form, Button} from 'react-bootstrap'
import "./History.css"

const History = () => {
    return (
        <div className="main">
            <div className="rectangle">
            <div className="homediv searchdiv">
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Form.Label>Bank account</Form.Label>
                                    <Form.Control as="select">
                                        <option>CR24548589731906176662</option>
                                    </Form.Control>
                                </Col>
                            </Row>

                            <Table responsive="sm">
                                <thead><tr><th></th></tr></thead>
                            </Table>
                            
                            <Card.Title> Details of Transactions </Card.Title>
                            <Table responsive="sm" variant="dark" className="center-text">
                                <thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Date</th>
                                        <th>Reference</th>
                                        <th>Origin account</th>
                                        <th>Destination account</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr>
                                        <td>Sent</td>
                                        <td>24/10/2021</td>
                                        <td>371596745</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>JUAN SEBASTIAN GAMBOA BOTERO</td>
                                        <td>10.500 CRC</td>
                                    </tr>
                                    <tr>
                                        <td>Received</td>
                                        <td>20/10/2021</td>
                                        <td>303244588</td>
                                        <td>GABRIEL BADILLA MARIN</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>20.000 CRC</td>
                                    </tr>
                                    <tr>
                                        <td>Sent</td>
                                        <td>13/10/2021</td>
                                        <td>603799437</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>AMALIA CASTILLO SALAS</td>
                                        <td>10.000 CRC</td>
                                    </tr>
                                    <tr>
                                        <td>Received</td>
                                        <td>05/10/2021</td>
                                        <td>985173444</td>
                                        <td>DIEGO WUST CALVO</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>17.500 CRC</td>
                                    </tr>
                                    <tr>
                                        <td>Received</td>
                                        <td>03/10/2021</td>
                                        <td>890717829</td>
                                        <td>CATALINA MENA MORALES</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>2.600 CRC</td>
                                    </tr>
                                    <tr>
                                        <td>Sent</td>
                                        <td>01/10/2021</td>
                                        <td>977583826</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>CARLOS GUSTAVO BAIZAN GRANADOS</td>
                                        <td>5.000 CRC</td>
                                    </tr>
                                    <tr>
                                        <td>Sent</td>
                                        <td>30/09/2021</td>
                                        <td>474316273</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>JUAN ANDRES FERNANDEZ CAMACHO</td>
                                        <td>3.500 CRC</td>
                                    </tr>
                                    <tr>
                                        <td>Received</td>
                                        <td>27/09/2021</td>
                                        <td>352479345</td>
                                        <td>SEBASTIAN MEZA VILLALOBOS</td>
                                        <td>DAVID SUAREZ ACOSTA</td>
                                        <td>12.000 CRC</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>    
                    </Card>
                </div>
            </div>         
        </div>
    );
}

export default History