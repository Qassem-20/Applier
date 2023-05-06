import { Container, Row, Col, Card } from "react-bootstrap";
import "../../assets/css/welcoming.css";
import Service1 from "../../assets/images/service1.jpg";
import Service2 from "../../assets/images/service3.jpg";
import Service3 from "../../assets/images/service2.jpg";
import Service4 from "../../assets/images/service4.jpg";
import React, { Component, Fragment } from "react";

export class services extends Component {
  render() {
    return (
      <Fragment>
        <Container className="container-services" id="Services">
          <h1 style={{lineHeight: 3, color: '#4c395d'}} className="centerAlignment">Our Services</h1>
          <Row>
            <Col xl={3} md={6} sm={12}>
              <Card>
                <Card.Img src={Service1}/>
              </Card>
              <h5 style={{
                fontFamily: "Roboto", 
                color: '#4c395d', 
                textAlign: "center", 
                fontWeight: '700'}}>
                Get the Right Trainee
                </h5>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <Card>
                <Card.Img src={Service3}/>
              </Card>
              <h5 style={{
                fontFamily: "Roboto", 
                color: '#4c395d', 
                textAlign: "center", 
                fontWeight: '700'}}>
                Promote Opportunities
                </h5>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <Card>
                <Card.Img src={Service2}/>
              </Card>
              <h5 style={{
                fontFamily: "Roboto", 
                color: '#4c395d', 
                textAlign: "center", 
                fontWeight: '700'}}>
                Get Interviews
                </h5>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <Card>
                <Card.Img src={Service4}/>
              </Card>
              <h5 style={{
                fontFamily: "Roboto", 
                color: '#4c395d', 
                textAlign: "center", 
                fontWeight: '700'}}>
                Share Your Skills
                </h5>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default services;
