import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { useHistory } from "react-router-dom";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore";
import ApplierButton from "../../components/applierComponents/applierButton";

const SignUpCompany = () => {
  const store = CompanyStore();

  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await store.registerCompany();
    //Navigate
    history.push("/signIn");
  };
  return (
    <Fragment>
      <WelcomeNav />
      <div className="container SignUpFormat">
        <Row>
          <Col xl={8}>
            <h1>Welcome to Applier</h1>
            <p>Register your account</p>
          </Col>
          <Col>
            <span> Already have an account? </span>
            <a href="/signIn">Sign In</a>
          </Col>
        </Row>
        <hr />
        <Row>
          <form onSubmit={handleSignUp}>
            <Row>
              <Col md={6} sm={12}>
                <p className="labelTag">Organization name</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="organization_name"
                  onChange={store.handleChange}
                  value={store.values.organization_name}
                />
                <p className="labelTag">Organization registration number</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="register_number"
                  onChange={store.handleChange}
                  value={store.values.register_number}
                />
                <p className="labelTag">
                  Organization website <span>(if exists)</span>
                </p>
                <input
                  type="link"
                  className="inputStyling"
                  name="organization_website"
                  onChange={store.handleChange}
                  value={store.values.organization_website}
                />
                <p className="labelTag">About organization</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="organization_bio"
                  onChange={store.handleChange}
                  value={store.values.organization_bio}
                />
                <p className="labelTag">Password</p>
                <input
                  type="password"
                  className="inputStyling"
                  name="password"
                  onChange={store.handleChange}
                  value={store.values.password}
                />
              </Col>
              <Col md={6} sm={12}>
                <p className="labelTag">Supervisor full name</p>
                <input
                  type="name"
                  className="inputStyling"
                  name="supervisor_name"
                  onChange={store.handleChange}
                  value={store.values.supervisor_name}
                />
                <p className="labelTag">Supervisor email</p>
                <input
                  type="email"
                  className="inputStyling"
                  name="email"
                  onChange={store.handleChange}
                  value={store.values.email}
                />
                <p className="labelTag">Supervisor phone</p>
                <input
                  type="phone"
                  className="inputStyling"
                  name="supervisor_phone"
                  onChange={store.handleChange}
                  value={store.values.supervisor_phone}
                />
                <p className="labelTag">Country</p>
                <input
                  type="text"
                  name="country"
                  className="inputStyling"
                  onChange={store.handleChange}
                  value={store.values.country}
                />
                <p className="labelTag">City</p>
                <input
                  type="text"
                  name="city"
                  className="inputStyling"
                  onChange={store.handleChange}
                  value={store.values.city}
                />
              </Col>
            </Row>
            <ApplierButton buttonType="Sign Up" />
          </form>
        </Row>
      </div>
    </Fragment>
  );
};

export default SignUpCompany;
