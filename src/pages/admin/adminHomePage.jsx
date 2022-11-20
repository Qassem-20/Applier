import React, { Fragment } from 'react';
import '../../assets/css/admin.css';
import Nav from './adminNav.jsx';
import React, { Component } from 'react'

export class adminHomePage extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <Container>
          <Row>
            <Col xl={3} md={6} sm={12}>
            <p>Total Companies:</p>
            </Col>
            <Col xl={3} md={6} sm={12}>
            <p>Total Medical Students:</p>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <p>Total Opportunities:</p>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <p>Total active Trainee:</p>
            </Col>
          </Row>
          <Row>
            <p>Opportunity Statics</p>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default adminHomePage
