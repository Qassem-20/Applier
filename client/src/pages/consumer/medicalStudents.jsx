import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import MedicalStore from "../../stores/MedicalStore";
import { Link } from "react-router-dom";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import ApplierPopUp from "../../components/applierComponents/applierPopUp/applierPopup";
import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const MedicalStudents = () => {
  const store = MedicalStore();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    store.fetchMedicalStudents();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMedicalStudents = store.medicalStudents
    ? store.medicalStudents.filter((medicalStudent) =>
        medicalStudent.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

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
                label="Search"
                type="text"
                placeholder="Searching for ..."
                id="searchInput"
                value={searchTerm}
                onChange={handleSearch}
              />
            </Col>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container className="containerOfMeds">
        <Row>
          {filteredMedicalStudents.map((medicalStudent) => {
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
