import '../assets/css/nav.css';
import {Navbar, Container, Row, Col} from 'react-bootstrap';
import Logo from '../assets/images/logo.png';
import {Link } from "react-router-dom";
import React, {Component, Fragment } from 'react'

export class navDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className='navStyle'>
          <Navbar fixed='top' bg="light" className='navbar'>
            <Container fluid={true} className='p-2 mb-0'>
              <Row>
              <Col lg={3} md={4} sm={12} xs={12}>
                <Link to="/"><img src={Logo} alt="logo" className='company_logo nav-logo' /></Link>
              </Col>

              <Col lg={3} md={4} sm={12} xs={12}>
                <Link className='btn' to='/signIn'><i><span>signIn/SignUp</span></i></Link>
              </Col>
              
              <Col lg={3} md={4} sm={12} xs={12}>
              </Col>
              
              <Col lg={3} md={4} sm={12} xs={12}>
              </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
      </Fragment>
    )
  }
}

export default navDesktop