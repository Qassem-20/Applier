import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import MedicalStore from "../../stores/MedicalStore.js";
const MedicalStudents = () => {
  const store = MedicalStore();
  const [userData, setUserData] = useState({ statue: "" });

  function handleUserDataChange(event) {
    setUserData({
      ...userData,
      statue: event.target.value,
    });
  }
  async function updateStatue(_id) {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/admins/activateMedicalStudent/${_id}`,
        userData,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    store.fetchMedicalStudents();
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
                  <form onSubmit={store.updateMedicalStudents}>
                    <select
                      name="statue"
                      defaultValue={medicalStudent.statue}
                      onChange={handleUserDataChange}
                      onClick={() => updateStatue(medicalStudent._id)}
                    >
                      <option value="false">inactive</option>
                      <option value="true">active</option>
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
