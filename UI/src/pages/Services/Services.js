import React from 'react'
import {Card, Table, Row, Form, Col} from 'react-bootstrap'
import "./Services.css"

// Icons
import iconApartment from '../../images/iconApartment.jpg'
import iconAsociation from '../../images/iconAsociation.png'
import iconQuota from '../../images/iconQuota.png'
import iconProfesional from '../../images/iconProfesional.jpg'
import iconSchool from '../../images/iconSchool.png'
import iconTenis from '../../images/iconTenis.png'

const Services = () => {
    return (
        <div className="main">
            <div className="rectangle">
                <div className="homediv searchdiv">
                    <Row> 
                    <h2>Payment of Services</h2>
                    </Row>
                    <Card>
                        <Card.Body>
                            <Card.Title> Favorites </Card.Title>
                            <Table responsive="sm" variant="dark" className="center-text">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Service</th>
                                        <th>Reference</th>
                                        <th>Pay</th>
                                    </tr>
                                </thead>
                            </Table>
                            <Card.Text className="center-text"> You do not have any registered favorites. Add them in the section below.</Card.Text>
                            <br/>
                            <Table responsive="sm">
                                <thead>
                                    <tr>
                                        <th>PAY OTHER SERVICES</th>
                                    </tr>
                                </thead>
                            </Table>
                        </Card.Body>

                        <Form.Control type="text" placeholder="Search..." className="searchbar"/>
                        <br/>
                        {/* Icons */}
                        <Row>
                            <Col className="center-text">
                                <Card.Img variant="top" src={iconApartment} style={{ width: '5rem' }}/>
                                <Card.Text> Apartments and Condominiums </Card.Text>
                            </Col>
                            <Col className="center-text">
                                <Card.Img variant="top" src={iconAsociation} style={{ width: '5rem' }}/>
                                <Card.Text> Asociations </Card.Text>
                            </Col>
                            <Col className="center-text">
                                <Card.Img variant="top" src={iconTenis} style={{ width: '5rem' }}/>
                                <Card.Text> Clubs </Card.Text>
                            </Col>
                            <Col className="center-text">
                                <Card.Img variant="top" src={iconProfesional} style={{ width: '5rem' }}/>
                                <Card.Text> Profesionals </Card.Text>
                            </Col>
                            <Col className="center-text">
                                <Card.Img variant="top" src={iconQuota} style={{ width: '5rem' }}/>
                                <Card.Text> Quotas and fees </Card.Text>
                            </Col>
                            <Col className="center-text">
                                <Card.Img variant="top" src={iconSchool} style={{ width: '5rem' }}/>
                                <Card.Text> Schools </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Card.Text className="center-text red-text"> See all categories ˅ </Card.Text>
                        </Row>
                        <br/>
                    </Card>
                </div>
            </div>         
        </div>
    );
}

export default Services