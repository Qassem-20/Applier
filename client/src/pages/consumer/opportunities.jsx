import "../../assets/css/consumer.css";
import InfoIcon from "../../assets/images/infoIcon.png";
import ConsumerNav from "../../components/Nav/consumerNav";
import OpportunityStore from "../../stores/OpportunityStore";
import CompanyStore from "../../stores/CompanyStore";
import ApplierInputForm from "../../components/applierComponents/applierInputForm";
import axios from "axios";
import { Link } from "react-router-dom";

import React, { Fragment, useEffect, useState } from "react";

const Opportunities = () => {
  const opportunityStore = OpportunityStore();
  const company = CompanyStore();

  const [userData, setUserData] = useState({ statue: "", opportunity: "" });

  function handleUserDataChange(event) {
    setUserData({
      ...userData,
      statue: event.target.value,
      opportunity: event.target.value,
    });
  }
  async function updateStatue(_id) {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/applications/registerApplication/${_id}`,
        userData,
        { withCredentials: true }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    opportunityStore.fetchOpportunities();
    company.fetchCompanies();
  }, []);
  return (
    <Fragment>
      <ConsumerNav />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-3 m-auto">
              <h1 id="opportunitiesHeader">Opportunities</h1>
            </div>

            <div className="col-6 m-auto">
              <ApplierInputForm
                label="Search"
                type="text"
                placeholder="Searching for ..."
                id="searchInput"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="row opportunitiesTag">
        <span className="col-2 opportunitiesMainTags">Role</span>
        <span className="col-2 opportunitiesMainTags">major</span>
        <span className="col-2 opportunitiesMainTags">Statues</span>
        <span className="col-2 opportunitiesMainTags">City</span>
        <span className="col-2 opportunitiesMainTags">Salary</span>
        <span className="col-2 opportunitiesMainTags">Company info</span>
      </div>
      {opportunityStore.opportunities &&
        opportunityStore.opportunities.map((opportunity) => {
          return (
            <div className="row opportunitiesT" key={opportunity._id}>
              <span className="col-2 opportunitiesTags">
                {opportunity.job_role}
              </span>
              <span className="col-2 opportunitiesTags">
                {opportunity.major_preferred}
              </span>
              <span className="col-2 opportunitiesTags">
                <form onClick={() => updateStatue(opportunity._id)}>
                  <select
                    name="statue"
                    defaultValue={"UnApplied"}
                    onChange={handleUserDataChange}
                  >
                    <option value="UnApplied">Apply</option>
                    <option value="Applied">UnApply</option>
                  </select>
                  <input
                    type="hidden"
                    name="opportunity"
                    value={(userData.opportunity = opportunity._id)}
                    onChange={handleUserDataChange}
                  />
                </form>
              </span>
              <span className="col-2 opportunitiesTags">
                {opportunity.city}
              </span>
              <span className="col-2 opportunitiesTags">
                {opportunity.salary}
              </span>
              <div
                className="col-2 d-flex justify-content-center"
                key={company._id}
              >
                <Link to={`/feedBackConsumerCompany/${opportunity.company}`}>
                  <img className="infoImg" src={InfoIcon} alt="InfoIcon" />
                </Link>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Opportunities;
