import "../../assets/css/company.css";
import CustomizeIcon from "../../assets/images/customizeIcon.png";
import OptionIcon from "../../assets/images/optionIcon.png";
import EyeIcon from "../../assets/images/eyeIcon.webp";
import Nav from "../../components/Nav/companyNav";
import { useParams } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import OpportunityStore from "../../stores/OpportunityStore";
import axios from "axios";

const AppliedTrainee = () => {
  const { opportunityId } = useParams();

  const storeDelete = OpportunityStore((storeDelete) => {
    return {
      deleteOpportunity: storeDelete.deleteOpportunity,
    };
  });
  const [userProfile, setUserProfile] = useState({});
  const [applications, setApplications] = useState({});

  useEffect(() => {
    axios
      .get(`api/v1/opportunities/${opportunityId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data.opportunity);
      });
    axios
      .get(
        `http://localhost:4000/api/v1/applicationsOpportunity/${opportunityId}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setApplications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [opportunityId]);

  return (
    <Fragment>
      <Nav />
      <div className="row">
        <div className="col-4 mt-2">
          <h1 id="opportunitiesHeader">
            &nbsp;&nbsp;&nbsp;Qualified candidates
          </h1>
        </div>

        <div className="col-8 mt-2">
          <div className="row">
            <h3 className="mb-3">Opportunity Details</h3>
            <div className="col-4">
              <p>Job Role: {userProfile.job_role}</p>
              <p>Department: {userProfile.departments_preferred}</p>
              <p>Major: {userProfile.major_preferred}</p>
              <p>Type: {userProfile.job_type}</p>
            </div>
            <div className="col-5">
              <p>Job Description:</p>
              <p>{userProfile.description}</p>
              <p>Salary: {userProfile.salary}</p>
            </div>
            <div className="col-3">
              <div>
                <a href={`/editOpportunity/${opportunityId}`}>
                  <img src={CustomizeIcon} alt="editOpportunity" />
                </a>
                <div className="mt-5">
                  <form action="/companyHomePage/">
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        storeDelete.deleteOpportunity(opportunityId)
                      }
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row opportunitiesTag">
        <span className="col-1 opportunitiesTags">Name</span>
        <span className="col-1 opportunitiesTags">LinkedIn</span>
        <span className="col-1 opportunitiesTags">Email</span>
        <span className="col-2 opportunitiesTags">Phone Number</span>
        <span className="col-1 opportunitiesTags">University</span>
        <span className="col-2 opportunitiesTags">Major</span>
        <span className="col-1 opportunitiesTags">GPA </span>
        <span className="col-2 opportunitiesTags">Statues</span>
        <span className="col-1 opportunitiesTags">Info</span>
      </div>

      {applications.consumerInfo &&
        applications.consumerInfo.map((consumer) => (
          <div className="row  opportunitiesT" key={consumer._id}>
            <div className="col-1 mx-auto  opportunitiesTags">
              {consumer.name}
            </div>
            <div className="col-1 d-flex justify-content-center opportunitiesTags">
              <a href={`${consumer.linkedin}`}>
                <img className="iconSize" src={EyeIcon} alt="LinkedInProfile" />
              </a>
            </div>
            <span className="col-1  opportunitiesTags">{consumer.email}</span>
            <span className="col-2  opportunitiesTags">{consumer.phone}</span>
            <span className="col-1 opportunitiesTags">
              {consumer.university}
            </span>
            <span className="col-2 opportunitiesTags">{consumer.major}</span>
            <span className="col-1 opportunitiesTags">{consumer.gpa}</span>
            <span className="col-2 opportunitiesTags">{consumer.status}</span>
            <div className="col-1 d-flex justify-content-center">
              <a href={`/traineeDetails/${consumer._id}`}>
                <img className="iconSize" src={OptionIcon} alt="OptionIcon" />
              </a>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default AppliedTrainee;
