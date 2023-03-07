import "../../assets/css/medicalStudent.css";
import React, { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const homePageMedicalStudent = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <img src="" alt="Profile Image" />
          </Col>

          <Col>
            <p>University Name</p>
            <p>Major</p>
            <p>City</p>
          </Col>

          <Col>
            <button type="" alt="hide/unhide Profile" className="btn"></button>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>Patients viewed my profile</h1>
        <Row>
          <Col xl={4} md={6} sm={12} xs={12}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <button variant="primary">Go somewhere</button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default homePageMedicalStudent;
