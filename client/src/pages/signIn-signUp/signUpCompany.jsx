import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { useHistory } from "react-router-dom";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import CompanyStore from "../../stores/CompanyStore";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import { cities } from "../../APIs/cities.js";
import AppplierBackToSignIn from "../../components/applierComponents/applierToSignIn";

const SignUpCompany = () => {
  const store = CompanyStore();

  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      setTimeout(() => {
        history.push("/signIn");
      }, 2000);
      await store.registerCompany();
    } catch (err) {
      console.error(err.response.data);
      alert(`this account already registered`);
    }
  };
  return (
    <Fragment>
      <WelcomeNav />
      <div className="container SignUpFormat">
        <Row>
          <Col xl={8}>
            <h1>Create Your Orgnization Account</h1>
          </Col>
          <Col>
            <AppplierBackToSignIn />
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
                  errorMessage="organization"
                  required={true}
                />

                <ApplierInputForm
                  type="text"
                  label="Organization registration number"
                  name="register_number"
                  onChange={store.handleChange}
                  value={store.values.register_number}
                  errorMessage="register_number"
                  required={true}
                />

                <ApplierInputForm
                  type="link"
                  label="Organization website (if exists)"
                  placeholder="http://google.com"
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
                  placeholder="**********"
                  name="password"
                  onChange={store.handleChange}
                  value={store.values.password}
                  errorMessage="password"
                  required={true}
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                />
              </Col>
              <Col md={6} sm={12}>
                <ApplierInputForm
                  type="name"
                  label="Supervisor full name"
                  name="supervisor_name"
                  errorMessage="supervisor_name"
                  onChange={store.handleChange}
                  value={store.values.supervisor_name}
                  required={true}
                />

                <ApplierInputForm
                  type="email"
                  label="Supervisor email"
                  name="email"
                  placeholder="Fouad28@gmail.com"
                  errorMessage="email"
                  onChange={store.handleChange}
                  value={store.values.email}
                  required={true}
                />
                <ApplierInputForm
                  type="phone"
                  label="Supervisor phone"
                  name="phone"
                  onChange={store.handleChange}
                  value={store.values.phone}
                />

                <ApplierInputForm
                  type="text"
                  name="country"
                  label="Country"
                  onChange={store.handleChange}
                  value={store.values.country}
                  required={true}
                  errorMessage="country"
                />

                <label className="labelStyling font-bold">City</label>
                <select
                  className="inputStyling mb-3"
                  name="city"
                  placeholder="city"
                  value={store.values.city}
                  onChange={store.handleChange}
                  required={true}
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
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
