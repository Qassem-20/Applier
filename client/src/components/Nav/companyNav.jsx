import { Container, Nav, Navbar } from "react-bootstrap";
import React, { Fragment } from "react";
import Logo from "../../assets/images/newLogo.png";
import CompanyStore from "../../stores/CompanyStore";

const CompanyNav = () => {
  const store = CompanyStore();
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
            <Nav className="me-auto">
              <Nav.Link href="/companyHomePage">Home</Nav.Link>
              <Nav.Link href="/CompanyProfile">Company Profile</Nav.Link>
              <Nav.Link href="/feedBackCompany">Feedback</Nav.Link>
              <Nav.Link href="/addOpportunity">Add Opportunity</Nav.Link>
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
export default CompanyNav;
