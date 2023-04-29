import timeIcon from "../../assets/images/timeIcon.png";
import MedicalNav from "../../components/Nav/medicalStudentNav";
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const unauthorizedCMedicalMiddleware = () => {
  return (
    <Fragment>
      <MedicalNav />
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow border border-dark">
        <img src={timeIcon} alt="timeIcon" className="m-auto mb-3" />
        <h2 className="text-center">
          Your account hasn’t been activated yet, please wait 24 hours, if it is
          still not active please contact us to review your account
        </h2>
      </Container>
    </Fragment>
  );
};

export default unauthorizedCMedicalMiddleware;
