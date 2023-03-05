import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ConsumerStore from "../../stores/ConsumerStore";
import CompanyStore from "../../stores/ConsumerStore";
import MedicalStore from "../../stores/ConsumerStore";

const initialState = {
  isCompany: true,
  isMedical: true,
};

const SignIn = () => {
  const storeConsumer = ConsumerStore();
  const storeMedical = MedicalStore();
  const storeCompany = CompanyStore();

  const navigate = useNavigate();

  const handleLoginConsumer = async (e) => {
    e.preventDefault();
    await storeConsumer.loginConsumer();
    //Navigate
    navigate("/consumerProfile");
  };
  const handleLoginCompany = async (e) => {
    e.preventDefault();
    await storeConsumer.loginConsumer();
    //Navigate
    navigate("/adminHomePage");
  };
  const handleLoginMedical = async (e) => {
    e.preventDefault();
    await storeConsumer.loginConsumer();
    //Navigate
    navigate("/companyHomePage");
  };

  const [values, setValues] = useState(initialState);

  const showCompany = () => {
    setValues({ ...values, isCompany: !values.isCompany });
  };
  const showMedical = () => {
    setValues({ ...values, isMedical: !values.isMedical });
  };
  return (
    <Fragment>
      <WelcomeNav />
      <Container>
        <Row>
          <Container className="bg-white p-4 rounded">
            <h1 className="alignmentCenter">Welcome to Applier</h1>
            <Row>
              <Col xl={8}></Col>
              <Col>
                <button className="medicalLog" onClick={showMedical}>
                  Medical Student
                </button>
              </Col>
              <Col>
                <button className="companyLog" onClick={showCompany}>
                  Company
                </button>
              </Col>
            </Row>
            <hr />
            <Row className="mt-4 mb-3">
              <Col xl={5} sm={12} className="mx-3">
                <h4>User</h4>
                <form onSubmit={handleLoginConsumer}>
                  <p className="labelTag">Email</p>
                  <input
                    className="inputStyling"
                    type=""
                    placeholder="Fouad28@gmail.com"
                    name="emailConsumer"
                    value={storeConsumer.loginForm.emailConsumer}
                    onChange={storeConsumer.handleChangeLogin}
                  />
                  <div>
                    <p className="labelTag">Password</p>
                    <input
                      className="inputStyling"
                      type="password"
                      placeholder="**********"
                      name="passwordConsumer"
                      value={storeConsumer.loginForm.passwordConsumer}
                      onChange={storeConsumer.handleChangeLogin}
                    />
                  </div>
                  <Row>
                    <Col>
                      <button className="btn login" type="submit">
                        logIn
                      </button>
                    </Col>

                    <Col>
                      <a href="/ForgottenPassword">Forget Password?</a>
                    </Col>
                  </Row>
                  <div className="alignmentCenter mt-2">
                    <a href="/signUpConsumer">
                      Don’t have an Account? Register
                    </a>
                  </div>
                </form>
              </Col>

              <Col xl={1}>
                <div id="verticalLine"></div>
              </Col>
              {!values.isMedical && (
                <Col xl={5} sm={12} className="mx-3">
                  <h4>Medical Student</h4>
                  <form onSubmit={handleLoginMedical}>
                    <p className="labelTag">Email</p>
                    <input
                      className="inputStyling"
                      type=""
                      placeholder="dr.Faisal@gmail.com"
                      name="emailMedical"
                      value={storeMedical.loginForm.emailMedical}
                      onChange={storeMedical.handleChangeLogin}
                    />
                    <div>
                      <p className="labelTag">Password</p>
                      <input
                        className="inputStyling"
                        type="password"
                        placeholder="********"
                        name="password"
                        value={storeMedical.loginForm.password}
                        onChange={storeMedical.handleChangeLogin}
                      />
                    </div>
                    <Row>
                      <Col>
                        <button className="btn login" type="submit">
                          LogIn
                        </button>
                      </Col>
                      <Col>
                        <a href="/ForgottenPassword">Forget Password?</a>
                      </Col>
                    </Row>
                    <div className="alignmentCenter mt-2">
                      <a href="/signUpMedicalStudent">
                        Don’t have an Account? Register
                      </a>
                    </div>
                  </form>
                </Col>
              )}
              {!values.isCompany && (
                <Col xl={5} sm={12} className="mx-3">
                  <h4>Company</h4>
                  <form onSubmit={handleLoginCompany}>
                    <p className="labelTag">Email</p>
                    <input
                      className="inputStyling"
                      type=""
                      placeholder="Applier@Applier.com"
                      name="emailCompany"
                      value={storeCompany.loginForm.emailCompany}
                      onChange={storeCompany.handleChangeLogin}
                    />
                    <div>
                      <p className="labelTag">Password</p>
                      <input
                        className="inputStyling"
                        type="password"
                        placeholder="********"
                        name="passwordCompany"
                        value={storeCompany.loginForm.passwordCompany}
                        onChange={storeCompany.handleChangeLogin}
                      />
                    </div>
                    <Row>
                      <Col>
                        <button className="btn login" type="submit">
                          LogIn
                        </button>
                      </Col>
                      <Col>
                        <a href="/ForgottenPassword">Forget Password?</a>
                      </Col>
                    </Row>
                    <div className="alignmentCenter mt-2">
                      <a href="/signUpConsumer">
                        Don’t have an Account? Register
                      </a>
                    </div>
                  </form>
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
