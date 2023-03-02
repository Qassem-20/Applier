import "../../assets/css/consumer.css";
import InfoIcon from "../../assets/images/infoIcon.png";
import ConsumerNav from "../../components/Nav/consumerNav";
import OpportunityStore from "../../stores/OpportunityStore";

import React, { Fragment, useEffect } from "react";

const Opportunities = () => {
  const opportunityStore = OpportunityStore();

  useEffect(() => {
    opportunityStore.fetchOpportunities();
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
                value=""
                id="searchInput"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="row opportunitiesTag">
        <span className="col-3 opportunitiesMainTags">Company</span>
        <span className="col-3 opportunitiesMainTags">Role</span>
        <span className="col-3 opportunitiesMainTags">Statues</span>
        <span className="col-3 opportunitiesMainTags">info</span>
      </div>
      {opportunityStore.opportunities &&
        opportunityStore.opportunities.map((opportunity) => {
          return (
            <div className="row opportunitiesT">
              <span className="col-3 opportunitiesTags">
                {opportunity.job_role}
              </span>
              <span className="col-3 opportunitiesTags">
                {opportunity.major_preferred}
              </span>
              <span className="col-3 opportunitiesTags">
                {opportunity.statues}
              </span>
              <div className="col-3 d-flex justify-content-center">
                <img className="infoImg" src={InfoIcon} alt="InfoIcon" />
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default Opportunities;
