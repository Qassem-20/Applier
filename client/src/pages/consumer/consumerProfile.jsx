import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import ConsumerStore from "../../stores/ConsumerStore";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ApplierButton from "../../components/applierComponents/applierButton";

import { Container, Row, Col } from "react-bootstrap";

const ConsumerProfile = () => {
  const store = ConsumerStore();

  useEffect(() => {
    store.fetchConsumerProfile();
  }, []);
  if (!store.consumer) {
    return <div>Loading...</div>;
  }
  return (
    <Fragment>
      <ConsumerNav />
      <Container>
        <h1 className="opportunitiesHeader">My Profile</h1>

        <div className="container backgroundProfile">
          <p>Name: {store.consumer.name}</p>
          <p>Email: {store.consumer.email}</p>
          <p>Phone: {store.consumer.phone}</p>
          <hr />
          <h4>Application (CV)</h4>
          <Row>
            <Col>
              <p>University: {store.consumer.university}</p>
              <p>Degree: {store.consumer.degree}</p>
              <p>Major: {store.consumer.major}</p>
            </Col>
            <Col>
              <p>Concentrated_major: {store.consumer.concentrated_major}</p>
              <p>LinkedIn_profile: </p>

              <p>
                <a href={store.linkedIn_profile}>
                  {store.consumer.linkedIn_profile}
                </a>
              </p>
              <p>Gpa: {store.consumer.gpa}</p>
            </Col>
            <div>
              <ApplierButton buttonType="Update Profile" className="button" />
            </div>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default ConsumerProfile;
