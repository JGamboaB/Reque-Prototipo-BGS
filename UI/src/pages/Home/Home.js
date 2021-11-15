import React from 'react'
import {Card, Table, Row} from 'react-bootstrap'
import "./Home.css"
import "../global"

const Home = () => {
    const name = global.username
    const balance = "24.100 CRC"
    const accountid = global.accountid
    const description = "CR - BANK ACCOUNT"

    return (
        <div className="main">
            <div className="rectangle">
                <div className="homediv">
                    <Row><h2>Overview</h2></Row>
                    <Card>
                        <Card.Body>
                            <Card.Title> Bank Accounts </Card.Title>
                            <Card.Text> {name} </Card.Text>
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
                                        <td>{description}</td>
                                        <td>{accountid}</td>
                                        <td>{balance}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            
                        </Card.Body>
                    </Card>
                    <br/>
                    
                    <Card body> Total balance: {balance}</Card>
                </div>
                

            </div>         
        </div>
    );
}

export default Home