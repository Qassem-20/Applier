import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { useHistory } from "react-router-dom";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

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
                <ApplierInputForm
                  type="text"
                  label="Organization name"
                  name="organization_name"
                  onChange={store.handleChange}
                  value={store.values.organization_name}
                />

                <ApplierInputForm
                  type="text"
                  label="Organization registration number"
                  name="register_number"
                  onChange={store.handleChange}
                  value={store.values.register_number}
                />

                <ApplierInputForm
                  type="link"
                  label="Organization website <span>(if exists)</span>"
                  name="organization_website"
                  onChange={store.handleChange}
                  value={store.values.organization_website}
                />

                <ApplierInputForm
                  type="text"
                  label="About organization"
                  name="organization_bio"
                  onChange={store.handleChange}
                  value={store.values.organization_bio}
                />

                <ApplierInputForm
                  type="password"
                  label="Password"
                  name="password"
                  onChange={store.handleChange}
                  value={store.values.password}
                />
              </Col>
              <Col md={6} sm={12}>
                <ApplierInputForm
                  type="name"
                  label="Supervisor full name"
                  name="supervisor_name"
                  onChange={store.handleChange}
                  value={store.values.supervisor_name}
                />

                <ApplierInputForm
                  type="email"
                  label="Supervisor email"
                  name="email"
                  onChange={store.handleChange}
                  value={store.values.email}
                />
                <ApplierInputForm
                  type="phone"
                  label="Supervisor phone"
                  name="supervisor_phone"
                  onChange={store.handleChange}
                  value={store.values.supervisor_phone}
                />

                <ApplierInputForm
                  type="text"
                  name="country"
                  label="Country"
                  onChange={store.handleChange}
                  value={store.values.country}
                />

                <ApplierInputForm
                  type="text"
                  name="city"
                  label="City"
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
