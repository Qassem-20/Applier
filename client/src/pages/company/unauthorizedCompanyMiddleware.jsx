import timeIcon from "../../assets/images/timeIcon.png";
import CompanyNav from "../../components/Nav/companyNav";
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const unauthorizedCompanyMiddleware = () => {
  return (
    <Fragment>
      <CompanyNav />
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow border border-dark">
        <img src={timeIcon} alt="timeIcon" className="m-auto mb-3" />
        <h2 className="text-center">
          Your account hasn’t been activated yet, please wait 24 hours, if it is
          still not active please contact us to review your account
        </h2>
        <div className="d-flex justify-content-center mt-3">
          <p className="msgUn">
            Check that you have entered your profile information correctly
          </p>
          <a className="btn btn-dark" href="/companyProfile">
            My Profile
          </a>
        </div>
      </Container>
    </Fragment>
  );
};

export default unauthorizedCompanyMiddleware;
