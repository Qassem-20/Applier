import WelcomeNav from "../../components/Nav/welcomeNav";
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SignInMedical from "./signInMedical";
import SignInCompany from "./signInCompany";
import ApplierButton from "../../components/applierComponents/applierButton";
import SignInUser from "./signInUser";

const initialState = {
  isCompany: true,
  isMedical: true,
  isUser: false,
};

const SignIn = () => {
  const [values, setValues] = useState(initialState);

  const showUser = () => {
    setValues({
      ...values,
      isUser: !values.isUser,
      isMedical: true,
      isCompany: true,
    });
  };

  const showCompany = () => {
    setValues({
      ...values,
      isCompany: !values.isCompany,
      isMedical: true,
      isUser: true,
    });
  };
  const showMedical = () => {
    setValues({
      ...values,
      isMedical: !values.isMedical,
      isCompany: true,
      isUser: true,
    });
  };

  return (
    <Fragment>
      <WelcomeNav />
      <Container>
        <Row>
          <Container className="bg-white p-4 rounded">
            <h1 className="alignmentCenter">Welcome to Applier</h1>
            <Row className=" alignmentCenter">
              <Col>
                <ApplierButton
                  buttonType="User"
                  className="companyLog"
                  onClick={showUser}
                />
              </Col>
              <Col>
                <ApplierButton
                  buttonType="Medical Student"
                  className="medicalLog"
                  onClick={showMedical}
                />
              </Col>
              <Col>
                <ApplierButton
                  buttonType="Company"
                  className="companyLog"
                  onClick={showCompany}
                />
              </Col>
            </Row>
            <hr />
            <Row className="mt-4 mb-3">
              <div className="d-flex justify-content-center">
                {!values.isUser && <SignInUser />}
                {!values.isMedical && <SignInMedical />}
                {!values.isCompany && <SignInCompany />}
              </div>
            </Row>
          </Container>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SignIn;
