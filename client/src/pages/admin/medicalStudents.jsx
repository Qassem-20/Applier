import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MedicalStore from "../../stores/MedicalStore.js";
const MedicalStudents = () => {
  const store = MedicalStore();

  async function updateStatue(_id, newStatue) {
    try {
      const response = await axios.put(
        `api/v1/admins/activateMedicalStudent/${_id}`,
        { statue: newStatue },
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    store.fetchMedicalStudentsAdmin();
  }, [store]);
  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Medical Students</h1>
      </Container>
      <Container fluid>
        <Row className="opportunitiesTag">
          <Col xl={2}>
            <p className="opportunitiesMainTags">Name</p>
          </Col>
          <Col xl={3}>
            <p className="opportunitiesMainTags">Specialty</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Phone Number</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Location</p>
          </Col>
          <Col xl={2}>
            <p className="opportunitiesMainTags">Identification Letter</p>
          </Col>
          <Col xl={1}>
            <p className="opportunitiesMainTags">Status</p>
          </Col>
        </Row>
      </Container>
      {store.medicalStudents &&
        store.medicalStudents.map((medicalStudent) => {
          return (
            <Container fluid key={medicalStudent._id}>
              <Row className="opportunitiesT">
                <Col xl={2}>
                  <p className="opportunitiesTags">{medicalStudent.name}</p>
                </Col>
                <Col xl={3}>
                  <p className="opportunitiesTags">
                    {medicalStudent.specialty}
                  </p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">
                    {medicalStudent.phone_number}
                  </p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{medicalStudent.city}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">Identification Letter</p>
                </Col>
                <Col xl={1}>
                  <button
                    className={`btn ${
                      medicalStudent.statue === "true"
                        ? "btn-success"
                        : "btn-danger"
                    }`}
                    onClick={() => {
                      const newStatue =
                        medicalStudent.statue === "true" ? "false" : "true";
                      updateStatue(medicalStudent._id, newStatue);
                    }}
                  >
                    {medicalStudent.statue === "true" ? "Active" : "Inactive"}
                  </button>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default MedicalStudents;
