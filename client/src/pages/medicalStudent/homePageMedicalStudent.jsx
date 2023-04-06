import "../../assets/css/medicalStudent.css";
import MedicalStore from "../../stores/MedicalStore";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

const HomePageMedicalStudent = () => {
  const [medical, setMedical] = useState(null);

  useEffect(() => {
    const fetchMedicalProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/medicalStudentProfile",
          {
            withCredentials: true,
          }
        );
        setMedical(response.data.medicalStudent);
      } catch (error) {
        console.error(error);
        // TODO: Handle errors
      }
    };
    fetchMedicalProfile();
  }, []);
  if (!medical) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Container>
        <h1 className="opportunitiesHeader">My Profile</h1>

        <Row>
          <Col>
            <p>Nationality:</p>
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

export default HomePageMedicalStudent;
