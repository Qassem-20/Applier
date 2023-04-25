import "../../assets/css/consumer.css";
import MedicalNav from "../../components/Nav/medicalStudentNav";
import MedicalStore from "../../stores/MedicalStore";
import { Link } from "react-router-dom";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import ApplierPopUp from "../../components/applierComponents/applierPopUp/applierPopup";
import React, { Fragment, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";

const MedicalStudents = () => {
  const store = MedicalStore();
  useEffect(() => {
    store.fetchMedicalStudents();
  }, [store]);

  return (
    <Fragment>
      <MedicalNav />
      <Container>
        <Row>
          <Col>
            <h1 id="opportunitiesHeader">Medical Students</h1>
          </Col>
          <Col>
            <Col>
              <ApplierInputForm
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
      <Container className="containerOfMeds">
        <Row>
          {store.medicalStudents &&
            store.medicalStudents.map((medicalStudent) => {
              return (
                <Col xl={4} md={6} sm={12} key={medicalStudent._id}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/feedBackConsumerMedical/${medicalStudent._id}`}
                  >
                    <ApplierPopUp medicalStudent={medicalStudent} />
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
