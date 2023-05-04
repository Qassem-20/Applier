import "../../assets/css/admin.css";
import unauthorized from "../../assets/images/unauthorizedAdmin.png";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const UnauthorizedAdminMiddleware = () => {
  const history = useHistory();

  function goBack() {
    history.goBack();
  }
  return (
    <Fragment>
      <AdminNav />
      <Container className="m-auto bg-white mt-5 signInWidth pt-3 pb-4 rounded shadow border border-dark">
        <img
          src={unauthorized}
          alt="unauthorized Admin"
          className="m-auto img-fluid mb-3"
        />
        <h2 className="text-center">
          Sorry you aren't authorized to access this page
        </h2>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-dark" onClick={goBack}>
            Go back
          </button>
        </div>
      </Container>
    </Fragment>
  );
};

export default UnauthorizedAdminMiddleware;
