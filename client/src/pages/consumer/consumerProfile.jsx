import "../../assets/css/consumer.css";
import ConsumerNav from "../../components/Nav/consumerNav";
import TraineeApplicationStore from "../../stores/traineeApplicationStore";
import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import ApplierButton from "../../components/applierComponents/applierButton";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";

import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

const ConsumerProfile = () => {
  const { consumerId } = useParams();
  const store = TraineeApplicationStore();

  return (
    <Fragment>
      <ConsumerNav />

      <div className="container backgroundProfile">
        <p>Name: name</p>
        <p>email: email</p>
        <p>_id: </p>
      </div>

      <Container fluid>
        <div className="container backgroundProfile">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <ApplierInputForm
                label="GPA"
                type="text"
                placeholder="Enter Your GPA"
                name="gpa"
                value={store.values.gpa}
                onChange={store.handleChange}
              />

              <ApplierInputForm
                label="Major"
                type="text"
                placeholder="Enter Your Major"
                name="major"
                value={store.values.major}
                onChange={store.handleChange}
              />

              <ApplierInputForm
                label="Minor"
                type="text"
                placeholder="Enter Your Minor (If Available)"
                name="concentrated_major"
                value={store.values.concentrated_major}
                onChange={store.handleChange}
              />

              <ApplierInputForm
                label="Skills"
                type="text"
                placeholder="What skills you have"
                name="skills"
                value={store.values.skills}
                onChange={store.handleChange}
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label className="labelStyling">Degree</label>
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
                label="University"
                type="text"
                placeholder="Enter your University name"
                name="university"
                value={store.values.university}
                onChange={store.handleChange}
              />

              <ApplierInputForm
                label="LinkedIn Profile"
                type="text"
                placeholder="Enter your LinkedIn Account Link (Optional)"
                name="linkedIn_profile"
                value={store.values.linkedIn_profile}
                onChange={store.handleChange}
              />

              <label className="labelStyling">Experience</label>
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
          <ApplierButton buttonType="Update Profile" />
        </div>
      </Container>
    </Fragment>
  );
};

export default ConsumerProfile;
