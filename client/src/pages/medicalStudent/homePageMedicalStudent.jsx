import "../../assets/css/medicalStudent.css";
import MedicalStore from "../../stores/MedicalStore";
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const HomePageMedicalStudent = () => {
  const store = MedicalStore();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await store.updateMedical();
    window.location.reload();
  };

  useEffect(() => {
    store.fetchMedicalProfile();
  }, []);
  if (!store.medical) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <Container>
        <h1 className="opportunitiesHeader">My Profile</h1>
        <Row>
          <Col>
            <p>Nationality: {store.medical.nationality}</p>
            <p>Major: {store.medical.major}</p>
            <p>City: {store.medical.city}</p>
          </Col>

          <Col>
            <p>Profile Visibility: {store.medical.profile_visibility}</p>
          </Col>
        </Row>
      </Container>
      <Container></Container>
    </Fragment>
  );
};

export default HomePageMedicalStudent;
