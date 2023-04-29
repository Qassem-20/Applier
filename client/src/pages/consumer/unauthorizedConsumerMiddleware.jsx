import unauthorized from "../../assets/images/unauthorizedAdmin.png";
import CompanyNav from "../../components/Nav/companyNav";
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const unauthorizedConsumerMiddleware = () => {
  return (
    <Fragment>
      <CompanyNav />
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
        <img src={unauthorized} alt="unauthorized" className="m-auto mb-3" />
        <h2 className="text-center">
          Your account has been suspended for unusual activity, please wait 24
          hours, if it is still suspended please contact us to review your
          account
        </h2>
      </Container>
    </Fragment>
  );
};

export default unauthorizedConsumerMiddleware;
