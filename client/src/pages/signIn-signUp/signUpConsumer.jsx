import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Col, Row, Container } from "react-bootstrap";
import React, { Fragment, useState } from "react";
import consumerStore from "../../stores/ConsumerStore.js";
import { useHistory } from "react-router-dom";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import { options } from "../../APIs/jobTitlesAPI.js";
import Checkbox from "../../components/applierComponents/applierSelect.jsx";
import { skillsList } from "../../APIs/skillSets";

const initialState = {
  isApplication: true,
};
const SignUpConsumer = () => {
  const store = consumerStore();

  const history = useHistory();

  //fetching university majors from the jobsAPI.js

  const [values, setValues] = useState(initialState);
  const showApplication = () => {
    setValues({
      ...values,
      isApplication: !values.isApplication,
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await store.registerConsumer();
      //Navigate
      history.push("/signIn");
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data);
    }
  };
  return (
    <Fragment>
      <WelcomeNav />
      <div className="SignUpFormat container">
        <Row>
          <Col xl={8}>
            <h1>Create Your Account</h1>
          </Col>
          <Col>
            <h6 className="mt-4">
              Already have an account? <a href="/signIn">Sign In</a>
            </h6>
          </Col>
        </Row>
        <hr />
        <form onSubmit={handleSignUp}>
          <Container>
            <Row>
              <div>
                <ApplierInputForm
                  label="Full name"
                  type="name"
                  name="name"
                  value={store.values.name}
                  onChange={store.handleChange}
                  errorMessage="full_name"
                  required={true}
                />
                <label className="labelStyling">Nationality</label>
                <select
                  name="nationality"
                  value={store.values.nationality}
                  onChange={store.handleChange}
                  className="inputStyling mb-3"
                >
                  <option>Please select</option>
                  <option value="saudi">Saudi</option>
                  <option value="foreign">Foreign</option>
                </select>

                <ApplierInputForm
                  label="Phone Number"
                  type="phone"
                  name="phone"
                  value={store.values.phone}
                  onChange={store.handleChange}
                  errorMessage="phone"
                  required={true}
                />

                <ApplierInputForm
                  label="Email"
                  type="email"
                  placeholder="Fouad28@gmail.com"
                  name="email"
                  errorMessage="email"
                  value={store.values.email}
                  onChange={store.handleChange}
                  required={true}
                />

                <ApplierInputForm
                  label="Password"
                  type="password"
                  placeholder="**********"
                  name="password"
                  errorMessage="password"
                  value={store.values.password}
                  onChange={store.handleChange}
                  required={true}
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                />
              </div>
              <div>
                <ApplierButton
                  className="mt-3"
                  onClick={showApplication}
                  buttonType="Looking for internship?"
                />
              </div>
              {!values.isApplication && (
                <div>
                  <Row>
                    <div className="col-sm-12 col-md-6">
                      <ApplierInputForm
                        label="GPA"
                        type="text"
                        name="gpa"
                        value={store.values.gpa}
                        onChange={store.handleChange}
                      />

                      <label className="labelStyling font-bold">Major</label>
                      <select
                        className="inputStyling mb-3"
                        name="major"
                        placeholder="major"
                        value={store.values.major}
                        onChange={store.handleChange}
                        required={true}
                      >
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <label className="labelStyling font-bold">Minor</label>
                      <select
                        className="inputStyling mb-3"
                        name="minor"
                        placeholder="minor"
                        value={store.values.minor}
                        onChange={store.handleChange}
                        required={true}
                      >
                        {options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <Checkbox
                        label="Skills"
                        name="skills"
                        options={skillsList}
                        value={store.values.skills}
                        onChange={store.handleChange}
                      />
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <label className="labelStyling font-bold">Degree</label>
                      <select
                        className="inputStyling mb-3"
                        name="degree"
                        placeholder="degree"
                        value={store.values.degree}
                        onChange={store.handleChange}
                      >
                        <option value="High school">High School</option>
                        <option value="Bachelor">Bachelor's</option>
                        <option value="Diploma">Diploma</option>
                        <option value="Master">Master's</option>
                      </select>

                      <ApplierInputForm
                        label="Collage"
                        type="text"
                        name="university"
                        value={store.values.university}
                        onChange={store.handleChange}
                      />

                      <ApplierInputForm
                        label="LinkedIn Profile"
                        type="link"
                        name="linkedIn_profile"
                        value={store.values.linkedIn_profile}
                        onChange={store.handleChange}
                      />

                      <label className="labelStyling">Experience</label>
                      <select
                        className="inputStyling mb-3"
                        name="experience"
                        placeholder="duration"
                        value={store.values.experience}
                        onChange={store.handleChange}
                      >
                        <option value="">None</option>
                        <option value="less than a year">
                          less than a year
                        </option>
                        <option value="an year">an year</option>
                        <option value="2 years">2 years</option>
                        <option value="more than 2 years">
                          more than 2 years
                        </option>
                      </select>
                    </div>
                  </Row>
                </div>
              )}
            </Row>
            <br />
            <ApplierButton buttonType="Sign Up" />
          </Container>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUpConsumer;
