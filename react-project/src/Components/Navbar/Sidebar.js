import React from 'react'
import './style.css'
import { Navbar, Nav } from 'react-bootstrap';
import {Form, Row, Col, Button} from 'react-bootstrap'

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
                  <div className="end"/>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar

//Used in app

/*
<div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width: 280px;" bis_skin_checked="1">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg>
          Customers
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown" bis_skin_checked="1">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
*/