import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import TraineeApplicationStore from "../../stores/traineeApplicationStore";
import React, { Fragment, useEffect, useState } from "react";
import ApplierButton from "../../components/applierComponents/applierButton";

import { useHistory } from "react-router-dom";

import { Container } from "react-bootstrap";

const AddProfile = () => {
  const store = TraineeApplicationStore();

  const history = useHistory();

  const [hasPosted, setHasPosted] = useState(false);

  const createProfile = async (e) => {
    e.preventDefault();
    setHasPosted(true);
    await store.registerTraineeApplication();
    history.push("/consumerProfile");
  };
  return (
    <Fragment>
      <ConsumerNav />
      <Container fluid>
        <div className="container backgroundProfile">
          <form onSubmit={createProfile}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <label className="labelTag">GPA</label>
                <input
                  type="text"
                  className="inputStyling"
                  name="gpa"
                  value={store.values.gpa}
                  onChange={store.handleChange}
                />
                <label className="labelTag">Major</label>
                <input
                  type="text"
                  className="inputStyling"
                  name="major"
                  value={store.values.major}
                  onChange={store.handleChange}
                />

                <label className="labelTag">Concentrated major</label>
                <input
                  type="text"
                  className="inputStyling"
                  name="concentrated_major"
                  value={store.values.concentrated_major}
                  onChange={store.handleChange}
                />
                <label className="labelTag">skills</label>
                <input
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
                <label className="labelTag">Collage</label>
                <input
                  type="text"
                  className="inputStyling"
                  name="university"
                  value={store.values.university}
                  onChange={store.handleChange}
                />
                <br />
                <label className="labelTag">LinkedIn Profile</label>
                <input
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
                  <option value="none">None</option>
                  <option value="less than a year">less than a year</option>
                  <option value="an year">an year</option>
                  <option value="2 years">2 years</option>
                  <option value="more than 2 years">more than 2 years</option>
                </select>
              </div>
            </div>
            <ApplierButton buttonType="add Profile" />
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default AddProfile;
