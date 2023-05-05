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

  return (
    <Fragment>
      <ConsumerNav />
      <Container>
        {!store.updateProfile._id && (
          <Container>
            <h1 className="opportunitiesHeader">My Profile</h1>

            <div className="container backgroundProfile">
              <p>Name: {store.consumer.name}</p>
              <p>Email: {store.consumer.email}</p>
              <p>Phone: {store.consumer.phone}</p>
              <p>Nationality: {store.consumer.nationality}</p>
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
                  <p>LinkedIn_profile: </p>

                  <p>
                    <a href={store.linkedIn_profile}>
                      {store.consumer.linkedIn_profile}
                    </a>
                  </p>
                  <p>Gpa: {store.consumer.gpa}</p>
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
                <Col>
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
                <Col>
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
