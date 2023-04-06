import "../../assets/css/signUpSignIn.css";
import WelcomeNav from "../../components/Nav/welcomeNav";
import { Col, Row, Container } from "react-bootstrap";
import React, { Fragment, useState, useEffect } from "react";
import consumerStore from "../../stores/ConsumerStore.js";
import { useHistory } from "react-router-dom";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import { getJobTitles } from '../../APIs/jobTitlesAPI.js';

const initialState = {
  isApplication: true,
};
const SignUpConsumer = () => {
  const store = consumerStore();

  const history = useHistory();

  //fetching university majors from the jobsAPI.js
  const [jobTitles, setJobTitles] = useState([]);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    if (query) {
      const data = await getJobTitles(query);
      setJobTitles(data);
    } else {
      setJobTitles([]);
    }
  };
  

  const [values, setValues] = useState(initialState);
  const showApplication = () => {
    setValues({
      ...values,
      isApplication: !values.isApplication,
    });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    await store.registerConsumer();
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
                <label>Nationality</label>
                <select
                  className="inputStyling"
                  name="nationality"
                  value={store.values.nationality}
                  onChange={store.handleChange}
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
                        className="inputStyling"
                        name="gpa"
                        value={store.values.gpa}
                        onChange={store.handleChange}
                      />

                      <div>
                      <ApplierInputForm
                        label="Major"
                        type="text"
                        className="inputStyling"
                        name="major"
                        value={store.values.major}
                        onChange={store.handleChange}
                      />
                      <ul>
                        {jobTitles.map((jobTitle) => (
                          <li key={jobTitle}>{jobTitle}</li>
                        ))}
                      </ul>
                      </div>

                      <ApplierInputForm
                        label="Minor"
                        type="text"
                        className="inputStyling"
                        name="concentrated_major"
                        value={store.values.concentrated_major}
                        onChange={store.handleChange}
                      />

                      <ApplierInputForm
                        label="Skills"
                        type="text"
                        className="inputStyling"
                        name="skills"
                        value={store.values.skills}
                        onChange={store.handleChange}
                      />
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <label className="labelTag">Degree</label>
                      <select
                        className="inputStyling"
                        name="degree"
                        placeholder="degree"
                        value={store.values.degree}
                        onChange={store.handleChange}
                      >
                        <option value="High school">high school</option>
                        <option value="Bachelor">bachelor</option>
                        <option value="Diploma">diploma</option>
                        <option value="Master">master</option>
                      </select>

                      <ApplierInputForm
                        label="Collage"
                        type="text"
                        className="inputStyling"
                        name="university"
                        value={store.values.university}
                        onChange={store.handleChange}
                      />

                      <ApplierInputForm
                        label="LinkedIn Profile"
                        type="link"
                        className="inputStyling"
                        name="linkedIn_profile"
                        value={store.values.linkedIn_profile}
                        onChange={store.handleChange}
                      />

                      <label className="labelTag">Experience</label>
                      <select
                        className="inputStyling"
                        name="experience"
                        placeholder="duration"
                        value={store.values.experience}
                        onChange={store.handleChange}
                      >
                        <option value="">None</option>
                        <option value="less than a year">
                          less than a year
                        </option>
                        <option value="a year">a year</option>
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
