import {Container, Nav, Navbar } from 'react-bootstrap';
import React, { Component, Fragment } from 'react';

export class medicalStudentNav extends Component {
  render() {
    return (
    <Fragment>
        <Navbar bg="white" expand="lg" className='pt-2 pb-3 mb-5'>
          <Container>
            <Navbar.Brand href="/">Applier</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/adminHomePage">Home</Nav.Link>
                <Nav.Link href="/reportedFeedBack">Reported FeedBack</Nav.Link>
                <Nav.Link href="/companies">Companies</Nav.Link>
                <Nav.Link href="/medicalStudent">Medical Students</Nav.Link>
                <Nav.Link href="/consumers">Consumers</Nav.Link>
                <Nav.Link href="/opportunitiesPanel">Opportunities Panel</Nav.Link>
                <Nav.Link href="/adminPanel">Admin Panel</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Fragment>
    )
  }
}

export default medicalStudentNav