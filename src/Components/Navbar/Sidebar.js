import React from 'react'
import './style.css'
import { Navbar, Nav } from 'react-bootstrap';
import  { Row } from 'react-bootstrap'

const Sidebar = () => {
    return (
        <div className="side1">
            <nav class="sidebar bg-dark navbar-dark">
                <div class="container-fluid">
                  <Row>
                  <Navbar.Brand href="/home">Overview</Navbar.Brand>
                  </Row><Row>
                  <Navbar.Brand href="#home">Consult</Navbar.Brand>
                  </Row>
                  <Nav className="me-auto">
                    <Nav.Link href="#balances" className="NLactive">Balances and movements</Nav.Link>
                    <Nav.Link href="#finances" className="NLactive">My Finances</Nav.Link>
                    <Nav.Link href="/history" className="NLactive">Transaction History</Nav.Link>
                  </Nav><Row>
                  <Navbar.Brand href="#home">Transfers</Navbar.Brand>
                  </Row>
                  <Nav className="me-auto">
                    <Nav.Link href="/transfer" className="NLactive">To BGS accounts</Nav.Link>
                  </Nav><Row>
                  <Navbar.Brand href="#home">Pay</Navbar.Brand>
                  </Row>
                  <Nav className="me-auto">
                    <Nav.Link href="/services" className="NLactive">Services</Nav.Link>
                  </Nav><Row>
                  <Navbar.Brand href="#home">Configure</Navbar.Brand>
                  </Row><Nav className="me-auto">
                    <Nav.Link href="#security" className="NLactive">Security</Nav.Link>
                    <Nav.Link href="#profile" className="NLactive">My Profile</Nav.Link>
                    <Nav.Link href="#logins" className="NLactive">Manage Logins</Nav.Link>
                  </Nav><Row>
                  <Navbar.Brand href="#home">Help</Navbar.Brand>
                  </Row>
                  <Nav className="me-auto">
                    <Nav.Link href="/chat" className="NLactive">Technical Support</Nav.Link>
                  </Nav>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar

//Used in app
