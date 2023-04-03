import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import PIcon from "../../assets/images/primaryCareIcon.png";
import DIcon from "../../assets/images/dentalIcon.png";
import Profile from "../../assets/images/profileIcon.png";
import CallIcon from "../../assets/images/callIcon.png";
import WhatsAppIcon from "../../assets/images/whatsAppIcon.png";
import MedicalStore from "../../stores/MedicalStore";
import { Link } from "react-router-dom";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

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

      <Container>
        <Row>
          <Col>
            <h1 id="opportunitiesHeader">Medical Students</h1>
          </Col>
          <Col>
            <Col>
              <ApplierInputForm
                row={"row"}
                label="Search"
                type="text"
                placeholder="Searching for ..."
                id="searchInput"
              />
            </Col>
          </Col>
        </Row>
      </Container>

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
                  <Link to={`/feedBackConsumerMedical/${medicalStudent._id}`}>
                    <Card className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <Row>
                            <Col>
                              <img src={Profile} alt="" />
                            </Col>
                            <Col className="mt-5">
                              <p>{medicalStudent.name}</p>
                            </Col>
                          </Row>
                        </div>
                        <div className="flip-card-back">
                          <Row className="pt-3">
                            <Col xl={10} md={8}>
                              <p>{medicalStudent.name}</p>
                              <p>{medicalStudent.specialty}</p>
                              <p>{medicalStudent.city}</p>
                            </Col>
                            <Col xl={2} md={4}>
                              <img
                                className="pt-2"
                                src={CallIcon}
                                alt="whatsApp"
                              />
                              <img
                                className="pt-4"
                                src={WhatsAppIcon}
                                alt="Call"
                              />
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Card>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MedicalStudents;
