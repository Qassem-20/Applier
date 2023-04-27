import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { Fragment } from "react";

const AdminNav = () => {
  return (
    <Fragment>
      <Navbar bg="white" expand="lg" className="pt-2 pb-3 mb-5">
        <Container>
          <Navbar.Brand>Applier</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/reportedFeedBack">Reported FeedBack</Nav.Link>
              <Nav.Link href="/opportunitiesPanel">
                Opportunities Panel
              </Nav.Link>
              <Nav.Link href="/adminPanel">Admin Panel</Nav.Link>
              <NavDropdown title="Users" id="basic-nav-dropdown">
                <NavDropdown.Item href="/companies">Companies</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/medicalStudent">
                  Medical Students
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/consumers">Consumers</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/adminSignIn">logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AdminNav;
