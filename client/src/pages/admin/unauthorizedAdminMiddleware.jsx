import "../../assets/css/admin.css";
import unauthorized from "../../assets/images/unauthorizedAdmin.png";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

const unauthorizedMiddleWare = () => {
  return (
    <Fragment>
      <AdminNav />
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow">
        <img
          src={unauthorized}
          alt="unauthorized Admin"
          className="m-auto mb-3"
        />
        <h2 className="text-center">
          Sorry you aren't authorized to access this page
        </h2>
        <a href="/adminHomePage" className="btn">
          Back to Home Page
        </a>
      </Container>
    </Fragment>
  );
};

export default unauthorizedMiddleWare;