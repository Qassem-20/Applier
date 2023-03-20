import WelcomeNav from "../../components/Nav/welcomeNav";
import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ConsumerStore from "../../stores/ConsumerStore";
import SignInMedical from "./signInMedical";
import SignInCompany from "./signInCompany";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const initialState = {
  isCompany: true,
  isMedical: true,
};

const SignIn = () => {
  const storeConsumer = ConsumerStore();

  const history = useHistory();

  const handleLoginConsumer = async (e) => {
    e.preventDefault();
    await storeConsumer.loginConsumer();
    //Navigate
    history.push("/consumerProfile");
  };

  const [values, setValues] = useState(initialState);

  const showCompany = () => {
    setValues({
      ...values,
      isCompany: !values.isCompany,
    });
  };
  const showMedical = () => {
    setValues({
      ...values,
      isMedical: !values.isMedical,
    });
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
                <ApplierButton
                  className="medicalLog"
                  buttonType="Medical Student"
                  onClick={showMedical}
                />
              </Col>
              <Col>
                <button></button>
                <ApplierButton
                  buttonType="Company"
                  className="companyLog"
                  onClick={showCompany}
                />
              </Col>
            </Row>
            <hr />
            <Row className="mt-4 mb-3">
              <Col xl={5} sm={12} className="mx-3">
                <h4>User</h4>
                <form onSubmit={handleLoginConsumer}>
                  <ApplierInputForm
                    label="Email"
                    type="email"
                    placeholder="Fouad28@gmail.com"
                    name="email"
                    value={storeConsumer.loginFormConsumer.email}
                    onChange={storeConsumer.handleChangeLogin}
                  />

                  <ApplierInputForm
                    label="Password"
                    type="password"
                    placeholder="**********"
                    name="password"
                    value={storeConsumer.loginFormConsumer.password}
                    onChange={storeConsumer.handleChangeLogin}
                  />

                  <Row>
                    <Col>
                      <ApplierButton buttonType="Log In" />
                    </Col>

                    <Col>
                      <a href="/ForgottenPassword">Forget Password?</a>

                      <div className="alignmentCenter mt-2">
                        <a href="/signUpConsumer">
                          Don’t have an Account? Register
                        </a>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Col>

              <Col xl={1}>
                <div id="verticalLine"></div>
              </Col>
              {!values.isMedical && <SignInMedical />}
              {!values.isCompany && <SignInCompany />}
            </Row>
          </Container>
        </Row>
      </Container>
    </Fragment>
  );
};
export default SignIn;
