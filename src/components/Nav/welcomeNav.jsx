import {Container, Nav, Navbar } from 'react-bootstrap';
import React, { Component, Fragment } from 'react';
import { achievements } from '../homePage/achievements';

export class welcomeNav extends Component {
  render() {
    return (
    <Fragment>
        <Navbar bg="white" expand="lg" className='pt-2 pb-3 mb-5'>
          <Container>
            <Navbar.Brand href="#home">Applier</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/welcomePage">Home</Nav.Link>
                <Nav.Link href="/signIn">SignIn/SignUp</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Fragment>
    )
  }
}

export default welcomeNav