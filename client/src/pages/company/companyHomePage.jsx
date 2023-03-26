import React, { Fragment, useEffect } from "react";
import Nav from "../../components/Nav/companyNav";
import EditOpportunities from "../../assets/images/customizeIcon.png";
import EyeIcon from "../../assets/images/eyeIcon.webp";
import opportunityStore from "../../stores/OpportunityStore";
const CompanyHomePage = () => {
  const store = opportunityStore();
  useEffect(() => {
    store.fetchOpportunitiesCompany();
  }, []);
  return (
    <Fragment>
      <Nav />
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
        <span className="col-2 opportunitiesMainTags">Role</span>
        <span className="col-3 opportunitiesMainTags">Job Description</span>
        <span className="col-1 opportunitiesMainTags">#Applications</span>
        <span className="col-1 opportunitiesMainTags">duration</span>
        <span className="col-2 opportunitiesMainTags">Created at</span>
        <span className="col-1 opportunitiesMainTags">View</span>
        <span className="col-1 opportunitiesMainTags">Edit</span>
      </div>
      {store.opportunities &&
        store.opportunities.map((opportunity) => {
          return (
            <div className="row opportunitiesT" key={opportunity._id}>
              <span className="col-2 opportunitiesTags">
                {opportunity.job_role}
              </span>
              <span className="col-3 opportunitiesTags">
                g4tg45g4g45g45g45g5g45gefrwe
              </span>
              <span className="col-1 opportunitiesTags">3/20</span>
              <span className="col-1 opportunitiesTags">duration</span>
              <span className="col-2 opportunitiesTags">12/2/2022</span>
              <div className="col-1 d-flex justify-content-center">
                <a href="/appliedTrainee">
                  <img
                    className="infoImg"
                    src={EyeIcon}
                    alt="view Applications"
                  />
                </a>
              </div>
              <div className="col-1 d-flex justify-content-center">
                <a href="/editOpportunity">
                  <img
                    className="infoImg"
                    src={EditOpportunities}
                    alt="Edit Opportunity"
                  />
                </a>
              </div>
            </div>
          );
        })}
    </Fragment>
  );
};

export default CompanyHomePage;
