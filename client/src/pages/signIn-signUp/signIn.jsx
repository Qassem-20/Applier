import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const initialState = {
  isCompany: true,
  isMedical: true,
  isRoute: false,
};

const SignIn = () => {
  const [values, setValues] = useState(initialState);

  const showCompany = () => {
    setValues({ ...values, isCompany: !values.isCompany });
  };
  const showMedical = () => {
    setValues({ ...values, isMedical: !values.isMedical });
  };
  const hideRoute = () => {
    setValues({ ...values, isRoute: !values.isRoute });
  };
  return (
    <Fragment>
      <WelcomeNav />
      <Container>
        <Row>
          <Container className="bg-white p-4 rounded" m-auto>
            <h1 className="alignmentCenter">Welcome to Applier</h1>
            <hr />
            <Row className="mt-4 mb-3">
              <Col xl={5} sm={12} className="mx-3" m-auto>
                <p className="labelTag">Email</p>
                <input className="inputStyling" type="" name="" value="" />
                <div>
                  <p className="labelTag">Password</p>
                  <input className="inputStyling" type="" name="" value="" />
                </div>
                <Row>
                  <Col mr-5>
                    <a className="btn login" href="/consumerProfile">
                      LogIn
                    </a>
                  </Col>
                  <Col>
                    <a href="/ForgottenPassword">Forget Password?</a>
                  </Col>
                </Row>
                <div className="alignmentCenter mt-2">
                  <a href="/routeSignUp">Don’t have an Account? Register</a>
                </div>
              </Col>

              <Col xl={1}>
                <div id="verticalLine"></div>
              </Col>
              {!values.isRoute && (
                <Col xl={5} sm={12} className="routeBox">
                  <div className="mt-5 centerB" m-auto>
                    <button className="medicalLog" onClick={showMedical}>
                      Medical Student
                    </button>
                  </div>
                  <div className="mt-5 centerB" m-auto>
                    <button className="companyLog" onClick={showCompany}>
                      Company
                    </button>
                  </div>
                </Col>
              )}
              {!values.isMedical && (
                <Col xl={5} sm={12} className="mx-3" m-auto>
                  <p className="labelTag">Email</p>
                  <input className="inputStyling" type="" name="" value="" />
                  <div>
                    <p className="labelTag">Password</p>
                    <input className="inputStyling" type="" name="" value="" />
                  </div>
                  <Row>
                    <Col mr-5>
                      <a className="btn login" href="/medicalStudents">
                        LogIn
                      </a>
                    </Col>
                    <Col>
                      <a href="/ForgottenPassword">Forget Password?</a>
                    </Col>
                  </Row>
                  <div className="alignmentCenter mt-2">
                    <a href="/SignUp">Don’t have an Account? Register</a>
                  </div>
                </Col>
              )}
              {!values.isCompany && (
                <Col xl={5} sm={12} className="mx-3" m-auto>
                  <p className="labelTag">Email</p>
                  <input className="inputStyling" type="" name="" value="" />
                  <div>
                    <p className="labelTag">Password</p>
                    <input className="inputStyling" type="" name="" value="" />
                  </div>
                  <Row>
                    <Col mr-5>
                      <a className="btn login" href="/companyHomePage">
                        LogIn
                      </a>
                    </Col>
                    <Col>
                      <a href="/ForgottenPassword">Forget Password?</a>
                    </Col>
                  </Row>
                  <div className="alignmentCenter mt-2">
                    <a href="/SignUp">Don’t have an Account? Register</a>
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SignIn;
