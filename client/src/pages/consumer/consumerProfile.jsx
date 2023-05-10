import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import ConsumerStore from "../../stores/ConsumerStore";
import React, { Fragment, useEffect } from "react";
import ApplierButton from "../../components/applierComponents/applierButton";
import { Container, Row, Col } from "react-bootstrap";
import { options } from "../../APIs/jobTitlesAPI.js";

const ConsumerProfile = () => {
  const store = ConsumerStore();

  const handleUpdate = async (e) => {
    e.preventDefault();
    await store.updateConsumer();
    window.location.reload();
  };

  useEffect(() => {
    store.fetchConsumerProfile();
  }, []);
  if (!store.consumer) {
    return <div>Loading...</div>;
  }

  const linkedInIcon =
    '<?xml version="1.0" encoding="UTF-8"?><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';

  return (
    <Fragment>
      <ConsumerNav />
      <Container>
        {!store.updateProfile._id && (
          <Container>
            <h1 className="opportunitiesHeader">My Profile</h1>

            <div className="container backgroundProfile">
              <Row>
                <Col>
                  <p>Name: {store.consumer.name}</p>
                  <p>Email: {store.consumer.email}</p>
                </Col>
                <Col>
                  <p>Phone: {store.consumer.phone}</p>
                  <p>Nationality: {store.consumer.nationality}</p>
                </Col>
              </Row>

              {/* <p>City: {store.consumer.city}</p> */}
              <hr />
              <h4>Application (CV)</h4>
              <Row>
                <Col>
                  <p>University: {store.consumer.university}</p>
                  <p>Degree: {store.consumer.degree}</p>
                  <p>Major: {store.consumer.major}</p>
                  <p>Experience: {store.consumer.experience}</p>
                </Col>
                <Col>
                  <p>Department: {store.consumer.concentrated_major}</p>
                  <p>
                    LinkedIn Profile:
                    <a
                      style={{ marginLeft: ".5rem" }}
                      href={store.consumer.linkedIn_profile}
                    >
                      {/* {store.consumer.linkedIn_profile} */}
                      <span
                        dangerouslySetInnerHTML={{ __html: linkedInIcon }}
                      />
                    </a>
                  </p>

                  <p>GPA: {store.consumer.gpa}</p>
                </Col>
                <div>
                  <ApplierButton
                    buttonType="Update Profile"
                    onClick={() => store.toggleUpdate(store.consumer)}
                    className="button"
                  />
                </div>
              </Row>
            </div>
          </Container>
        )}
      </Container>
      {store.updateProfile._id && (
        <Container>
          <h1 className="opportunitiesHeader">Update Profile</h1>
          <div className="container backgroundProfile">
            <form onSubmit={handleUpdate}>
              <Row>
                <Col md={6} sm={12}>
                  <p className="labelStyling">Name:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.name}
                    name="name"
                  />
                  <p className="labelStyling">Phone:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.phone}
                    name="phone"
                  />
                  <p className="labelStyling">Nationality:</p>

                  <select
                    className="inputStyling"
                    name="nationality"
                    defaultValue={store.updateProfile.nationality}
                    onChange={store.handleUpdate}
                  >
                    <option value="saudi">Saudi</option>
                    <option value="foreign">Foreign</option>
                  </select>
                  <p className="labelStyling">University:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.university}
                    name="university"
                  />
                  <label className="labelStyling font-bold">Major</label>
                  <select
                    className="inputStyling"
                    name="major"
                    placeholder="major"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.major}
                  >
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <p className="labelStyling">GPA:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.gpa}
                    name="gpa"
                  />
                </Col>
                <Col md={6} sm={12}>
                  <p className="labelStyling">Department:</p>
                  <select
                    className="inputStyling"
                    name="concentrated_major"
                    placeholder="duration"
                    value={store.updateProfile.concentrated_major}
                    onChange={store.handleUpdate}
                  >
                    <option>Please select a Departments</option>
                    <option value="Technical">Technical IT</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Management">Management</option>
                  </select>
                  <p className="labelStyling">Skills:</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.skills}
                    name="skills"
                  />

                  <p className="labelStyling">LinkedIn Profile:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.linkedIn_profile}
                    name="linkedIn_profile"
                  />
                  <p className="labelStyling">Experience:</p>
                  <select
                    className="inputStyling"
                    name="experience"
                    defaultValue={store.updateProfile.experience}
                    onChange={store.handleUpdate}
                  >
                    <option value="">None</option>
                    <option value="less than a year">less than a year</option>
                    <option value="an year">an year</option>
                    <option value="2 years">2 years</option>
                    <option value="more than 2 years">more than 2 years</option>
                  </select>
                  <p className="labelStyling">Degree:</p>
                  <select
                    className="inputStyling"
                    name="degree"
                    defaultValue={store.updateProfile.degree}
                    onChange={store.handleUpdate}
                  >
                    <option value="High school">High school</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Master">Master</option>
                  </select>

                  {/* <label className="labelStyling font-bold">City</label>
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
                  </select> */}
                </Col>
              </Row>
              <ApplierButton
                buttonType="Submit"
                type="submit"
                className="button"
              />
            </form>
          </div>
        </Container>
      )}
    </Fragment>
  );
};

export default ConsumerProfile;
