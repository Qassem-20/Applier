import {Container, Nav, Navbar, Form, FormControl, Button} from 'react-bootstrap';
import React, { Component, Fragment } from 'react';

export class companyNav extends Component {
  render() {
    return (
    <Fragment>
        <Navbar bg="white" expand="lg" className='pt-2 pb-3 mb-5'>
          <Container>
            <Navbar.Brand href="/">Applier</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/companyHomePage">Home</Nav.Link>
                <Nav.Link href="/CompanyProfile">Company Profile</Nav.Link>
                <Nav.Link href="/feedBackCompany">Feedback</Nav.Link>
                <Nav.Link href="/addOpportunity">Add Opportunity</Nav.Link>
                <Nav.Link href="/">Medical Students</Nav.Link>
                <Form inline>
                  <FormControl
                    // onChange={this.handleSearchInput}
                    // value={this.state.searchText}
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button  variant="outline-info">
                    Search
                  </Button>
               </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Fragment>
    )
  }
}

export default companyNav