import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import ConsumerStore from "../../stores/ConsumerStore";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ApplierButton from "../../components/applierComponents/applierButton";

import { Container, Row, Col } from "react-bootstrap";

const ConsumerProfile = () => {
  const store = ConsumerStore((store) => {
    return { toggleUpdate: store.toggleUpdate };
  });
  const [consumer, setConsumer] = useState(null);

  useEffect(() => {
    const fetchConsumerProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/consumerProfile",
          {
            withCredentials: true,
          }
        );
        setConsumer(response.data.consumer);
      } catch (error) {
        console.error(error);
        // TODO: Handle errors
      }
    };
    fetchConsumerProfile();
  }, []);
  if (!consumer) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <ConsumerNav />
      <h1 className="opportunitiesHeader">My Profile</h1>

      <div className="container backgroundProfile">
        <p>Name: {consumer.name}</p>
        <p>Email: {consumer.email}</p>
        <p>Phone: {consumer.phone}</p>
        <hr />
        <h4>Application (CV)</h4>
        <Row>
          <Col>
            <p>University: {consumer.university}</p>
            <p>Degree: {consumer.degree}</p>
            <p>Major: {consumer.major}</p>
          </Col>
          <Col>
            <p>Concentrated_major: {consumer.concentrated_major}</p>
            <p>LinkedIn_profile: </p>

            <p>
              <a href={consumer.linkedIn_profile}>
                {consumer.linkedIn_profile}
              </a>
            </p>
            <p>Gpa: {consumer.gpa}</p>
          </Col>
          <div>
            <ApplierButton
              buttonType="Update Profile"
              className="button"
              onClick={() => store.toggleUpdate()}
            />
          </div>
        </Row>
      </div>
    </Fragment>
  );
};

export default ConsumerProfile;
