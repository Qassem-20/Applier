import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Col, Row, Container } from "react-bootstrap";
import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import MedicalStore from "../../stores/MedicalStore";
import ApplierButton from "../../components/buttons/applierButton";

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
              <Col md={6}>
                <p className="labelTag">Full name</p>
                <input
                  type="name"
                  className="inputStyling"
                  name="name"
                  value={store.values.name}
                  onChange={store.handleChange}
                />
                <p className="labelTag">Phone Number</p>
                <input
                  type="phone"
                  className="inputStyling"
                  name="phone_number"
                  value={store.values.phone_number}
                  onChange={store.handleChange}
                />
                <p className="labelTag">Email</p>
                <input
                  type="email"
                  className="inputStyling"
                  name="email"
                  value={store.values.email}
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
                <p className="labelTag">Nationality</p>
                <select
                  className="inputStyling"
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
              <Col md={6}>
                <p className="labelTag">Gender</p>
                <select
                  className="inputStyling"
                  name="gender"
                  placeholder="gender"
                  value={store.values.gender}
                  onChange={store.handleChange}
                >
                  <option>Please select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <p className="labelTag">city</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="city"
                  value={store.values.city}
                  onChange={store.handleChange}
                />
                <p className="labelTag">Major</p>
                <select
                  className="inputStyling"
                  name="main_major"
                  placeholder="main_major"
                  value={store.values.main_major}
                  onChange={store.handleChange}
                >
                  <option>Please select</option>
                  <option value="Doctor">Doctor</option>
                  <option value="Dentist">Dentist</option>
                </select>
                <p className="labelTag">Specialty</p>
                <input
                  type="text"
                  className="inputStyling"
                  name="specialty"
                  value={store.values.specialty}
                  onChange={store.handleChange}
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
