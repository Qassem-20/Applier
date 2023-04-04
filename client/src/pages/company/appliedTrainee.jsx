import "../../assets/css/company.css";
import ShareIcon from "../../assets/images/ShareIcon.png";
import CustomizeIcon from "../../assets/images/customizeIcon.png";
import OptionIcon from "../../assets/images/optionIcon.png";
import EyeIcon from "../../assets/images/eyeIcon.webp";
import Nav from "../../components/Nav/companyNav";
import CompanyChart from "../../components/charts/companyChart.jsx";
import { useParams } from "react-router-dom";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Opportunities from "../admin/opportunities";

const AppliedTrainee = () => {
  const { opportunityId } = useParams();

  const [userProfile, setUserProfile] = useState({});
  const [applications, setApplications] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/consumers/${opportunityId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setUserProfile(response.data.applications);
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
  }, []);

  console.log(applications);
  return (
    <Fragment>
      <Nav />
      <div className="row">
        <div className="col-4">
          <h1 id="opportunitiesHeader">
            &nbsp;&nbsp;&nbsp;Qualified candidates
          </h1>
          <div className="mt-3">
            <CompanyChart />
          </div>
        </div>

        <div className="col-8 mt-5">
          <div className="row">
            <h3 className="mb-3">Opportunity Details</h3>
            <div className="col-4">
              <p>Job Role:</p>
              <p>Department:</p>
              <p>Major:</p>
              <p>Salary:</p>
              <p>Type:</p>
            </div>
            <div className="col-5">
              <p>Job Description:</p>
              <p>
                ieguheriughuerverbviberuvbreu
                <wbr />
                vbruvberuvibreuvberiuvberiuvbrivru
                <wbr />
                vbruvberuvibreuvberiuvberiuvbrivru
                <wbr />
                vbruvberuvibreuvberiuvberiuvbrivru
                <wbr />
                vbruvberuvibreuvberiuvberiuvbrivru
                <wbr />
                vbruvberuvibreuvberiuvberiuvbrivru
                <wbr />
                vbruvberuvibreuvberiuvberiuvbrivru
              </p>
            </div>
            <div className="col-3">
              <div>
                <a href={`/editOpportunity/${opportunityId}`}>
                  <img src={CustomizeIcon} alt="CustomizeIcon" />
                </a>
                <div className="mt-5">
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section></section>
      <div className="row opportunitiesTag">
        <span className="col-1 opportunitiesTags">Name</span>
        <span className="col-1 opportunitiesTags">CV</span>
        <span className="col-1 opportunitiesTags">LinkedIn</span>
        <span className="col-1 opportunitiesTags">Phone Number</span>
        <span className="col-2 opportunitiesTags">University</span>
        <span className="col-2 opportunitiesTags">Major</span>
        <span className="col-1 opportunitiesTags">GPA </span>
        <span className="col-1 opportunitiesTags">City</span>
        <span className="col-1 opportunitiesTags">Statues</span>
        <span className="col-1 opportunitiesTags">Info</span>
      </div>
      <div className="row px-auto opportunitiesT">
        <span className="col-1 mx-auto  opportunitiesTags">Ahmed</span>
        <div className="col-1 d-flex justify-content-center">
          <img className="iconSize" src={EyeIcon} alt="EyeIcon" />
        </div>
        <div className="col-1 d-flex justify-content-center">
          <img className="iconSize" src={EyeIcon} alt="EyeIcon" />
        </div>
        <span className="col-1  opportunitiesTags">+9665476156</span>
        <span className="col-2 opportunitiesTags">
          King Fahad Petroleum and minerals
        </span>
        <span className="col-2 opportunitiesTags">Software Engineering</span>
        <span className="col-1 opportunitiesTags">2/4</span>
        <span className="col-1 opportunitiesTags">Riyadh</span>
        <span className="col-1 opportunitiesTags">Applied</span>
        <div className="col-1 d-flex justify-content-center">
          <a href={`/traineeDetails/${opportunityId}`}>
            <img className="iconSize" src={OptionIcon} alt="OptionIcon" />
          </a>
        </div>
      </div>
      <div className="row px-auto opportunitiesT">
        <span className="col-1 mx-auto  opportunitiesTags">Ahmed</span>
        <div className="col-1 d-flex justify-content-center">
          <img className="iconSize" src={EyeIcon} alt="EyeIcon" />
        </div>
        <div className="col-1 d-flex justify-content-center">
          <img className="iconSize" src={EyeIcon} alt="EyeIcon" />
        </div>
        <span className="col-1  opportunitiesTags">+9665476156</span>
        <span className="col-2 opportunitiesTags">
          King Fahad Petroleum and minerals
        </span>
        <span className="col-2 opportunitiesTags">Software Engineering</span>
        <span className="col-1 opportunitiesTags">2/4</span>
        <span className="col-1 opportunitiesTags">Riyadh</span>
        <span className="col-1 opportunitiesTags">Applied</span>
        <div className="col-1 d-flex justify-content-center">
          <a href="/traineeDetails">
            <img className="iconSize" src={OptionIcon} alt="OptionIcon" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default AppliedTrainee;
