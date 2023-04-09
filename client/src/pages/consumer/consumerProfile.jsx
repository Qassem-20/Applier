import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import ConsumerStore from "../../stores/ConsumerStore";
import React, { Fragment, useEffect } from "react";
import ApplierButton from "../../components/applierComponents/applierButton";

import { Container, Row, Col } from "react-bootstrap";

const ConsumerProfile = () => {
  const store = ConsumerStore();

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
        <h1 className="opportunitiesHeader">My Profile</h1>

        <div className="container backgroundProfile">
          <p>Name: {store.consumer.name}</p>
          <p>Email: {store.consumer.email}</p>
          <p>Phone: {store.consumer.phone}</p>
          <hr />
          <h4>Application (CV)</h4>
          <Row>
            <Col>
              <p>University: {store.consumer.university}</p>
              <p>Degree: {store.consumer.degree}</p>
              <p>Major: {store.consumer.major}</p>
            </Col>
            <Col>
              <p>Concentrated_major: {store.consumer.concentrated_major}</p>
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
      {store.updateProfile._id && (
        <Container>
          <h2>Update Profile</h2>
          <div className="container backgroundProfile">
            <form onSubmit={store.updateConsumer(store.consumer._id)}>
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

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.nationality}
                    name="nationality"
                  />
                  <p className="labelStyling">University:</p>
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.university}
                    name="university"
                  />
                  <p className="labelStyling">Major:</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.major}
                    name="major"
                  />
                </Col>
                <Col>
                  <p className="labelStyling">Gpa:</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.gpa}
                    name="gpa"
                  />
                  <p className="labelStyling">Concentrated_major:</p>

                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.concentrated_major}
                    name="concentrated_major"
                  />
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
                  <input
                    className="inputStyling"
                    onChange={store.handleUpdate}
                    value={store.updateProfile.experience}
                    name="experience"
                  />
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
