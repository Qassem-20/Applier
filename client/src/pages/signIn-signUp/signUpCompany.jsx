import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { useLocation } from "react-router-dom";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore";

const SignUpCompany = () => {
  const store = CompanyStore();

  const navigate = useLocation();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await store.registerCompany();
    //Navigate
    navigate("/signIn");
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
            <a href="/signIn">SignIn</a>
          </Col>
        </Row>
        <hr />
        <Row>
          <form onSubmit={handleSignUp}>
            <Col md={6} sm={12}>
              <p className="labelTag">Organization logo</p>
              <input type="file" className="inputStyling" name="" value="" />
              <p className="labelTag">Organization name</p>
              <input
                type="text"
                className="inputStyling"
                name="organization_name"
                value={store.values.organization_name}
                onChange={store.handleChange}
              />
              <p className="labelTag">Organization registration number</p>
              <input
                type="text"
                className="inputStyling"
                name="register_number"
                value={store.values.register_number}
                onChange={store.handleChange}
              />
              <p className="labelTag">
                Organization website <span>(if exists)</span>
              </p>
              <input
                type="link"
                className="inputStyling"
                name="organization_website"
                value={store.values.organization_website}
                onChange={store.handleChange}
              />

              <p className="labelTag">About organization</p>
              <input
                type="text"
                className="inputStyling"
                name="organization_bio"
                value={store.values.organization_bio}
                onChange={store.handleChange}
              />
            </Col>
            <Col md={6} sm={12}>
              <p className="labelTag">Supervisor full name</p>
              <input
                type="name"
                className="inputStyling"
                name="supervisor_name"
                value={store.values.supervisor_name}
                onChange={store.handleChange}
              />
              <p className="labelTag">Supervisor email</p>
              <input
                type="email"
                className="inputStyling"
                name="email"
                value={store.values.email}
                onChange={store.handleChange}
              />
              <p className="labelTag">Supervisor phone</p>
              <input
                type="phone"
                className="inputStyling"
                name="supervisor_phone"
                value={store.values.supervisor_phone}
                onChange={store.handleChange}
              />
              <p className="labelTag">Password</p>
              <input
                type="password"
                className="inputStyling"
                name="password"
                value={store.values.password}
                onChange={store.handleChange}
              />
              <p className="labelTag">Country</p>
              <input
                type="text"
                name="country"
                value={store.values.country}
                onChange={store.handleChange}
              />
              <p className="labelTag">City</p>
              <input
                type="text"
                name="city"
                value={store.values.city}
                onChange={store.handleChange}
              />
            </Col>
            <button className="btn login" type="submit">
              submit
            </button>
          </form>
        </Row>
      </div>
    </Fragment>
  );
};

export default SignUpCompany;
