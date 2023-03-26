import "../../assets/css/consumer.css";
import InfoIcon from "../../assets/images/infoIcon.png";
import ConsumerNav from "../../components/Nav/consumerNav";
import OpportunityStore from "../../stores/OpportunityStore";
import CompanyStore from "../../stores/CompanyStore";

import { Link } from "react-router-dom";

import React, { Fragment, useEffect, useState } from "react";

const Opportunities = () => {
  const opportunityStore = OpportunityStore();
  const company = CompanyStore();

  const [Applied, setSuspended] = useState(false);

  const handleSuspensionUpdate = () => {
    setSuspended(!Applied);
  };

  useEffect(() => {
    opportunityStore.fetchOpportunities();
    company.fetchCompanies();
  }, []);
  return (
    <Fragment>
      <ConsumerNav />
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-3 m-auto">
              <h1 id="opportunitiesHeader">Opportunities</h1>
            </div>
            <div className="col-3 m-auto">
              <h1>Sorting</h1>
            </div>
            <div className="col-6 m-auto">
              <input
                type="text"
                className="form-control"
                placeholder="  Search"
                name=""
                //value=""
                id="searchInput"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="row opportunitiesTag">
        <span className="col-3 opportunitiesMainTags">Role</span>
        <span className="col-2 opportunitiesMainTags">major</span>
        <span className="col-2 opportunitiesMainTags">Statues</span>
        <span className="col-4 opportunitiesMainTags">info</span>
      </div>
      {opportunityStore.opportunities &&
        opportunityStore.opportunities.map((opportunity) => {
          return (
            <div className="row opportunitiesT" key={opportunity._id}>
              <span className="col-3 opportunitiesTags">
                {opportunity.job_role}
              </span>
              <span className="col-2 opportunitiesTags">
                {opportunity.major_preferred}
              </span>
              <span className="col-2 opportunitiesTags">
                <button className="button" onClick={handleSuspensionUpdate}>
                  {Applied ? "Apply" : "Applied"}
                </button>
              </span>
              {company.companies &&
                company.companies.map((company) => {
                  return (
                    <div className="col-4 d-flex justify-content-center">
                      <Link to={`/feedBackConsumerCompany/${company._id}`}>
                        <img
                          className="infoImg"
                          src={InfoIcon}
                          alt="InfoIcon"
                        />
                        <p className=" opportunitiesTags">
                          {company.organization_name}
                        </p>
                      </Link>
                    </div>
                  );
                })}
            </div>
          );
        })}
    </Fragment>
  );
};

export default Opportunities;
