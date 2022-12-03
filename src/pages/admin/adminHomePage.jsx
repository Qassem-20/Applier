import '../../assets/css/admin.css';
import Nav from './adminNav.jsx';
import React, { Fragment, Col, Row,Component, Container } from 'react'

export class adminHomePage extends Component {
  render() {
    return (
      <Fragment>
        <Nav/>
        <Container>
          <Row>
            <Col xl={3} md={6} sm={12}>
            <p>Total Companies:</p>
            <p>234234</p>
            </Col>
            <Col xl={3} md={6} sm={12}>
            <p>Total Medical Students:</p>
            <p>234234</p>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <p>Total Opportunities:</p>
              <p>234342</p>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <p>Total active Trainee:</p>
              <p>14343</p>
            </Col>
          </Row>
          <Row>
            <p>Opportunity Statics</p>
            <p>8457</p>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default adminHomePage
