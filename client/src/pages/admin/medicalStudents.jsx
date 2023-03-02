import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MedicalStore from "../../stores/MedicalStore.js";
const MedicalStudents = () => {
  const store = MedicalStore();

  useEffect(() => {
    store.fetchMedicalStudents();
  }, []);
  return (
    <Fragment>
      <AdminNav />
      <Container className="mt-3 mb-2">
        <h1>Medical Students</h1>
        <Row className="m-auto pt-3 pb-1">
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="search"
              name=""
              value=""
              placeholder="Phone Number "
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="search"
              name=""
              value=""
              placeholder="Trainee Name"
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <input
              className="inputStyling"
              type="date"
              name=""
              value=""
              placeholder="Joined Date"
            />
          </Col>
          <Col xl={3} md={6} sm={12}>
            <select className="inputStyling" name="cars" placeholder="Status">
              <option value="saab">Null</option>
              <option value="volvo">Active</option>
              <option value="saab">Inactive</option>
            </select>
          </Col>
        </Row>
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
            <Container fluid>
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
                  <p className="opportunitiesTags">{medicalStudent.phone}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">{medicalStudent.city}</p>
                </Col>
                <Col xl={2}>
                  <p className="opportunitiesTags">Identification Letter</p>
                </Col>
                <Col xl={1}>
                  <form onSubmit={store.updateMedicalStudents}>
                    <select name="statue" defaultValue={medicalStudent.statue}>
                      <option value="inactive">inactive</option>
                      <option value="active">active</option>
                    </select>
                  </form>
                </Col>
              </Row>
            </Container>
          );
        })}
    </Fragment>
  );
};

export default MedicalStudents;
