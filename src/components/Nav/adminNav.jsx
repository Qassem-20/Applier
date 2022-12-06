import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { Component, Fragment } from 'react'
import {Container} from 'react-bootstrap';

export class adminNav extends Component {
  render() {
    return (
        <Fragment>
            <Navbar bg="white" variant="light" className='pt-3 pb-3'>
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/adminHomePage">Home</Nav.Link>
                    <Nav.Link href="/reportedFeedBack">Reported FeedBack</Nav.Link>
                    <Nav.Link href="/companies">Companies</Nav.Link>
                    <Nav.Link href="/medicalStudent">Medical Students</Nav.Link>
                    <Nav.Link href="/consumers">Consumers</Nav.Link>
                    <Nav.Link href="/opportunitiesPanel">Opportunities Panel</Nav.Link>
                    <Nav.Link href="/adminPanel">Admin Panel</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    )
  }
}

export default adminNav