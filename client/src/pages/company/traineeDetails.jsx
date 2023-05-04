import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../assets/css/company.css";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "../../components/Nav/companyNav";

const TraineeDetails = () => {
  const { consumerId } = useParams();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    axios
      .get(`/api/v1/consumers/${consumerId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data.consumer);
      });
  }, []);
  return (
    <Fragment>
      <Nav />
      <Container className="backgroundProfile">
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Phone: {userProfile.phone}</p>
        <hr />
        <h4>Application (CV)</h4>
        <Row>
          <Col>
            <p>University: {userProfile.university}</p>
            <p>Skills: {userProfile.skills}</p>
            <p>Degree: {userProfile.degree}</p>
            <p>Major: {userProfile.major}</p>
          </Col>
          <Col>
            <p>Department: {userProfile.concentrated_major}</p>
            <p>LinkedIn_profile: </p>

            <p>
              <a href={userProfile.linkedIn_profile}>
                {userProfile.linkedIn_profile}
              </a>
            </p>
            <p>Gpa: {userProfile.gpa}</p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TraineeDetails;
