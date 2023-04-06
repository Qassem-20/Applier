import { Container, Nav, Navbar } from "react-bootstrap";
import React, { Component, Fragment } from "react";

export class welcomeNav extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="white" expand="lg" className="pt-2 pb-3 mb-5">
          <Container>
            <Navbar.Brand>Applier</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/signIn">Sign In</Nav.Link>
                <Nav.Link href="/routeSignUp">Sign Up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default welcomeNav;
