import { Container, Nav, Navbar } from "react-bootstrap";
import React, { Fragment } from "react";
import Logo from "../../assets/images/newLogo.png";
import ConsumerStore from "../../stores/ConsumerStore";

const ConsumerNav = () => {
  const store = ConsumerStore();
  return (
    <Fragment>
      <Navbar bg="white" expand="lg" className="pt-2 pb-3 mb-5">
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              height="32"
              className="d-inline-block align-center"
              alt="Owl brand logo"
            />
            Applier
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/consumerProfile">Profile</Nav.Link>
              <Nav.Link href="/opportunities">Opportunities</Nav.Link>
              <Nav.Link href="/medicalStudents">Medical Students</Nav.Link>
              <Nav.Link href="/signIn" onClick={store.logout}>
                Sign Out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default ConsumerNav;
