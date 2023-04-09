import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import ConsumerStore from "../../stores/ConsumerStore";
import React, { Fragment, useEffect } from "react";
import ApplierButton from "../../components/applierComponents/applierButton";

import { Container, Row, Col } from "react-bootstrap";

const ConsumerProfile = () => {
  const store = ConsumerStore();
  const updateStore = ConsumerStore((updateStore) => {
    return { toggleUpdate: updateStore.toggleUpdate };
  });
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
                onClick={() => updateStore.toggleUpdate(store.consumer._id)}
                className="button"
              />
            </div>
          </Row>
        </div>
      </Container>
      <Container>
        <h2>Update Profile</h2>
        <div className="container backgroundProfile">
          <form onSubmit={store.updateConsumer}>
            <input
              onChange={store.handleChange}
              value={store.updateProfile.name}
              name="name"
            />
            <ApplierButton
              buttonType="Submit"
              type="submit"
              className="button"
            />
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default ConsumerProfile;
