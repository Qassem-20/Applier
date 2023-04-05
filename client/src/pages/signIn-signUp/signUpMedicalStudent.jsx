import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Col, Row, Container } from "react-bootstrap";
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import MedicalStore from "../../stores/MedicalStore";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

const SignUpMedicalStudent = () => {
  const store = MedicalStore();

  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    await store.registerMedical();
    //Navigate
    history.push("/signIn");
  };
  return (
    <Fragment>
      <WelcomeNav />
      <div className="SignUpFormat container">
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
        <Container>
          <form onSubmit={handleSignUp}>
            <Row>
              <Col md={6} sm={12}>
                <ApplierInputForm
                  label="Full name"
                  type="name"
                  name="name"
                  value={store.values.name}
                  onChange={store.handleChange}
                  errorMessage="full_name"
                  required="true"
                />

                <ApplierInputForm
                  label="Phone Number"
                  type="phone"
                  name="phone_number"
                  value={store.values.phone_number}
                  onChange={store.handleChange}
                  errorMessage="phone"
                  required="true"
                />

                <ApplierInputForm
                  label="Email"
                  type="email"
                  name="email"
                  value={store.values.email}
                  onChange={store.handleChange}
                  placeholder="Fouad28@gmail.com"
                  required="true"
                  errorMessage="email"
                />

                <ApplierInputForm
                  label="Password"
                  type="password"
                  placeholder="**********"
                  name="password"
                  errorMessage="password"
                  value={store.values.password}
                  onChange={store.handleChange}
                  required="true"
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                />

                <label className="labelStyling">Nationality</label>
                <select
                  className="inputStyling mb-3"
                  name="nationality"
                  placeholder="nationality"
                  value={store.values.nationality}
                  onChange={store.handleChange}
                >
                  <option>Please select</option>
                  <option value="Saudi">Saudi</option>
                  <option value="foreign">Foreign</option>
                </select>
              </Col>
              <Col md={6} sm={12}>
                <label className="labelStyling">Gender</label>
                <select
                  name="gender"
                  className="inputStyling mb-3"
                  placeholder="gender"
                  value={store.values.gender}
                  onChange={store.handleChange}
                >
                  <option>Please select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <ApplierInputForm
                  label="City"
                  type="text"
                  name="city"
                  value={store.values.city}
                  onChange={store.handleChange}
                  required="true"
                  errorMessage="city"
                />
                <label className="labelStyling">Major</label>
                <select
                  className="inputStyling mb-3"
                  name="main_major"
                  placeholder="main_major"
                  value={store.values.main_major}
                  onChange={store.handleChange}
                  required="true"
                >
                  <option>Please select</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Dentist">Dentist</option>
                </select>

                <ApplierInputForm
                  label="Specialty"
                  type="text"
                  name="specialty"
                  value={store.values.specialty}
                  onChange={store.handleChange}
                  required="true"
                  errorMessage="specialty"
                />
              </Col>
            </Row>
            <ApplierButton buttonType="Sign Up" />
          </form>
        </Container>
      </div>
    </Fragment>
  );
};

export default SignUpMedicalStudent;
