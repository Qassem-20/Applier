import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import PIcon from "../../assets/images/primaryCareIcon.png";
import DIcon from "../../assets/images/dentalIcon.png";
import Profile from "../../assets/images/profileIcon.png";
import CallIcon from "../../assets/images/callIcon.png";
import WhatsAppIcon from "../../assets/images/whatsAppIcon.png";
import MedicalStore from "../../stores/MedicalStore";

import React, { Fragment, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

const MedicalStudents = () => {
  const store = MedicalStore();
  useEffect(() => {
    store.fetchMedicalStudents();
  }, []);
  return (
    <Fragment>
      <ConsumerNav />
      <section>
        <Container>
          <h1>Medical Students</h1>
          <Row>
            <Col xl={3} md={6} sm={12}>
              <input
                className="inputStyling"
                type="search"
                name=""
                placeholder="Location"
              />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <input
                className="inputStyling"
                type="search"
                name=""
                placeholder="specialty"
              />
            </Col>
            <Col xl={3} md={6} sm={12}>
              <select className="inputStyling" name="cars" placeholder="Gender">
                <option value="saab">Null</option>
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
              </select>
            </Col>
            <Col xl={3} md={6} sm={12}>
              <input
                className="inputStyling"
                type="search"
                name=""
                placeholder="Name"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <hr />
      <Container className="mt-5 hiddenTransition">
        <Row className="justify-content-evenly">
          <Col sm={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={PIcon} alt="Avatar" />
                  <h3>Primary Care</h3>
                </div>
                <div className="flip-card-back">
                  <h1>Primary Care</h1>
                  <p>eofenpofenr</p>
                  <p>fpriuferpifuberpb</p>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={DIcon} alt="Avatar" />
                  <h3>Dental</h3>
                </div>
                <div className="flip-card-back">
                  <h1>Dental</h1>
                  <p>voiernvoernv</p>
                  <p>nceirverui</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="fluid">
        <Row>
          {store.medicalStudents &&
            store.medicalStudents.map((medicalStudent) => {
              return (
                <Col xl={4} md={6} sm={12} key={medicalStudent._id}>
                  <Card>
                    <Row>
                      <Col sm={3}>
                        <img src={Profile} alt="" />
                        <p>rate</p>
                      </Col>
                      <Col sm={7}>
                        <p>{medicalStudent.name}</p>
                        <p>{medicalStudent.specialty}</p>
                        <p>{medicalStudent.city}</p>
                      </Col>
                      <Col sm={2}>
                        <div>
                          <img src={CallIcon} alt="whatsApp" />
                        </div>
                        <div>
                          <img src={WhatsAppIcon} alt="Call" />
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MedicalStudents;
