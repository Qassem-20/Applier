import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import ConsumerStore from "../../stores/ConsumerStore";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import { Container, Row, Col } from "react-bootstrap";

const ConsumerProfile = () => {
  const [consumer, setConsumer] = useState(null);
  const store = ConsumerStore((store) => {
    return { toggleUpdate: store.toggleUpdate };
  });
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
            <a href={consumer.linkedIn_profile}>{consumer.linkedIn_profile}</a>
            <p>Gpa: {consumer.gpa}</p>
          </Col>
          <div>
            <button className="button" onClick={() => store.toggleUpdate()}>
              Update Profile
            </button>
          </div>
        </Row>
      </div>
    </Fragment>
  );
};

export default ConsumerProfile;
