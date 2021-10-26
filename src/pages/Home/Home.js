import React from 'react'
import {Card, Table, Row} from 'react-bootstrap'
import "./Home.css"

const Home = () => {
    const amount = "24.100 CRC"

    return (
        <div className="main">
            <div className="rectangle">
                <div className="homediv">
                    <Row><h2>Overview</h2></Row>
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

                                {/* If multiple accounts, must do a for */}
                                <tbody> 
                                    <tr>
                                        <td>CR - BANK ACCOUNT</td>
                                        <td>CR24548589731906176662</td>
                                        <td>{amount}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            
                        </Card.Body>
                    </Card>
                    <br/>
                    
                    <Card body> Total balance: {amount}</Card>
                </div>
                

            </div>         
        </div>
    );
}

export default Home