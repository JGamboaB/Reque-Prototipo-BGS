import React from 'react'
import {Card, Table, Row} from 'react-bootstrap'
import "./Home.css"

const Home = () => {
    return (
        <div className="main">
            
            <div className="rectangle">
                <div className="homediv">
                    <Row> 
                    <h2>Overview</h2>
                    </Row>
                    <Card>
                        <Card.Body>
                            <Card.Title> Bank Accounts </Card.Title>
                            <Card.Text> David Suárez Acosta </Card.Text>
                            <br/>
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>Description</th>
                                        <th>Product</th>
                                        <th>Balance</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                    <tr>
                                        <td>CR - BANK ACCOUNT</td>
                                        <td>CR24548589731906176662</td>
                                        <td>24.100 CRC</td>
                                    </tr>
                                </tbody>
                            </Table>
                            
                        </Card.Body>
                    </Card>
                    <br/>
                    <Card body> Total balance: 24.100 CRC</Card>
                </div>
                

            </div>         
        </div>
    );
}

export default Home