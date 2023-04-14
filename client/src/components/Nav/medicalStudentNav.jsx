import { Container, Nav, Navbar } from "react-bootstrap";
import React, { Component, Fragment } from "react";

export class medicalStudentNav extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="white" expand="lg" className="pt-2 pb-3 mb-5">
          <Container>
            <Navbar.Brand>Applier</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/medicalHomePage">Home</Nav.Link>
                <Nav.Link href="/medicalStudentsM">Medical Students</Nav.Link>
                <Nav.Link href="/feedBackMedical">Feedback</Nav.Link>
                <Nav.Link href="/"> Sign Out</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export default medicalStudentNav;
